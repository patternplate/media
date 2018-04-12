module.exports = {
  cast: `
    printf '\\033[0;32m%s\\033[0m' "λ "
    echo "yarn patternplate build --out=docs/patterns --base=/patterns/" | pv -qL $[10+(-2 + RANDOM%5)]
    ../../node_modules/.bin/patternplate build --base="/" --out="docs"

    printf '\\033[0;32m%s\\033[0m' "λ "
    echo ""
  `,
  transform(svg) {
    // TODO: do not hardcode this directory
    return svg.split('/Users/marneb/Projects/pp/media/casts/build/docs').join('docs/');
  },
  term: {
    window: true,
    height: 15
  }
};
