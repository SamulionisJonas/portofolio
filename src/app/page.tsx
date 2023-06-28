import PageLayout from './components/pageLayout';
import Image from 'next/image';

export default function Home() {
	return (
		<PageLayout>
			<h2 className='text-4xl font-extrabold dark:text-white'>
				Hi, my <br /> name is <span className='text-blue-600'>Jonas</span>
			</h2>
			<p className='my-4 text-lg text-gray-500'>
				I’m an idependant Software Engineer from Kaunas, Lithuania
			</p>

		</PageLayout>
	);
}
