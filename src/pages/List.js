import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from './../Database';

const List = () => {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        console.log('useEffects')
        setClientes(db.findClientes());
    }, [])

    function excluir(id) {
        console.log('calll')
        db.removerCliente(id);
        setClientes(db.findClientes());
    }

    return (
        <div style={{   display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Grupo</th>
                        <th>*</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientes.map((client, index) => (
                            <tr key={client.id}>
                                <td>{client.id}</td>
                                <td>{client.nome}</td>
                                <td>{client && client.idGrupo ? client.idGrupo.id_grupo : ''}</td>
                                <td>
                                    <Link to={`/editar/` + client.id}>Editar</Link>
                                    <a href="#" onClick={() => excluir(client.id)}>Excluir</a>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default List;