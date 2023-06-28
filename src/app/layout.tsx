import CopyTextToClipboard from './components/copyToClipboard';
import Navigation from './components/navigation';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Jonas Samulionis | Software Engineer',
	description: 'Independent Software Engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<main className='flex h-screen w-full flex-col items-center justify-between p-24'>
					<div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
						<div className='fixed left-0 top-0 flex gap-4 w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
							<p>
								<code className='font-mono font-bold'>jonas.samulionis</code>
								@outlook.com
							</p>
							<CopyTextToClipboard copyText='jonas.samulionis@outlook.com' />
						</div>
						<div className='fixed bottom-6 left-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
							<a
								className='ė flex place-items-center gap-2 p-2 lg:pointer-events-auto hover:font-mono hover:font-bold'
								href='https://www.linkedin.com/in/samulionis/'
								target='_blank'
								rel='noopener noreferrer'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='currentColor'
									viewBox='0 0 24 24'>
									<path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
								</svg>
							</a>
							<a
								className=' flex place-items-center gap-2 p-2 lg:pointer-events-auto hover:font-mono hover:font-bold'
								href='https://github.com/SamulionisJonas'
								target='_blank'
								rel='noopener noreferrer'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='currentColor'
									viewBox='0 0 24 24'>
									<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
								</svg>
							</a>
						</div>
					</div>

					{children}
					<Navigation />

					<div></div>
				</main>
			</body>
		</html>
	);
}
