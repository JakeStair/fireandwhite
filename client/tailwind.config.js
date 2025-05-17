// @ts-nocheck
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {

      },
      boxShadow: {
        'dark': '4px 4px 5px rgba(0, 0, 0, 0.4)',
      },
          fontSize: {
      fluid: 'clamp(1rem, 2.5vw, 2rem)',
    },
    inset: {
      'fluid-left': 'clamp(1rem, 10vw, 4rem)',
    },
    },
  },
 
};
