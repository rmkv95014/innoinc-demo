import React, { useEffect, useRef, useState } from 'react';
import experience from './imgs/experience.png';
import learning from './imgs/learning.png';
import computer from './imgs/newcomputer.png';
import resources from './imgs/resources.png';
import aops from './imgs/sponsors/AoPS.png';
import WolframTech from './imgs/sponsors/Wolfram Tech.png';
import Magoosh from './imgs/sponsors/Magoosh.png';
import heart from './imgs/heart.gif';
import Navbar from './Navbar';
import './index.css';
import './styles.css';
import Footer from './Footer';
import phone from './imgs/phone.png'
import { ChakraProvider, Box, Heading, Button, Image, chakra, isChakraTheme, transition, Divider } from '@chakra-ui/react';
import Card from './Card';
import { motion, useAnimation, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const container = {
	show: {
		transition: {
			staggerChildren: 0.55,
		}
	},
}

const item = {
	hidden: {
		opacity: 0.2,
		y: -200,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: "circOut",
			duration: 1.2
		}
	},
	exit: {
		opacity: 0,
		y: 200,
		transition: {
			ease: 'easeInOut',
			duration: 0.8
		}
	}
}

function App() {

	const [wasInView, setWasInView] = useState<boolean>(false);
	const [heartRef, inView] = useInView();
	const control = useAnimation();

	useEffect(() => {
		if (inView) {
			control.start('show');
			setWasInView(true);
		}
		if (!inView && wasInView) {
			control.start('exit');
			setWasInView(false);
		}
	}, [inView, control]);

	return (
		<ChakraProvider>
			<Box paddingTop={'.125px'}>
				<Navbar id='navbar' />
				<Box className='ui container' marginTop='7%' marginLeft={'15%'} width='70%' marginBottom='2%'>
					<Box
						as={motion.div}
						ref={heartRef}
						bgImage={heart}
						bgPosition='center'
						bgRepeat={'no-repeat'}
						bgSize='cover'
						rounded='3xl'
						variants={container}
						initial='hidden'
						animate="show"
						exit='exit'
					>
						<Box
							as={motion.div}
							paddingTop='12%'
							marginBottom='3.5rem'
							backdropFilter='auto'
							backdropBlur={'12px'}
							rounded='3xl'
							variants={item}
						>
							<Box display={'flex'} flexDir='column' justifyContent={'center'} marginLeft='10%' width='80%'>
								<Heading fontWeight='black' fontSize='6.05em' id='inno' textAlign={'center'} paddingBottom='4%'>inno</Heading>
								<Heading fontWeight={'bold'} fontSize={'3.5vmin'} textAlign={'center'} id='white'>A student run non profit organization that provides competitive opportunities to introduce students to biotech concepts and the innovation behind them.</Heading>
								<Button size='lg' width={'30%'} marginTop='5%' alignSelf={'center'} fontSize='1.5rem'>Join INNO Today!</Button>
								<Box marginTop={'50%'} marginBottom='15%'>
									<Heading id='commited' textAlign={'center'} fontWeight='bolder' fontSize={'7vmin'}>Our Mission</Heading>
									<Heading fontWeight='md' fontSize='4vmin' textAlign='justify'>We are committed to providing our members with an enriching, holistic, hands-on experience with biological and computational concepts, fostering creativity in all our members and allowing them to use their skills to make a real-world impact.</Heading>
								</Box>
							</Box>
						</Box>
					</Box>
					<Box as={motion.div} display={'flex'} flexDir='column' justifyContent={'center'} padding='5px' variants={container}
						initial='hidden'
						animate="show"
						exit='exit'
					>
						<Heading fontSize='8.5vmin' textAlign={'center'} fontWeight='black' verticalAlign='center' justifySelf={'center'} marginBottom='3.5rem'>Why INNO?</Heading>
						<Card variants={item} id='experience' blurAmount='2px' bgImg={experience} heading='Experience' text='Inno aims to provide its members with hands-on, real-world experience in STEM fields through a hand-crafted custom curriculum for biotechnology. Each and every one of our members will be able to create a product directly applicable to real world fields.' />
						<Card variants={item} id='learning' bgImg={learning} blurAmount='4px' bgSize='contain' heading='Learning' text='Inno provides a unique learning experience that allows teens across the Bay Area to gain exposure to one of the most prominent industries in today’s world; biotechnology. Through curriculum and workshops, we aim to foster creativity as we help educate our members on the true impact and innovation behind modern biotechnology.' />
						<Card variants={item} id='resources' bgImg={resources} blurAmount='1px' bgSize='contain' heading='Resources' text='We connect our members to resources and industry professionals that can allow our students to make real-world contributions with bioengineering, and learn about breakthrough industrial topics in a systematic way. We provide the tools necessary to allow students to create a truly impactful piece of technology as they examine the intersections of biology and engineering.' />
					</Box>
					<Box bgGradient={'linear(to-b, #F5F3F3, #F8D6FC, #C5F1F1, #F5F3F3)'} paddingTop='5rem' rounded='3xl'>
						<Box bgImage={computer} bgSize='auto' bgPos={'center'} bgRepeat='no-repeat' rounded='3xl' marginBottom='5vh' paddingBottom={'2vh'}>
							<Box id='join' backdropFilter='auto' backdropBlur={'2px'} display='flex' flexDir={'column'}>
								<Heading textAlign={'center'} justifySelf='center'>Register your chapter today!</Heading>
								<Button alignSelf={'center'} marginTop='4vh'>Register Today!</Button>
							</Box>
						</Box>
						<Box width='70%' marginLeft={'15%'}>
							<Heading textAlign={'center'} fontWeight='bold' fontSize='5vw'>
								Sponsors
							</Heading>
							<Box display={'flex'} alignItems='center' flexWrap='wrap'>
								<Image src={WolframTech} width='25%' height='25%' padding={'1.5rem'} />
								<Image src={Magoosh} width='30%' height='30%' />
								<Image src={aops} width='40%' height='40%' />
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Footer />
		</ChakraProvider >
	);
}

export default App;
