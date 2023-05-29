import {NavLink} from 'react-router-dom'

function Navbar() {
  const navLinkStyle = ({isActive}) => {
    return {
      margin: '10px',
      textDecoration: 'none',
      color: isActive ? 'red' : 'black',
    }
  }

  return (
    <nav>
      <NavLink to='/' style={navLinkStyle}>
        Home
      </NavLink>
      <NavLink to='about' style={navLinkStyle}>
        About
      </NavLink>
      <NavLink to='order' style={navLinkStyle}>
        Order
      </NavLink>
      <NavLink to='product' style={navLinkStyle}>
        Product
      </NavLink>
    </nav>
  )
}
export default Navbar
