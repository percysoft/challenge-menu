import React from 'react'
import Logo from '../../../assets/TuPruTec.svg'
import arrow from '../../../assets/arrow_down.svg'
import './index.css';

export const Header = () => {
  return (
    <div className="container-header">
      <img src={Logo} />
      <div className="container_user">
        <h2>User</h2>
        <img src={arrow} />
      </div>
    </div>
  )
}
