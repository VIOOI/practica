import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'


export const Slider = ({ images }) => {
	const [ width, setWidth ] = useState(0)
	const carousel = useRef()
	console.log( images )
	useEffect(() => {
			console.log( carousel.current.scrollWidth, carousel.current.offsetWidth )
			setWidth( carousel.current.scrollWidth - carousel.current.offsetWidth )
	}, [carousel])
	return(
		<>
			<motion.div className="cursor-grab overflow-hidden">
				<motion.div ref={carousel} className='flex' drag='x' dragConstraints={{ right: 0, left: -width }} >
					{images.map( ( image, index ) => {
						return(
							<motion.div key={ index } 
								className='w-3/6 p-3 pointer-events-none'
								style={{ minWidth: '50%' }}
							>
								<img src={image.url} alt={image.title} 
								className='w-full h-full rounded-md relative'/>
							</motion.div>
						)
					}) }
				</motion.div>
			</motion.div>
		</>
	)
}

