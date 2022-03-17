import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from '@chakra-ui/theme-tools'

const styles = {
  global: {
    "html, body": {
      fontSize: "18px",
      backgroundColor: "black",
      backgroundImage: "https://uploads-ssl.webflow.com/5f2d95cb45872fc361ffb5a6/5f400f06eca59a7dc356158f_BackgroundShapes.svg"
    },
  },
}

const fonts = {
  heading: "Poppins, -apple-system",
  body: "Poppins, -apple-system",
}

const breakpoints = createBreakpoints({
  sm: '575px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
})

const theme = extendTheme({
  styles,
  fonts,
  breakpoints
})

export default theme
