module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'sma1-img': "url('/aset/bg1.jpeg')",
        'sma2-img': "url('/aset/bg2.jpeg')",
        'bulat-img': "url('/aset/bulat.png')",
      }),
      colors:{
        lb:'#F8FAFC',
        lb2:'#E2E8F0',
        lb3:'#1E293B',
        fc:'#0F172A',
        lbd:'#1E293B',
        lbd2:'#1F2937',
        lbd3:'#111827',
        fcd:'#FFFBEB',
        lbh:'#94A3B8',
        lbhd:'#94A3B8',
      },
    },
  },
  plugins: [],
}