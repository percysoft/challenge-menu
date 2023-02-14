import { useState, useEffect, useRef } from 'react'
import arrow from '../../../../assets/arrow.svg'
import Dropdown from './Dropdown'

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false)
  let ref = useRef()
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [dropdown])

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true)
  }

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false)
  }

  return (
    <div>
      <li
        className="menu-items"
        ref={ref}
        onClick={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {items.submenu ? (
          <>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? 'true' : 'false'}
              onClick={() => setDropdown((prev) => !prev)}
              style={{ display: 'flex', gap: '4px', alignItems: 'center' }}
            >
              {items.title}
              {items.submenu.length > 0 && (
                <img
                  src={arrow}
                  style={{ height: '8px', transform: 'rotate(270deg)' }}
                />
              )}
            </button>{' '}
            <Dropdown
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
            />{' '}
          </>
        ) : (
          <span> {items.title} </span>
        )}{' '}
      </li>
      <div className="bodyleave"></div>
    </div>
  )
}

export default MenuItems
