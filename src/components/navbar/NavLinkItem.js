const NavLinkItem = ({ products, links }) => {
  return (
    <a href="#news">
      <div class="dropdown">
        <button class="dropbtn">{products}</button>
        <div class="dropdown-content">{links}</div>
      </div>
    </a>
  );
};

export default NavLinkItem;
