import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"


import db from './../Database';


const New = (props) => {
    let history = useHistory()
    //VARIAVEIS
    const [cliente, setCliente] = useState({});
    //EFEITOS
    useEffect(() => {
        if (props.match.params.id) {
            setCliente(db.findClient(props.match.params.id));
        } else {
            setCliente({});
        }
    }, []);

    useEffect(() => {
    }, [cliente]);

    //FUNCOES
    const handleSelect = (e) => {
        const { name, value } = e.target;
        setCliente({ ...cliente, idGrupo: { id_grupo: value } })
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setCliente({ ...cliente, [name]: value })
    }

    const handleEndereco = (e) => {
        const { name, value } = e.target;
        setCliente({ ...cliente, endereco: { ...cliente.endereco, [name]: value } })
    }

    const save = () => {
        console.log(cliente);
        db.addCliente(cliente);
        history.push("/")
    }


    return (
        <div style={{ display: 'inline-grid', }}>
            <br /><br />

            <label>Nome</label>
            <input name="nome" value={cliente && cliente.nome ? cliente.nome : ''} onChange={handleInput} />
            <label>Grupo</label>
            <select name="grupo" value={cliente && cliente.idGrupo ? cliente.idGrupo.id_grupo : ''} onChange={handleSelect}>
                <option value="">Selecione o Grupo</option>
                {
                    db.grupos.map((grupo, index) => (
                        <option key={grupo.id_grupo} value={grupo.id_grupo}>{grupo.descricao}</option>
                    ))
                }
            </select>
            <label>Endereço</label>
            <input value={cliente && cliente.endereco ? cliente.endereco.rua : ''} name="rua" onChange={handleEndereco} />
            <label>Cidade</label>
            <input value={cliente && cliente.endereco ? cliente.endereco.cidade : ''} name="cidade" onChange={handleEndereco} />
            <label>numero</label>
            <input value={cliente && cliente.endereco ? cliente.endereco.numero : ''} name="numero" onChange={handleEndereco} />
            <label>Bairro</label>
            <input value={cliente && cliente.endereco ? cliente.endereco.bairro : ''} name="bairro" onChange={handleEndereco} />

            <button onClick={save}>Save</button>
        </div>
    )
}

export default New;