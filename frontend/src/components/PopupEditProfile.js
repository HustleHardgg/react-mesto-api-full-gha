import React, { useContext, useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function PopupEditProfile(props) {
  const userItem = useContext(CurrentUserContext);
  // Стейты для пользователя
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  // Эффект заполнения корректными данными при открытии формы
  useEffect( () => { setName(userItem.name); setDescription(userItem.about) }, [ props.isOpen ]);
  function handleSubmit (event) {
    event.preventDefault();
    props.onUpdateUser( { name: name, about: description } );
  }
  function handleName (event) { setName(event.target.value) }
  function handleDescription (event) { setDescription(event.target.value) }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit = { handleSubmit }
      id='profile-popup'
      title='Редактировать профиль'
      type='profile' >
      
        <input name="textName" id="popup__name" type="text" className="popup__input popup__input_name_title"
          placeholder="Имя" value={ name || '' } onChange={ handleName } minLength="2" maxLength="40" required></input>
          <span className="popup__name-error"></span>

          <input name="textAbout" type="text" id="popup__about"
            className="popup__input popup__input_name_subtitle" placeholder="О себе" value={ description || '' } onChange={ handleDescription } minLength="2"
            maxLength="200" required></input>
            <span className="popup__about-error"></span>
          
        </PopupWithForm>
        )
}

        export default PopupEditProfile;