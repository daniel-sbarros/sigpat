import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { faHome, faSearch, faFileClipboard, faHeadset, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
                <div><Button className='btn btn-success' onClick={irHome}><FontAwesomeIcon className='icon' icon={faHome} /> <span>Página Inicial</span></Button></div>
                <div><Button className='btn btn-success' onClick={irSearch}><FontAwesomeIcon className='icon' icon={faSearch} /> <span>Localizar Patente</span></Button></div>
                <div><Button className='btn btn-success' onClick={irCadastrarPatente}><FontAwesomeIcon className='icon' icon={faFileClipboard} /> <span>Cadastrar Patente</span></Button></div>
                <div><Button className='btn btn-success' onClick={irAndamento}><FontAwesomeIcon className='icon' icon={faHeadset} /> <span>Pedidos em Andamento</span></Button></div>
            </div>

            <div><Button  className='btn btn-success'><FontAwesomeIcon icon={faDoorOpen} /> Sair do SiGPat</Button></div>
        </>
    )
}
