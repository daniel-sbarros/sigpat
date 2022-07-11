import React from "react";

export default function Header() {
    return (
        <>
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
        </>
    )
}