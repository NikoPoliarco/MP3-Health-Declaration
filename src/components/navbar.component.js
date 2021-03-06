import SpaTwoToneIcon from "@mui/icons-material/SpaTwoTone"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import { Component } from "react"
import { Link } from "react-router-dom"
export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand ms-2' to='/'>
          <SpaTwoToneIcon className='ms-2' />
          Health Declaration
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarCollapse'
          aria-controls='navbarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/create'>
                Add New
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
