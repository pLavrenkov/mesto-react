import React from "react";
import ReactDOM from 'react-dom/client';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Card({ card, link, name, likes, likesArr, cardOwnerId, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext);
    
    const isOwnCard = (card.owner._id === currentUser._id);
    const cardDeleteButtonClass = (isOwnCard ? "element__bin-button" : "element__bin-button element__bin-button_display_none");

    const isLiked = (likesArr.some(like => like._id === currentUser._id));
    const cardLikeButtonClassName = (isLiked ? "element__like element__like_active" : "element__like");

    function handleClick() {
        onCardClick(name, link);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleCardDelete() {
        onCardDelete(card);
    }


    return (
        <li className="element">
            <figure className="element__picture">
                <img className="element__photo" src={link} alt="Место" onClick={handleClick} />
                <figcaption className="element__capture">
                    <h2 className="element__title">{name}</h2>
                    <div className="element__like-block">
                        <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                        <span className="element__likes">{likesArr.length}</span>
                    </div>
                </figcaption>
            </figure>
            <button type="button" className={cardDeleteButtonClass} onClick={handleCardDelete}></button>
        </li>
    )
}

export default Card;