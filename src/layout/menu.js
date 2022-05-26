import { Logo } from './menu/logo'
import { Account } from './menu/account'
import { MenuItem } from './menu/menuItem'

import { BiMenu, BiHomeAlt, BiBookBookmark, BiImageAlt, BiCalendarEvent } from "react-icons/bi"
// import { GrFormClose } from 'react-icons/gr'

export const Menu = () => {
	return (
	<header className="w-screen p-0 bg-zinc-200 dark:bg-stone-800 dark:text-white sticky top-0 z-10 flex justify-around"> 
			<Logo />
			<div 
				className='p-0 rounded-md flex justify-center items-center m-0'>
				<ul className='flex gap-3'>
					<MenuItem icon={<BiHomeAlt />} text='Home' href={'/'}/>
					<MenuItem icon={<BiBookBookmark />} text='Docs' href={'/documents'} />
					<MenuItem icon={<BiImageAlt />} text='Gallery' href={'/gallery'} />
					<MenuItem icon={<BiCalendarEvent />} text='Event' href={'/events'} />
				</ul>
			</div>
			<Account />
	</header>
	)
}
