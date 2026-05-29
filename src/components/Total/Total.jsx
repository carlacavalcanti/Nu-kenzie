import styles from "./Total.module.scss";

export const Total = ({ transacoes }) => {
  const total = transacoes.reduce((acumulador, item) => {
    return acumulador + Number(item.valor);
  }, 0);
  return (
    <>
      <div className={styles.totalContainer}>
        <div className={styles.topo}>
          <h2>Valor total:</h2>
          <p>R$ {total}</p>
        </div>
        <span>O valor refere ao saldo</span>
      </div>
    </>
  );
};
