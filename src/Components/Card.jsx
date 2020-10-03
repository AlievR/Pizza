import React from 'react'
import '../css/Card.css';
import '../App.css';
import pizza from '../image/image 5.png'


function Card(props) {

    return (
        <div className="card__post">
            <div className="card__header">
                <img className="card_img" src={props.menu.imageUrl} />
                <div className="card__name">{props.menu.name}</div>
            </div>

            <div className="card__volume">
                <ul className="card__type">
                    <li className="card_btn active" >Тонкое</li>
                    <li className="card_btn">Традиционное</li>
                </ul>

                <ul className="card__size">
                    <li className="card_btn active">25 см.</li>
                    <li className="card_btn">30 см.</li>
                    <li className="card_btn">35 см.</li>
                </ul>
            </div>

            <div className="card__footer">
                <div className="card__price">{props.menu.price} руб. </div>
                <div className="card__append">Добавить</div>
            </div>
        </div>

    )
}

export default Card
