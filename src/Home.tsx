// import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';


export default function Home() {
//   const [count, setCount] = useState(0)

  return (
    <>
        <div className='row'>
            <div className='col'>
                Pedidos de Patente
            </div>
        </div>
        <div className='row'>
            <Button className='col'>
                <div>Em Andamento</div>
                <div>Qnt_Pedidos_em_Andamento</div>
            </Button>

            <Button className='col'>
                <div>Encerra em 30 dias</div>
                <div>Qnt_Pedidos_Q_Encerra_em_30_Dias</div>
            </Button>

            <Button className='col'>
                <div>Encerra em 7 dias</div>
                <div>Qnt_Pedidos_Q_Encerra_em_7_Dias</div>
            </Button>
        </div>
        <div className='row'>
            <Button className='col'>
                Patente 124 encerramento de prazo 30 dias encaminhar email ao(s) Pesquisador(es)
            </Button>
            <Button className='col'>
                Patente 123 encerramento de prazo 7 dias encaminhar email ao(s) Pesquisador(es)
            </Button>
        </div>
    </>
  )
}
