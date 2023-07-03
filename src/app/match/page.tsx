import PageLayout from '../components/pageLayout';

export default function Match() {
	return (
		<PageLayout>
			<h2 className='text-4xl font-extrabold dark:text-white'>
				Is it
				<br /> a <span className='text-red-600'>Match?</span>
			</h2>
			<p className='my-4 text-lg text-gray-600'>
				Let&apos;s find out! Book a free 30-minute consultation to explore how we can work
				together.
				<br />
				<br />
				<span className='my-4 text-sm font-mono text-gray-500'>
					Want to learn more about my qualifications and experience? Feel free to download
					my{' '}
					<a
						className='font-extrabold hover:text-blue-600 hover:underline'
						href='/Jonas_Samulionis_Software_Engineer_v3.pdf'
						download>
						CV here
					</a>
					.
				</span>
			</p>
		</PageLayout>
	);
}
