import PageLayout from '../components/pageLayout';

export default function Match() {
	return (
		<PageLayout>
			<h2 className='text-4xl font-extrabold dark:text-white'>
				Is it
				<br /> a <span className='text-red-600'>Match?</span>
			</h2>
			<p className='my-4 text-lg text-gray-500'>
				Book me for 30 - minutes free consultation to see if we are a match.
			</p>
		</PageLayout>
	);
}
