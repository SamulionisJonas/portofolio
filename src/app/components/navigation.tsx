'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Pages {
	previousPage: string;
	nextPage: string;
	match: boolean;
}

export default function Navigation() {
	const [pages, setPages] = useState<Pages>({
		previousPage: '',
		nextPage: '',
		match: false,
	});

	const currentPath = usePathname();

	useEffect(() => {
		assignPath(currentPath);
	}, [currentPath]);

	function assignPath(currentPath: string): void {
		const pageConfig: { [key: string]: Pages } = {
			'/': { previousPage: '', nextPage: '/about', match: false },
			'/about': { previousPage: '/', nextPage: '/match', match: false },
			'/match': { previousPage: '/about', nextPage: '/contact', match: true },
		};

		setPages(pageConfig[currentPath]);
	}

	return (
		<div className='fixed bottom-40 grid text-center lg:text-left'>
			<div className='flex flex-row items-center justify-center gap-4'>
				<Link
					className={`text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 transition-opacity duration-700 ease-in ${
						pages?.previousPage ? 'opacity-100' : 'opacity-0'
					}`}
					href={pages?.previousPage}>
					<svg
						className='w-5 h-5'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 14 10'>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='1'
							d='M13 5H1m0 0 4 4M1 5l4-4'></path>
					</svg>
					<span className='sr-only'>Previous</span>
				</Link>

				<Link
					className={`${
						pages?.match ? 'hidden ' : 'block '
					}text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500 transition-all duration-500 ${
						pages?.nextPage && !pages?.match ? 'opacity-100' : 'opacity-0'
					}`}
					href={pages?.nextPage}>
					<svg
						className='w-5 h-5'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 14 10'>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='1'
							d='M1 5h12m0 0L9 1m4 4L9 9'></path>
					</svg>
					<span className='sr-only'>Next</span>
				</Link>

				<a
					target='_blank'
					rel='noopener noreferrer'
					className={`${
						pages?.match ? 'block ' : 'hidden '
					}text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500`}
					href='https://calendly.com/jonas-samulionis/30min'>
					<svg
						className='w-5 h-5'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 24 24'>
						<path
							fill='currentColor'
							d='M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181'
						/>
					</svg>
					<span className='sr-only'>Heart - hire me</span>
				</a>
			</div>
		</div>
	);
}
