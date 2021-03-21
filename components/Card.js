import React from "react";
import styles from "../styles/Card.module.css";
import Type from "./Type";

const Card = ({ pokemon }) => {
    const colors = [
        {
            name: "Fire",
            color: "rgb(255, 68, 34)",
            secColor: "rgba(255, 68, 34, 0.3)",
            textColor: "white",
        },
        {
            name: "Flying",
            color: "rgb(136, 153, 255)",
            secColor: "rgba(136, 153, 255, 0.3)",
            textColor: "white",
        },
        {
            name: "Electric",
            color: "rgb(255, 204, 51)",
            secColor: "rgba(255, 204, 51, 0.3)",
            textColor: "white",
        },
        {
            name: "Dragon",
            color: "rgb(119, 102, 238)",
            secColor: "rgba(119, 102, 238, 0.3)",
            textColor: "white",
        },
        {
            name: "Water",
            color: "rgb(51, 153, 255)",
            secColor: "rgba(51, 153, 255, 0.3)",
            textColor: "white",
        },
        {
            name: "Ice",
            color: "rgb(102, 204, 255)",
            secColor: "rgba(102, 204, 255, 0.3)",
            textColor: "white",
        },
    ];
    function getColor(name) {
        const type = colors.find((type) => type.name === name);
        return type.color;
    }
    function getSecColor(name) {
        const type = colors.find((type) => type.name === name);
        return type.secColor;
    }
    function getTextColor(name) {
        const type = colors.find((type) => type.name === name);
        return type.textColor;
    }
    return (
        <div
            className={styles.card}
            style={{ backgroundColor: getSecColor(pokemon.types.type1) }}
        >
            <div className={styles.card_left}>
                <img
                    src={`${process.env.NEXT_PUBLIC_API_KEY}${pokemon.image.formats.thumbnail.url}`}
                    alt={pokemon.name}
                />
                <button
                    className={styles.card_price}
                    style={{
                        backgroundColor: getColor(pokemon.types.type1),
                        color: getTextColor(pokemon.types.type1),
                    }}
                >
                    &euro;{(Math.round(pokemon.price * 100) / 100).toFixed(2)}
                </button>
            </div>
            <div
                className={styles.card_right}
                style={{
                    borderLeft: `1px solid ${getColor(pokemon.types.type1)}`,
                }}
            >
                <h1 className={styles.card_title}>{pokemon.name}</h1>
                <div className={styles.card_types}>
                    <Type
                        type={pokemon.types.type1}
                        color={getColor(pokemon.types.type1)}
                        textColor={getTextColor(pokemon.types.type1)}
                    />
                    {pokemon.types.type2 && (
                        <Type
                            type={pokemon.types.type2}
                            color={getColor(pokemon.types.type2)}
                            textColor={getTextColor(pokemon.types.type2)}
                        />
                    )}
                </div>
                <h4 className={styles.card_stage}>{pokemon.stage}</h4>
            </div>
        </div>
    );
};

export default Card;
