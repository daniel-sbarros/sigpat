
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function App() {
  return (
    <div className='container-lg h-100'>
        <header className='row'>
            <div className='col'>
                <div className="row">
                    <h1>Sistema de Gestão de Patentes - SiGPat</h1>
                    <hr />
                </div>
                <section className='row'>
                    <section className='col'>
                        <div className='row'>
                            <div className="col-3">
                                <img src="./assets/images/user-photo.png" className='img-thumbnail' alt="Foto do usuário NOME_DO_USUARIO" />
                            </div>
                            <div className="col-9">
                                <div>Olá, NOME_DO_USUÁRIO</div>
                                <div>TIPO_USER</div>
                            </div>
                        </div>
                    </section>
                    <section className='col direita'>
                        Acesso em DATA_DO_ÚTLIMO_ACESSO
                    </section>
                </section>{/* FIM DA ROW */}
            </div>
        </header>

        <main className='row'>
            <aside className="col-4">
                <div>
                    <div><Button>Localizar Patente</Button></div>
                    <div><Button>Cadastrar Patente</Button></div>
                    <div><Button>Pedidos em Andamento</Button></div>
                </div>

                <div><Button>Sair do SiGPat</Button></div>
            </aside>

            <section className='col-8 display'>
              <Home />
            </section>
        </main>
    </div>
  )
}