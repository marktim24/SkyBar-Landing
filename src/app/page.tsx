export default function Home() {
	return (
		<main
			className='w-screen h-screen bg-cover'
			style={{
				backgroundImage: 'url(/bg.jpg)',
				backgroundColor: 'rgba(16, 16, 16, 0.55)',
				backgroundBlendMode: 'multiply',
			}}
		>
			<div className='container'>
				<div>
					<h1 className='inline-flex text-cyan-300  font-bold'>sky</h1>
					<h1 className='inline-flex text-white  font-normal'>bar</h1>
					<p className='text-white text-5xl font-inria font-normal uppercase leading-9'>
						project
					</p>
				</div>
			</div>
		</main>
	)
}
