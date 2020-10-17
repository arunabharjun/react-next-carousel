import Link from 'next/link';
import { LeftIcon, RightIcon } from '../assets/Icons';
import { getNextId, getPrevId } from '../helpers/imageIds';
const ImageCard = ({ children, id, size }) => {
	/**
     * Destructuring children prop
     */
	const { url, heading, about } = children;

	/**
     * Render the card content
     */
	const showCardContent = () => {
		return (
			<React.Fragment>
				<div className='card-content'>
					<h3>{heading}</h3>
					<p className=''>{about}</p>
				</div>
			</React.Fragment>
		);
	};

	/**
     * Render the carousel navigation
     */
	const showCarouselNavigation = () => {
		return (
			<React.Fragment>
				<div className='carousel-nav'>
					<Link href={`#${getPrevId(id, size)}`}>
						<div className='nav-arrow'>
							<LeftIcon classes={'nav-left'} />
						</div>
					</Link>

					<div className='nav-arrow'>
						<Link href={`#${getNextId(id, size)}`}>
							<div className='nav-arrow'>
								<RightIcon classes={'nav-right'} />
							</div>
						</Link>
					</div>
				</div>
			</React.Fragment>
		);
	};

	/**
     * Rendering all elements in one card
     */
	const renderImageCard = () => {
		return (
			<React.Fragment>
				<div
					className='image-card'
					style={{ backgroundImage: `url(${url})` }}
					id={id}
				>
					{showCardContent()}
					{showCarouselNavigation()}
				</div>
			</React.Fragment>
		);
	};

	/**
     * Rendering the component
     */
	return <React.Fragment>{renderImageCard()}</React.Fragment>;
};

export default ImageCard;
