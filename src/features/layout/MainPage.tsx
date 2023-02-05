import React from 'react'
import { Outlet } from 'react-router-dom'
import { User } from '../../interface'
import MenuMain from './MenuMain'


export default function MainPage() {
  return (
    <div className='mainPage'>
      <div className='menuMain'>
        <MenuMain />
      </div>
      <div className='contentMain'>
        <Outlet />
      </div>
    </div>
  )
}
