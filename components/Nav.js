import Link from 'next/link';
import styles from '../styles/Nav.module.css';

export default function Nav() {

    return (
        <nav>
            <ul className={styles.navUl}>
                <li>
                    <Link href="/landing">
                        <a>
                            Steinvorth Apothecary
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/quiz">
                        <a>Quiz</a>
                    </Link>
                </li>
                <li>
                    <Link href="/products">
                        <a>Products</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}