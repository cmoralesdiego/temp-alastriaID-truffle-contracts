/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BytesLike } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Contract,
  ContractFactory,
  PayableOverrides,
} from "@ethersproject/contracts";

import type { UpgradeableProxy } from "../UpgradeableProxy";

export class UpgradeableProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _logic: string,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<UpgradeableProxy> {
    return super.deploy(
      _logic,
      _data,
      overrides || {}
    ) as Promise<UpgradeableProxy>;
  }
  getDeployTransaction(
    _logic: string,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, _data, overrides || {});
  }
  attach(address: string): UpgradeableProxy {
    return super.attach(address) as UpgradeableProxy;
  }
  connect(signer: Signer): UpgradeableProxy__factory {
    return super.connect(signer) as UpgradeableProxy__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradeableProxy {
    return new Contract(address, _abi, signerOrProvider) as UpgradeableProxy;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526040516103383803806103388339818101604052604081101561002657600080fd5b81516020830180516040519294929383019291908464010000000082111561004d57600080fd5b90830190602082018581111561006257600080fd5b825164010000000081118282018810171561007c57600080fd5b82525081516020918201929091019080838360005b838110156100a9578181015183820152602001610091565b50505050905090810190601f1680156100d65780820380516001836020036101000a031916815260200191505b50604052506100e3915050565b6100f5826401000000006101b4810204565b8051156101ad57600082600160a060020a0316826040518082805190602001908083835b602083106101385780518252601f199092019160209182019101610119565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610198576040519150601f19603f3d011682016040523d82523d6000602084013e61019d565b606091505b50509050806101ab57600080fd5b505b5050610249565b6101ca8164010000000061002761024382021704565b61021f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260368152602001806103026036913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b3b151590565b60ab806102576000396000f3fe608060405236601057600e6013565b005b600e5b60196025565b60256021602d565b6052565b565b3b151590565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e8080156070573d6000f35b3d6000fdfea264697066735822122010604fbb5528b2f22c277ee5647036c3d9770c26d0c5a63e3e7fa02b329d033c64736f6c634300070600335570677261646561626c6550726f78793a206e657720696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374";
