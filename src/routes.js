import React from 'react';

// Components
import LoginPage from './components/Page/Login/LoginPage'
import HomePage from './components/Page/Home/HomePage'
import NotFound from './components/Page/Error/404'

const routes = [
    {
        path: '/',
        exact: true,
        component: () => <LoginPage/>
    },
    {
        path: '/home',
        exact: true,
        component: () => <HomePage/>
    },
    {
        path: '',
        exact: false,
        component: () => <NotFound/>
    }
]

export default routes