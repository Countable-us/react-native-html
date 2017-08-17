import React, { PropTypes, PureComponent } from 'react';
import { View, Platform, WebView, ActivityIndicator, StyleSheet } from 'react-native';

export default class Html extends PureComponent {
  static propTypes = {
    style: PropTypes.any,
    html: PropTypes.string,
    showWebviewLoader: PropTypes.bool,
    height: PropTypes.number,
  };

  static defaultProps = {
    style: {},
    html: '',
    showWebviewLoader: Platform.OS === 'android',
    height: null,
  };

  renderLoader = () => (
    <View style={[this.props.style, { flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
      <ActivityIndicator />
    </View>
  );

  render() {
    const { showWebviewLoader, html, style, ...restOfProps } = this.props;
    const { height, width } = StyleSheet.flatten(style || []);

    const rawHtml = `
      <!DOCTYPE html>\n
      <html>
        <head>
          <style type="text/css">
            div {
              width: ${width ? width+'px' : 'auto'};
              height: ${height ? height+'px' : 'auto'};
              overflow: none;
            }
            div > * {
              width: 100%;
              height: 100%;
              margin: 0 auto;
            }
            body {
              margin: 0;
            }
          </style>
        </head>
        <body>
          <div>
            ${html}
          </div>
        </body>
      </html>
    `;

    return (
      <WebView
        startInLoadingState={showWebviewLoader}
        renderLoading={showWebviewLoader ? this.renderLoader : null}
        scalesPageToFit={false}
        style={style}
        {...restOfProps}
        source={{ html: rawHtml }}
      />
    );
  }
}
