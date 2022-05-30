import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store/store'

import './index.css';

import { Layout } from './layout'
import { Home } from './pages/home'

import { Gallery } from './pages/gallery'
import { ImageGallery } from './pages/gallery/image'

import { Docs } from './pages/documents'
import { NewDocs } from './pages/documents/newDocs'

import { Events } from './pages/events'
import { Event } from './pages/events/id'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={ store }>
	<BrowserRouter>
		<Routes>
			<Route path='/' element={ <Layout /> } >
				<Route path='/' element={ <Home /> } />

				<Route path='/gallery' element={ <Gallery /> } />
				<Route path='/gallery/:id' element={ <ImageGallery /> } />

				<Route path='/documents' element={ <Docs /> } />
				<Route path='/documents/new' element={ <NewDocs /> } />

				<Route path='/events' element={ <Events /> } />
				<Route path='/events/:id' element={ <Event /> } />

			</Route>
		</Routes>
	</BrowserRouter>
	</Provider>,
);
