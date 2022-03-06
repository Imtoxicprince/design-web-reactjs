import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component{
    render(){
        return(
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid px-4">
                 <Link className="navbar-brand" to="/">
                 <img src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-book-back-to-school-itim2101-lineal-color-itim2101.png"/>
                 </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item px-2">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>                  
                    
                    <li className="nav-item px-2">
                    <Link className="nav-link active" to="/buku">Book</Link>
                    </li>

                    <li className="nav-item px-2">
                    <Link className="nav-link active" to="/about">About</Link>
                    </li>
                </ul>

                <ul className="nav justify-content-end">
                <li className="nav-item px-2">
                <button type="button" class="btn btn-primary">Masuk</button>
                </li>
                    <li class="nav-item">
                    <button type="button" class="btn btn-success">Daftar</button>
                    </li>
                </ul>

    </div>
  </div>
</nav>
          
        
        )
    }
}