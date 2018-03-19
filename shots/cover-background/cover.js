// cover.js
module.exports = {
  css: () => {
    return `
      html {
        background-image: linear-gradient(-45deg,#4504DA,#FF0353);
      }
      h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        max-width: 30ch;
        transform: translate(-50%, -50%);
        font-family: Helvetica, Arial, sans-serif;
        color: #ffffff;
      }
    `;
  },
  default: () => { },
  html: () => {
    return `<h1>Hello world</h1>`
  }
};
