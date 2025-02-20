import React  from 'react'
import {Link} from "react-router-dom"

const NavbarClass = ()=> {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand"  to="/"><strong>NewsMonkey</strong></Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page"  to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page"  to="/business">business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page"  to="/entertainment">entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page"  to="/health">health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page"  to="/science">science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page"  to="/technology">technology</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to="/">About</Link>
                </li>
              </ul>  
            </div>
          </div>
        </nav>
      </div>
    )
}

export default NavbarClass