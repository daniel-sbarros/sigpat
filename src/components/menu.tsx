import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Menu() {
    let navigate = useNavigate();
    
    const irHome = (e: any) => {
        navigate("/")
    }
    const irAndamento = (e: any) => {
        navigate("/andamento")
    }
    const irSearch = (e: any) => {
        navigate("/pesquisa")
    }
    const irCadastrarPatente = (e: any) => {
        navigate("/cadastrar-patente")
    }

    return (
        <>
            <div>
                <div><Button className='btn btn-success' onClick={irHome}>Página Inicial</Button></div>
                <div><Button className='btn btn-success' onClick={irSearch}>Localizar Patente</Button></div>
                <div><Button className='btn btn-success' onClick={irCadastrarPatente}>Cadastrar Patente</Button></div>
                <div><Button className='btn btn-success' onClick={irAndamento}>Pedidos em Andamento</Button></div>
            </div>

            <div><Button  className='btn btn-success'>Sair do SiGPat</Button></div>
        </>
    )
}
