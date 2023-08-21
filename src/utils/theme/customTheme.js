import React from "react";

// export const themes = {
//   light: {
//     color: '#ffffff',
//     background: '#222222',
//   },
//   dark: {
//     color: '#000000',
//     background: '#eeeeee',
//   },
// };

export const themes = {
  light: {
    //导航栏
    name: "light",
    headerStyle: {
      color: "black",
      background: "white",
      boxShadow: "0 2px 6px #eee"
    },
    //页面背景
    backgroundStyle: {
      color: "black",
      background: "#F3F5F7"
    },
    //卡片
    cardStyle: {}
    // ... 等等
  },
  dark: {
    //导航栏
    name: "dark",
    headerStyle: {
      color: "white",
      background: "#1B213C"
      // boxShadow: '0 2px 6px #eee'
    },
    //页面背景
    backgroundStyle: {
      color: "white",
      background: "#15182F"
    },
    //卡片
    cardStyle: {}
    // ... 等等
  }
};

export const ThemeContext = React.createContext(themes.dark);

export function withTheme(Component) {
  return function ThemedComponent(props) {
    return (
      <ThemeContext.Consumer>
        {theme => <Component {...props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  };
}
