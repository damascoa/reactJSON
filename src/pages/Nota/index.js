import { useEffect, useState } from "react";

const styles = {
    flex: {
        display: "flex"
    },
    grid: {
        display: "inline-grid",
        padding: "5px"
    }
}

function Nota() {
    const [nota, setNota] = useState({ itens: [] });
    const [notaItem, setNotaItem] = useState({});


    const handleInputNota = (e) => {
        const { name, value } = e.target;
        setNota({ ...nota, [name]: value });
    }

    const handleInputItem = (e) => {
        const { name, value } = e.target;
        setNotaItem({ ...notaItem, [name]: value });
    }

    const add = () => {
        const novositens = [...nota.itens];
        notaItem.total = notaItem.preco * notaItem.quantidade;
        novositens.push(notaItem);
        setNota({ ...nota, itens: novositens });
        setNotaItem({})
    }

    useEffect(() => {
        console.log(nota);
    }, [nota])

    return (
        <>
            <div >
                <h1>Header</h1>
                <div style={styles.flex}>
                    <div style={styles.grid}>
                        <label>Cliente</label>
                        <input name="cliente" onChange={handleInputNota} />
                    </div>
                    <div style={styles.grid}>
                        <label>Emissão</label>
                        <input name="emissao" onChange={handleInputNota} />
                    </div>
                </div>
                <h1>Itens</h1>
                <div style={styles.flex}>
                    <div style={styles.grid}>
                        <label>Produto</label>
                        <input name="produto" value={notaItem && notaItem.produto ? notaItem.produto : ''} onChange={handleInputItem} />
                    </div>
                    <div style={styles.grid}>
                        <label>Quantidade</label>
                        <input name="quantidade" value={notaItem && notaItem.quantidade ? notaItem.quantidade : ''} onChange={handleInputItem} />
                    </div>
                    <div style={styles.grid}>
                        <label>Preço</label>
                        <input name="preco" value={notaItem && notaItem.preco ? notaItem.preco : ''} onChange={handleInputItem} />
                    </div>
                    <div style={styles.grid}>
                        <button onClick={add}>+</button>
                    </div>
                </div>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <td>Produto</td>
                            <td>Quantidade</td>
                            <td>Preço</td>
                            <td>Total</td>
                            <td>*</td>
                        </tr>
                    </thead>
                    <tbody>
                        {nota && nota.itens ?
                            nota.itens.map((item) => (
                                <tr>
                                    <td>{item.produto}</td>
                                    <td>{item.quantidade}</td>
                                    <td>{item.preco}</td>
                                    <td>{item.total}</td>
                                    <td>
                                        <button>X</button>
                                    </td>
                                </tr>
                            ))
                            :
                            <tr></tr>
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Nota;
