import './App.module.css';
import Header from './components/Header/Header';
import TopPanel from './layouts/TopPanel/TopPanel';

function App() {

	return (
		<div className="app">
			<TopPanel>
				<Header/>
			</TopPanel>
		</div>
	);
}

export default App;
