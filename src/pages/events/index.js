import { useEffect, useState } from 'react'
import { supabase } from '../../openDatabase'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Card } from '../../components/events/card'
import { AiOutlinePlusCircle } from 'react-icons/ai'

export const Events = () => {
	const [ mock, setMock ] = useState([])
	const user = useSelector( state => state.user )
	useEffect( () => {
		( async function fetchData () {
		let { data } = await supabase
			.from('Events')
			.select('*')
			setMock(data)
		})()
		document.title = 'Главная';
	}, [] )

	return(
		<>
			{
			user.role !== 'USER' ? (
				<Link to='/events/new' className='fixed top-14 left-5 text-4xl block text-blue-600'>
					<AiOutlinePlusCircle />
				</Link>
			) : null
			}
		<div className='dark:bg-stone-900'>
			<div className='flex justify-start gap-x-3 pt-3 pb-0 px-3 w-9/12 mx-auto'>
			</div>
			<div className='w-screen min-h-screen flex justify-center'>
		<div className="grid gap-5 items-start justify-center px-4
							xl:grid-cols-4 xl:w-9/12
							lg:grid-cols-3 lg:w-8/12
							md:grid-cols-2 md:w-9/12
							sm:grid-cols-1 sm:w-11/12 sm:my-3 sm:px-3"
				>
			{ mock.map( event => {
					return(
							<Card key={event.id} data={event}/>
					)
			}) }
		</div>
			</div>
		</div>
		</>
	)
}
