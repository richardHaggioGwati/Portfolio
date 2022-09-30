import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import Image from 'next/image';

import theme from './Design/theme';

import holder from '../public/Holder.svg';

const Header: React.FC = () => {
	const Container = styled(Box)({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		marginTop: '2rem',
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
		},
	});

	const HeaderText = styled(Typography)({
		color: '#000027',
		fontSize: 'clamp(2.8rem, 1rem + 4vw, 5rem)',
		fontWeight: '800',
		textAlign: 'center',
	});

	const IntroParagraph = styled(Typography)({
		color: '#000027',
		fontSize: 'clamp(1.2rem, 0.5rem + 1.5vw, 2.5rem)',
		padding: '50px',
		margin: '0px',
		textAlign: 'center',
		[theme.breakpoints.down('md')]: {
			padding: '10px',
		},
	});

	return (
		<Container flex={12}>
			<Box>
				<HeaderText variant='h1'>
					Frontend <br />
					Developer <br />& Designer
				</HeaderText>

				<IntroParagraph>
					I enjoy what I do and create <br />
					elegantly and simple things
					<br /> with code.
				</IntroParagraph>
			</Box>

			<>
				<Box
					sx={{
						minWidth: '85%',
						padding: '10px',
						[theme.breakpoints.up('md')]: {
							minWidth: '50%',
							padding: '60px',
						},
					}}
				>
					<Image
						priority
						src={holder}
						alt='Planets'
						layout='responsive'
						width={8467}
						height={8520}
					/>
				</Box>
			</>
		</Container>
	);
};

export default Header;
