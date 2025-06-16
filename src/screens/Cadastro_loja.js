import React, { useState, useEffect } from "react";
import { FaStore, FaMapMarkerAlt, FaCity, FaSearch, FaCheck } from 'react-icons/fa';
import styles from './Cadastro_loja.module.css';

function CadastroLoja() {
  const [formData, setFormData] = useState({
    nome: '',
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    cidade: '',
    uf: '',
    telefone: ''
  });
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCepChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 5) {
      value = value.slice(0, 5) + '-' + value.slice(5, 8);
    }
    handleChange({ target: { name: 'cep', value } });
  };

  useEffect(() => {
    const cepNumeros = formData.cep.replace('-', '');
    if (cepNumeros.length === 8) {
      setLoading(true);
      fetch(`https://viacep.com.br/ws/${cepNumeros}/json/`)
        .then(response => response.json())
        .then(data => {
          if (data.erro) {
            setErro("CEP não encontrado");
          } else {
            setFormData(prev => ({
              ...prev,
              endereco: data.logradouro || '',
              cidade: data.localidade || '',
              uf: data.uf || '',
              complemento: data.complemento || ''
            }));
            setErro('');
          }
        })
        .catch(() => setErro("Erro ao buscar CEP"))
        .finally(() => setLoading(false));
    }
  }, [formData.cep]);

  const validarFormulario = () => {
    if (!formData.nome || !formData.cep || !formData.endereco || !formData.cidade || !formData.uf) {
      setErro('Campos obrigatórios não preenchidos');
      return false;
    }
    if (formData.uf.length !== 2) {
      setErro('UF deve ter 2 caracteres');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    setLoading(true);
    // Simulando envio para API
    setTimeout(() => {
      console.log('Dados enviados:', formData);
      setSuccess(true);
      setLoading(false);
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <FaStore className={styles.icon} />
          <h2>Cadastrar Nova Loja</h2>
          <p>Preencha os dados da sua unidade</p>
        </div>

        {erro && <div className={styles.error}>{erro}</div>}
        {success && <div className={styles.success}>Loja cadastrada com sucesso!</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="nome">
              <FaStore /> Nome da Loja*
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Ex: PizzariaPro Centro"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="cep">
              <FaSearch /> CEP*
            </label>
            <input
              type="text"
              id="cep"
              name="cep"
              value={formData.cep}
              onChange={handleCepChange}
              maxLength={9}
              placeholder="00000-000"
              required
            />
            {loading && <span className={styles.loading}>Buscando...</span>}
          </div>

          <div className={styles.grid}>
            <div className={styles.inputGroup}>
              <label htmlFor="endereco">
                <FaMapMarkerAlt /> Endereço*
              </label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="numero">Número*</label>
              <input
                type="text"
                id="numero"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
                placeholder="Nº"
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="complemento">Complemento</label>
            <input
              type="text"
              id="complemento"
              name="complemento"
              value={formData.complemento}
              onChange={handleChange}
              placeholder="Sala, apto, etc"
            />
          </div>

          <div className={styles.grid}>
            <div className={styles.inputGroup}>
              <label htmlFor="cidade">
                <FaCity /> Cidade*
              </label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="uf">UF*</label>
              <input
                type="text"
                id="uf"
                name="uf"
                value={formData.uf}
                onChange={handleChange}
                maxLength={2}
                style={{ textTransform: 'uppercase' }}
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
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

          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? 'Cadastrando...' : 'Cadastrar Loja'}
            {!loading && <FaCheck style={{ marginLeft: '8px' }} />}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CadastroLoja;