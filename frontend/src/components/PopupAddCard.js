import React, { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function PopupAddCard(props) {
  // Рефы названия и картинки карточки
  const cardName = useRef();
  const cardLink = useRef();
  // Эффект для очистки полей
  useEffect( () => {
    cardName.current.value = '';
    cardLink.current.value = '';
  }, [ props.isOpen ]);

  function handleSubmit (event){
    event.preventDefault();
    props.onAddPlace({ name: cardName.current.value, link: cardLink.current.value });
  }

  return (
    < PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit= { handleSubmit }
      id='cards-popup'
      title='Новое место'
      type='mesto'
      buttonText='Создать' >

      <h2 className="popup-addimage__header"></h2>

      <input id="popup-addimage__place-name" type="text" /*name="placename"*/
        className="popup-addimage__input popup-addimage__input_place" placeholder="Название" ref={ cardName } minLength="2"
        maxLength="30" required></input>
      <span className="popup-addimage__place-name-error"></span>

      <input id="popup-addimage__place-link" type="url"
        className="popup-addimage__input popup-addimage__input_place-link" placeholder="Ссылка на картинку" ref={ cardLink }
              /*name="placeimage"*/ required></input>
      <span className="popup-addimage__place-link-error"></span>

    </PopupWithForm>
  )
}

export default PopupAddCard;