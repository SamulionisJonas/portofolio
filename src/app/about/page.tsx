import PageLayout from '../components/pageLayout';
import Image from 'next/image';

export default function Superpowers() {
	return (
		<PageLayout>
			<h2 className='text-4xl font-extrabold dark:text-white'>
				What are my
				<br /> <span className='text-blue-600'>Superpowers?</span>
			</h2>
			<p className='my-4 text-lg text-gray-500'>
				Javascript and Typescript, React, Solid they all have it’s purpose, Web components
				with Stencil or Lit puts the smile on my face.
			</p>

			<div className='fixed w-4/6 h-4/6 left-0 right-0 m-auto top-0 bottom-0'>
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
			</div>
		</PageLayout>
	);
}
