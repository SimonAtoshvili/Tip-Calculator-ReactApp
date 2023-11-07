import { useEffect, useState } from "react";
import Inputs from "./Inputs";
import Outputs from "./Outputs";


function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if ((bill !== "" && tip !== "" && people !== "")) {
      if (people != 0) {
        setTipAmount(bill * (tip / 100) / people);
        setTotal(bill * (1 + tip / 100) / people);
      }
    } else {
      setTipAmount(0);
      setTotal(0);
    }
  }, [bill, tip, people])

  return (
    <div className="App">
      <Inputs
        bill={bill}
        setBill={setBill}
        people={people}
        setPeople={setPeople}
        tip={tip}
        setTip={setTip} />
      <Outputs
        tipAmount={tipAmount}
        setTipAmount={setTipAmount}
        total={total}
        setTotal={setTotal}
        setBill={setBill}
        setPeople={setPeople}
        setTip={setTip} />
    </div>
  );
}

export default App;
