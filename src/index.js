import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css';

import { Layout } from './layout'
import { Home } from './pages/home'
import { Gallery } from './pages/gallery'
import { ImageGallery } from './pages/gallery/image'
import { Docs } from './pages/documents'
import { Events } from './pages/events'
import { Event } from './pages/events/id'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={ <Layout /> } >
				<Route path='/' element={ <Home /> } />
				<Route path='/gallery' element={ <Gallery /> } />
				<Route path='/gallery/:id' element={ <ImageGallery /> } />
				<Route path='/documents' element={ <Docs /> } />
				<Route path='/events' element={ <Events /> } />
				<Route path='/events/:id' element={ <Event /> } />
			</Route>
		</Routes>
	</BrowserRouter>
);
