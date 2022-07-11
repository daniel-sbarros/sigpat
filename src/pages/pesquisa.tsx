import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Header from "../components/header";
import Menu from "../components/menu";
import Home from "./home";

export default function Pesquisa(){
    const [value, setValues] = useState('')

    function changeValue(evt: any){
        setValues(evt.target.value)
    }

    function pesquisar(){
        if(value.length>0){
            alert(`Pesquisou por '${value}'`)
        }
        else{
            alert(`Digite em uma das caixas de texto.`)
        }
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
                  <h2>
                    Pesquisar Pedido de Patente
                  </h2>
                  
                  <div className="mb-3">
                    <input type="text" onChange={changeValue} className="form-control" id="pat_titulo" placeholder="DIGITE O TÍTULO DA PATENTE" />
                    OU
                    <input type="text" onChange={changeValue} className="form-control" id="pat_pesq" placeholder="DIGITE O NOME DO PESQUISADOR" />
                  </div>

                  <div>
                    <Button onClick={pesquisar} id="btn_pesquisar" className="w-100 btn-success">Pesquisar</Button>
                  </div>
                    

                  <table className="resultados table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Título</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>120</td>
                            <td>Sem beira, sem sombra.</td>
                        </tr>
                        <tr>
                            <td>121</td>
                            <td>Título 121.</td>
                        </tr>
                        <tr>
                            <td>122</td>
                            <td>Título 122.</td>
                        </tr>
                        <tr>
                            <td>123</td>
                            <td>Telas do Gestão de Patentes.</td>
                        </tr>
                        <tr>
                            <td>124</td>
                            <td>Título vencendo em 30 dias.</td>
                        </tr>
                    </tbody>
                  </table>
                </section>
            </main>
        </div>
    )
}