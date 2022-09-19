import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import Card from './Design/Card';
import spaceman from '../public/SpaceMan.gif'

const Personal: React.FC = () => {
	const Container = styled(Box)({
		display: 'flex',
		color: '#fff',
		marginTop: '-17px',
		flexDirection: 'column',
	});

	const Header = styled(Typography)({
		marginTop: '60px',
		textAlign: 'center',
		fontSize: '1.6rem',
		fontWeight: '500',
		margin: '4rem 1.5rem 0rem 1.5rem',
	});

	const Content = styled(Typography)({
		textAlign: 'center',
		fontSize: '1.2rem',
		fontWeight: '400',
		margin: '25px 15px',
	});

	const ImageContainer = styled(Box)({
		width: '300px',
		margin: '15px -30px 25px 0px',
		zIndex: '1',
	});

	return (
		<>
			<Card
				width='17rem'
				height='27rem'
				margin=' 3rem 0rem 0rem 1rem'
				color='radial-gradient(circle farthest-side, #890048, #540048, #000027)'
			>
				<Container flex={12}>
					<Header>Hi I&apos;m Richard, Nice to meet you.</Header>

					<Content>
						I&apos;ve been working as a freelance developer for a year now, I
						have a peaceful sense of assurance, am innately interested and am
						constantly trying to get better at development and design by solving
						one challenge at a time.
					</Content>
				</Container>
			</Card>

			<ImageContainer>
				<Image
					src={spaceman}
					alt='Avater'
					layout='responsive'
					width={419}
					height={432}
					loading='lazy'
				/>
			</ImageContainer>
		</>
	);
};

export default Personal;
