import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";

export const ListarPedidos = () => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });
    const getPed = async () => {
        await axios.get(api + "/listapedidos")
            .then((response) => {
                console.log(response.data.pedidos);
                setData(response.data.pedidos);
            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Sem conexão com a API.'
                })
            });
    };

    useEffect(() => {
        getPed();
    }, [])

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Visualizar informações de Pedidos </h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="cadastrarpedidos" className="btn btn-outline-primary btn-sm">Cadastrar Pedido</Link>
                    </div>
                </div>
                <hr className="m-1" />

                {status.type === 'error' ? <Alert className="text-center" color="danger"> {status.message}</Alert> : ""}
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Data</th>
                            <th>ClienteId</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.data}</td>
                                <td>{item.ClienteId}</td>
                                <td className="text-center/">
                                    <Link to={"/listar-pedido/" + item.id} className="btn btn-outline-primary btn-sm">
                                        Consultar
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};