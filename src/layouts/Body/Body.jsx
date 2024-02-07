import './Body.module.css';

function Body ({ children }) {
	return (
		<div className='body'>
			{children}
		</div>
	);
}

export default Body;