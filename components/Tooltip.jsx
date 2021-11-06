import { useRouter } from 'next/router';

import styles from '../styles/Tooltip.module.css';
import mainStyles from '../styles/Main.module.css';
import Cookies from 'js-cookie';

import { fadeOut, fadeIn, sleep } from '../lib/transitions';

export default function Tooltip({ variant }) {

  const router = useRouter();
  
  const otherVariant = variant === 'A' ? 'B' : 'A';

  const clearCookie = () => {
    Cookies.remove('landing-ab');
  }

  const setVariant = async () => {
    Cookies.set('landing-ab', otherVariant);
    await fadeOut();
    router.push('/testing');
    await sleep(500);
    await fadeIn();
  }

  return (
    <div className={styles.tooltip}>
      <p>Currently viewing variant {variant}.</p>
      <button
        className={mainStyles.btnSecondary}
        onClick={setVariant}
      >
        Switch to variant {otherVariant}
      </button>
      <button
        className={mainStyles.btnSecondary}
        onClick={clearCookie}
      >
        Delete cookie
      </button>
    </div>
  )
}