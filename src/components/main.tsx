import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	max-height: 40rem;
	gap: 5rem;
	justify-content: center;
`;

export const ImageContainer = styled.div`
	padding: 3rem 0;
`;

export const FormImage = styled.img`
	display: none;
	max-height: 100%;
	@media (min-width: 1024px) {
		display: block;
	}
`;

export const FormContainer = styled.div`
	box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.16);
	border-radius: 12px;
	padding: 2rem 5rem;
	width: 35rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const FormHeading = styled.h1`
	font-size: 2rem;
	font-weight: 700;
`;

export const FormGrp = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex-grow: 2;
`;

export const VFormGrp = styled.div`
	display: flex;
	align-items: center;
	font-size: 0.8rem;
	color: #737b86;
`;

export const Input = styled.input`
	border: 1px solid rgba(4, 7, 47, 0.4);
	border-radius: 8px;
	padding: 0.65rem;
	width: 100%;
`;

export const MailLabel = styled.label`
	font-weight: 500;
	font-size: 0.9rem;
	padding-bottom: 0.1rem;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 0.8rem;
	color: #737b86;
`;

export const Link = styled.a`
	color: #f78719;
`;

export const P = styled.p`
	font-size: 0.8rem;
`;

export const Button = styled.button`
	width: 70%;
	margin: auto;
	background: #1575a7;
	border-radius: 8px;
	color: #fff;
	border-radius: 8px;
	border: 1px solid transparent;
	padding: 0.6em 1.2em;
	font-size: 1em;
	font-weight: 500;
	cursor: pointer;
`;

export const RLink = styled(Link)`
	font-weight: 700;
	cursor: pointer;
	text-decoration: underline;
`;

export const PassDiv = styled.div`
	position: relative;
	width: 100%;
`;

export const Eye = styled.img`
	position: absolute;
	right: 0;
	top: 0.5rem;
	cursor: pointer;
`;
