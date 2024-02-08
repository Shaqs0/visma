import styles from './Background.module.css';

function Background() {
	return (
		<>
			<div className={styles.picture_container}>
				<img className='' src='/Rectangle 23.png' alt="Background"></img>

			</div>
			<div className={styles.texth1}>Тавимский морской порт VISMA</div>
			<div className={styles.texth3}>Vel posuere nibh odio placerat massa vel tellus tortor. Varius eget nunc scelerisque etiam felis facilisi ante viverra sem. Nunc eros elementum.</div>
			<div className={styles.other}></div>
			<div className={styles.buttons}>
				<button className={styles.big_button}></button>
				<button className={styles.big_button}></button>
				<button className={styles.big_button}></button>
				<button className={styles.big_button}></button>
			</div>
		</>
	);
}

export default Background;