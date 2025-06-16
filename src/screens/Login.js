import React, { useState } from 'react';
import { FaPizzaSlice, FaLock, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Validações básicas
        if (!email.includes('@') || !email.includes('.')) {
            setError('Por favor, insira um e-mail válido');
            setIsLoading(false);
            return;
        }

        if (password.length < 6) {
            setError('A senha deve ter pelo menos 6 caracteres');
            setIsLoading(false);
            return;
        }

        // Simulação de autenticação (substitua pela sua API real)
        try {
            // await authService.login(email, password);
            console.log('Login realizado com sucesso!');
            // Redirecionamento seria feito aqui
        } catch (err) {
            setError('E-mail ou senha incorretos');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <div className={styles.logo}>
                    <FaPizzaSlice />
                    <h2>PizzariaPro</h2>
                </div>
                
                <h3>Faça login para acessar sua conta</h3>
                
                {error && <div className={styles.errorMessage}>{error}</div>}
                
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <div className={styles.inputGroup}>
                        <FaEnvelope className={styles.inputIcon} />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Seu e-mail"
                            required
                        />
                    </div>
                    
                    <div className={styles.inputGroup}>
                        <FaLock className={styles.inputIcon} />
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Sua senha"
                            required
                            minLength="6"
                        />
                        <button 
                            type="button" 
                            className={styles.togglePassword}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    
                    <button 
                        type="submit" 
                        className={styles.btnLogin}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Carregando...' : 'Entrar'}
                    </button>
                    
                    <div className={styles.links}>
                        <Link to="/forgot-password">Esqueceu a senha?</Link>
                        <span>|</span>
                        <Link to="/register">Criar conta</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;