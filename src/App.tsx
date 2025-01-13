import { MainPage } from './Components/MainPage'
import { AboutTournamentPage } from './Components/AboutTournamentPage/AboutTournamentPage'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainPage />}></Route>
				<Route path='/PoolTournament' element={<AboutTournamentPage />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
