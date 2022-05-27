import { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { supabase } from '../../openDatabase'

export const Document = ({ title, discription, url, date, author, type }) => {
	const [ auth, setAuth ] = useState('')
	const datee = new Date(date)
	let docDate = `${datee.getDate()}.${datee.getMonth()}.${datee.getFullYear()}  ${datee.getHours()}:${datee.getMinutes()}`


	useEffect( () => {
	( async function fethPost () {
		let { data } = await supabase
			.from('User')
			.select('login')
			.eq( 'id', author )
			setAuth(data[0].login)
			console.log( data[0].login )
	})();

		}, [author] )
	return (
		<div className="p-3 dark:text-white rounded-md flex gap-3 w-full md:w-10/12 lg:w-6/12">
			<div className="w-full">
				<div className="w-full flex justify-between mb-2">
					<h2 className='text-gray-600 dark:text-white font-bold'>
						<span className="dark:bg-white bg-black inline-block px-2 rounded-md text-white dark:text-black mr-2 font-extrabold">{ type }</span>
						<span>{ title }</span>
					</h2>
					<a href={url} >
						<div className="w-10 h-10 bg-zinc-200 dark:bg-stone-700 rounded-md flex justify-center items-center">
							<BiDownload />
						</div>
					</a>
				</div>
				<div className="pr-10 font-normal lg:font-extralight">
					{ discription }
				</div>
				<div className="text-zinc-500 dark:text-white mt-3">
					<span className="text-xs pr-5">{ docDate }</span>
					<span className=" inline-block rounded-md text-white">{ auth }</span>
				</div>
			</div>
		</div>
	)
}

