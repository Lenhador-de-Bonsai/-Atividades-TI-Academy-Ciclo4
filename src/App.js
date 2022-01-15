import './App.css';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

import { Home } from './views/Home';
import { Menu } from './componentes/Menu';
import { CadastrarCliente } from './views/Cliente/Cadastrar';
import { ListarCliente } from './views/Cliente/listar';
import { CadastrarPedidos } from './views/Pedidos/Cadastrar';
import { ListarPedidos } from './views/Pedidos/listar';
import { CadastrarServico } from './views/Servicos/Cadastrar';
import { ListarServico } from './views/Servicos/listar';
import { CadastrarCompra } from './views/Compra/Cadastrar';
import { ListarCompra } from './views/Compra/listar';
import { CadastrarProduto } from './views/Produtos/Cadastrar';
import { ListarProdutos } from './views/Produtos/listar';
import { CadastrarItemPro } from './views/ItemProduto/Cadastrar';
import { ListarItemPro } from './views/ItemProduto/listar';
import { Item } from './views/Servicos/Item';

function App() {
    return (
        <div>
            <Router>
                <Menu/>
                <Switch>
                    <Route exact path ="/" component={Home}/>
                    <Route path ="/cadastrarcliente" component={CadastrarCliente}/>
                    <Route path ="/listar-cliente" component={ListarCliente}/>
                    <Route path ="/cadastrarservico" component={CadastrarServico}/>
                    <Route path ="/listar-servico" component={ListarServico}/>
                    <Route path ="/cadastrarpedido" component={CadastrarPedidos}/>
                    <Route path ="/listar-pedido" component={ListarPedidos}/>
                    <Route path ="/cadastrarcompra" component={CadastrarCompra}/>
                    <Route path ="/listar-compra" component={ListarCompra}/>
                    <Route path ="/cadastrarproduto" component={CadastrarProduto}/>
                    <Route path ="/listar-produto" component={ListarProdutos}/>
                    <Route path ="/cadastrarItemProduto" component={CadastrarItemPro}/>
                    <Route path ="/listar-item-produto" component={ListarItemPro}/>
                    <Route path ="/listar-item" component={Item}/>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
