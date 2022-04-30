import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Erro from './pages/Erro';
import Produto from './pages/Produto'

import Header from './components/Header';

const Rota = () => {
   return(
      <BrowserRouter>
         <Header/>  
         <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Contato" element={<Contato/>}/>
            <Route exact path="/Sobre" element={<Sobre/>}/>
            <Route path="/Produto/:id" element={<Produto/>}/>
            <Route path="*" element={<Erro/>}/>
         </Routes>
      </BrowserRouter>
   )
}

export default Rota;