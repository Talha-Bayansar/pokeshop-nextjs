import React from "react";
import styles from "../styles/Layout.module.css";
import Link from "next/link";

const Layout = ({ children }) => {
    return (
        <div>
            <nav className={styles.nav}>
                <h1 className={styles.nav_title}>Pokéshop</h1>
                <div className={styles.nav_items}>
                    <Link href="/">
                        <span className={styles.nav_item}>Pokémons</span>
                    </Link>
                    <Link href="/cart">
                        <span className={styles.nav_item}>Cart</span>
                    </Link>
                    <Link href="/login">
                        <span className={styles.nav_item}>Login</span>
                    </Link>
                </div>
            </nav>
            <div>{children}</div>
        </div>
    );
};

export default Layout;
