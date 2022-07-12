// https://www.youtube.com/watch?v=F_mXVI8Dalg 38.01 register
import React from 'react'
import Header from '../components/header'
import Axios from "axios"

export default function Login(){
    const handleClickLogin = (values: any) => {
        Axios.post('https://localhost:3001/login', {
            email: values.email,
            password: values.password
        }).then((response)=>{
            console.log(response)
        })
    }

    return (
        <div className='container-lg h-100'>
            <header className='row login-header'>
            <div className='col'>
                <div className="row">
                    <h1>Sistema de Gestão de Patentes - SiGPat</h1>
                </div>
            </div>
            </header>
    
            <main className='row'>
                <section className='col'>
                    <h1 className='login-titulo'>Login</h1>
                    <form className='w-25 login-form'>
                        <div className="form-outline mb-4">
                            <input type="email" id="loginiEmail" className="form-control" placeholder='DIGITE SEU USUÁRIO' />
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="loginPass" className="form-control" placeholder='DIGITE SUA SENHA' />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4 w-100">Entrar</button>
                    </form>
                </section>
            </main>
        </div>
      )
}