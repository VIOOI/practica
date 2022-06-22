import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../../openDatabase'

export const Card = ({ data }) => {
	const [ images, setImages ] = useState({})
	console.log( data )
	useEffect( () => {
		( async function fetchData () {
			let { data: ImagesOnEvents } = await supabase
				.from('ImagesOnEvents')
				.select('*')
				.eq( 'eventsId', data.id )

			let { data: Image } = await supabase
				.from('Image')
				.select('*')
				.eq( 'id', ImagesOnEvents[0].imagesId )

			setImages(Image[0])
		})()
		document.title = 'Главная';
	}, [] )

	return(
	<> 
		<Link to={`/events/${data.id}`} >
	<div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-zinc-300 cursor-pointer dark:bg-stone-800">
		<img className="w-full" src={ images.url }alt={ data.title }/>
		<div className="px-6 py-4">
			<div className="font-bold text-xl mb-2 dark:text-white">{ data.title }</div>
			<p className="text-gray-700 text-base dark:text-white">
				{ data.purpose }
			</p>
		</div>
	</div>
		</Link>
	</>
	)
}
