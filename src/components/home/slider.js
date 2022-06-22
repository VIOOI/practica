import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { supabase } from '../../openDatabase'


export const Slider = () => {
	const [ width, setWidth ] = useState(0)
	const [ images, setImages ] = useState([])
	const carousel = useRef()
	// console.log( images )
	useEffect( () => {
		( async function fetchData () {
		let { data: Image } = await supabase
			.from('Image')
			.select('url,title')
			.eq('imageRole', 'HOME')
			setImages(Image)
		})()
		document.title = 'Главная';
	}, [] )
	useEffect(() => {
			// console.log( carousel.current.scrollWidth, carousel.current.offsetWidth )
			setWidth( carousel.current.scrollWidth - carousel.current.offsetWidth )
	}, [images])
	return(
		<>
			<motion.div ref={carousel} className="cursor-grab overflow-hidden p-10">
				<motion.div className='flex' drag='x' dragConstraints={{ right: 0, left: -width }} whileTap={{cursor: 'drabbing'}} >
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

