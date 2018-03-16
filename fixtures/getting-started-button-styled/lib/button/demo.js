   module.exports = {
     html: () => '<button class="my-button">My first button</button>',
     css: () => `
      .my-button {
        padding: 10px 15px;
        font-size: 20px; 
        background: none; 
        color: cornflowerblue; 
        border: 1px solid currentColor;
      }',
     `,
     default: () => {
       // Nothing implemented yet
     }
   }