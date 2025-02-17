"use client";

import { client } from "@/client";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import {
  useActiveAccount,
  useConnectModal,
  useWalletDetailsModal,
} from "thirdweb/react";
import { liskChain } from "@/liskChain";

export default function Home() {
  const { connect } = useConnectModal();
  const account = useActiveAccount();
  const walletDetailsModal = useWalletDetailsModal();

  async function handleConnect() {
    const wallet = await connect({
      client,
      chain: liskChain,
      wallets: [
        inAppWallet({
          auth: {
            options: [
              "google",
              "x",
              "apple",
              "discord",
              "facebook",
              "farcaster",
              "telegram",
              "email",
              "phone",
              "passkey",
            ],
          },
        }),
        createWallet("io.metamask"),
        createWallet("com.trustwallet.app"),
        createWallet("me.rainbow"),
      ],
    });
  }

  function openWalletDetailsModal() {
    walletDetailsModal.open({
      client: client,
      displayBalanceToken: {
        [liskChain.id]: "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
      },
      supportedTokens: {
        1: [
          {
            address: "0xac485391EB2d7D88253a7F1eF18C37f4242D1A24",
            name: "Lisk",
            symbol: "LSK",
          },
        ],
      },
    });
  }

  return (
    <div className="w-screen h-screen grid place-content-center">
      {account ? (
        <button
          className="px-5 py-3 bg-red-800 text-white"
          onClick={openWalletDetailsModal}
        >
          Account
        </button>
      ) : (
        <button
          className="px-5 py-3 bg-blue-800 text-white"
          onClick={handleConnect}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}
