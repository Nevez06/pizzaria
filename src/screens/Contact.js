import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulação de envio do formulário
    setTimeout(() => {
      console.log('Dados do formulário:', formData);
      setLoading(false);
      setSuccess(true);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
      });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className={styles.contatoContainer}>
      <div className={styles.heroSection}>
        <h1>Fale Conosco</h1>
        <p>Estamos aqui para responder suas dúvidas e receber seu feedback</p>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.formSection}>
          <h2><FaPaperPlane /> Envie sua mensagem</h2>
          
          {success && (
            <div className={styles.successMessage}>
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="nome">Nome Completo*</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">E-mail*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="mensagem">Mensagem*</label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>

        <div className={styles.infoSection}>
          <h2><FaMapMarkerAlt /> Nossos Contatos</h2>
          
          <div className={styles.infoCard}>
            <div className={styles.infoItem}>
              <FaPhone className={styles.infoIcon} />
              <div>
                <h3>Telefone</h3>
                <p>(11) 1234-5678</p>
                <a 
                  href="https://wa.me/551112345678" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.whatsappLink}
                >
                  <FaWhatsapp /> Conversar pelo WhatsApp
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.infoIcon} />
              <div>
                <h3>Endereço</h3>
                <p>Rua das Pizzas, 123</p>
                <p>Centro - São Paulo/SP</p>
                <p>CEP: 01000-000</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaClock className={styles.infoIcon} />
              <div>
                <h3>Horário de Funcionamento</h3>
                <p>Terça a Domingo</p>
                <p>18:00 - 23:00</p>
              </div>
            </div>
          </div>

          <div className={styles.mapContainer}>
            <iframe
              title="Localização da PizzariaPro"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0754267452926!2d-46.65342658440793!3d-23.565734367638952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1630000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;