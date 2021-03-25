import "./App.css";
import { Player, Enemy, ActionBar } from "./components";

export const App = () => {
  return (
    <div className="App">
      <Player />
      <ActionBar />
      <Enemy />
    </div>
  );
};
