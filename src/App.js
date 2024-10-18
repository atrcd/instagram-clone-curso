import logo from './logo.svg';
import './App.css';
import { db } from './firebase.js'; // Certifique-se de que o caminho está correto
import { useEffect } from 'react';
import React, { useState } from 'react';
import Header from './Header'; // Corrige o caminho para o componente Header


function App()  {

  const [user, setUser] = useState();

    useEffect(() => {
        // Aqui você pode adicionar a lógica que quiser
    }, []);

    return (
        <div className="App">


            <Header setUser={setUser} user={user} /> {/* Uso correto do componente Header */}
            
        </div>
    );
}

export default App;
