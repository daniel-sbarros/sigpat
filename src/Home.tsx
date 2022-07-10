// import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';


export default function App() {
//   const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Sistema de Gestão de Patentes - SiGPat</h1>
        <hr />
        <section className="user-log">
            <section>
                <div>
                    <img src="./assets/images/user-photo.png" alt="" />
                </div>
                <div>
                    <div>Olá, NOME_DO_USUÁRIO</div>
                    <div>TIPO_USER</div>
                </div>
            </section>
            <section>
                Acesso em DATA_DO_ÚTLIMO_ACESSO
            </section>
        </section>
      </header>

      <main>
        <aside className="d-flex flex-column flex-shrink-0 p-3 bg-light">
            <div>
                <div>Localizar Patente</div>
                <div>Cadastrar Patente</div>
                <div>Pedidos em Andamento</div>
            </div>

            <div>Sair do SiGPat</div>
        </aside>

        <section>
            <div>Pedidos de Patente</div>
            <div>
                <div>
                    <div>Em Andamento</div>
                    <div>Qnt_Pedidos_em_Andamento</div>
                </div>

                <div>
                    <div>Encerra em 30 dias</div>
                    <div>Qnt_Pedidos_Q_Encerra_em_30_Dias</div>
                </div>

                <div>
                    <div>Encerra em 7 dias</div>
                    <div>Qnt_Pedidos_Q_Encerra_em_7_Dias</div>
                </div>
            </div>
            <div>
            <div>
                <div>Encerra em 7 dias</div>
                    <div>Qnt_Pedidos_Q_Encerra_em_7_Dias</div>
                </div>
            </div>
            {/* <Row className="mx-0"> */}
                <Button variant="primary">Button #1</Button>
                <Button variant="secondary" className="mx-2">Button #2</Button>
                <Button variant="success">Button #3</Button>
            {/* </Row> */}
        </section>
      </main>
    </>
  )
}
