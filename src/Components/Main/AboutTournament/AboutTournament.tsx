import css from './AboutTournament.module.css'
import poolTablePhoto from '../../img/poolTable.jpg'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { Link } from 'react-router-dom'

const AboutTournament = () => {
	return (
		<section className={css.section}>
			<img className={css.image} src={poolTablePhoto} alt='stół bilardowy' />
			<div className={css.fog}>
				<SectionTitle title='turniej bilardowy' />
				<div className={css.descriptionContainer}>
					<p>W naszym salonie organizujemy amatorskie turnieje bilardowe!</p>
					<Link to='/PoolTournament'>Czytaj więcej</Link>
				</div>
			</div>
		</section>
	)
}
export { AboutTournament as Tournament }
