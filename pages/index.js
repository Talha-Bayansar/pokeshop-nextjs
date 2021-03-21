import Head from "next/head";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

export default function Home({ pokemons }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.pokemons}>
                {pokemons.map((pokemon) => (
                    <Card pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/pokemons`);
    const body = await response.json();

    return {
        props: {
            pokemons: body,
        },
    };
}
