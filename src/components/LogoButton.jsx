import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useUserContext } from '../Context/userContext'

const LogoButton = ({ logo, title }) => {
    const { user, signInWithGoogle } = useUserContext()

    return ( 

        <Flex align="center" bg="white" color="black" p="2% 3%" borderRadius="3xl" onClick={signInWithGoogle} _hover={{ background: "#ffebd7" }}>
            <Image w={["20px", "25px"]} src={logo} />
            <Text ml={["7px", "10px"]} fontSize={["xs", "md"]} fontWeight="bold">{title}</Text>
        </Flex>

    )
}

export default LogoButton
