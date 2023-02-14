import MenuItems from './common/MenuItems'
import './index.css';

export const Navbar = ({data}) => {
  return (
    <nav>
      <ul className="menus">
        {' '}
        {data.map((menu, index) => {
          const depthLevel = 0
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />
        })}{' '}
      </ul>{' '}
    </nav>
  )
}

