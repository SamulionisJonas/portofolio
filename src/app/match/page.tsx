export default function Match() {
	return (
		<>
			<div className="relative flex flex-col h-72 xs:max-w-xs md:w-96 before:absolute before:h-[100px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[100px]">
				<h2 className='text-4xl font-extrabold dark:text-white'>
					Is it
					<br /> a <span className='text-red-600'>Match?</span>
				</h2>
				<p className='my-4 text-lg text-gray-500'>
					Book me for 30 - minutes free consultation to see if we are a match.
				</p>
			</div>
		</>
	);
}
