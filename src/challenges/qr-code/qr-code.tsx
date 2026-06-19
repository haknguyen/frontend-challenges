import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import qrCode from './assets/image-qr-code.png';
import styles from './qr-code.module.css';

export default function QrCode() {
  return (
    <div className={styles['qr-code']}>
      <div className={styles['qr-code__container']}>
        <div className={styles['qr-code__image']}>
          <img src={qrCode} alt='QR Code' />
        </div>
        <div className={styles['qr-code__content']}>
          <h1 className={styles['qr-code__title']}>
            Improve your front-end skills by building projects
          </h1>
          <p className={styles['qr-code__description']}>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
      <div className={styles['qr-code__footer']}>
        <Link to='/'>
          <ArrowLeft size={20} />
          <span>All challenges</span>
        </Link>
      </div>
    </div>
  );
}
