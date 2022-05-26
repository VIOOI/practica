import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { supabase } from '../../openDatabase'

export const ImageGallery = () => {
	const [ mock, setMock ] = useState([{ id: 0, title: '', url: '', description: '' }])
	const navigate = useNavigate();
	const { id } = useParams()

	useEffect( () => {
		( async function fetchData () {
		let { data: Image} = await supabase
			.from('Image')
			.select('id,url,title,description')
			.eq('id', `${id}`)
			setMock(Image)
			console.log( Image )
		})()
		document.title = 'Главная';
	}, [] )

	return (
		<>
			<div className='relative'>
					<div style={{ height: '96vh' }}
						className=" w-screen bg-stone-800"
					>
						<figure className="w-full h-full flex flex-col justify-center items-center gap-y-5">
							<img src={mock[0].url ?? ''} alt={mock[0].title ?? ''} className='wa-11/12 lg:wi-8/12 rounded-xl shadow-xl'
								style={{ maxHeight: '80vh', maxWidth: '70vw' }}
								onClick={() => { navigate( '/gallery' ) }}
							/>
						</figure>
					</div>
				<div className='p-5 w-11/12 lg:w-6/12 mx-auto'>
					<h1 className='text-2xl font-extrabold'>{ mock[0].title ?? '' }</h1>
					<p className='p-3 bg-zinc-200 rounded-md mt-3'>{ mock[0].description ?? '' }</p>
				</div>
			</div>
	</>
	)
}

