import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  
  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', loginData);
    alert('Connexion réussie!');
  };
  
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    
    if (registerData.password !== registerData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas!');
      return;
    }
    
    if (!registerData.acceptTerms) {
      alert('Veuillez accepter les conditions!');
      return;
    }
    
    console.log('Register data:', registerData);
    alert('Inscription réussie!');
    setIsLogin(true);
  };
  
  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };
  
  const getPasswordStrengthInfo = (password) => {
    const strength = calculatePasswordStrength(password);
    
    if (password.length === 0) {
      return { width: '0%', color: '#ff4757', text: 'Faible' };
    }
    
    switch(strength) {
      case 0:
      case 1:
        return { width: '25%', color: '#ff4757', text: 'Faible' };
      case 2:
        return { width: '50%', color: '#ffa502', text: 'Moyenne' };
      case 3:
        return { width: '75%', color: '#2ed573', text: 'Bonne' };
      case 4:
        return { width: '100%', color: '#2ed573', text: 'Excellente' };
      default:
        return { width: '0%', color: '#ff4757', text: 'Faible' };
    }
  };
  
  const strengthInfo = getPasswordStrengthInfo(registerData.password);

  return (
    <div className="container">
      {}
      <div className="welcome-section">
        <h1>{isLogin ? 'Bienvenue à nouveau!' : 'Rejoignez-nous!'}</h1>
        <p>
          {isLogin 
            ? 'Connectez-vous pour accéder à votre compte et découvrir nos services.'
            : 'Créez votre compte pour profiter de tous nos services exclusifs.'
          }
        </p>
        <div className="features">
          <div className="feature">
            <i className={`fas ${isLogin ? 'fa-shield-alt' : 'fa-gift'}`}></i>
            <h3>{isLogin ? 'Sécurisé' : 'Avantages'}</h3>
            <p>{isLogin ? 'Protection maximale' : 'Fonctionnalités premium'}</p>
          </div>
          <div className="feature">
            <i className={`fas ${isLogin ? 'fa-bolt' : 'fa-chart-line'}`}></i>
            <h3>{isLogin ? 'Rapide' : 'Progresser'}</h3>
            <p>{isLogin ? 'Accès instantané' : 'Suivez vos progrès'}</p>
          </div>
          <div className="feature">
            <i className={`fas ${isLogin ? 'fa-headset' : 'fa-users'}`}></i>
            <h3>{isLogin ? 'Support 24/7' : 'Communauté'}</h3>
            <p>{isLogin ? 'Assistance disponible' : 'Communauté active'}</p>
          </div>
        </div>
      </div>
      
      {}
      <div className="form-container">
        <div className="form-box">
          <h2>{isLogin ? 'Connexion' : 'Créer un compte'}</h2>
          
          {isLogin ? (
            <form onSubmit={handleLoginSubmit}>
              <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  placeholder="Email"
                  required
                />
              </div>
              
              <div className="input-group">
                <i className="fas fa-lock"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Mot de passe"
                  required
                />
                <i 
                  className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} toggle-password`}
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: 'pointer' }}
                ></i>
              </div>
              
              <div className="remember-forgot">
                <label>
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={loginData.rememberMe}
                    onChange={handleLoginChange}
                  />
                  <span>Se souvenir de moi</span>
                </label>
                <a href="#" className="forgot-link">Mot de passe oublié?</a>
              </div>
              
              <button type="submit" className="submit-btn">Se connecter</button>
              
              <div className="divider">
                <span>Ou connectez-vous avec</span>
              </div>
              
              <div className="social-login">
                <button type="button" className="social-btn google">
                  <i className="fab fa-google"></i> Google
                </button>
                <button type="button" className="social-btn facebook">
                  <i className="fab fa-facebook-f"></i> Facebook
                </button>
              </div>
              
              <p className="switch-form">
                Pas de compte?{' '}
                <a href="#" onClick={() => setIsLogin(false)}>S'inscrire</a>
              </p>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit}>
              <div className="input-group">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="username"
                  value={registerData.username}
                  onChange={handleRegisterChange}
                  placeholder="Nom d'utilisateur"
                  required
                />
              </div>
              
              <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  placeholder="Email"
                  required
                />
              </div>
              
              <div className="input-group">
                <i className="fas fa-phone"></i>
                <input
                  type="tel"
                  name="phone"
                  value={registerData.phone}
                  onChange={handleRegisterChange}
                  placeholder="Téléphone"
                />
              </div>
              
              <div className="input-group">
                <i className="fas fa-lock"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  placeholder="Mot de passe"
                  required
                />
                <i 
                  className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} toggle-password`}
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: 'pointer' }}
                ></i>
              </div>
              
              <div className="input-group">
                <i className="fas fa-lock"></i>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={registerData.confirmPassword}
                  onChange={handleRegisterChange}
                  placeholder="Confirmer le mot de passe"
                  required
                />
                <i 
                  className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} toggle-password`}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{ cursor: 'pointer' }}
                ></i>
              </div>
              
              <div className="password-strength">
                <div className="strength-bar">
                  <span 
                    className="strength-level" 
                    style={{
                      width: strengthInfo.width,
                      backgroundColor: strengthInfo.color
                    }}
                  ></span>
                </div>
                <p>Force du mot de passe: {strengthInfo.text}</p>
              </div>
              
              <div className="terms">
                <label>
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={registerData.acceptTerms}
                    onChange={handleRegisterChange}
                    required
                  />
                  <span>J'accepte les <a href="#">conditions</a> et la <a href="#">politique de confidentialité</a></span>
                </label>
              </div>
              
              <button type="submit" className="submit-btn">S'inscrire</button>
              
              <p className="switch-form">
                Déjà un compte?{' '}
                <a href="#" onClick={() => setIsLogin(true)}>Se connecter</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;