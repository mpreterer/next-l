import Link from 'next/link';
import React from 'react';
import styles from "../styles/a.module.css"

const A = ({href, name}) => {
    return (
        <Link href={href}>
          <span className={styles.link}>{name}</span>
        </Link>
    );
};

export default A;