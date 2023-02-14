import React from 'react'
import Logo from '../../../assets/Isotipo.svg'
import './index.css'

export const Footer = () => {
  return (
    <div className="container-footer">
      <img src={Logo} />
      <div className="container_user">
        <span>2022 Novopayment Inc. All rights reserved</span>
      </div>
      <img src={Logo} />
    </div>
  )
}
