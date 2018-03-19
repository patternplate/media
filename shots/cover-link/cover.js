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
      a:link, a:visited {
        color: inherit;
        text-decoration-skip-ink: auto;
        text-decoration-style: dotted;
        text-decoration-color: rgba(255, 255, 255, .5);
        transition: .3s text-decoration-color ease-in-out;
      }
      a:hover {
        text-decoration-color: rgba(255, 255, 255, 1);
      }
    `;
  },
  default: () => { },
  html: () => {
    return `
    <h1>
    <a href="./doc/README">
      Explore my-patternplate now
    </a>
  </h1>
    `
  }
};
