import { Flex, Button, Menu, MenuButton, MenuList, MenuItem, Image, Spacer, Box } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import logo from './imgs/logo.png';
import { FC } from 'react';
// import './index.css'
import { motion, useScroll } from 'framer-motion'

const Navbar: FC<any> = () => {

    const { scrollYProgress } = useScroll();

    return (
        <>
            <Box marginLeft={'15%'} width='70%' as='header' position='fixed' zIndex={200} backgroundColor='#f5f3f3' paddingTop={'0.35rem'} paddingBottom={'0.35rem'} rounded='xl'>
                <Box as={motion.div} style={{ scaleX: scrollYProgress, background: '#ff0055', height: '1vh' }} rounded='3xl' />
                <Flex align='center' gap='0.25rem'>
                    <Image src={logo} alt="Logo" />
                    <Spacer />
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                            _hover={{ bg: 'gray.400' }}
                            _focus={{ boxShadow: 'outline' }}
                        >
                            About
                        </MenuButton>
                        <MenuList>
                            <MenuItem>The Team</MenuItem>
                            <MenuItem>Chapters</MenuItem>
                            {/* <MenuItem>The Team</MenuItem>
                            <MenuItem>Chapters</MenuItem>
                            <MenuItem>The Team</MenuItem>
                            <MenuItem>Chapters</MenuItem> */}
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                            _hover={{ bg: 'gray.400' }}
                            _focus={{ boxShadow: 'outline' }}
                        >
                            Events
                        </MenuButton>
                        <MenuList>
                            <MenuItem>IDC</MenuItem>
                            <MenuItem>Calendar</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                            _hover={{ bg: 'gray.400' }}
                            _focus={{ boxShadow: 'outline' }}
                        >
                            Resources
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Newsletter</MenuItem>
                            <MenuItem>Curriculum</MenuItem>
                        </MenuList>
                    </Menu>
                    <Button>Get Involved</Button>
                    <Button>Contact Us</Button>
                </Flex>
            </Box></>

    );
}

export default Navbar;