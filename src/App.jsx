import { useState } from "react";
import { Header } from "./components/Header/Header";
import { FinanceForm } from "./components/FinanceForm/FinanceForm";
import { FinanceList } from "./components/FinanceList";
import { Total } from "./components/Total/Total";

function App() {
  const [transacoes, setTransacoes] = useState([]);
  return (
    <>
      <Header />
      <div className="container">
        <div className="dashboard">
          <div>
            <FinanceForm
              transacoes={transacoes}
              setTransacoes={setTransacoes}
            />
            <Total transacoes={transacoes} />
          </div>
          <FinanceList transacoes={transacoes} />
        </div>
      </div>
    </>
  );
}

export default App;
