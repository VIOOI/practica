import { VscSymbolParameter } from "react-icons/vsc";

export const Section = ({ title, children }) => {
	return(
		<>
			<article className="w-full md:w-10/12 lg:w-6/12 dark:text-white p-3 rounded-2xl mt-5 font-normal lg:font-extralight">
				<h1 className="flex items-center gap-3 text-2xl font-bold ml-10 text-blue-500"><VscSymbolParameter className="font-bold" />{ title }</h1>
				{children}
			</article>
		</>
	)
}
