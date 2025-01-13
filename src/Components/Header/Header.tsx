import css from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { ReservationButton } from '../ReservationButton/ReservationButton'
import logo from '../img/logo.jpg'

const Header = () => {
	return (
		<header className={css.header}>
			<img className={css.logo} src={logo} alt='logo barbershopu' />
				<p>
					Jesteśmy salonem, który zadba o Twoje włosy i brodę na innym poziomie niż miałeś okazję doświadczyć
				</p>
			<div className={css.reservationButtonContainer}>
				<ReservationButton href='https://booksy.com/pl-pl/147660_barbershop-vice-city_barber-shop_12859_zory' />
			</div>
			<div className={css.socialMediaIconsContainer}>
				<a href='https://www.facebook.com/ViceCityZory' className={css.icon}>
					<FontAwesomeIcon icon={faFacebookF} />
				</a>
				<a href='https://www.instagram.com/barbershop_vice_city/' className={css.icon}>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			</div>
		</header>
	)
}
export { Header }
