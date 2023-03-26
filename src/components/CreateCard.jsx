import { useState } from "react";
import { Navigate } from 'react-router-dom';

export default function CreateCard() {
    const [value, setValue] = useState();
    const [redirect, setRedirect] = useState(false);

    const handleChange = (event) => setValue(event.target.value);

    const handleCancel = (event) => {
        event.preventDefault();
        setRedirect(true);
    }

    const handleAdd = (event) => {
        event.preventDefault();
        fetch("http://localhost:7070/posts", {
            method: 'POST',
            body: JSON.stringify({ id: 0, content: value }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => setRedirect(true));
    }

    return (
    <>
        {redirect && <Navigate to='/'/>}
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="card" style={{width:400}}>
                    <div className="card-body">
                        <h5>Создание публикации</h5>
                        <div className="row"> 
                            <div className="col-9">
                                <form>
                                    <input className="form-control" placeholder="Введите текст" value={value} onChange={handleChange} required />
                                </form>
                            </div>
                            <div className="col">
                                <button className="btn btn-secondary d-flex justify-content-end" onClick={handleCancel}>X</button>
                            </div >
                        </div>
                        <button className="btn btn-light mt-2" style={{width:200}} onClick={handleAdd}>Опубликовать</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}