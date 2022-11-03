import React from 'react';
import imageGitHub from "../images/github.svg";
import imageAccount from "../images/account.jfif";
import Bell from '../images/bell.svg';
import Plus from '../images/plus.svg';
const NavScrollExample = () => {
  return (
    <>
      {/* // <!-- Navbar --> */}

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {/* <!-- Container wrapper --> */}
        <div class="container-fluid">
          {/* <!-- Toggle button --> */}
          

          {/* <!-- Collapsible wrapper --> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src={imageGitHub}
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            {/* input */}
            <ul className='input' height={20} >
              <li>
              <div className="form-outline">
              <input type="text" id="formControlSm" placeholder='search or jump to ...' class="form-control form-control-sm" />
              <button className='btn-slash' >/</button>
            </div>

              </li>
            </ul>
            {/* <!-- Left links --> */}
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/pulls">Pull requests</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/issues">Issues</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/marketplace">Marketplace</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/explore">Explore</a>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div class="d-flex align-items-center">
            {/* <!-- Icon --> */}
            <a class="text-reset  bell me-3" href="#">
            <img src={Bell} alt="rasm" />
            </a>

            {/* <!-- Notifications --> */}
            <div class="dropdown">
              <a
                class="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                {/* <i class="fas fa-bell"></i> */}
                <span class="badge colorr rounded-pill badge-notification ">+</span>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="#">Some news</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Another news</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>
            {/* <!-- Avatar --> */}
            <div class="dropdown">
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={imageAccount}
                  class="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a class="dropdown-item" href="#">My profile</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Settings</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Logout</a>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </nav>

    </>
  );
};

export default NavScrollExample;
