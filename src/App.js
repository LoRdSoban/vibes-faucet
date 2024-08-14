import logo from "./vibes_logo.png";
import "./App.css";
import ConnectWallet from "./components/ConnectWallet";
import ContractCallVote from "./components/ContractCall";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>TESTNET VIBES FAUCET</h2>

        {/* ConnectWallet file: `./src/components/ConnectWallet.js` */}
        <ConnectWallet />
      </header>

      <div>
        {/* ContractCallVote file: `./src/components/ContractCallVote.js` */}
        <ContractCallVote />
      </div>
    </div>
  );
}

export default App;
