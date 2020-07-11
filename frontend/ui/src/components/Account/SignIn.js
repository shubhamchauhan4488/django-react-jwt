import React from "react";
import { Label, Input, Checkbox } from "@rebass/forms";
import { Box, Flex, Button, Image, Text } from "rebass";
import {
  password_id,
  rememberMe_id,
  name_id
} from "../../constants/identifiers";
import { useAuth } from "../../modules/auth/hooks";
import logo from './../../assets/ToolBoxLogo.png';

export const SignIn = () => {
  const { onClickSignIn, onSignInFormChange } = useAuth();
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
          Sign In
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
          onSubmit={onClickSignIn}
          sx={{
            minWidth: '50%',
          }}>

          <Box width={1} mt={3}>
            <Label htmlFor={name_id}>Username</Label>
            <Input
              id={name_id}
              name="name"
              type="text"
              placeholder="Enter your username"
              onChange={onSignInFormChange}
            />
          </Box>
          <Box width={1} mt={3}>
            <Label htmlFor={password_id}>Password</Label>
            <Input
              id={password_id}
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={onSignInFormChange}
            />
          </Box>

          <Label width={[1 / 2]} mt={3} alignItems="center">
            <Checkbox id={rememberMe_id} name="remember" />
          Remember Me
        </Label>

          <Button
            backgroundColor="#4A90E2"
            mt={3}>
            Sign In
          </Button>

        </Flex>
      </Flex>
    </Flex>
  );
};
