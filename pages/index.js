import { getImageData } from '../helpers/api';
import { withRouter } from 'next/router';
import ImageCarousel from '../components/ImageCarousel';
import Layout from '../components/core/Layout';

const Index = ({ imageData }) => {
	const showImageCarousel = () => {
		return (
			<React.Fragment>
				<Layout>
					<ImageCarousel images={imageData} />
				</Layout>
			</React.Fragment>
		);
	};
	return <React.Fragment>{showImageCarousel()}</React.Fragment>;
};

Index.getInitialProps = () => {
	return { imageData: getImageData() };
};

export default withRouter(Index);
