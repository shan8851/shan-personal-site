import mt from "../assets/mtgif.gif";
import us from "../assets/upswing.png";
//import sp from "../assets/ga.png";
import mac from '../assets/mac.png'
import ss from "../assets/ss.png";
import faucet from "../assets/faucet.png";
import db from "../assets/dashboard.png";

import { v4 as uuidv4 } from "uuid";

export const projects = [
  {
    id: uuidv4(),
    title: "Moonturds",
    description:
      "Minting site for NFT project using CRA, Sass, ethersjs and web3modal",
    url: "https://www.moonturds.xyz/",
    image: mt,
  },
  {
    id: uuidv4(),
    title: "Rinkedry",
    description:
      "A Rinkeby faucet allowing devs to request and donate test Eth.",
    url: "https://rinkedry.vercel.app/",
    image: faucet,
  },
    {
    id: uuidv4(),
    title: "MAC-Insurance",
    description:
      "Insurance protocol to protect from ERC20 token price loss. Built as part of Ethglobal hackathon - multiple prize winner",
    url: "https://showcase.ethglobal.com/hackmoney2022/mac-insurance-r1g12",
    image: mac,
  },
  {
    id: uuidv4(),
    title: "Upswing Digital",
    description: "Landing page for creative digital agency",
    url: "https://www.upswingdigital.co.uk/",
    image: us,
  },
  {
    id: uuidv4(),
    title: "Simple Storage",
    description:
      "Simple storage to read and write to the blockchain as well as keep track of total contributions and total unique users",
    url: "https://shans-simple-storage.vercel.app/",
    image: ss,
  },
  {
    id: uuidv4(),
    title: "Web3 Dashboard",
    description:
      "Exploring the Moralis API. A web3 inspired dashboard pulling balances, recent transactions, NFTs and the ability to send ETH to another address",
    url: "https://web3-dashboard-lac.vercel.app/",
    image: db,
  },
  // {
  //   id: uuidv4(),
  //   title: "Ready Dev Go",
  //   description: "Newsletter landing page",
  //   url: "https://readydevgo.co/",
  //   image: rdg,
  // },
  // {
  //   id: uuidv4(),
  //   title: "Support Privacy",
  //   description: "Privacy first alternatives for popular Google products",
  //   url: "https://fuck-google.netlify.app/",
  //   image: sp,
  // },
];
