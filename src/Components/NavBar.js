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
    //   <>
    //     <div>Logo</div>
    //     <div>BrandNAme</div>
    //     <div>
    //       product
    //       <ul>
    //         <li>Coffee Beans</li>
    //         <li>Coffee Beans</li>
    //       </ul>
    //     </div>
    //     <div>Store</div>
    //     <div>About us</div>
    //     <div>NavBar</div>
    //     <div>Stories</div>
    //     <div>Search</div>
    //     <div>Cart</div>
    //     <div>HumBurger Menu</div>
    //   </>