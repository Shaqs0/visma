import styles from './Header.module.css';

function Header ({ changedLanguage }) {
	const changeLanguages = (e) => {
		changedLanguage (e.target.value);
		console.log(e.target.value);
	};
	return (
		<>
			<div className={styles.head}>
				<img className={styles.logo} src="/Vector.svg" />
				<div className={styles.text}>
					<p>О компании</p>
					<p>Новости</p>
					<p>Новости</p>
					<p>Новости</p>
					<p>Новости</p>
					<p>Новости</p>
				</div>
				<div className={styles.head}>
					<img className={styles.icon} src="/ic_round-search.svg"></img>
					<input className={styles.input}></input>
				</div>
				<img className={styles.select}/>
				<select name="user" id="user" onChange={changeLanguages}>
					<option value='1'>RU</option>
					<option value='2'>ENG</option>
				</select>
			</div>
			
		</>
	);

}


export default Header;