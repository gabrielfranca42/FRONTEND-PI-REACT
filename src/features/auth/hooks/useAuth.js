import { useState } from 'react';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const login = async (credentials) => {
    setLoading(true);
    try {
      console.log("Enviando para o Node.js:", credentials);
      // Aqui entrará o: await api.post('/login', credentials)
      
      // Simulação de delay de rede
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return { success: true };
    } catch (error) {
      return { success: false, error: "Erro ao entrar" };
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};