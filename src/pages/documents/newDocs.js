import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Document } from '../../components/documents/document'
import { supabase } from '../../openDatabase'

export const NewDocs = () => {
	const [ title, setTitle ] = useState('Название')
	const [ desc, setDesc ] = useState('Описание')
	const [ url, setUrl ] = useState('')
	const [ type, setType ] = useState('WORD')

	const user = useSelector( state => state.user )
	// console.log( user )
	if ( user.role === 'USER' ) {
		return <Navigate to='/documents' replace={true} />
	}
	return (
	<div className="h-screen w-screen bg-stone-800 flex"> 
			<div className="w-5/12 h-screen flex justify-center items-center">
				<form 
					className="flex flex-col w-7/12 gap-y-3" 
					onSubmit={ event => {

						(async function (){
							event.preventDefault()
							const { data, error } = await supabase
								.from('Documents')
								.insert([{
									url: event.target[0].value,
									title: event.target[1].value,
									description: event.target[2].value,
									documentType: event.target[3].value,
									authorId: user.id,
								}])
							console.log( data )
							console.log( error )
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
						<select className="py-2 px-3 rounded-md text-stone-700 font-light" 
						onChange={ event => {
							setType(event.target.value)
						} }
						>
							<option value="WORD">Word</option>
							<option value="POWERPOINT">PowerPoint</option>
							<option value="EXCEL">Excel</option>
							<option value="PDF">PDF</option>
							<option value="VIDEO">Video</option>
						</select>
						<button className="py-2 px-3 rounded-md text-white bg-blue-600 font-light">Добавить</button>
				</form>
			</div>
			<div className="w-7/12 h-screen flex justify-center items-center">
				<Document url={url} title={title} discription={desc} type={type} />
			</div>
	</div>
	)
}
