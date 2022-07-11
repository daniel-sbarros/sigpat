import React from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import Home from "./home";

export default function Andamento(){
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
                    Pedidos em Andamento
                  </h2>
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