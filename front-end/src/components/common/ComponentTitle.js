import React from 'react';
import styles from './ComponentTitle.module.css';

export default function ComponentTitle({ title, subTitle = '', caption }) {
    if (!title) throw Error('title 값은 필수로 들어가야 합니다.');
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
            <h3>{subTitle}</h3>
            {caption && <div className={styles.caption}>{caption}</div>}
        </div>
    );
}
