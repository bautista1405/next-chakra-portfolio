import { Box } from "@chakra-ui/react"

import { MAX_WIDTH } from "config"
import Logo from "../UI/logo"
import Navbar from "./navbar"

const Header = () => (
  <>
    <Box as="header" boxShadow="md">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        h="4rem"
        px={[4, 6, 10, 14, 20]}
        w={[900, 900, 1300]}
        mx="auto"
      >
        <Logo />
        <Navbar />
      </Box>
    </Box>
  </>
)

export default Header
