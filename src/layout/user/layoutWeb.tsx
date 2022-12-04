import Footer from '../../components/user/footer'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/user/header'
import Product from '../../components/user/product'

type Props = {}

const LayoutWeb = (props: Props) => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default LayoutWeb