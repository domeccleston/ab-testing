// import Image from 'next/image';
import cn from 'classnames';
import styles from '../styles/Main.module.css'

export default function Main({ heroText, imgSrc, btnColor }) {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroText}>
            {heroText}
          </h1>
          <h3 className={styles.heroSubtitle}>
            Get started now and start saving developer time, whilst improving
            your output by up to 500%
          </h3>
          <button
            className={styles.btnPrimary}
            style={{ backgroundColor: btnColor, boxShadow: `0 4px 14px 0 ${btnColor}`}}
          >
            Get started
          </button>
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
            src={imgSrc}
            alt="office"
            className={styles.heroImageUnoptimized}
          />
        </div>
      </main>
    </>
  );
}
