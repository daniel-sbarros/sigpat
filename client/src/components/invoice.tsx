import { useParams } from "react-router-dom";
import Home from "../pages/home";
import Andamento from "../pages/andamento";
// import { getInvoice } from "../data";

// export default function Invoice() {
//   let params = useParams();
//   return <h2>Invoice: {params.invoiceId}</h2>;
// }

export default function Invoice() {
    let params = useParams();
    let invoice = parseInt(typeof(params.invoiceId) == 'string' ? params.invoiceId : '-1' );
    
    return (
        <>
            {   
                ()=>{ 
                    if(invoice != -1){
                        switch (invoice) {
                            case 1:
                                {console.log(invoice)}
                                return (
                                    <Andamento />
                                )
                        
                            default:
                                return (
                                    <>
                                        <h1>
                                            Página não Encontrada!!!
                                        </h1>
                                    </>
                                )
                        }
                    }
                }   
            }
        </>
    );
}

