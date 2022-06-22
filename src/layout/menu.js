import useMatchMedia from 'use-match-media-hook'
import { Logo } from './menu/logo'
import { Account } from './menu/account'
import { MenuItem } from './menu/menuItem'

import { BiMenu, BiHomeAlt, BiBookBookmark, BiImageAlt, BiCalendarEvent } from "react-icons/bi"
// import { GrFormClose } from 'react-icons/gr'

const queries = [
  '(max-width: 630px)',
  '(min-width: 800px)'
]

export const Menu = () => {
	const [mobile, desktop] = useMatchMedia(queries)
	console.log( mobile )
	if ( mobile ) {
		return (
	<header className="w-screen p-0 bg-zinc-200 dark:bg-stone-800 dark:text-white sticky top-0 z-10 flex justify-between px-5"> 
			<Logo />
				<div className='flex text-2xl'>
			<Account />
					<div className='p-2 m-1 rounded-md bg-zinc-300 dark:bg-blue-600 hover:bg-blue-300 hover:text-white'>
			<BiMenu />
					</div>
				</div>
	</header>
		)
	}
	return (
	<header className="w-screen py-2 bg-zinc-200 dark:bg-stone-800 dark:text-white sticky top-0 z-10 flex justify-around"> 
			<Logo />
			<div 
				className='p-0 rounded-md flex justify-center items-center m-0'>
				<ul className='flex gap-3'>
					<MenuItem icon={<BiHomeAlt />} text='Главная' href={'/'}/>
					<MenuItem icon={<BiBookBookmark />} text='Документы' href={'/documents'} />
					<MenuItem icon={<BiImageAlt />} text='Галерея' href={'/gallery'} />
					<MenuItem icon={<BiCalendarEvent />} text='Мероприятия' href={'/events'} />
				</ul>
			</div>
			<Account />
	</header>
	)
}
