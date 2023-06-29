import React, { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext'
import Card from './Card';

function Main(props) {
const userItem = useContext(CurrentUserContext)

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-area">
          <img src={userItem.avatar} className="profile__avatar" alt="Аватар профиля" />
          < button
            type="button"
            className="profile__avatar-edit"
            aria-label="Редактировать аватар профиля"
            onClick={props.onEditAvatar} />
        </div>
        <div className="profile__profile-info">
          <div className="profile__container">
            <h1 className="profile__title">{userItem.name}</h1>
            <button type="button"
              className="profile__edit-button"
              aria-label="Редактировать профиль"
              onClick={props.onEditProfile} ></button>
          </div>
          <h2 className="profile__subtitle">{ userItem.about }</h2>

        </div>
        < button
          type="button"
          className="profile__add-button"
          aria-label="Добавить место"
          onClick={props.onAddPlace} />
      </section>
      <section className="cards">
        { props.cards.map((cardItem) => (
          < Card
            key={cardItem._id}
            link={cardItem.link}
            name={cardItem.name}
            likeCount={cardItem.likes.length}
            onCardClick={props.onCardClick}
            onCardDelete={props.onCardDelete}
            onCardLike = { props.onCardLike }
            card={cardItem} />
        ))}
      </section>
    </main>
  )
}

export default Main;