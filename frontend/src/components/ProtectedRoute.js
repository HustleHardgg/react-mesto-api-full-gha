import React from 'react';
import { Redirect , Route } from 'react-router-dom';
// Функция защиты роута главной страницы от неавторизованных пользователей
function ProtectedRoute ({ component: Component, ...props })  {
  return (
    <Route>
      { () => props.isLoggedIn ? < Component { ...props } /> : < Redirect  to='/sign-in' /> }
    </Route>
  )
}

export default ProtectedRoute;