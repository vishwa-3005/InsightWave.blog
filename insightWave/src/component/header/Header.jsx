import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "All Posts",
      slug: "/",
      active: true,
    },
    {
      name: "Add Posts",
      slug: "/",
      active: true,
    },
    {
      name: "SignUp",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/",
      active: true,
    },
  ];

  return (
    <header>
      <Container>
        <nav>
          {/* logo */}
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          {/* navbar items */}
          <ul>
            {navItems.map((item) => {
              item.active ? (
                <li key={item.name}>
                  <button onClick={() => navigate(item.slug)}>
                    {item.name}
                  </button>
                </li>
              ) : null;
            })}
          </ul>
          {/* logout button if authstatus = true */}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
