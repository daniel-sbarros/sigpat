import React, { useState } from "react"
import Axios from "axios"
import Header from "../components/header";
import Menu from "../components/menu";

export default function CadastrarUser(){
    // let [inputs, setInputs] = useState("")

    const handleClickRegister = (values: any) => {
        Axios.post('https://localhost:3001/newuser', {
            user_email: values.email,
            user_password: values.password
        }).then((response)=>{
            console.log(response)
        })
    }

    return (
        <div className='container-lg h-100'>
            <header className='row'>
                <Header />
            </header>
    
            <main className='row'>
                <aside className="col-4">
                    <Menu />
                </aside>
    
                <section className='col-8 display'>
                    <h2>Cadastrar Usuário</h2>

                    {/* <Formik 
                        initialValues={{}}
                        onSubmit={handleClickRegister}
                    /> */}

                    <form className='w-50 login-form' onSubmit={handleClickRegister}>
                        <div className="form-outline mb-4">
                            <input type="email" id="loginEmail" name="email" className="form-control" placeholder='DIGITE O EMAIL' />
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="loginPass" name="password" className="form-control" placeholder='CRIAR UMA SENHA' />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4 w-100">Cadastrar</button>
                    </form>
                </section>
            </main>
        </div>
    )
}