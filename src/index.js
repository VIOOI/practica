import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css';

import { Layout } from './layout'
import { Home } from './pages/home'
import { Gallery } from './pages/gallery'
import { ImageGallery } from './pages/gallery/image'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={ <Layout /> } >
				<Route path='/' element={ <Home /> } />
				<Route path='/gallery' element={ <Gallery /> } />
				<Route path='/gallery/:id' element={ <ImageGallery /> } />
			</Route>
		</Routes>
	</BrowserRouter>
);
