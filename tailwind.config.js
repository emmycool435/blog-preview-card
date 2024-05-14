/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    width:{
      'cusw': '27rem',
      'cardw': '28rem',
      'profilew':'2rem'
    },
    height:{
      'cush': '35rem',
      'cardh': '15rem',
      'profileh': '2rem'
    },
    borderRadius:{
      myrad: '1.2rem',
      bro: '0.3rem'
    },
    colors:{
      myel: 'hsl(47, 88%, 63%)',
      mywh: 'hsl(0, 0%, 100%)',
      mygry: 'hsl(0, 0%, 50%)'
    },
    fontFamily:{
      mfont:['Figtree']
    },
    fontWeight:{
      myweit: '500',
      myweit2: '800'
    },
    extend: {},
  },
  plugins: [],
}