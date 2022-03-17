import { Box, Text, Link as ChakraLink } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import NextImage from "next/image"



import { seo } from "config"
import bautista1 from "../images/bautista4.png"


const About = () => {
//   const color = useColorModeValue("telegram.500", "telegram.400")

//   const isOdd = (num) => num % 2

  const title = `Home | ${seo.title}`
  const description = seo.description

    return (
        <>
            <NextSeo
                title="Bautista's Portfolio"
                description={description}
                canonical={seo.canonical}
                openGraph={{
                    title,
                    description
                }}
           />

           <Box
              as="section"
              d="flex"
              alignItems="center"
              flexDir="column"
              textAlign="center"
              py="4"
              w={[900, 900, 1200]}
              h={[1200, 900, 500]}
           >
               <Box d="flex" alignItems="center" marginTop={10} h={[800]}>
                  <Box
                     boxShadow='xl' p='6' rounded='md'
                     style={{borderRadius: '61px',
                        background: 'transparent',
                        boxShadow:  '6px 6px 14px #5a5a5a'}}
                     className="picture"
                  >
                     <NextImage
                        src={bautista1}
                        height={400}
                        width={400}
                     />
                  </Box>
                  <Text color="#b6b5b5">
                     <div>
                        I'm Bautista Aramendía Pradal and I'm 23 y/o. Before I go on with my tech stack, I'd like to
                        tell you some other things about me 😁 
                     </div>
                     <br />
                     <div>
                        <li>I'm a tech enthusiast, in all of its fields 🤖</li>
                        <li>I'm a perpetual learner. In fact, I get bored If I'm not learning something new 🤓</li>
                        <li>I enjoy lifting weights 💪</li>
                        <li>I love sci-fi books and movies 📚🎥</li>
                     </div>
                     <br />
                     I'm a {" "}
                     <Text as="span" color="teal.500">
                        web developer 💻
                     </Text> {" "}
                     from {" "}
                     <Text as="span" color="teal.500">
                        Argentina
                     </Text> {" "}
                     focusing on {" "}
                     <Text as="span" color="teal.500">
                        front-end technologies
                     </Text> 
                     . My stack is {" "}
                     <Text as="span" color="teal.500">
                     Javascript-based:
                     </Text> React  and Next.js. 
                     <br />
                     <br />
                     When it comes to the {" "}
                     <Text as="span" color="teal.500">
                        styles 🎨
                     </Text> {" "}
                     I am really fond of Chakra UI but I can work with Tailwind.css, SASS and Styled 
                     Components too.
                     <br />
                     <br />
                     As to my {" "}
                     <Text as="span" color="teal.500">
                     future 🔮
                     </Text> 
                     , I'd love to work with {" "}
                     <Text as="span" color="teal.500">
                        blockchain technologies ⛓️
                     </Text> {" "} 
                     somewhere down the line, like 
                        Solidity and smart contracts, and in a more wide-ranged way the likes of Web3, 
                        Solana, DAOs, NFTs and whatnot. 
                  </Text>
               </Box>
    
           </Box>
        </>
    )
}

export default About