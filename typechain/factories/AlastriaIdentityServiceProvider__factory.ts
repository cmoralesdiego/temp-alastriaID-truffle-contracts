/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AlastriaIdentityServiceProvider } from "../AlastriaIdentityServiceProvider";

export class AlastriaIdentityServiceProvider__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<AlastriaIdentityServiceProvider> {
    return super.deploy(
      overrides || {}
    ) as Promise<AlastriaIdentityServiceProvider>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AlastriaIdentityServiceProvider {
    return super.attach(address) as AlastriaIdentityServiceProvider;
  }
  connect(signer: Signer): AlastriaIdentityServiceProvider__factory {
    return super.connect(signer) as AlastriaIdentityServiceProvider__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AlastriaIdentityServiceProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AlastriaIdentityServiceProvider;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_identityServiceProvider",
        type: "address",
      },
    ],
    name: "addIdentityServiceProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_identityServiceProvider",
        type: "address",
      },
    ],
    name: "deleteIdentityServiceProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_firstIdentity",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_identityServiceProvider",
        type: "address",
      },
    ],
    name: "isIdentityServiceProvider",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061031f806100206000396000f3fe608060405234801561001057600080fd5b5060043610610068577c010000000000000000000000000000000000000000000000000000000060003504630ebbbffc811461006d5780633bf4721514610095578063c4d66de8146100bb578063d024d9a4146100e1575b600080fd5b6100936004803603602081101561008357600080fd5b5035600160a060020a031661011b565b005b610093600480360360208110156100ab57600080fd5b5035600160a060020a031661016b565b610093600480360360208110156100d157600080fd5b5035600160a060020a03166101b4565b610107600480360360208110156100f757600080fd5b5035600160a060020a0316610297565b604080519115158252519081900360200190f35b3361012581610297565b61012e57600080fd5b8161013881610297565b1561014257600080fd5b5050600160a060020a03166000908152600160208190526040909120805460ff19169091179055565b8061017581610297565b61017e57600080fd5b3361018881610297565b61019157600080fd5b5050600160a060020a03166000908152600160205260409020805460ff19169055565b600054610100900460ff16806101cd57506101cd6102b5565b806101db575060005460ff16155b610230576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806102bc602e913960400191505060405180910390fd5b600054610100900460ff1615801561025b576000805460ff1961ff0019909116610100171660011790555b600160a060020a0382166000908152600160208190526040909120805460ff191690911790558015610293576000805461ff00191690555b5050565b600160a060020a031660009081526001602052604090205460ff1690565b303b159056fe496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564a26469706673582212200ab6baba1954c62fedf4acf10cc72413c67163f4b4143b2a1bcdcd3467ce4c1564736f6c63430007060033";
