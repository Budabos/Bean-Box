//component composition - break down application into small reusable functions
const NavBar = (props) => {
  return (    
    <nav className="navbar">
      <ul className="navbar-lst">
        {props.children}
      </ul>
    </nav>
  );
};

export default NavBar;
