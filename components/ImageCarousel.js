import ImageCard from './ImageCard';

const ImageCarousel = ({ images = [] }) => {
	/**
	 * Passing the image data to
	 * ImageCard component
	 */
	const renderCards = () => {
		return (
			<React.Fragment>
				<div className='image-slider'>
					{images.map((image, i) => {
						return (
							<div key={i}>
								<ImageCard id={i} size={images.length}>
									{image}
								</ImageCard>
							</div>
						);
					})}
				</div>
			</React.Fragment>
		);
	};

	/**
	 * Rendering the carousel component
	 */
	return <React.Fragment>{renderCards()}</React.Fragment>;
};

export default ImageCarousel;
