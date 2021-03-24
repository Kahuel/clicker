import "./App.css";
import { useSelector } from "react-redux";
import { Fighter, ActionBar } from "./components";

export const App = () => {
  const [player, enemy] = useSelector((store: any) => store.combat);
  return (
    <div className="App">
      <Fighter fighter={player} />
      <ActionBar />
      <Fighter fighter={enemy} />
    </div>
  );
};
