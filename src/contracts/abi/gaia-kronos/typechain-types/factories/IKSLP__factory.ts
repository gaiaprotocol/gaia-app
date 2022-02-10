/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IKSLP, IKSLPInterface } from "../IKSLP";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "tokenA",
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
    name: "tokenB",
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
    name: "factory",
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
    inputs: [
      {
        name: "inToken",
        type: "address",
      },
      {
        name: "inAmount",
        type: "uint256",
      },
    ],
    name: "estimatePos",
    outputs: [
      {
        name: "outAmount",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

export class IKSLP__factory {
  static readonly abi = _abi;
  static createInterface(): IKSLPInterface {
    return new utils.Interface(_abi) as IKSLPInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IKSLP {
    return new Contract(address, _abi, signerOrProvider) as IKSLP;
  }
}