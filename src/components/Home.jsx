import { useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import CardList from "./CardList";
import CardsContext from "./CardsContext";

export default function Home() {
    const { cards, handleChange } = useContext(CardsContext);

    useEffect(() => {
        fetch("http://localhost:7070/posts")
        .then((response) => response.json())
        .then((data) => handleChange(data))
    }, [])

    return (
        <div className="container">
			<div className="card" style={{width:500}}>
                <div className="card-body">
					<Link to="card/new">
                         <button className="btn btn-outline-secondary" type="button">Создать пост</button>
					</Link>
				</div>
			</div>
            {cards &&<CardList />}
        </div>
    )
}
