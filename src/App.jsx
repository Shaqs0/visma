import './App.module.css';
import Header from './components/Header/Header';
import TopPanel from './layouts/TopPanel/TopPanel';
import Body from './layouts/Body/Body';
import Background from './components/Background/Background';
import MainBox from './components/MainBox/MainBox';
import BeforeBottom from './components/BeforeBottom/BeforeBottom';


function App() {

	return (
		<div className="app">
			<TopPanel>
				<Header/>
			</TopPanel>
			<Body>
				<Background/>
				<MainBox/>
				<BeforeBottom/>
			</Body>
		</div>
	);
}

export default App;
