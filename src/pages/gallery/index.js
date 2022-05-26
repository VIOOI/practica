import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../../openDatabase'

export const Gallery = () => {
	// console.log( imagesProps )
	const [ images, setImages ] = useState([])

	useEffect( () => {
		( async function fetchData () {
		let { data: Image, error } = await supabase
			.from('Image')
			.select('id,url,title')
			.eq('imageRole', 'GALLERY')
			console.log( Image )
			setImages(Image)
		})()
		document.title = 'Главная';
	}, [] )

	return(
		<div className='w-screen min-h-screen dark:bg-stone-900 flex justify-center'>
			<div className="grid gap-5 px-4 h-fit
								xl:grid-cols-4 xl:w-9/12
								lg:grid-cols-3 lg:w-8/12
								md:grid-cols-2 md:w-9/12
								sm:grid-cols-1 sm:w-11/12 sm:my-3 sm:px-3"
					>
			{
				images.map( img => {
					return (
					<Link to={`/gallery/${img.id}`} key={img.id}
						className="w-full h-full bg-zinc-100 rounded-xl p-0 flex justify-center items-center" >
						<img src={img.url} alt="" className="h-full object-cover rounded-md shadow-md" />
					
					</Link>
					)})
			}
			</div>
		</div>
	)
}
