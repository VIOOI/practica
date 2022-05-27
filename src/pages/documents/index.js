import { BiSearch } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { supabase } from '../../openDatabase'

import { Document } from '../../components/documents/document'

export const Docs = () => {
	// console.log( JSON.parse(props.docjson) )
	const [ docs, setDocs ] = useState([])
	const [ value, setValue ] = useState('')
	const [ isOpen, setIsOpen ] = useState(true)


	const filteredCountris = docs.filter(doc => {
		return doc.title.toLowerCase().includes(value.toLowerCase())
	})

	const itemClickHandler = ( event ) => {
		setValue( event.target.textContent )
		setIsOpen(!isOpen)
	}

	useEffect( () => {
		( async function fethPost () {
			let { data: documents } = await supabase
				.from('Documents')
				.select('*')
			setDocs(documents)
			console.log( documents )
		})();
		},[] )

	return(
		<div className='flex flex-col items-center gap-3 dark:bg-stone-900' style={{ minHeight: '96vh' }}>
			<form action="#" className='sticky z-20 top-10 w-screen dark:bg-stone-800 p-2 flex gap-2 justify-center items-center'>
				<BiSearch className='text-2xl dark:text-white'/>
				<input type="text" 
					className='border-0 px-4 py-1 rounded-md dark:bg-stone-900 dark:text-white 
						dark:placeholder:text-white placeholder:text-sm'
					placeholder='Поиск документов...'
					value={value}
					onChange={event => setValue( event.target.value )}
					onClick={() => { setIsOpen(true) }}
				/>
				<ul className='rounded-b-md dark:text-white absolute left-1/3 top-12 w-4/12 dark:bg-stone-800 shadow-lg z-40 max-h-56 h-auto overflow-auto'>
					{
					value && isOpen
						? filteredCountris.map( doc => {
							return(
								<li key={doc.id} className='p-2 px-5 hover:bg-blue-500 hover:text-stone-900 cursor-pointer ease-in duration-100'
									onClick={itemClickHandler}>{ doc.title }</li>
							)
						})
						: null
					}
				</ul>
			</form>
			<h1 className='text-4xl font-bold mt-16 text-blue-800 dark:text-blue-500 text-center my-5'>Документы музея</h1>
				{
				filteredCountris.map( doc => {
				console.log( doc )
					return(
						<Document key={doc.id} url={doc.url} title={doc.title} discription={doc.description}
							type={doc.documentType} date={doc.createdAt} author={doc.authorId}
						/>
					)
				})
				}
		</div>
			
	)
}
