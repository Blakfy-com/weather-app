import React from 'react'

function Navbar() {
  return (
    <header className='p-3 text-bg-dark'>
      <div className='container'>

        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>

          {/* LOGO */}

          <div className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'>
            <a href='#' className='nav-link'>B L A K F Y</a>
          </div>

          {/* Header */}

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#1" className="nav-link px-3 text-secondary">Home</a></li>
            <li><a href="#2" className="nav-link px-3 text-secondary">Features</a></li>
            <li><a href="#3" className="nav-link px-3 text-white">Pricing</a></li>
            <li><a href="#4" className="nav-link px-3 text-white">FAQs</a></li>
            <li><a href="#5" className="nav-link px-3 text-white">About</a></li>
          </ul>

          {/* SEARCH */}

          <form className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3' role='search'>
            <input type="search" className="form-control form-control-dark text-bg-dark" />

          </form>

          {/* LOG - SING */}

          <div className='text-end'>
            <button type='button' className='btn btn-primary me-2'>Login</button>
            <button type='button' className='btn btn-primary'>Sign-up</button>
          </div>

        </div>

      </div>

    </header>
  )
}

export default Navbar