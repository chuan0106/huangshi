import path from "path";

function getModulePackageName(module) {
  if (!module.context) return null;

  const nodeModulesPath = path.join(__dirname, "../node_modules/");
  if (module.context.substring(0, nodeModulesPath.length) !== nodeModulesPath) {
    return null;
  }

  const moduleRelativePath = module.context.substring(nodeModulesPath.length);
  const [moduleDirName] = moduleRelativePath.split(path.sep);
  let packageName = moduleDirName;
  // handle tree shaking
  if (packageName.match("^_")) {
    // eslint-disable-next-line prefer-destructuring
    packageName = packageName.match(/^_(@?[^@]+)/)[1];
  }
  return packageName;
}

export default config => {
  // optimize chunks
  config.optimization
    .runtimeChunk(false) // share the same chunks across different modules
    .splitChunks({
      chunks: "async",
      name: "vendors",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendors: {
          test: module => {
            const packageName = getModulePackageName(module);
            if (packageName) {
              return (
                [
                  "echarts",
                  "mapbox-gl",
                  "deck.gl",
                  "react-map-gl",
                  "antd"
                ].indexOf(packageName) >= 0
              );
            }
            return false;
          },
          name(module) {
            const packageName = getModulePackageName(module);

            if (
              [
                "echarts",
                "mapbox-gl",
                "deck.gl",
                "react-map-gl",
                "antd"
              ].indexOf(packageName) >= 0
            ) {
              return "otherz"; // visualization package
            }
            return "misc";
          }
        }
      }
    });
};
