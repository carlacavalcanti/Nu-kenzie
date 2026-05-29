import { useState } from "react";
import styles from "./FinanceForm.module.scss";

export const FinanceForm = ({ transacoes, setTransacoes }) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");

  function adicionarTransacao(e) {
    e.preventDefault();

    const novaTransacao = {
      descricao,
      valor,
      tipo,
    };
    setTransacoes([...transacoes, novaTransacao]);
    setDescricao("");
    setValor("");
    setTipo("");
  }

  return (
    <>
      <form onSubmit={adicionarTransacao}>
        <div className={styles.container}>
          <label htmlFor="item">Descrição:</label>
          <input
            id="item"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className={styles.input}
          ></input>
          <label htmlFor="valor">Valor (R$):</label>
          <input
            id="valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            className={styles.input}
          ></input>
          <label htmlFor="tipo">Tipo de valor:</label>
          <select
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className={styles.input}
          >
            <option value="">Selecione</option>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
          <button type="submit">Inserir valor</button>
        </div>
      </form>
    </>
  );
};
