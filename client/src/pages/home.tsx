// import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';


export default function Home() {
  let navigate = useNavigate();

  const irAndamento = (e: any) => {
    navigate("/andamento")
  }

  return (
    <>
        <div className='row'>
            <h2 className='col'>
                Pedidos de Patente
            </h2>
        </div>
        <div className='row'>
            <Button className='col btn btn-info' onClick={irAndamento}>
                <div>Em Andamento</div>
                <div>Qnt_Pedidos_em_Andamento</div>
            </Button>

            <Button className='col btn btn-warning'>
                <div>Encerra em 30 dias</div>
                <div>Qnt_Pedidos_Q_Encerra_em_30_Dias</div>
            </Button>

            <Button className='col btn btn-danger'>
                <div>Encerra em 7 dias</div>
                <div>Qnt_Pedidos_Q_Encerra_em_7_Dias</div>
            </Button>
        </div>
        <div className='row'>
            <Button className='col btn btn-warning'>
                Patente 124 encerramento de prazo 30 dias encaminhar email ao(s) Pesquisador(es)
            </Button>
            <Button className='col btn btn-danger'>
                Patente 123 encerramento de prazo 7 dias encaminhar email ao(s) Pesquisador(es)
            </Button>
        </div>
    </>
  )
}
