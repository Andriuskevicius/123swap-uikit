import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import {Login, NetworkNames} from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModal = (login: Login, logout: () => void, network: NetworkNames, setNetwork?: (network:string) => null, account?: string): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} network={network} setNetwork={setNetwork} />);
  const [onPresentAccountModal] = useModal(<AccountModal account={account || ""} logout={logout} />);
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;
