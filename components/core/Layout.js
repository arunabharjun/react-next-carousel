import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<NavBar />
			<main>
				{children}
				<Footer />
			</main>
		</React.Fragment>
	);
};

export default Layout;
