/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Owned } from "../Owned";

export class Owned__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Owned> {
    return super.deploy(overrides || {}) as Promise<Owned>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Owned {
    return super.attach(address) as Owned;
  }
  connect(signer: Signer): Owned__factory {
    return super.connect(signer) as Owned__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Owned {
    return new Contract(address, _abi, signerOrProvider) as Owned;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060008054600160a060020a0319163317905561018f806100326000396000f3fe608060405234801561001057600080fd5b506004361061005d577c010000000000000000000000000000000000000000000000000000000060003504631a69523081146100625780632f54bf6e1461008a5780638da5cb5b146100c4575b600080fd5b6100886004803603602081101561007857600080fd5b5035600160a060020a03166100e8565b005b6100b0600480360360208110156100a057600080fd5b5035600160a060020a0316610136565b604080519115158252519081900360200190f35b6100cc61014a565b60408051600160a060020a039092168252519081900360200190f35b6100f133610136565b6100fa57600080fd5b600160a060020a0381163014610133576000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b50565b600054600160a060020a0390811691161490565b600054600160a060020a03168156fea264697066735822122088bf8cb5598307f8fad23acb9c4586e52e2bad71330d8639de4335de0815558664736f6c63430007060033";
