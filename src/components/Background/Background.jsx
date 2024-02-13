import styles from './Background.module.css';

function Background() {
	return (
		<>
			<div className={styles.picture_container}>
				<img className='' src='/Rectangle 23.png' alt="Background"></img>

			</div>
			<div className={styles.texth1}>Тавимский морской порт VISMA</div>
			<div className={styles.texth3}>Vel posuere nibh odio placerat massa vel tellus tortor. Varius eget nunc scelerisque etiam felis facilisi ante viverra sem. Nunc eros elementum.</div>
			<div className={styles.other}>
				<p>О КОМПАНИИ</p>
			</div>
			<img className={styles.other_pic} src='/Component 1.svg'></img>
			<div className={styles.buttons}>
				<button className={styles.big_button}> <span className={styles.text1}>УСЛУГИ</span>
					<span className={styles.text2}>Погрузочно-разгрузочная деятельность</span></button>
				<button className={styles.big_button}> <span className={styles.text1}>УСЛУГИ</span>
					<span className={styles.text2}>Хранение грузов</span></button>
				<button className={styles.big_button}> <span className={styles.text1}>УСЛУГИ</span>
					<span className={styles.text2}>Складские операции</span></button>
				<button className={styles.big_button}> <span className={styles.text1}>УСЛУГИ</span>
					<span className={styles.text2}>Швартовые операции</span></button>
			</div>
		</>
	);
}

export default Background;