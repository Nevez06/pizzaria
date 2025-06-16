import React from "react";
import { FaPizzaSlice, FaClock, FaMapMarkerAlt, FaPhone, FaHeart } from 'react-icons/fa';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1>Nossa História</h1>
                    <p>Desde 2010 levando sabor autêntico até você</p>
                </div>
            </section>

            <section className={styles.aboutContent}>
                <div className={styles.aboutText}>
                    <h2><FaPizzaSlice /> A PizzariaPro</h2>
                    <p>
                        Fundada em 2010 por Antonio e Maria, a PizzariaPro nasceu da paixão por 
                        autêntica pizza italiana com toques brasileiros. Começamos como uma pequena 
                        loja de bairro e hoje somos referência em qualidade e sabor.
                    </p>
                    <p>
                        Nossas pizzas são feitas com ingredientes selecionados e massa artesanal, 
                        preparada diariamente seguindo receitas tradicionais da família.
                    </p>
                </div>

                <div className={styles.missionVision}>
                    <div className={styles.card}>
                        <h3>Missão</h3>
                        <p>
                            Proporcionar momentos especiais através da melhor experiência gastronômica, 
                            unindo tradição e inovação em cada fatia.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3>Visão</h3>
                        <p>
                            Ser reconhecida como a melhor rede de pizzarias artesanais do país, 
                            mantendo sempre a qualidade e o atendimento personalizado.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.valuesSection}>
                <h2>Nossos Valores</h2>
                <div className={styles.valuesGrid}>
                    <div className={styles.valueItem}>
                        <FaHeart className={styles.valueIcon} />
                        <h3>Paixão</h3>
                        <p>Amor pelo que fazemos em cada detalhe</p>
                    </div>
                    <div className={styles.valueItem}>
                        <FaHeart className={styles.valueIcon} />
                        <h3>Qualidade</h3>
                        <p>Ingredientes frescos e selecionados</p>
                    </div>
                    <div className={styles.valueItem}>
                        <FaHeart className={styles.valueIcon} />
                        <h3>Tradição</h3>
                        <p>Receitas que atravessam gerações</p>
                    </div>
                    <div className={styles.valueItem}>
                        <FaHeart className={styles.valueIcon} />
                        <h3>Inovação</h3>
                        <p>Sempre criando novos sabores</p>
                    </div>
                </div>
            </section>

            <section className={styles.contactInfo}>
                <h2>Venha nos visitar</h2>
                <div className={styles.infoCards}>
                    <div className={styles.infoCard}>
                        <FaClock className={styles.infoIcon} />
                        <h3>Horário</h3>
                        <p>Terça a Domingo</p>
                        <p>18:00 - 23:00</p>
                    </div>
                    <div className={styles.infoCard}>
                        <FaMapMarkerAlt className={styles.infoIcon} />
                        <h3>Endereço</h3>
                        <p>Rua das Pizzas, 123</p>
                        <p>Centro - São Paulo/SP</p>
                    </div>
                    <div className={styles.infoCard}>
                        <FaPhone className={styles.infoIcon} />
                        <h3>Contato</h3>
                        <p>(11) 1234-5678</p>
                        <p>contato@pizzariapro.com</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;