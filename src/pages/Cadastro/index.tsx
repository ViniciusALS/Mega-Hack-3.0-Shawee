import React from 'react';

import './styles.css';

const Cadastro = () => {

    return (
        <div id="container">
            <header>
                <h1>Criar uma conta</h1>
            </header>
            <form>
                <div className="cabecalho">
                    <h1>Cadastro</h1>
                </div>
                <div className="group-fields">
                    <div className="field">
                        <input type="text" placeholder="Nome" />
                    </div>
                    <div className="field">
                        <input type="email" placeholder="E-mail" />
                    </div>
                    <div className="field">
                        <input type="text" placeholder="Data Nascimento" />
                    </div>
                    <div className="field">
                        <input type="text" placeholder="CPF" />
                    </div>
                    <div className="field">
                        <input type="password" placeholder="Senha" />
                    </div>
                    <div className="field">
                        <input type="password" placeholder="Confirmar senha" />
                    </div>
                    <div className="field-checkbox">
                        <input type="checkbox" name="check"  id="check"/>
                        <label htmlFor="check">Concordo com  <span>Termos e Condições</span></label>
                    </div>
                </div>
                <div className="confirm-botao">
                    <a href="/questions" className="botao">Fazer cadastro</a>
                </div>
            </form>
            <footer>
                <h3>Já tem login? <span>Fazer login</span></h3>
            </footer>
        </div>
    );
}

export default Cadastro;