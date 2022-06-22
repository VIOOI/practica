import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { supabase } from '../../openDatabase'


export const NewImage = () => {
	const [ title, setTitle ] = useState('Название')
	const [ desc, setDesc ] = useState('Описание')
	const [ url, setUrl ] = useState('')

	let navigate = useNavigate();

	const user = useSelector( state => state.user )
	// console.log( user )
	if ( user.role === 'USER' ) {
		return <Navigate to='/gallery' replace={true} />
	}
	return (
	<div className="min-h-screen w-screen bg-zinc-100 dark:bg-stone-800 flex"> 
			<div className="w-5/12 h-screen flex justify-center items-center">
				<form 
					className="flex flex-col w-7/12 gap-y-3" 
					onSubmit={ event => {

						(async function (){
							event.preventDefault()
							const { data, error } = await supabase
								.from('Image')
								.insert([{
									url: event.target[0].value,
									title: event.target[1].value,
									description: event.target[2].value,
									authorId: user.id,
								}])
							navigate( '/gallery', { replace: true } )
						})()
					} }
					>
					<input type="text" 
						className="py-2 px-3 rounded-md text-stone-700 font-light"
						placeholder='Url'
						onChange={ event => {
							setUrl( event.target.value )
						} }
					/>
					<input type="text" 
						className="py-2 px-3 rounded-md text-stone-700 font-light"
						placeholder='Название'
						onChange={ event => {
							setTitle( event.target.value )
						} }
					/>
					<textarea
						name="" 
						id="" 
						cols="30" 
						rows="10"
						onChange={ event => {
							setDesc( event.target.value )
						} }
						className="py-2 px-3 rounded-md text-stone-700 font-light" 
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
