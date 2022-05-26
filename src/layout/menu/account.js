import { BiLogIn, BiLogOut } from 'react-icons/bi'

export const Account = () => {
	return(
		<div className='p-0 dark:text-white font-extralight rounded-md flex justify-center items-center'>
			<span className='p-2 m-1 rounded-md bg-zinc-300 dark:bg-blue-600 hover:bg-blue-300 hover:text-white'><BiLogIn /></span>
		</div>
	)
}
