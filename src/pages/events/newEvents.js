import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { supabase } from '../../openDatabase'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import { AddImage } from '../../components/events/addImage'


export const NewEvents = () => {
	const [ title, setTitle ] = useState('Название')
	const [ desc, setDesc ] = useState('')
	const [ shortdesc, setShortdesc ] = useState('Краткое описание')
	const [ purpose, setPurpose ] = useState('')
	const [ participants, setParticipants ] = useState('')

	const [ imgArr, setImgArr ] = useState([])

	const [ isOpen, setIsOpen ] = useState(false)

	const user = useSelector( state => state.user )
	if ( user.role === 'USER' ) {
		return <Navigate to='/gallery' replace={true} />
	}

	const addEventsOnImages = async ( imagesId, eventsId ) => {
		const { data } = await supabase
			.from('ImagesOnEvents')
			.insert([{
				eventsId: eventsId,
				imagesId: imagesId
			}])
	}
	const addEvents = async () => {
		const { data } = await supabase
			.from('Events')
			.insert([{
				participants: participants,
				purpose: purpose,
				title: title,
				discription: desc,
				shortdiscr: desc.slice(1, 200),
				authorId: user.id,
			}])
		console.log( data )
		for ( let n of imgArr ) {
				console.log( n )
				addEventsOnImages( n, data[0].id )
		}
		
	}
	//TODO Сделать Добавление мероприятия

	return (
		<>
			<AddImage 
				isOpen={isOpen} 
				setIsOpen={setIsOpen} 
				setImgArr={setImgArr} 
				imgArr={imgArr} 
			/>
	<div className="min-h-screen w-screen bg-zinc-100 dark:bg-stone-800 flex"> 
			<div className="w-5/12 min-h-screen flex flex-col gap-2 text-blue-500 justify-center items-center relative">
					<div 
						onClick={ () => { setIsOpen(true) } }
						className='text-md cursor-pointer text-white flex items-center gap-2'
						>
						<AiOutlinePlusCircle className='text-2xl'/> Добавить фотографию</div>
				<form 
					className="flex flex-col w-7/12 gap-y-3" 
						onSubmit={ event => {
							event.preventDefault()
							addEvents()
						} }
					>
					<input type="text" 
						className="py-2 px-3 rounded-md text-stone-700 font-light"
						placeholder='Название'
						onChange={ event => setTitle( event.target.value ) }
					/>
					<input type="text" 
						className="py-2 px-3 rounded-md text-stone-700 font-light"
						placeholder='Цель'
						onChange={ event => setPurpose( event.target.value ) }
					/>
					<input type="text" 
						className="py-2 px-3 rounded-md text-stone-700 font-light"
						placeholder='Краткое описание'
						onChange={ event => setShortdesc( event.target.value ) }
					/>
					<textarea
						name="" id="" 
						cols="30" rows="3"
						className="py-2 px-3 rounded-md text-stone-700 font-light" 
						placeholder='Описание'
						onChange={ event => setDesc( event.target.value ) }
					/>
						<button className="py-2 px-3 rounded-md text-white bg-blue-600 font-light">Добавить</button>
				</form>
			</div>
			<div className="w-7/12 h-screen flex justify-center items-center">
				<div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-zinc-300 cursor-pointer dark:bg-stone-800">
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2 dark:text-white">{ title }</div>
						<p className="text-gray-700 text-base dark:text-white whitespace-normal">
							{ desc.slice( 1, 200 ) + '...' }
						</p>
					</div>
				</div>
			</div>
	</div>
	</>
	)
}

					// <img className="w-full" src={ 'https://i.ytimg.com/vi/qz6j-35yQog/maxresdefault.jpg?7857057827' }alt={ title }/>
