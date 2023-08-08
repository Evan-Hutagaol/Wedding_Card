import React from "react";
// import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    // <nav class="navbar navbar-expand-md bg-body-tertiary sticky-top "></nav>
    <nav class="navbar navbar-expand-md sticky-top mynavbar">
      <div class="container">
        <a class="navbar-brand" href="#">
          ELsa
        </a>
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end" 
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              ELsa
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div class="navbar-nav ms-auto">
              <a class="nav-link"  href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                Info
              </a>
              <a class="nav-link" href="#">
                Story
              </a>
              <a class="nav-link" href="#">
                Gallery
              </a>
              <a class="nav-link" href="#">
                RSVP
              </a>
              <a class="nav-link" href="#">
                Gifts
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
