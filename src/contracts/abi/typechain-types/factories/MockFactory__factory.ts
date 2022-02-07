/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockFactory, MockFactoryInterface } from "../MockFactory";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "priceRatio",
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
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
      {
        name: "inAmount",
        type: "uint256",
      },
      {
        name: "",
        type: "address",
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
  {
    constant: false,
    inputs: [
      {
        name: "inToken",
        type: "address",
      },
      {
        name: "inAmount",
        type: "uint256",
      },
      {
        name: "outToken",
        type: "address",
      },
      {
        name: "outAmountMin",
        type: "uint256",
      },
      {
        name: "",
        type: "address[]",
      },
    ],
    name: "exchangeKctPos",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_priceRatio",
        type: "uint256",
      },
    ],
    name: "setPriceRatio",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
      {
        name: "",
        type: "address",
      },
      {
        name: "outAmount",
        type: "uint256",
      },
    ],
    name: "estimateNeg",
    outputs: [
      {
        name: "inAmount",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
];

const _bytecode =
  "0x6080604052600260005534801561001557600080fd5b5061033b806100256000396000f3fe60806040526004361061004a5760003560e01c80630aa2f4201461004c5780633d51d40b1461007357806352f28c17146100b6578063a66bf2e41461014c578063ac67506714610176575b005b34801561005857600080fd5b506100616101b9565b60408051918252519081900360200190f35b34801561007f57600080fd5b506100616004803603606081101561009657600080fd5b506001600160a01b038135811691602081013591604090910135166101bf565b61004a600480360360a08110156100cc57600080fd5b6001600160a01b0382358116926020810135926040820135909216916060820135919081019060a08101608082013564010000000081111561010d57600080fd5b82018360208201111561011f57600080fd5b8035906020019184602083028401116401000000008311171561014157600080fd5b5090925090506101c9565b34801561015857600080fd5b5061004a6004803603602081101561016f57600080fd5b50356102f5565b34801561018257600080fd5b506100616004803603606081101561019957600080fd5b506001600160a01b038135811691602081013590911690604001356102fa565b60005481565b5060005402919050565b6001600160a01b038416156101dd57600080fd5b60005485028084111561023a5760408051600160e51b62461bcd02815260206004820152600d60248201527f4c4553535f5448414e5f4d494e00000000000000000000000000000000000000604482015290519081900360640190fd5b60408051600160e01b6323b872dd0281523360048201523060248201526044810188905290516001600160a01b038916916323b872dd9160648083019260209291908290030181600087803b15801561029257600080fd5b505af11580156102a6573d6000803e3d6000fd5b505050506040513d60208110156102bc57600080fd5b5050604051339082156108fc029083906000818181858888f193505050501580156102eb573d6000803e3d6000fd5b5050505050505050565b600055565b60008054828161030657fe5b0494935050505056fea165627a7a723058207cf50dbf0e9eb4ba7576ff6a01fb7af53cca4e71c6b499a98b9d88cc45aa88310029";

type MockFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockFactory__factory extends ContractFactory {
  constructor(...args: MockFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MockFactory";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockFactory> {
    return super.deploy(overrides || {}) as Promise<MockFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockFactory {
    return super.attach(address) as MockFactory;
  }
  connect(signer: Signer): MockFactory__factory {
    return super.connect(signer) as MockFactory__factory;
  }
  static readonly contractName: "MockFactory";
  public readonly contractName: "MockFactory";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockFactoryInterface {
    return new utils.Interface(_abi) as MockFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockFactory {
    return new Contract(address, _abi, signerOrProvider) as MockFactory;
  }
}
