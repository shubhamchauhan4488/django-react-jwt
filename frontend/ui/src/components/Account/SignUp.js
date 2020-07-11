import React from 'react';
import {
  Label,
  Input,
} from '@rebass/forms';
import logo from './../../assets/ToolBoxLogo.png';
import {
  Box,
  Flex,
  Button,
  Image,
  Text
} from 'rebass';
import { email_id, password_id, name_id, confirmPassword_id } from '../../constants/identifiers';
import { useAuth } from '../../modules/auth/hooks';

export const SignUp = () => {
  const { onClickSignUp, onSignUpFormChange } = useAuth();

  return (
    <Flex
      flexDirection="row"
      flex="1 2 auto"
      justifyContent="center">
      <Flex
        flexDirection="column"
        flexGrow="1"
        backgroundColor="#4A90E2"
        justifyContent="center"
        alignItems="center">
        <Text
          fontSize={[2, 3, 4]}
          fontWeight='bold'
          color='primary'>
          Sign Up
        </Text>
        <Image
          src={logo}
          mt={5}
          sx={{
            width: '20%',
            height: '15%',
          }}
        />
        <Text
          fontSize={[2, 3, 3]}
          mt={5}
          color='primary'>
          See services ready to serve you...
      </Text>
      </Flex>

      <Flex
        flexDirection="column"
        flexGrow="2"
        justifyContent='center'
        alignItems='center'
      >
        <Flex
          flexDirection="column"
          as="form"
          onSubmit={onClickSignUp}
          sx={{
            minWidth: '50%',
          }}>
          <Box width={1} mt={3}>
            <Label htmlFor={name_id}>Name</Label>
            <Input
              id={name_id}
              name="name"
              placeholder="Steve Mackhlakhen"
              onChange={onSignUpFormChange}
            />
          </Box>
          <Box width={1} mt={3}>
            <Label htmlFor={email_id}>Email</Label>
            <Input
              id={email_id}
              name="email"
              type="email"
              placeholder="steve@example.com"
              onChange={onSignUpFormChange}
            />
          </Box>
          <Box width={1} mt={3}>
            <Label htmlFor={password_id}>Password</Label>
            <Input
              id={password_id}
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={onSignUpFormChange}
            />
          </Box>
          <Box width={1} mt={3}>
            <Label htmlFor={confirmPassword_id}>Password</Label>
            <Input
              id={confirmPassword_id}
              name="confirm password"
              type="password"
              placeholder="Re-enter your password"
              onChange={onSignUpFormChange}
            />
          </Box>
          <Button
            backgroundColor="#4A90E2"
            mt={3}>
            Sign Up
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
