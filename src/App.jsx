import './App.module.css';
import Header from './components/Header/Header';
import TopPanel from './layouts/TopPanel/TopPanel';
import Body from './layouts/Body/Body';
import Background from './components/Background/Background';


function App() {

	return (
		<div className="app">
			<TopPanel>
				<Header/>
			</TopPanel>
			<Body>
				<Background/>
			</Body>
		</div>
	);
}

export default App;
