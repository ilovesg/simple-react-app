import React from 'react';
import styles from './Modal.module.scss';

export default function Modal({ children, visible, setVisible }) {
  const modalClassList = [styles.modal];

  if (visible) {
    modalClassList.push(styles['modal--active']);
  }

  return (
    <div role="presentation" className={modalClassList.join(' ')} onClick={() => setVisible(false)}>
      <div role="presentation" className={styles['modal-content']} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
