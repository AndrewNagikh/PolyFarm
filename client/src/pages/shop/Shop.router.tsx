import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Shop from './Shop'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Shop />}/>
    </Routes>
  )
}

export default Router