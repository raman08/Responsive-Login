import { useState } from 'react';
import './App.css';
import closedEye from './assets/closedEye.svg';
import image from './assets/image.svg';
import openEye from './assets/openEye.svg';

import {
	Button,
	Container,
	Eye,
	Form,
	FormContainer,
	FormGrp,
	FormHeading,
	FormImage,
	ImageContainer,
	Input,
	Link,
	MailLabel,
	P,
	PassDiv,
	RLink,
	VFormGrp,
	Wrapper,
} from './components/main';

function App() {
	const [loginID, setLoginID] = useState('');
	const [password, setPassword] = useState('');
	const [showPass, setShowPass] = useState(false);

	const [remember, setRemember] = useState(false);
	const [tac, setTac] = useState(false);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log({ loginID, password });
	}

	return (
		<div className='App'>
			<Container>
				<ImageContainer>
					<FormImage src={image} />
				</ImageContainer>
				<FormContainer>
					<FormHeading>Login</FormHeading>
					<Form onSubmit={e => handleSubmit(e)}>
						<FormGrp>
							<MailLabel htmlFor='loginID'>Login ID</MailLabel>
							<Input
								onChange={e => setLoginID(e.target.value)}
								value={loginID}
								placeholder='Enter Login ID'
								id='loginID'
							/>
						</FormGrp>

						<FormGrp>
							<MailLabel htmlFor='password'>Password</MailLabel>
							<PassDiv>
								<Input
									onChange={e => setPassword(e.target.value)}
									value={password}
									id='password'
									placeholder='Enter Password'
									type={showPass ? 'text' : 'password'}
								/>
								<Eye
									onClick={() => setShowPass(!showPass)}
									src={showPass ? openEye : closedEye}
								/>
							</PassDiv>
						</FormGrp>

						<Wrapper>
							<VFormGrp>
								<input
									onChange={() => setRemember(!remember)}
									checked={remember}
									type='checkbox'
									id='remember'
								/>
								<label htmlFor='remember'>Remember Me</label>
							</VFormGrp>

							<Link href='#'>Forget Password</Link>
						</Wrapper>

						<VFormGrp>
							<input
								id='tac'
								type='checkbox'
								onChange={() => setTac(!tac)}
								checked={tac}
							/>
							<label htmlFor='tac'>
								Agree to{' '}
								<Link href='#'>Term and Conditions</Link>
							</label>
						</VFormGrp>

						<Button>Login</Button>

						<P>
							Don't have a account? <RLink>Register Here</RLink>
						</P>
					</Form>
				</FormContainer>
			</Container>
		</div>
	);
}

export default App;
