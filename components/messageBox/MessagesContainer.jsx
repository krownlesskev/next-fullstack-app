import SendMessage from "./SendMessage";

const MessagesContainer = ({ styles }) => {
    return (
        <div className={styles.messagesContainer}>
            <SendMessage styles={styles} />
        </div>
    );
};

export default MessagesContainer;