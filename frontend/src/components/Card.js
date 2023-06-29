import React, { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card(props) {
   
   // Подписка на контекст
   const userItem = useContext(CurrentUserContext);
    // Определение владения карточкой
  const isOwn = props.card.owner._id === userItem._id;
  // Определение наличие поставленного лайка
  const isLiked = props.card.likes.some(item => item._id === userItem._id);
  function handleClick() { props.onCardClick(props.card) };
  function handleDelete() { props.onCardDelete(props.card) };
  function handleLike () { props.onCardLike(props.card) };

  return (
        <div className="cards__item" id="card-template">
        <div className="cards__content">
          <img className="cards__image" src={props.link} onClick={ handleClick } alt={ props.name } />
          { isOwn && <button type="button" className="image-trash" onClick={ handleDelete } aria-label="Удалить" /> }
          <div className="cards__text">
            <h3 className="cards__title">{ props.name }</h3>
            <div className="cards__like-area">
            <button type="button" className={ `cards__like-button ${ isLiked ? 'cards__like-button_active' : '' }` } onClick={ handleLike } aria-label="Like" />
              <p className="cards__like-counter">{ props.likeCount > 0 ? props.likeCount : null }</p>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Card;