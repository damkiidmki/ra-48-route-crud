import moment from 'moment';
import 'moment/locale/ru' 

export default function Card(props) {
    const { card } = props;

    return (
    <div className="card" style={{width:500}}>
        <div className="row">
            <div className="col">
                <p className="user-name">Я</p>
            </div>
            <div className="col">
                <p>{moment(card.created).fromNow()}</p>
            </div>
            <p>{card.content}</p>
            <div className="row mb-2">
                <div className="col">
                    <button className="btn btn-outline-success">Нравится</button>
                </div>
                <div className="col">
                    <button className="btn btn-outline-dark">Комментировать</button>
                </div>
            </div>
            {props.children}
        </div>   
    </div>
    )
}