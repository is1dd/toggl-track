import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFillCaretRightFill } from 'react-icons/bs'

const CompaniesBox = ({ Img, desc, head }) => {
    return (
        <Box textAlign={'start'} justifyContent={'start'}>
            <Text fontSize={['1.5rem',null,'1.8rem']} fontWeight={'600'} color={'#E57CD8'}>{head}</Text>
            <Text w={'85%'} fontSize={'1.15rem'}>
                {desc}
            </Text>
            <Text mt={['0.5rem',null,'2rem']} fontSize={'1.2rem'} ><a href="#">Read Case Study <BsFillCaretRightFill style={{
                display: 'inline',
                width: '11px',
                height: '11px',
            }}
            /></a></Text>
            {/* width: 85%;
    height: 9rem; */}
            <Box mt={['0.5rem',null,'2rem']} cursor={'pointer'} overflow={'hidden'} w={['85%',null,'24.5rem']} h={['9rem',null,'14.7rem']} borderRadius={'1rem'}>
                <Image w={'inherit'} borderRadius={'inherit'} h={'inherit'} transition={'transform .3s ease-in-out'} _hover={{
                    transform: 'scale(1.14) rotate(5deg)'
                }} src={Img} />
            </Box>

        </Box>
    )
}

export default CompaniesBox