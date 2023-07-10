export default function PageLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="animate-fadeIn relative flex flex-col md:h-72 w-full sm:w-5/6 lg:w-3/6 px-12 before:absolute before:h-[100px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[20px]">
			<div className='animate-fadeIn'>{children}</div>
		</div>
	);
}
