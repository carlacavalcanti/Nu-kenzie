import { FinanceCard } from "./FinanceCard/FinanceCard";

export const FinanceList = ({ transacoes }) => {
  return (
    <div className="finance-list">
      <h2>Resumo financeiro</h2>
      {transacoes.length === 0 ? (
        <p>Você não possui nenhum lançamento</p>
      ) : (
        <FinanceCard transacoes={transacoes} />
      )}
    </div>
  );
};
