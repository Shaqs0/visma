import styles from './News.module.css';

function News () {
	return (
		<div className={styles.body}>
			<div className={styles.top}>
				<h1 className={styles.h1}>Новости</h1>
				<p className={styles.p}>Все новости</p>
				<img className={styles.picture} src='/Group 7.svg'></img>
			</div>
			<div>
				<div className={styles.pictures}>
					<img src='/Frame 60.png'></img>
					<img src='/Frame 61.png'></img>
					<img src='/Frame 62.png'></img>
					<img src='/Frame 63.png'></img>
				</div>
				<div className={styles.date}>
					<p>20/05/22</p>
					<p>20/02/22</p>
					<p>30/12/21</p>
					<p>29/06/21</p>
				</div>
				<div className={styles.header}>
					<p>Semper eu pulvinar eget integer</p>
					<p>Vitae id nec nulla sit nunc cursus curabitur tempus vel enim.</p>
					<p>Integer nisi sagittis in aliquet. Enim eget varius lacinia est a.</p>
					<p>Facilisis vitae proin quis</p>
				</div>
				<div className={styles.text}>
					<p>Pretium duis phasellus netus ac. Nunc nibh nunc integer feugiat et aliquam cras. Amet pharetra montes ipsum gravida tellus tellus.</p>
					<p>Cras arcu ac commodo suspendisse commodo ipsum turpis dui. Quis pharetra malesuada eget sit egestas et integer. Suspendisse a.</p>
					<p>Lectus tempus felis pretium vitae. Tempor massa vestibulum condimentum cursus diam quam. Mattis facilisi dignissim donec eget vel.</p>
					<p>Iaculis diam quam velit sit nunc turpis ultricies elementum. Vitae lacinia tristique rutrum faucibus nulla quis ultricies. Risus.</p>
				</div>
			</div>
		</div>
	);
}

export default News;