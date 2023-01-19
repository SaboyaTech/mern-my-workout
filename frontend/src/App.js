import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './routes/home.component'
import Navbar from './components/navbar/navbar.component'
import { TailwindNav } from './components/navbar/tailwind-nav.component'
import { DashboardLayout } from './layout/DashboardLayout'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
