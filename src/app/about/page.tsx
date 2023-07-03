import PageLayout from '../components/pageLayout';
import Image from 'next/image';

export default function Superpowers() {
	return (
		<PageLayout>
			<h2 className='z-10 text-4xl font-extrabold dark:text-white'>
				What are my
				<br /> <span className='text-blue-600'>Superpowers?</span>
			</h2>
			<p className='max-h-60 overflow-scroll lg:max-h-max md:overflow-visible my-4 text-lg text-gray-600'>
				I possess a wide range of skills that empower me to deliver exceptional software
				solutions. With expertise in{' '}
				<span className='font-extrabold text-amber-500'>JavaScript</span> and
				<span className='font-extrabold text-blue-500'> TypeScript</span>, I craft robust
				and performant applications. I specialize in building intuitive user interfaces
				using <span className='font-extrabold text-sky-500'>React</span>, while ensuring
				accessibility and usability for all users. Additionally, I have a deep understanding
				of <span className='font-extrabold text-pink-500'>Design Systems</span> and their
				role in creating consistent and delightful user experiences.
			</p>

			{/* <div className='fixed w-4/6 h-4/6 left-0 right-0 m-auto top-0 bottom-0'>
				<div className='z-0 w-24 h-24'>
					<Image
						className='rounded-full border border-gray-100 shadow-sm'
						src='/figma-pictogram.png'
						width={500}
						height={500}
						alt='Picture of the author'
					/>
				</div>
				<div className='z-0 w-24 h-24'>
					<Image
						className='rounded-full border border-gray-100 shadow-sm'
						src='/aws-pictogram.png'
						width={250}
						height={250}
						alt='Picture of the author'
					/>
				</div>
				<div className='z-0 w-24 h-24'>
					<Image
						className='shadow-sm'
						src='/javascript-pictogram.png'
						width={250}
						height={250}
						alt='Picture of the author'
					/>
				</div>
				<div className='z-0 w-24 h-24'>
					<Image
						className='shadow-sm'
						src='/next-pictogram.svg'
						width={250}
						height={250}
						alt='Picture of the author'
					/>
				</div>
				<div className='z-0 w-24 h-24'>
					<Image
						className='shadow-sm'
						src='/react-pictogram.png'
						width={250}
						height={250}
						alt='Picture of the author'
					/>
				</div>
				<div className='z-0 w-24 h-24'>
					<Image
						className='shadow-sm'
						src='/stencil-pictogram.jpeg'
						width={250}
						height={250}
						alt='Picture of the author'
					/>
				</div>
				<div className='z-0 w-24 h-24'>
					<Image
						className='shadow-sm'
						src='/typescript-pictogram.png'
						width={250}
						height={250}
						alt='Picture of the author'
					/>
				</div>
				<div className='z-0 w-24 h-24'>
					<Image
						className='shadow-sm'
						src='/vercel-pictogram.svg'
						width={250}
						height={250}
						alt='Picture of the author'
					/>
				</div>
				<div className='z-0 w-24 h-24'>
					<Image
						className='shadow-sm'
						src='/wcag-pictogram.png'
						width={250}
						height={250}
						alt='Picture of the author'
					/>
				</div>
			</div> */}
		</PageLayout>
	);
}
