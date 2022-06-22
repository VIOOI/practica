import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { supabase } from '../../openDatabase'

export const Slider = ({ id }) => {
	const [ images, setImages ] = useState([])

	useEffect( () => {
		( async function fetchData () {
			let { data: ImagesOnEvents } = await supabase
				.from('ImagesOnEvents')
				.select('*')
				.eq( 'eventsId', `${id}` )
			console.log( ImagesOnEvents )

			for ( let imgid of ImagesOnEvents ) {
				let { data: Image } = await supabase
					.from('Image')
					.select('*')
					.eq( 'id', imgid.imagesId)
				// console.log( Image )
				setImages( prev => {
					return [...prev, Image[0]]
				} )
			}

		})()
	}, [id] )

	return(
		<>
			<motion.div className="cursor-grab overflow-hidden">
				<motion.div className='flex' drag='x' dragConstraints={{ right: 0 }} >
					{images.map(image => {
						return(
							<motion.div key={image.id}
								className='w-3/6 p-3 pointer-events-none'
								style={{ minWidth: '50%' }}
							>
								<img src={image.url} alt={image.title}
								className='w-full h-full rounded-md'/>
							</motion.div>
						)
					}) }
				</motion.div>
			</motion.div>
		</>
	)
}
