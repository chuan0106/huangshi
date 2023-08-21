export async function GetFps(callbackFPS) {
  var rAF = (function() {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  var frame = 0;
  var allFrameCount = 60; // eslint-disable-line no-unused-vars
  var lastTime = Date.now();
  var lastFameTime = Date.now();

  var loop = await function() {
    var now = Date.now();
    var fs = now - lastFameTime;
    var fps = Math.round(1000 / fs);
    lastFameTime = now;
    allFrameCount++;
    frame++;
    if (now > 1000 + lastTime) {
      fps = Math.round((frame * 1000) / (now - lastTime)); // eslint-disable-line no-unused-vars
      // console.log('DFFFFFFLL', fps);
      frame = 0;
      lastTime = now;
      callbackFPS(60);
      return fps;
      // callback(fps);
      // console.log(`${new Date()} 1S内 FPS：`, fps)
    }
    rAF(loop);
  };
  loop();
}
