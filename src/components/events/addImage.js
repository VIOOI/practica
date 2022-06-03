import { supabase } from '../../openDatabase'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export const AddImage = ({ isOpen, setIsOpen, setImgArr, imgArr }) => {
	const [ title, setTitle ] = useState('Название')
	const [ url, setUrl ] = useState('')
	const [ desc, setDesc ] = useState('')

	const user = useSelector( state => state.user )

	if ( isOpen ) {
	return (
	<div className="min-h-screen w-screen bg-stone-800 flex"> 
			<div className="w-5/12 min-h-screen flex flex-col gap-2 justify-center items-center relative">
				<form 
					className="flex flex-col w-7/12 gap-y-3" 
					onSubmit={ event => {
							event.preventDefault()
						(async function (){
							const { data, error } = await supabase
								.from('Image')
								.insert([{
									url: url,
									title: title,
									description: desc,
									authorId: user.id,
									imageRole: 'EVENT'
								}])
								console.log( data )
							setImgArr([...imgArr, data[0].id ])
						})()
							setUrl('')
							setTitle('')
							setDesc('')
							setIsOpen(false)
					} }
					>
					<input type="text" 
						className="py-2 px-3 rounded-md text-stone-700 font-light"
						placeholder='Url'
						onChange={ event => setUrl( event.target.value ) }
					/>
					<input type="text" 
						className="py-2 px-3 rounded-md text-stone-700 font-light"
						placeholder='Название'
						onChange={ event => setTitle( event.target.value ) }
					/>
					<input type="text" 
						className="py-2 px-3 rounded-md text-stone-700 font-light"
						placeholder='Краткое описание'
						onChange={ event => setDesc( event.target.value ) }
					/>
						<button className="py-2 px-3 rounded-md text-white bg-blue-600 font-light">Добавить</button>
				</form>
			</div>
			<div className="w-7/12 h-screen flex justify-center items-center">
					<div className="w-8/12 rounded-xl p-0 flex flex-col justify-center items-start" >
					{
					!!url 
					? <img src={ url } alt={title} className="max-w-[60%] object-cover mx-auto rounded-md shadow-md" />
					: null
					}
						<h2 className='text-xl text-white my-3 font-extralight'>{ title }</h2>
						<p className='text-white font-extralight'>{ desc }</p>
					</div>
			</div>
	</div>
	)
}
}
