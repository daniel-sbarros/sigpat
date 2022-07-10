import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <BrowserRouter basename="/">
        <Routes>
          <Route element={<Home />} path="/" />
          {/* <Route element={<Error404 />} path="*" /> */}
        </Routes>
      </BrowserRouter>
  )
}