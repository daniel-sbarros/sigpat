import Menu from './components/menu';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';

export default function App() {

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
              {/* <Home /> */}
              {/* <Outlet /> */}
              <Home />
            </section>
        </main>
    </div>
  )
}