# cgil-ol-map-mn95


cgil-ol-map-mn95 is a library to help you easily create OpenLayers maps using Lausanne and SwissTopo WMTS Tiles in Switzerland area

this project uses 😀:
* [RollupJs](https://rollupjs.org/) for bundling the code as CommonJS, UMD (Browser compatible) and Es2015 Modules.
* [TypeScript](https://www.typescriptlang.org/) to add type intelligence (.d.ts bundle for type-checking generated)
* [EsLint](https://eslint.org/) To analyse and Fix code and ensure quality.
* [TypeDoc](https://typedoc.org/) To generate the documentation based on jsdoc comments 📚
* [Rollup-plugin-terser](https://github.com/TrySound/rollup-plugin-terser) to minify the generated umd bundle  using [terser](https://github.com/fabiosantoscode/terser)


### How to use it:
just use the template, clone the repo and install dev dependencies with : 
```bash
npm install
```

### How to build cgil-ol-map-mn95 in dist directory : 
```bash
npm run build
```

### Documentation

The [Documentation of cgil-ol-map-mn95](https://lao-tseu-is-alive.github.io/cgil-ol-map-mn95/docs/) 
is available under the docs directory and can be 
generated from  the jsdoc comments in the source code with **npm run docs**.  



### How to use cgil-ol-map-mn95 in the browser:
Inside the browser you need to include the minified umd version.
The library is exposed via the **cgil-ol-map-mn95** 'namespace'.

You can have a look in the examples directory.

Basically it's just a classical script :
```html
<script src="../dist/cgil-ol-map-mn95.umd.js"></script>
```

Then in your javascript code :

```javascript
const myClass = new cgil-ol-map-mn95.YourClass('param1', 45 ,'another parameter to your constructor')

```
