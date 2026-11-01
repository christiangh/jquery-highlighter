# jQuery Highlighter

A lightweight jQuery plugin that highlights text with a marker-style animation, sweeping a background color across each element from left to right. Elements can be highlighted one after another (queued) or all at once.

## Demo

Clone the repo and open `demo/demo.html` in your browser. No server needed.

## Installation

Include jQuery, the plugin stylesheet and the plugin script:

```html
<link rel="stylesheet" href="css/jquery.highlighter.css" />

<script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossorigin="anonymous"></script>
<script src="jquery.highlighter.min.js"></script>
```

## Usage

```js
// Highlight every span inside #text, one after another, in yellow
$('#text span').highlighter();

// Custom options
$('#text span').highlighter({
    queue: true,
    pauseTime: 500,
    duration: 2000,
    timing: 'ease-in-out',
    colorFrom: 'transparent',
    colorTo: '#FA58F4'
});

// Highlight all elements at the same time
$('#text span').highlighter({ queue: false, duration: 10000, timing: 'linear' });
```

Once finished, each element stays highlighted. Calling the plugin again on elements that are already highlighted, or still waiting in the queue, does not restart them.

## Options

| Option      | Type             | Default         | Description                                                           |
|-------------|------------------|-----------------|-----------------------------------------------------------------------|
| `queue`     | `boolean`        | `true`          | Highlight elements one after another. `false` animates them together. |
| `pauseTime` | `number` (ms)    | `2000`          | Pause between one element finishing and the next starting (queue only). |
| `duration`  | `number` (ms)    | `3000`          | Length of each highlight animation.                                    |
| `timing`    | `string`         | `'ease-in-out'` | Any CSS `animation-timing-function`.                                   |
| `colorFrom` | `string` (color) | `'transparent'` | Background color before the highlight.                                 |
| `colorTo`   | `string` (color) | `'#FFFF00'`     | Highlight color.                                                       |

`duration` and `pauseTime` also accept numeric strings (`'1500'`). Invalid or negative values fall back to the defaults.

## Methods

| Method  | Description                                                                                       |
|---------|---------------------------------------------------------------------------------------------------|
| `clear` | Removes the highlight, cancels any pending queued highlights and resets inline styles.             |

```js
$('#text span').highlighter('clear');
```

All calls return the jQuery object, so they can be chained:

```js
$('#text span').highlighter('clear').highlighter({ colorTo: '#FF9B00' });
```

## Compatibility

- jQuery 1.7 or later (tested with 3.7.1).
- Modern browsers with CSS animations and `linear-gradient` support.

## Development

The minified file is generated from the source with [terser](https://terser.org/):

```sh
npm install
npm run build
```

## License

[MIT](LICENSE) © 2014-2026 Christian Garcia
