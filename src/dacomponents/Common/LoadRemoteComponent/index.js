import React from 'react';
import { importModule } from 'runtime-import';

window.react = React;

export default class LoadRemoteComponent extends React.Component {
  state = {
    Component: null,
  };

  async componentDidMount() {
    const { js, css, delay } = this.props;
    // 加载插件
    const Component = await importModule({
      js: [js],
      css: [css],
    });

    if (delay) {
      setTimeout(() => {
        this.setState({
          Component,
        });
      }, delay);
    } else {
      this.setState({
        Component,
      });
    }
  }

  render() {
    const { Component } = this.state;

    if (!Component) {
      return this.props.loading;
    }

    return <Component {...this.props.componentProps} />;
  }
}
