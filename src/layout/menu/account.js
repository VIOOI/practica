import { useSelector, useDispatch } from 'react-redux'
import { signIn, signOut } from '../../store/users/userSlice'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import { useState } from 'react'
import { supabase } from '../../openDatabase'

export const Account = () => {
	const [ isOpen, setIsOpen ] = useState(false)
	const [ errorSignIn, setError ] = useState(
		<div className='p-3 w-6/12 text-white text-xl text-center'>
			Войти
		</div>
	)
	// console.log( errorSignIn )
	const user = useSelector( state => state.user )
	const dispath = useDispatch()

	const signInBD = async ({ login, password }) => {
		const { data } = await supabase
			.from( 'User' )
			.select( '*' )
			.eq( 'login', login )
			.eq( 'password', password )

		if ( !!data[0] ) {
			dispath(signIn( data[0] ))
			setIsOpen(false)
			setError(
		<div className='p-3 w-6/12 text-stone-800 dark:text-white text-xl text-center'>
			Войти
		</div>
			)
		} else {
			setError(
		<div className='p-5 w-5/12 text-white bg-red-500 rounded-lg text-xl text-center'>
			Не верный логин или пароль
		</div>
			)
		}
	}

	// console.log( user )
	// console.log( !!user.login )

	return(
		<>
		<div className='p-0 dark:text-white font-extralight rounded-md flex justify-center items-center gap-x-2'>
			{ !!user.login 
				? <h1>{ user.login }</h1>
				: null }
			<span 
				className='p-2 m-1 rounded-md bg-zinc-300 dark:bg-blue-600 hover:bg-blue-300 hover:text-white'
					onClick={() => {
						if ( !!user.login ) {
							dispath( signOut() )
						} else {
							setIsOpen( true )
						}
					}}
			>
			{ !!user.login 
				? <BiLogOut />
				: <BiLogIn /> }
			</span>
		</div>
			{
			isOpen 
			? (
				<div className='fixed top-0 left-0 h-screen w-screen flex justify-start' >
						<form 
							className='flex flex-col justify-center items-center gap-y-3 lg:p-5 rounded-md bg-zinc-100 dark:bg-stone-800 lg:w-6/12'
							onSubmit={( event ) => {
								event.preventDefault()
								signInBD({ 
										login: event.target[0].value,
										password: event.target[1].value
									})
							}}
							>
							{ errorSignIn }
							<input type="text" className='py-1 px-3 mx-5 w-5/12 text-black placeholder:text-xs rounded-[5px]' placeholder='Login' />
							<input type="password"  className='py-1 px-3 mx-5 w-5/12 text-black placeholder:text-xs rounded-[5px]' placeholder='Password'/>
							<button className='px-7 py-2 bg-blue-500 rounded-md'>Войти</button>
						</form>
				</div>
			) : null
			}
		</>
	)
}
