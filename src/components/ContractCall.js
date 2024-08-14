import { useConnect } from "@stacks/connect-react";
import { StacksTestnet } from "@stacks/network";
import {
  AnchorMode,
  PostConditionMode,
  stringUtf8CV,
  uintCV,
} from "@stacks/transactions";
import { userSession } from "./ConnectWallet";
import { uint } from "@stacks/transactions/dist/cl";

const ContractCall = () => {
  const { doContractCall } = useConnect();

  function getVibes(pick) {
    doContractCall({
      network: new StacksTestnet(),
      anchorMode: AnchorMode.Any,
      contractAddress: "ST3B5YKP344KCZ5Q8VKA5PNRF3X546PMP80EMWC10",
      contractName: "vibes-faucet",
      functionName: "get-vibes",
      functionArgs: [],
      postConditionMode: PostConditionMode.Allow,
      postConditions: [],
      onFinish: (data) => {
        console.log("onFinish:", data);
        window
          .open(
            `https://explorer.stacks.co/txid/${data.txId}?chain=testnet`,
            "_blank"
          )
          .focus();
      },
      onCancel: () => {
        console.log("onCancel:", "Transaction was canceled");
      },
    });
  }

  if (!userSession.isUserSignedIn()) {
    return null;
  }

  return (
    <div>
      <p>Click to get VIBES</p>
      <button className="Vote" onClick={() => getVibes()}>
        Get VIBES
      </button>
    </div>
  );
};

export default ContractCall;
