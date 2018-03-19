---
displayName: "my-patternplate"
---

# You did it! :tada:

You successfully installed and started patternplate.

Head back to the [Getting Started Guide](https://patternplate.github.io/doc/docs/guides/getting-started#up-next) for further instructions.

## Up next

* [Guide: Build a component](https://patternplate.github.io/doc/docs/guides/add-component)


## Related topics

* [CLI](https://patternplate.github.io/doc/docs/reference/cli)

## My first code block
```js
const React = require("react");
const {ComponentList} = require("@patternplate/widgets");

module.exports = () => {
  return (
    <ComponentList query="hello"/>
  );
};
```

## My first widget
```widget
const React = require("react");
const {ComponentList} = require("@patternplate/widgets");

module.exports = () => {
  return (
    <ComponentList query="is=pattern"/>
  );
};
```

## My second widget
```widget
const React = require("react");
const {ComponentDemo} = require("@patternplate/widgets");

module.exports = () => {
  return (
    <ComponentDemo id="button"/>
  );
};
```
