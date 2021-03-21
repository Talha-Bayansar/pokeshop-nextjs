import React from "react";
import styles from "../styles/Type.module.css";

const Type = ({ type, color, textColor }) => {
    return (
        <div
            className={styles.type}
            style={{ backgroundColor: color, color: textColor }}
        >
            {type}
        </div>
    );
};

export default Type;
