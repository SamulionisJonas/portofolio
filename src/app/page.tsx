import PageLayout from './components/pageLayout';
import Image from 'next/image';

export default function Home() {
	return (
		<PageLayout>
			<div className='relative'>
				<h2 className='text-4xl font-extrabold dark:text-white'>
					Hi, my <br /> name is <span className='text-blue-600'>Jonas</span>
				</h2>
				<p className='my-4 text-lg text-gray-600'>
					An idependant Software Engineer from Kaunas, Lithuania
				</p>
				{/* <div className='absolute -top-64 mx-auto left-0 right-0'>
					<Image
						className='rounded-full outline outline-dashed outline-offset-4 outline-blue-500 drop-shadow-sm mx-auto left-0 right-0'
						src='/profile.jpeg'
						width={180}
						height={180}
						alt='Picture of the author'
					/>
				</div> */}
			</div>
		</PageLayout>
	);
}
