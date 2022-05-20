import styles from '../../styles/MessageBox.module.scss';
import SendMessage from './SendMessage';
import Messages from './MessagesContainer';

const MessageBox = () => {
    return (
        <div className={styles.messageBoxContainer}>
            <Messages styles={styles} />
        </div>
    );
};

export default MessageBox;