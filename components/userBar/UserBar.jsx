import styles from '../../styles/UserBar.module.scss';
import { signOutUser } from '../../pages/api/firebase-config';


const UserBar = ({ user }) => {
    return (
        <div className={styles.container}>
            <div className={styles.usernameContainer}>
                <img className={styles.profilePic} src={user.photoURL} alt="" />
                <p className={styles.username}>{user.displayName}</p>
            </div>
            <button className={styles.signOut} onClick={signOutUser}>Sign Out</button>
        </div>
    );
};

export default UserBar;