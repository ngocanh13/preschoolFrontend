import React from 'react'
import Nav from '../components/common/Nav'

const Layout = ({ children }) => {
    return (
        <main className='overflow-hidden'>
            <Nav />
            {children}
        </main>
    )
}

export default Layout