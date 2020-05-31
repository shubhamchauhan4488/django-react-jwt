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
import { email_id, password_id, rememberMe_id, name_id, confirmPassword_id } from '../../../constants/identifiers';

export const SignUp = () => (
	<Box
		as='form'
		onSubmit={e => e.preventDefault()}
		sx={{
			maxWidth: 512,
			mx: 'auto',
			p: 4,
		}}>
		<Flex flexDirection='column'>
			<Heading>Sign Up</Heading>
			<Box width={1} mt={3}>
				<Label htmlFor={name_id}>Name</Label>
				<Input
					id={name_id}
					name='name'
					placeholder='Steve Mackhlakhen'
				/>
			</Box>

			<Box width={1} mt={3}>
				<Label htmlFor={email_id}>Email</Label>
				<Input
					id={email_id}
					name='email'
					type='email'
					placeholder='steve@example.com'
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

			<Box width={1} mt={3}>
				<Label htmlFor={confirmPassword_id}>Password</Label>
				<Input
					id={confirmPassword_id}
					name='confirm password'
					type='password'
					placeholder='Re-enter your password'
				/>
			</Box>


			<Flex justifyContent='center' mt={3}>
				<Button>
					Sign Up
				</Button>
			</Flex>
		</Flex>
	</Box>
)