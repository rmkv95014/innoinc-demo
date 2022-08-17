import { FC, useEffect, useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CardProps {
    id: string,
    bgImg: string,
    variants: any,
    blurAmount: string,
    heading: string,
    text: string,
    bgSize?: string,
}

const Card: FC<CardProps> = ({ variants, bgImg, blurAmount, bgSize, text, heading }) => {

    const control = useAnimation();
    const [ref, inView] = useInView();
    const [wasInView, setWasInView] = useState<boolean>(inView);

    useEffect(() => {
        if (inView) {
            control.start('show');
            setWasInView(true);
        }
        if (!inView && wasInView) {
            control.start('hidden');
            setWasInView(false);
        }
    }, [inView, control]);

    return (
        <Box
            as={motion.div}
            ref={ref}
            variants={variants}
            bgColor='#e6e6e6e6'
            className='section'
            bgImage={bgImg}
            bgPos='center'
            bgRepeat={'no-repeat'}
            bgSize={bgSize || 'cover'}
            padding={'6vmin'}
            rounded='3xl'
            marginBottom={'14vh'}
            initial='hidden'
            animate={control}
        >
            <Box display={'flex'} flexDir='column' justifyContent={'center'} backdropFilter='auto' backdropBlur={blurAmount} marginLeft='10%' width='80%'>
                <Heading id='commited' textAlign={'center'} fontWeight='bolder'>{heading}</Heading>
                <Heading fontSize={'3.5vmin'} fontWeight='semmibold' textAlign='center' >{text}</Heading>
            </Box>
        </Box>
    );
}

export default Card;