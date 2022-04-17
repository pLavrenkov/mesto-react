import React from "react";
import ReactDOM from 'react-dom/client';

function Card({ link, name, likes, cardId, userId, cardOwnerId, onCardClick }) {

    React.useEffect(() => {
        if (cardOwnerId === userId) {
            document.querySelector('.element__bin-button').classList.remove('element__bin-button_display_none');
        }
    }, [])

    function handleClick() {
        onCardClick(name, link);
    }

    return (
        <li className="element">
            <figure className="element__picture">
                <img className="element__photo" src={link} alt="Место" onClick={handleClick} />
                <figcaption className="element__capture">
                    <h2 className="element__title">{name}</h2>
                    <div className="element__like-block">
                        <button type="button" className="element__like"></button>
                        <span className="element__likes">{likes}</span>
                    </div>
                </figcaption>
            </figure>
            <button type="button" className="element__bin-button element__bin-button_display_none"></button>
        </li>
    )
}

export default Card;