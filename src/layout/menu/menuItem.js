import { Link } from 'react-router-dom'

export const MenuItem = ({ icon, text, href }) => {
	return(
		<Link to={href}>
			<li className='bg-zinc-300 dark:bg-blue-500 py-0.5 px-5 rounded-md flex gap-x-2 justify-center items-center font-extralight
					hover:bg-blue-400 hover:text-white'>
				{icon} <span>{text}</span>
			</li>
		</Link>
	)
}
