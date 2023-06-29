import React from 'react';

function ImagePopup (props) {
  return (
    <div className={ `popup popup_zoom_active ${ props.isOpen ? 'popup_opened' : '' }` } id={ props.id }>
      <div className="popup-image__container">
        <button type="button" className="close-button" onClick={ props.onClose } aria-label="Закрыть" />
        <img src={ props.card.link } className="popup-image__open" alt={ props.card.name } />
        <p className="popup-image__title">{ props.card.name }</p>
      </div>
    </div>
  )
}

export default ImagePopup;