import { Outlet } from 'react-router-dom'

import { Menu } from './menu'
import { Footer } from './footer'

export const Layout = () => {
	return (
	<> 
			<Menu />
		<main>
				<Outlet />
		</main>
	</>
	)
}
			// <Footer />
