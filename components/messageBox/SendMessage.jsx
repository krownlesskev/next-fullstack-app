import React from 'react';

const SendMessage = ({ styles }) => {
    return (
        <div className={styles.sendContainer}>
            <input type="text" />
            <button>Send</button>
        </div>
    );
};

export default SendMessage;