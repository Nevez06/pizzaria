import React from 'react';
import styles from './Footers.module.css';
import { 
  FaPizzaSlice, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaClock,
  FaInstagram,
  FaWhatsapp,
  FaFacebook
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <FaPizzaSlice className={styles.logoIcon} />
            <h2>PizzariaPro</h2>
          </div>
          <p className={styles.slogan}>Sua felicidade em cada fatia</p>
        </div>

        <div className={styles.contactSection}>
          <h3 className={styles.sectionTitle}>Contato</h3>
          <div className={styles.contactItems}>
            <div className={styles.contactItem}>
              <FaPhoneAlt className={styles.contactIcon} />
              <span>(11) 1234-5678</span>
            </div>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <span>Rua das Pizzas, 123 - São Paulo/SP</span>
            </div>
            <div className={styles.contactItem}>
              <FaClock className={styles.contactIcon} />
              <span>Ter-Dom: 18h às 23h</span>
            </div>
          </div>
        </div>

        <div className={styles.socialSection}>
          <h3 className={styles.sectionTitle}>Redes Sociais</h3>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Instagram" className={styles.socialLink}>
              <FaInstagram />
            </a>
            <a href="#" aria-label="WhatsApp" className={styles.socialLink}>
              <FaWhatsapp />
            </a>
            <a href="#" aria-label="Facebook" className={styles.socialLink}>
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        © {new Date().getFullYear()} PizzariaPro - Todos os direitos reservados
      </div>
    </footer>
  );
};

export default Footer;