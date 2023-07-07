import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import HeaderLogin from './HeaderLogin'
import styles from './Header.module.css'
import Standup from './Standup'
import Rotate from './Rotate'
import Form from './SignupForm'

const Header = () => {
  return (
    // border: 1px solid red;
    // width: 40rem;
    // text-align: start;
    // font-family: Inter, sans-serif;
    // font-size: 1.6rem;
    // font-size: 2.5rem;
    // width: 90%;
    <VStack w={'100%'} p={['1rem 1rem','1rem 1rem','1rem 3.4rem','1rem 3.5rem']} alignItems={'flex-start'} color='white'>
      <Text fontSize={['2.5rem',null,'3.5rem']} width={['90%',null,'68%']} lineHeight='4rem' fontWeight={'600'} textAlign='start' >Simple time tracking to save you <Rotate word={'time'} Color={'#e57cd8'} /> and <Rotate Color={'#e57cd8'} word={'money'} />  .</Text>
      <HStack w={'97%'} mt={'0.7rem !important'} justify={'space-between'} border='1px solid transparent'>
        <VStack gap={'2.65rem'} border={'1px solid transparent '} textAlign='start' w={['100%',null,'40rem']} >
          <Text color='#FCE5D8' fontSize={'1.6rem'} fontFamily={'Inter, sans-serif'}  >
            Bill accurately, measure profitability, manage workloads — and spend less time on it all.
          </Text>
          <HeaderLogin />
     
          <Text color='#FCE5D8' fontSize={'1rem'} textAlign={['center','start','start']} w={'100%'}>By signing up, you agree to our <a className={styles.anch} href="#">terms of service</a> , <a className={styles.anch} href="#">privacy policy</a> and to receiving marketing communication from Toggl Track. You can opt out anytime.</Text>
        </VStack>
        <VStack color='#FCE5D8' w={'30rem'} display={['none','none','flex','flex']}>
          <Standup />
          <Text mt={'4.5rem !important'} w='23rem' textAlign={'start'} fontSize={'1.5rem'}> &nbsp;“I love the ease of just clocking in and out with <Rotate Color={'#e57cd8'} word={'just'} /> <Rotate Color={'#e57cd8'} word={'one'} /> <Rotate Color={'#e57cd8'} word={'click!'} />”</Text>
          <Text fontSize={'1.3rem'} width={'22.4rem'} textAlign={'end'}>— Quelani P.</Text>
        </VStack>
      </HStack>
    </VStack>
  )
}

export default Header

