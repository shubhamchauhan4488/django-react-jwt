import React from 'react';
import logo from './../../assets/ToolBoxLogo.png';
import { Flex } from 'reflexbox';
import { Image, Heading } from 'rebass';

export const Header = () => {

   return (
      <>
      <Flex
         justifyContent='center'
         width='100%'
         height='80px'
         backgroundColor='#4A90E2'
      >
         <Flex
            justifyContent='space-between'
            alignItems='center'
            width='100%'
            height='100%'
            py={3}
            px={['3', '4', '5']}
         >
            <Image
               src={logo}
               sx={{
                  width: ['60px', '50px', '60px'],
                  height: ['60px', '50px', '60px'],
               }}
            />
            <Heading
               fontSize={[4, 3, 3]}
               color='white'>
               Login/SignUp
               </Heading>
         </Flex>
      </Flex>
      </>
   )
}