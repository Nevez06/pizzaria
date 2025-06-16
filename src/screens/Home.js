import React, { useState } from 'react';
import { FaPizzaSlice, FaStar, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { GiFullPizza, GiChiliPepper, } from 'react-icons/gi';
import { BiTimeFive } from 'react-icons/bi';
import styles from './Home.module.css';

// Dados das pizzas (pode ser substituído por uma API real)
const pizzas = [
  {
    id: 1,
    name: "Margherita",
    description: "Molho de tomate, mussarela, manjericão fresco",
    price: 39.90,
    image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    spicy: false,
    promo: true
  },
  {
    id: 2,
    name: "Calabresa",
    description: "Molho de tomate, mussarela, calabresa, cebola",
    price: 44.90,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    spicy: false,
    promo: false
  },
  {
    id: 3,
    name: "Pepperoni",
    description: "Molho de tomate, mussarela, pepperoni, pimentão",
    price: 49.90,
    image: "https://images.unsplash.com/photo-1620374645498-af6bd681a0bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    spicy: true,
    promo: true
  },
  {
    id: 4,
    name: "Quatro Queijos",
    description: "Molho de tomate, mussarela, provolone, parmesão, gorgonzola",
    price: 54.90,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    spicy: false,
    promo: false
  }
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPizzas = pizzas.filter(pizza =>
    pizza.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pizza.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>As melhores pizzas <FaPizzaSlice /></h1>
          <p>Feitas com ingredientes frescos e amor desde 2010</p>
          <div className={styles.searchBar}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Busque por pizza, ingredientes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className={styles.highlights}>
        <div className={styles.highlightCard}>
          <GiFullPizza className={styles.highlightIcon} />
          <h3>+50 Sabores</h3>
          <p>Variedade para todos os gostos</p>
        </div>
        <div className={styles.highlightCard}>
          <BiTimeFive className={styles.highlightIcon} />
          <h3>30 Minutos</h3>
          <p>Entrega rápida garantida</p>
        </div>
        <div className={styles.highlightCard}>
          <FaStar className={styles.highlightIcon} />
          <h3>Artesanal</h3>
          <p>Massa feita diariamente</p>
        </div>
      </section>

      {/* Cardápio */}
      <section className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>Nossas Pizzas <FaPizzaSlice /></h2>
        <p className={styles.sectionSubtitle}>Escolha sua favorita ou monte a sua!</p>

        <div className={styles.pizzaGrid}>
          {filteredPizzas.map(pizza => (
            <div key={pizza.id} className={styles.pizzaCard}>
              {pizza.promo && <div className={styles.promoBadge}>Promoção</div>}
              {pizza.spicy && <div className={styles.spicyBadge}><GiChiliPepper /></div>}
              <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
              <div className={styles.pizzaInfo}>
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
                <div className={styles.pizzaFooter}>
                  <span className={styles.price}>R$ {pizza.price.toFixed(2)}</span>
                  <button className={styles.addButton}>
                    <FaShoppingCart /> Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h2>Nossa História</h2>
          <p>
            Fundada em 2010, a PizzariaPro nasceu da paixão por pizza autêntica. 
            Usamos ingredientes selecionados e técnicas tradicionais para levar até 
            você a verdadeira experiência da pizza italiana com um toque brasileiro.
          </p>
          <button className={styles.aboutButton}>Conheça mais</button>
        </div>
        <div className={styles.aboutImage}></div>
      </section>

     
    </div>
  );
};

export default Home;