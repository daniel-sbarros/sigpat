import React, { useState } from "react"
import Axios from "axios"
import Header from "../components/header";
import Menu from "../components/menu";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";

export default function CadastrarUser(){
    // let [inputs, setInputs] = useState("")

    const handleRegister = (values: any) => {
        Axios.post('http://localhost:3010/newuser', {
            email: values.email,
            password: values.password
        }).then((response)=>{
            console.log(`Erro no submit: ${response}`)
        })
    }

    const validationsRegister = yup.object().shape({
        email: yup
          .string()
          .email("email inválido")
          .required("O email é obrigatório"),
        password: yup
          .string()
          .min(8, "A senha deve ter pelo menos 8 caracteres")
          .required("A senha é obrigatória"),
        confirmation: yup
          .string()
          .oneOf([yup.ref("password"), null], "As senhas são diferentes")
          .required("A confirmação da senha é obrigatória"),
      });

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

                    <Formik
                        initialValues={{}}
                        onSubmit={handleRegister}
                        validationSchema={validationsRegister}
                    >
                        <Form className="register-form w-50">
                            <div className="register-form-group">
                                <Field name="email" className="form-field w-100" placeholder="DIGITE SEU EMAIL" />
                                <ErrorMessage component="span" name="email" className="form-error" />
                            </div>

                            <div className="form-group">
                                <Field name="password" className="form-field w-100" placeholder="CRIE UMA SENHA" />
                                <ErrorMessage component="span" name="password" className="form-error" />
                            </div>

                            <div className="form-group">
                                <Field name="confirmation" className="form-field w-100" placeholder="REPITA A SENHA" />
                                <ErrorMessage component="span" name="confirmation" className="form-error" />
                            </div>

                            <button className="button w-100" type="submit">
                                Cadastrar
                            </button>
                        </Form>
                    </Formik>
                </section>
            </main>
        </div>
    )
}