import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import Andamento from './pages/andamento'
import Pesquisa from './pages/pesquisa'
import CadastrarPatente from './pages/cadastrarPatente'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/andamento" element={<Andamento />} />
      <Route path="/pesquisa" element={<Pesquisa />} />
      <Route path="/cadastrar-patente" element={<CadastrarPatente />} />
      {/* <Route path="/" element={<App />} >
        <Route index element={<Home />} />
        <Route path=":invoiceId" element={<Invoice />} />
      </Route> */}
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <h1>Erro 404</h1>
            <h3>Página não Encontrada!!</h3>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
)
