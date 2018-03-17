> Publishing repository for shared web assets

## patternplate-media 

The `docs/` directory is served by GitHub Pages at [patternplate.github.io/media](https://patternplate.github.io/media)

## Getting started

```bash
git clone git@github.com:patternplate/media.git
cd media
yarn
```

## How to

### Create a new screenshot

1. Create a fixture folder e.g. via `npx create-patternplate --out=fixtures/my`
2. Create a `screenshot.config.js`. 
3. Execute `yarn shoot my`
4. Result is saved at `docs/images/my.svg`

## Screenshot config

```js
module.exports = {
  // Node.js URL object. Screenshot will be taken from this address
  // Reserved: host, hostname, port, protocol
  url: {
    hash: "hash",
    query: {
      key: "value"
    },
    pathname: "some/path"
  },
  svg: {
    outWidth: 800, // width attr of result svg,
    outHeight: 600, // height attr or result svg
    viewBox: "0 0 800 600", // viewBox of result svg
    preserveAspectRatio: "minXminY meet"
  } 
};
```
