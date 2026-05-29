import styles from "./FinanceCard.module.scss";
export const FinanceCard = ({ transacoes }) => {
  return (
    <>
      {transacoes.map((item, index) => (
        <div
          key={index}
          className={`${styles.card} ${item.tipo === "Entrada" ? styles.entrada : styles.saida}`}
        >
          <h1>{item.descricao}</h1>
          <p>{item.valor}</p>
          <span>{item.tipo}</span>
          <button className="excluir">Excluir</button>
        </div>
      ))}
    </>
  );
};
