import { MainPage } from './Components/MainPage'
import { AboutTournamentPage } from './Components/AboutTournamentPage/AboutTournamentPage'
import { Routes, Route, HashRouter } from 'react-router-dom'

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path='/' element={<MainPage />}></Route>
				<Route path='/PoolTournament' element={<AboutTournamentPage />}></Route>
			</Routes>
		</HashRouter>
	)
}

export default App
