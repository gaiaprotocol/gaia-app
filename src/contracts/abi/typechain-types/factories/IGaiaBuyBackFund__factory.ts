/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IGaiaBuyBackFund,
  IGaiaBuyBackFundInterface,
} from "../IGaiaBuyBackFund";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "refundableKlay",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "sellGaiaNFT",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "gaiaNFT",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "buyBack",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "gaiaOperation",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [],
    name: "CloseBuyBack",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawKlay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        name: "refundedKlay",
        type: "uint256",
      },
    ],
    name: "Sell",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "newGaiaOperation",
        type: "address",
      },
    ],
    name: "UpdateGaiaOperation",
    type: "event",
  },
];

export class IGaiaBuyBackFund__factory {
  static readonly abi = _abi;
  static createInterface(): IGaiaBuyBackFundInterface {
    return new utils.Interface(_abi) as IGaiaBuyBackFundInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGaiaBuyBackFund {
    return new Contract(address, _abi, signerOrProvider) as IGaiaBuyBackFund;
  }
}
