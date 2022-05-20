import { signInUser, signOutUser } from '../../pages/api/firebase-config';
import styles from '../../styles/UserBar.module.scss';

const UserBar = ({ user }) => {
    return (
        <div className={styles.container}>
            {user ?
                <div className={styles.usernameContainer}>
                    <img className={styles.profilePic} src={user.photoURL} alt="" />
                    <p className={styles.username}>{user.displayName}</p>
                </div>
                : null
            }
            {!user ?
                <button onClick={signInUser}>Sign In</button>
                : <button onClick={signOutUser}>Sign Out</button>
            }
        </div>
    );
};

export default UserBar;