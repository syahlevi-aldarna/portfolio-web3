import React, { useState } from 'react';
import styled from 'styled-components';
import { ethers } from 'ethers';

const ConnectContainer = styled.section`
  margin: 60px 0;
  text-align: center;
`;

const ConnectButton = styled.button`
  background-color: #00ff9f;
  color: #0a0e17;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00b8ff;
  }
`;

const AccountInfo = styled.p`
  margin-top: 20px;
  font-size: 1rem;
  color: #e0fbfc;
`;

function Web3Connect() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
      } catch (error) {
        console.error("Gagal connect wallet:", error);
      }
    } else {
      alert("Install MetaMask dulu dong!");
    }
  };

  return (
    <ConnectContainer id="web3connect">
      <h2>Koneksi Web3</h2>
      {!account ? (
        <ConnectButton onClick={connectWallet}>Connect Wallet</ConnectButton>
      ) : (
        <AccountInfo>Connected: {account}</AccountInfo>
      )}
    </ConnectContainer>
  );
}

export default Web3Connect;