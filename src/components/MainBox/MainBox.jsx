import styles from './MainBox.module.css';

function MainBox () {
	return (
		<div className={styles.body}>
			<div>
				<p className={styles.h1}>Услуги</p>
				<div className={styles.box_text}>
					<p>Тарифы на услуги по обеспечению контроля доступа на территорию VISMA на 2022 год</p>
					<p>Условия определения цены договора и тарифы на работы</p>
					<p>Договор перевалки (типовая форма)</p>
				</div>
				<button className={styles.near_text}>PDF</button>
				<button className={styles.near_text2}>PDF</button>
				<button className={styles.near_text3}>PDF</button>
			</div>
			<div className={styles.buttons}>
				<button className={styles.big_button}>Услуги</button>
				<button className={styles.big_button}>Услуги</button>
				<button className={styles.big_button}>Услуги</button>
				<button className={styles.big_button}>Услуги</button>
				<button className={styles.big_button}>Услуги</button>
				<button className={styles.big_button}>Услуги</button>
			</div>	
		</div>
	);
}


export default MainBox;