import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#FF8C00', // メインオレンジ
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        accent: {
          red: '#FF5A5F', // 赤/ピンク
          blue: '#3DADE8', // 青
          yellow: '#FFB900', // 黄色
          green: '#3DD9A7', // 緑/ターコイズ
          orange: '#FF7A3D', // オレンジアクセント
        },
      },
    },
  },
  plugins: [],
}
export default config
