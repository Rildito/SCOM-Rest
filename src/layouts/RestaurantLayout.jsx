import React from 'react'
import { Outlet } from 'react-router-dom';
import { Header } from '../components';
export const RestaurantLayout = () => {
    return (
        <div className='bg-light'>
            <Header />
            <main className='container px-0'>
                <div className='bg-white d-flex justify-content-center align-items-center flex-column pb-5 shadow'>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
