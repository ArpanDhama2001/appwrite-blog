import { Container, LogoutBtn } from "../index";
import { useSelector } from "react-redux";

const Header = () => {
  const authStatus = useSelector((state) => state.authSlice.status);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="bg-gray-700 py-3 text-white flex shadow-lg">
      <Container>
        <nav className="flex">
          {/* <Link to="/"> */}
          <div className="mr-4"> LOGO </div>
          {/* </Link> */}
          <ul className="flex ml-auto gap-4">
            {navItems.map((navItem, index) => {
              return navItem.active ? (
                <li key={index} className="hover:cursor-pointer px-2">
                  {navItem.name}
                </li>
              ) : null;
            })}
            {!authStatus ? (
              <li>
                <button>Login</button>
              </li>
            ) : (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
