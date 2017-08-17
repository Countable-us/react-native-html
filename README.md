# react-native-html

## Load arbitrary HTML

Simple HTML renderer for react-native

Ever had challenges rendering something in react-native? Can it render
in HTML?

This simple package is worth a try.

## Installation

```
npm install react-native-html --save

```

## Props

| Prop | Type | Note |
|---|---|---|
| `html` | `String` | 
| `style` | `WebView` style | This extends [WebView](https://facebook.github.io/react-native/docs/webview.html) styles
| `<any` | `WebView` props | Any other WebView prop(s)

## <a name="Usage">Usage</a>

```javascript
import Html from 'react-native-html';

const SomeComponent = () => (
  <View style={{ flex: 1 }}>
    <Html
      style={{ width: 80, height: 80 }}
      source={"<h1>hello world</h1>"
    />
  </View>
);
```

## Dev

Lint & test (todo)

```

npm test

```

## Inspiration

https://github.com/chitezh/react-native-svg-image
