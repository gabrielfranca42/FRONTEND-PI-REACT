import React from 'react';

// Criamos um componente que pode ser usado em qualquer lugar do site
export const Input = ({ type, placeholder, value, onChange, required = true }) => {
  return (
    <div className="input-group">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="pwa-input" // Usando a classe que você já tem no CSS
      />
    </div>
  );
};