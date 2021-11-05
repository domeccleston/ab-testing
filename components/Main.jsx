// import Image from 'next/image';

import styles from '../styles/Home.module.css'

export default function Main() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroText}>
            Increase your productivity with{" "}
            <span className={styles.highlight}>dynamic new tools</span>
          </h1>
          <h3 className={styles.heroSubtitle}>
            Get started now and start saving developer time, whilst improving
            your output by up to 500%
          </h3>
          <button className={styles.btnPrimary}>Get started</button>
          <button className={styles.btnSecondary}>Contact us</button>
        </div>
        <div className={styles.heroImageContainer}>
          {/* <Image
              className={styles.heroImage}
              src="/office.jpeg"
              layout="fill"
              objectFit="cover"
              alt="office"
            /> */}
          <img
            src="/office.jpeg"
            alt="office"
            className={styles.heroImageUnoptimized}
          />
        </div>
      </main>
    </>
  );
}
