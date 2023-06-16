import cart from "../img/cart.jpg"

export const NavBar = () => (
  <header>
    <nav>
        <h1>My E-Commerce</h1>
      <ul>
        <li>
          <a href="*">Home</a>
          <a href="*">MisProductos</a>
          <a href="*">Descuentos</a>
        </li>
      </ul>
    </nav>
    <img src={cart} alt="cartLogo"/> 0
  </header>
);
