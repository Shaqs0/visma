import styles from './Bottoms.module.css';

function Bottoms () {
	return (
		<div className={styles.pre_bottom}>
			<img className={styles.logo} src='./public/Vector (1).svg'></img>
			<img className={styles.icon_location} src='./public/location.svg'></img>
		</div>
	);
}

export default Bottoms;