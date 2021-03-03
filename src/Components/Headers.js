import { NavLink, withRouter } from 'react-router-dom'
import React, { Component } from 'react'

export default withRouter(class Header extends Component {
    render() {
        return (
            <nav className='navContainer'>
                {
                    this.props.location.pathname !== '/' && <NavLink className='nav-link' exact activeClassName='link' to="/">Home</NavLink>
                }

                {
                    this.props.location.pathname !== '/signup' && <NavLink className='nav-link' exact activeClassName='link' to="/signup">SignUp</NavLink>
                }

                {
                    this.props.location.pathname !== '/login' && <NavLink className='nav-link' exact activeClassName='link' to='/login'>LogIn</NavLink>
                }

                {
                    this.props.location.pathname !== '/todos' && <NavLink className='nav-link' exact activeClassName='link' to='/todos'>ToDos</NavLink>
                }
                <button>Sign Out</button>
            </nav>

        )
    }
})
