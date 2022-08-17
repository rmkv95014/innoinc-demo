import { FC } from 'react';
import { Grid, GridItem, Heading, Text, Box, Image, Flex } from '@chakra-ui/react';
import instagram from './imgs/socials/instagram.png'
import linkedin from './imgs/socials/linkedin.png';
import facebook from './imgs/socials/facebook.png';
import logo from './imgs/logo.png';

const Footer: FC<any> = () => {
    return (
        <Box bgColor='rgb(229, 231, 235)'>
            <Flex alignItems={'center'} justifyContent='center'>
                <Image src={logo} paddingTop={'1.5rem'} width='10%' height='10%' />
            </Flex>
            <Grid templateColumns='repeat(4, 2fr)' gap={'1rem'} textColor='black'>
                <GridItem padding='4.5rem'>
                    <Heading size='md' fontWeight={'bolder'}
                        _hover={{
                            textDecoration: 'underline'
                        }}
                    ><a href='#'>Home</a></Heading>
                    <Text paddingTop='4%' _hover={{
                        textDecoration: 'underline'
                    }}><a href='#'>About</a></Text>
                    <Text paddingTop='4%' _hover={{
                        textDecoration: 'underline'
                    }}><a href='#'>Chapters</a></Text>
                </GridItem>
                <GridItem padding='4.5rem' >
                    <Heading size='md' fontWeight={'bolder'}>Events</Heading>
                    <Text
                        paddingTop={'4%'}
                        _hover={{
                            textDecoration: 'underline'
                        }}
                    >
                        <a href='#'>IDC</a>
                    </Text>
                    <Text
                        paddingTop={'4%'}
                        _hover={{
                            textDecoration: 'underline'
                        }}
                    >
                        <a href='#'>Calendar</a>
                    </Text>
                </GridItem>
                <GridItem padding='4.5rem'>
                    <Heading size='md' fontWeight={'bolder'}>Resources</Heading>
                    <Text
                        paddingTop={'4%'}
                        _hover={{
                            textDecoration: 'underline'
                        }}
                    >
                        <a href='#'>Newsletter</a>
                    </Text>
                    <Text
                        paddingTop={'4%'}
                        _hover={{
                            textDecoration: 'underline'
                        }}
                    >
                        <a href='#'>Curriculum</a>
                    </Text>
                </GridItem>
                <GridItem padding='4.5rem'>
                    <Heading size='md' fontWeight={'bolder'}>Involvement</Heading>
                    <Text
                        paddingTop={'4%'}
                        _hover={{
                            textDecoration: 'underline'
                        }}
                    >
                        <a href='#'>Get Involved</a>
                    </Text>
                    <Text
                        paddingTop={'4%'}
                        _hover={{
                            textDecoration: 'underline'
                        }}
                    >
                        <a href='#'>Contact Us</a>
                    </Text>
                </GridItem>
            </Grid>
            <Box display={'flex'} flexDir='row' flexWrap={'wrap'} justifyContent={'center'} alignItems='center' paddingBottom={'1%'}>
                <a href='#' style={{
                    padding: '0.5%',
                }}>
                    <Image src={instagram} _hover={{
                        filter: 'brightness(150%)'
                    }} boxSize='4rem' />
                </a>
                <a href='#' style={{
                    padding: '0.5%'
                }}>
                    <Image src={facebook} _hover={{
                        filter: 'brightness(150%)'
                    }} />
                </a>
                <a href='#' style={{
                    padding: '0.5%',
                }}>
                    <Image src={linkedin} _hover={{
                        filter: 'brightness(150%)'
                    }} />
                </a>
            </Box>
            <Text textAlign={'center'}>© 2022 INNO Inc. All Rights Reserved.</Text>
        </Box>
    );
};

export default Footer;