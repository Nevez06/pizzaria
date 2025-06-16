import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { FaPizzaSlice, FaShoppingCart, FaUser } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        <FaPizzaSlice className={styles.logoIcon} />
        <span>Pizzaria</span>Pro
      </NavLink>
      
      <ul className={styles.links_list}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? styles.active : ''}
            end
          >
            Home
          </NavLink>          
        </li>
        <li>
          <NavLink 
            to="/menu" 
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Cardápio
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/promotions" 
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Promoções
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/loja" 
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Loja
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Sobre Nós
          </NavLink>          
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? styles.active : ''}
          >
            Contato
          </NavLink>          
        </li>
        <li className={styles.cart_icon}>
          <NavLink to="/cart">
            <FaShoppingCart />
            <span className={styles.cart_count}>0</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/login" 
            className={styles.login_button}
          >
            <FaUser /> Entrar
          </NavLink>          
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;