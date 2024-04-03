import { 
  Box, Button, Heading, Text, Icon, Stack, Divider, Link as ChakraLink, Badge, Tooltip, Wrap 
} from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import NextImage from "next/image"
import Link from "next/dist/client/link"
import { seo } from "config"

import {BiHeart} from "react-icons/bi"
import twitter from "../images/twitter.png"
import basement from "../images/basement.png"
import it from "../images/it.png"

import portMaker from "../images/port-maker.png"

import mercado from "../images/mercado.png"
import alkemy from "../images/Alkemy.png"
import dev from "../images/codework.gif"

import projects from "../pages/api/projects/projects.json"



const Home = () => {
  // const color = useColorModeValue("telegram.500", "telegram.400")

  // const isOdd = (num) => num % 2

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
            description,
            images: [
              {
                url: `${seo.canonical}bighead.svg`,
                width: "350px",
                height: "350px",
                alt: "avatar bigheads",
              },
            ],
          }}
        />
        <Box >
        <Box
          as="section"
          d="flex"
          alignItems="center"
          flexDir="column"
          textAlign="center"
          py="4"
          w={{base: 1000, sm: 900, md: 1400, lg: 1300}}
          className="introduction"
        >
          <Stack direction="row">
            <NextImage
              src={dev}
              width="400px"
              alt="avatar bigheads"
              placeholder="blur"
              blurDataURL="L5I~of#i004mgjw]-4XA00?wL#xu"
              priority
            />
            
          </Stack>
          <Box >
            <Heading as="h1" fontSize="2xl" fontWeight="500" py="2" className="heading">
              Hi, It's Bauti!{" "}
              
            </Heading>
            <Heading fontSize={["3xl", "4xl"]} fontWeight="700" color="#b6b5b5">
              I <Text as="span" color="teal.500">
                develop
              </Text>{" "}
              websites and {" "}
              <Text as="span" color="teal.500">
              like to design
              </Text>{" "} 
              logos, {" "}
              focusing on the {" "}
              <Text as="span" color="teal.500">
                UX.
              </Text>{" "}
                  
            </Heading>
            <Link href="mailto:aramendia30@gmail.com" target="blank">
              <Button className="btn"
                size="lg"
                fontSize="20px"
                marginBottom={5}
                marginTop={6}
              >
                Contact me  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path 
                  fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                >
                </path>
                </svg>
              </Button>
            </Link>
            <Text py="4" marginBottom={10} color="#b6b5b5"> 
              I'm a {" "}
              <Text as="span" fontWeight="600">
                full-stack web developer
              </Text>{" "}
            from Argentina, with {" "} 
              <Icon as={BiHeart}></Icon> {" "}
              for <Text as="span" fontWeight="600"> UI/UX design and accessibility.</Text>
            </Text>
            
          </Box>
        </Box>
        <Divider orientation="horizontal" borderWidth="2px" w={{base: 980, sm: 900, md: 1400, lg: 1300}} />
        <Box
          as="section"
          d="flex"
          justifyContent="flex-end"
          alignItems="center"
          flexDir="column"
          textAlign={{ base: "center", lg: "left" }}
          py="4"
          marginTop={10}
          pl={10}
          pr={15}
          w={{base: 1000, sm: 900, md: 1350, lg: 1300}}
        >
          <Stack direction="row" align="center" > 
            <Text>🚧</Text>
            <Text fontSize={40} marginBottom={6} fontWeight="600" className="projects"> 
                Some of my work
            </Text>
            <Text>🚧</Text>
          </Stack>
      
      <Stack mt={10}>

        <Wrap justify={'center'} spacing={12} m={0}>
        
          {projects.map((project, id) => (
            <Box
                h={'500px'}
                w={'300px'}
                bg='linear-gradient(90deg, rgb(44, 165, 173), rgb(177, 45, 74))'
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}
                key={project.id}
            >
                <Box
                  h={'210px'}
                  bg={'gray.100'}
                  mt={-6}
                  mx={-6}
                  mb={6}
                  pos={'relative'}>
                  <NextImage src={project.image} h={100} w={200} layout={'fill'}/>
                    
                </Box>
                <Stack>
                  
                  <Text
                    color={'teal.800'}
                    textTransform={'uppercase'}
                    fontWeight={800}
                    fontSize={'sm'}
                    letterSpacing={1.1}
                    bg='linear-gradient(90deg, rgb(44, 165, 173), rgb(177, 45, 74))'
                  >
                    {project.name}
                  </Text>
                  
                </Stack>
      
                <Stack align={'center'} justify={'center'} direction={'row'} mt={3}>
                    
                    <Text color="teal.300">
                      {project.stack}
                    </Text>
                  
                  </Stack>
                <Stack
                    width={'100%'}
                    mt={'1rem'}
                    direction={'row'}
                    padding={2}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <ChakraLink href={project.link} isExternal>
                        <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'teal.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'teal.500',
                        }}
                        _focus={{
                            bg: 'teal.500',
                        }}>
                        {project.button}
                        </Button>
                    </ChakraLink>
                  </Stack>
              </Box>
          ))}
        </Wrap>  
          <br />
          <br />
          <br />
          <h2 className="invitation">
            If you want to check anothers projects of mine, feel free to visit my GitHub 👇👇
          </h2>
          
        </Stack>
      </Box>
      </Box>
    </>
  )
}

export default Home