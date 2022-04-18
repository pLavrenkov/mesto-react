import React from 'react';
import ReactDOM from 'react-dom/client';
import avatarPath from '../images/avatar.jpg';
import Card from './Card';
import { api } from '../utils/Api';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [userId, setUserId] = React.useState('');
    const [name, setName] = React.useState('');
    const [about, setAbout] = React.useState('');
    const [avatar, setAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);


    React.useEffect(() => {
        api.getUserInfo()
            .then((userInfo) => {
                setName(userInfo.name);
                setAbout(userInfo.about);
                setAvatar(userInfo.avatar);
                setUserId(userInfo._id);
            })
    }, [])

    React.useEffect(() => {
        api.getCards()
            .then((arrCards) => {
                setCards(arrCards)
            })
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__content">
                    <div className="profile__avatar-container">
                        <img className="profile__avatar" src={avatar !== '' ? avatar : avatarPath} alt="Аватар" />
                        <button type="button" className="profile__avatar-button" onClick={onEditAvatar}></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">{name !== '' ? name : 'Жак-Ив Кусто'}</h1>
                        <p className="profile__subtitle">{about !== '' ? about : 'Исследователь океана'}</p>
                        <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
                    </div>
                    <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
                </div>
            </section>
            <section className="elements">
                <ul className="element-list">
                    {cards.map(item =>
                        <Card key={item._id} cardId={item._id} link={item.link} name={item.name} likes={item.likes.length} userId={userId} cardOwnerId={item.owner._id} onCardClick={onCardClick} />
                    )}
                </ul>
            </section>
        </main>
    )
}

export default Main