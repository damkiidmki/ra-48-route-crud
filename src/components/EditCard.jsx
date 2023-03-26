import { useState, useContext } from "react";
import { useParams, Navigate, Link } from 'react-router-dom';
import CardsContext from "./CardsContext";

export default function EditCard() {
    const { cards } = useContext(CardsContext);
    const params = useParams();
    const card = cards.find((item) => item.id === parseInt(params.id));
    const [redirect, setRedirect] = useState(false);
    const [value, setValue] = useState(card.content);

    const handleChange = (event) => setValue(event.target.value);

    const handleCancel = (event) => {
        event.preventDefault();
        setRedirect(true);
    }

    const handleEdit = () => {
        fetch("http://localhost:7070/posts", {
            method: 'POST',
            body: JSON.stringify({ id: card.id, content: value }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    return (
    <div className="container">
        {redirect && <Navigate to='/' />}
        <div className="row justify-content-md-center">
            <div className="card" style={{width:400}}>
                <div className="card-body">
                    <h5>Редактировать публикацию</h5>
                    <div className="row"> 
                        <div className="col-9">
                            <form>
                                <input className="form-control" placeholder="Введите текст" value={value} onChange={handleChange} required />
                            </form>
                        </div>
                        <div className="col">
                            <button className="btn btn-secondary d-flex justify-content-end" style={{width:40}} onClick={handleCancel}>X</button>
                        </div >
                    </div>
                    <Link to={`/card/${card.id}`} key={card.id}>
                       <button className="btn btn-light mt-2" style={{width:200}} onClick={handleEdit}>Сохранить</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}
