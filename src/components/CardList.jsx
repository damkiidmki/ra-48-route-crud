import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CardsContext from './CardsContext';
import Card from './Card';

export default function CardList() {
    const { cards } = useContext(CardsContext);

    return (
        <div>
            { cards.map((item) => <Link to={`/card/${item.id}`} key={item.id}><Card card={item} /></Link>)}
        </div>
    )
}