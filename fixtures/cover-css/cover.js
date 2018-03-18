  module.exports = {
    css: () => {
      return `
        h1 {
          position: absolute;
          top: 50%;
          left: 50%;
          max-width: 30ch;
          transform: translate(-50%, -50%);
          font-family: Helvetica, Arial, sans-serif;
        }
      `;
    },
    default: () => {},
    html: () => {
      return `<h1>Hello world</h1>`
    }
  };
