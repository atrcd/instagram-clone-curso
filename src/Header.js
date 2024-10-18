import { useEffect, useState } from 'react';

function Header({ user }) { // Recebe o user como prop
  
    useEffect(() => {

    }, [])
  
  
    function abrirModalCriarConta(e){
        e.preventDefault();
        

        let modal = document.querySelector('.ModalCriarConta'); 

        modal.style.display = "block";
        
    }

  
  
  
    return (
    <div className="header">

        <div className="ModalCriarConta">
            <div className="formCriarConta">
                <div className="close-modal-criar">X</div>
                <h2>Criar Conta</h2>
                <form>
                    <input type="text" placeholder="Seu email..."/>
                    <input type="text" placeholder="Seu username..."/>
                    <input type="password" placeholder="Sua senha..."/>
                    <input type="submit" value="Criar Conta!"/>
                </form>
            </div>
        </div>




      <div className="header-father">
        <div className="header_logo">
          <a href="#">
            <img 
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
              alt="Instagram logo" 
            />
          </a>
        </div>
        {user ? (
          <div className="header_logadoInfo">
            <span>
              Olá, <b>{user}</b>
            </span>
            <a href="#">Postar!</a>
          </div>
        ) : (
          <div className="header_loginForm">
            <form>
              <input type="text" placeholder="Login..." />
              <input type="password" placeholder="Senha..." />
              <input type="submit" name="acao" value="Logar!" />
              <a onClick={(e)=>abrirModalCriarConta} className="btn_criarConta" href="#">
                Criar Conta!
              </a>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
