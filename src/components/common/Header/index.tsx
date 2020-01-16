import React from 'react'
import logo from '../../../images/lannister-logo.png'
import './styles.scss'

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <div>
      <nav className="navbar is-info" role="navigation" aria-label="dropdown navigation">
        <a className="navbar-item" href="/">
          <img src={logo} alt="logo" width="112" height="28" />
        </a>
      </nav>
    </div>
  )
}

export default Header
