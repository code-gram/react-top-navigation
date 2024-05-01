import React from "react";

const AssociateNavigation = () => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-light"
      style={{ "background-color": "#e3f2fd" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          YOTA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                My Trainings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                My Test
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Client Assignments
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Reports
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Batch Wise
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ranks
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Top Performer
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Update Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Change Password
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-primary" type="submit">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AssociateNavigation;
