import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    const rotas = [{
        label: 'Home',
        to: '/'
    }, {
        label: 'Projects',
        to: '/projects'
    }, {
        label: 'Contact',
        to: '/contact'
    }];
    return (
        <nav className={styles.menu}>
            <h1>Tiago</h1>
            <ul className={styles.menu__list}>
                {rotas.map((rota, index) => (
                    <li key={index} className={styles.menu__link}>
                        <Link to={rota.to}>
                            {rota.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Header