import Head from 'next/head';
import { getImageData } from '../helpers/api';
import { withRouter } from 'next/router';
import ImageCarousel from '../components/ImageCarousel';
import Layout from '../components/core/Layout';

const Index = ({ imageData }) => {
	const showHead = () => {
		/**
		 * Rendering the head section of web page
		 */
		return (
			<React.Fragment>
				<Head>
					<title>Carousel App</title>
					<meta
						name='description'
						content='Image carousel App with infinite scrolling, developed with Next.js (React.js) | By Arunabh Arjun'
					/>

					<meta property='og:title' content='Carousel App' />
					<meta
						property='og:description'
						content='Image carousel App with infinite scrolling, developed with Next.js (React.js) | By Arunabh Arjun'
					/>
					<meta property='og:type' content='webiste' />
					<meta property='og:site_name' content='Carousel App' />
				</Head>
			</React.Fragment>
		);
	};
	/**
   * Taking the image data and
   * passing them as a prop
   * for the image carousel
   */
	const showImageCarousel = () => {
		return (
			<React.Fragment>
				<Layout>
					<ImageCarousel images={imageData} />
				</Layout>
			</React.Fragment>
		);
	};

	/**
   * Rendering the main component
   */
	return (
		<React.Fragment>
			{showHead()}
			{showImageCarousel()}
		</React.Fragment>
	);
};

/**
 * Getting the app to render on
 * serverside with initial data
 */
Index.getInitialProps = () => {
	return { imageData: getImageData() };
};

export default withRouter(Index);
