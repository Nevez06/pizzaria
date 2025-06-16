import { useState, useEffect } from 'react';
import { FaPizzaSlice, FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';
import { useAuthentication } from '../hooks/useAuthentication';

const Register = () => {
    const [displayName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { createUser, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        // Validações adicionais
        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais!");
            return;
        }

        if (password.length < 6) {
            setError("A senha deve ter pelo menos 6 caracteres");
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            setError("Por favor, insira um e-mail válido");
            return;
        }

        const user = {
            displayName,
            email,
            password
        };

        await createUser(user);
    };

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError]);

    return (
        <div className={styles.registerContainer}>
            <div className={styles.registerCard}>
                <div className={styles.logo}>
                    <FaPizzaSlice />
                    <h2>Cadastre-se na PizzariaPro</h2>
                </div>
                
                <p>Crie sua conta e ganhe 10% de desconto na primeira compra!</p>
                
                {error && <div className={styles.errorMessage}>{error}</div>}
                
                <form onSubmit={handleSubmit} className={styles.registerForm}>
                    <div className={styles.inputGroup}>
                        <FaUser className={styles.inputIcon} />
                        <input
                            type="text"
                            value={displayName}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Seu nome completo"
                            required
                        />
                    </div>
                    
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
                            placeholder="Crie uma senha "
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
                    
                    <div className={styles.inputGroup}>
                        <FaLock className={styles.inputIcon} />
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirme sua senha"
                            required
                        />
                        <button 
                            type="button" 
                            className={styles.togglePassword}
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    
                    <button 
                        type="submit" 
                        className={styles.btnRegister}
                        disabled={loading}
                    >
                        {loading ? 'Criando conta...' : 'Cadastrar'}
                    </button>
                    
                    <div className={styles.loginLink}>
                        Já tem uma conta? <Link to="/login">Faça login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;