module.exports = {
  cast: `
    printf '\\033[0;32m%s\\033[0m' "λ "
    echo "npx patternplate create --out='my-patternplate'" | pv -qL $[10+(-2 + RANDOM%5)]
    ../../node_modules/.bin/patternplate create --force --guide --out='my-patternplate'

    printf '\\033[0;32m%s\\033[0m' "λ "
    sleep 10
    echo ""
  `,
  term: {
    window: true,
    height: 15
  }
};
