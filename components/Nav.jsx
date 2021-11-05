import Image from 'next/image';

import styles from '../styles/Home.module.css'

export default function Nav() {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Image className={styles.logo} src="/triangle.png" alt="Vercel Logo" width={32} height={32} />
        </div>
        <a href="#" className={styles.navLink}>Product</a>
        <a href="#" className={styles.navLink}>Features</a>
        <a href="#" className={styles.navLink}>About</a>
      </div>
    </>
  );
}
