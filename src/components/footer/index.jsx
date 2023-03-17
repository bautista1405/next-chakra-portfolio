import {
  Box,
  Button,
  Link as ChakraLink,
  Container,
  Link,
  Stack,
  Text,
  Icon,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, } from "react-icons/fa"


export default function Footer() {
  const socialAccounts = [
    { icon: FaGithub, path: "https://github.com/bautista1405", title: "Github" },
    { icon: FaLinkedin, path: "https://www.linkedin.com/in/bautista-aramendia-pradal/", title: "LinkedIn" }
  ]

  return (
    <Box
      w={[1040, 900, 1525]}
      h={[200, 200, 100]}
      className="footer"
    >
      
      
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
      >
      
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text color= "white">© 2023 Bautista Aramendia Pradal. All rights reserved.</Text>
          <Stack>
          <Box py="2">
          {socialAccounts.map((item, index) => (
            <ChakraLink
              href={item.path}
              aria-label={item.title}
              mx="2"
              _focus={{ outline: "none" }}
              key={index}
              isExternal
            >
              <Button aria-label={item.title}>
                <Icon as={item.icon} w="6" h="6" />
              </Button>
            </ChakraLink>
          ))}
        </Box>
          </Stack>
          <Stack direction={'row'} spacing={6}>
          <Box py="2">
          <Text color= "white">
            Made with{" "}
            <span role="img" aria-label="red heart">
              ❤️
            </span>
            ,{" "}
            <ChakraLink
              href="https://nextjs.org/"
              fontWeight="600"
              _focus={{ outline: "none" }}
              isExternal
            >
              Next.js
            </ChakraLink>
            {" "} and {" "}
            <ChakraLink
              href="https://chakra-ui.com/"
              fontWeight="600"
              _focus={{ outline: "none" }}
              isExternal
            >
              Chakra UI, {" "}
            </ChakraLink>
             Hosted on {" "}
            <ChakraLink
              href="https://vercel.com/"
              fontWeight="600"
              _focus={{ outline: "none" }}
              isExternal
            >
              Vercel 
            </ChakraLink>
            
            
          </Text>
        </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}