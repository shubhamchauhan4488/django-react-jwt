import React from 'react';
import logo from './../../assets/ToolBoxLogo.png';
import { Flex } from 'reflexbox';
import { Image, Heading, Button } from 'rebass';

export const Header = () => (
  <>
    <Flex
      justifyContent="center"
      width="100%"
      height="80px"
      backgroundColor="black"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        height="100%"
        py={3}
        px={['3', '4', '5']}
      >
        <Image
          src={logo}
          sx={{
            width: ['50px', '60px', '60px'],
            height: ['50px', '60px', '60px'],
          }}
        />
        <Flex
          alignItems="center"
          justifyContent='flex-end'
        >
          <Button variant='primary' mr={2}>Login</Button>
          <Button variant='outline' >Sign Up</Button>
        </Flex>
      </Flex>
    </Flex>
  </>
);
