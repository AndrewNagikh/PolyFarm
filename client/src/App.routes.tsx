import { Spin } from "antd";
import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import App from "./App";
import Cart from "./pages/cart/Cart";

const ShopRouter = lazy(() => import('./pages/shop/Shop.router'))


const AppRoutes = () => {
  return (
    <Suspense fallback={<Spin />}>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/shop" element={<ShopRouter />}/>
            <Route path="/cart" element={< Cart />} />
        </Routes>
    </Suspense>
  )
}

export default AppRoutes