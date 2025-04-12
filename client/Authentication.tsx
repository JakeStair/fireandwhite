// src/Authentication.tsx
import React, { useState } from 'react';
import { auth } from './firebaseConfig'; // Import auth from firebaseConfig
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Firebase Auth function

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered:', userCredential);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Authentication;
