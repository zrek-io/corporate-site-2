import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
})

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        margin: '0',
        padding: '0',
      },
      body: {
        backgroundColor: '#fff',
        fontFamily: ['Avenir-Black', 'Arial', '游ゴシック体', 'YuGothic', '游ゴシック', 'Yu Gothic', 'sans- serif'],
        a: {
          textDecoration: 'none'
        }
      }
    }
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 'normal',
        fontFamily: ['Avenir-Black', 'Arial', '游ゴシック体', 'YuGothic', '游ゴシック', 'Yu Gothic', 'sans- serif'],
      },
      sizes: {
        // as='h3'
        sm: {
          fontSize: { sm: 'lg', lg: '2xl'}
        },
        // as='h2'
        md: {
          fontSize: { sm: 'xl', lg: '3xl' }
        },
        // as='h1'
        xl: {
          fontSize: { sm: '2xl', lg: '4xl' }
        }
      }
    },
    Text: {
      baseStyle: {
        fontSize: { sm: 'xs', lg: 'md' },
        lineHeight: { sm: '6', lg: '8' }
      }
    },
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: 'none'
        }
      }
    }
  },
  colors: {
    primary: {
      50: '#fff',
      100: '#f2f2f2', // ほぼ白
      150: '#808080', // 少し濃い灰色
      200: '#32acda', // 水色（ロゴカラー）
      250: '#1862ac', // 濃い水色
      300: '#1e9cd7', // グラデーション
      350: '#0F308F', // 濃い青色（ロゴカラー）
      400: '#000'
    }
  },
  breakpoints
})