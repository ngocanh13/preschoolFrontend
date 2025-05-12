import React from 'react'
import Nav from '../components/common/Nav'

const Layout = ({ children }) => {
    const { pathname } = window.location;

    return (
        <main className='overflow-hidden'>
            <div className="d-flex">
                {pathname !== '/login' && <Nav />}
                <div className="flex-grow-1 h-100">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Layout