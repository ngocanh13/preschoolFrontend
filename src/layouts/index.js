import React from 'react'
import Nav from '../components/common/Nav'

const Layout = ({ children }) => {
    return (
        <main className='overflow-hidden'>
            <div className="d-flex">
                <Nav />
                <div className="flex-grow-1 h-100">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Layout