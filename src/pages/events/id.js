import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { supabase } from '../../openDatabase'

import { Section } from '../../components/home/section'
import { Slider } from '../../components/events/slider'

export const Event = () => {
	const [ mock, setMock ] = useState({})
	const { id } = useParams()

	useEffect( () => {
		( async function fetchData () {
		let { data } = await supabase
			.from('Events')
			.select('*')
			.eq( 'id', id )
			setMock(data[0])
			// console.log( data )
		})()
	}, [] )

	return(
		<>
			<div  className='w-screen min-h-screen bg-zinc-100 dark:bg-stone-900 flex flex-col justify-start items-center'>
				<h1 className='text-4xl font-bold text-blue-800 dark:text-blue-500 text-center my-5'>{ mock.title }</h1>
				<Section title={'Описание'} >
					<p className='indent-8 first-letter:font-normal'> { mock.discription } </p>
					<p className='first-letter:font-normal bg-zinc-300 dark:bg-zinc-700 inline-block px-5 py-1 rounded-md mt-2'> { mock.participants } </p>
				</Section>
				<Section title={'Цель мероприятия'} >
					<p className='indent-8 first-letter:font-normal'> { mock.purpose } </p>
				</Section>
				<div className='md:px-0 lg:px-40'>
					<Slider id={mock.id} />
				</div>
			</div>
		</>
	)
}
					// <Slider id={1} />
