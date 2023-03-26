import { useState, useEffect } from "react";
import CardsContext from "./CardsContext";

export default function CardProvider(props) {
    const [cards, setCards] = useState();

    useEffect(() => {
        fetch("http://localhost:7070/posts")
            .then((response) => response.json())
            .then((data) => setCards(data));
    }, []);

    const handleChange = (data) => setCards(data);

    return (
        <CardsContext.Provider value={{ cards: cards, handleChange: handleChange }} >
            {props.children}
        </CardsContext.Provider>
    )
}