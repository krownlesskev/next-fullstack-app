import UserBar from '../components/userBar/UserBar';
import MessageBox from '../components/messageBox/MessageBox';
import { useState } from 'react';
import { signInUser, authStateListener } from './api/firebase-config';

import styles from '../styles/Home.module.scss';

export default function Home({ quoteData }) {
  const [user, setUser] = useState();
  authStateListener(setUser);

  return (
    <div className={styles.container}>
      <div className={styles.appContainer}>
        <div className={styles.contentContainer}>
          {user ?
            <>
              <UserBar user={user} />
              <p className={styles.subtitle}>Hellur</p>
              < MessageBox />
            </>
            : null
          }
          {!user ?
            <>
              <p className={styles.title}>Hellur</p>
              <p className={styles.title}>How yer dern?</p>
              <button className={styles.signIn} onClick={signInUser}>Sign In</button>
            </>
            : null}
        </div>
      </div>

    </div>
  );
}

