import { getImageData } from '../helpers/api';
import { withRouter } from 'next/router';
import HomePage from '../components/HomePage';
import Layout from '../components/core/Layout';

const Index = ({ imageData }) => {
	const showHomePage = () => {
		return (
			<React.Fragment>
				<Layout>
					<HomePage images={imageData} />
				</Layout>
			</React.Fragment>
		);
	};
	return <React.Fragment>{showHomePage()}</React.Fragment>;
};

Index.getInitialProps = () => {
	return { imageData: getImageData() };
};

export default withRouter(Index);
