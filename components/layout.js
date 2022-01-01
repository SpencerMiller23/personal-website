import React from 'react'

import { Navbar } from './Navbar'

const layout = ({ children }) => {

    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}

export default layout
