import React from 'react'

const Header = () => {
    return (
        <nav classNama="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1>
                    CRUD - Reacct, Redux, REST API & Axios
                </h1>
            </div>
            <a 
                href="/productos/nuevo"
                className="btn btn-danger nuevo-post d-block d-md-inline-blocck"
                >Agregar Producto &#43;</a>
        </nav>
    )
}

export default Header;