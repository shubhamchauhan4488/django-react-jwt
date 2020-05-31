import React from 'react';
import {
	Label,
	Input,
	Select,
	Textarea,
	Radio,
	Checkbox,
} from '@rebass/forms';
import {
	Box,
	Flex,
	Button,
	Heading
} from 'rebass'
import {
	email_id, password_id,
	rememberMe_id
} from '../../../constants/identifiers';

export const SignIn = () => (
	<Box
		as='form'
		onSubmit={e => e.preventDefault()}
		sx={{
			maxWidth: 512,
			mx: 'auto',
			p: 4,
		}}>
		<Flex flexDirection='column'>
			<Heading>Login</Heading>
			<Box width={1} mt={3}>
				<Label htmlFor={email_id}>Email</Label>
				<Input
					id={email_id}
					name='email'
					type='email'
					placeholder='jane@example.com'
				/>
			</Box>

			<Box width={1} mt={3}>
				<Label htmlFor={password_id}>Password</Label>
				<Input
					id={password_id}
					name='password'
					type='password'
					placeholder='Enter your password'
				/>
			</Box>

			<Label width={[1 / 2]} mt={3} alignItems='center'>
				<Checkbox
					id={rememberMe_id}
					name='remember'
				/>
				Remember Me
			 </Label>

			<Flex justifyContent='center' mt={3}>
				<Button>
					Sign In
				</Button>
			</Flex>
		</Flex>
	</Box>
)