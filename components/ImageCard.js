import Link from 'next/link';
import { LeftIcon, RightIcon } from '../assets/Icons';
import { getNextId, getPrevId } from '../helpers/imageIds';
const ImageCard = ({ children, id, size }) => {
	const { url, heading, about } = children;

	return (
		<React.Fragment>
			<div
				className='image-card'
				style={{ backgroundImage: `url(${url})` }}
				id={id}
			>
				<div className='card-content'>
					<h3>{heading}</h3>
					<p className=''>{about}</p>
				</div>
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
			</div>
		</React.Fragment>
	);
};

export default ImageCard;
