import { GithubIcon } from '../../assets/Icons';

const NavBar = () => {
	return (
		<React.Fragment>
			<div className='nav-bar'>
				<div className='nav-body'>
					<p className='brand-name '>
						Carousel <span className='accent-clr'>App</span>
					</p>
					<a
						href='https://github.com/arunabharjun/react-next-carousel'
						target='_blank'
						rel='noopener noreferrer'
					>
						<GithubIcon />
					</a>
				</div>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
