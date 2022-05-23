import Link from 'next/link';
import styles from '../styles/LandingSection.module.css';

export default function LandingSection({ sectionData }) {

    const { id, header, subtext, callToAction, backgroundImage } = sectionData;
    return (
        <section key={id} className={styles.landingSection} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={styles.textArea}>
                <h2>
                    {header}
                </h2>
                <span>
                    {subtext}
                </span>
                <Link href="/">
                    <a className={styles.callToActionButton}>
                        {callToAction.text}
                    </a>
                </Link>
            </div>
        </section >
    )
}