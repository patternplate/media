module.exports = {
  cast: `
    printf '\\033[0;32m%s\\033[0m' "λ "
    echo "yarn patternplate build --out='docs/patterns' --base='/patterns/'" | pv -qL $[10+(-2 + RANDOM%5)]
    cd ..
    cd ..
    ./node_modules/.bin/patternplate build --out='docs/patterns' --base='/patterns/'

    printf '\\033[0;32m%s\\033[0m' "λ "
    sleep 10
    echo ""
  `,
  transform(svg) {
    return svg.split(process.cwd() + '/docs/patterns').join('docs/patterns/');
  },
  term: {
    window: true,
    height: 15
  }
};
