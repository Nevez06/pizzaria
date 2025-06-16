import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) return;
  }

  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(user, { displayName: data.displayName });
      return user;
    } catch (error) {
      let systemErrorMessage = "Ocorreu um erro - Tente Novamente";

      if (error.message.includes("Password ")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado";
      }

      setError(systemErrorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => () => setCancelled(true), []);

  return { auth, createUser, error, loading };
};
