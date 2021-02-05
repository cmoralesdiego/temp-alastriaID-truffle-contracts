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

import type { TransparentUpgradeableProxy } from "../TransparentUpgradeableProxy";

export class TransparentUpgradeableProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _logic: string,
    _admin: string,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<TransparentUpgradeableProxy> {
    return super.deploy(
      _logic,
      _admin,
      _data,
      overrides || {}
    ) as Promise<TransparentUpgradeableProxy>;
  }
  getDeployTransaction(
    _logic: string,
    _admin: string,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, _admin, _data, overrides || {});
  }
  attach(address: string): TransparentUpgradeableProxy {
    return super.attach(address) as TransparentUpgradeableProxy;
  }
  connect(signer: Signer): TransparentUpgradeableProxy__factory {
    return super.connect(signer) as TransparentUpgradeableProxy__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransparentUpgradeableProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TransparentUpgradeableProxy;
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
        internalType: "address",
        name: "_admin",
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
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
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
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "currentAdmin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "_impl",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526040516109303803806109308339818101604052606081101561002657600080fd5b8151602083015160408085018051915193959294830192918464010000000082111561005157600080fd5b90830190602082018581111561006657600080fd5b825164010000000081118282018810171561008057600080fd5b82525081516020918201929091019080838360005b838110156100ad578181015183820152602001610095565b50505050905090810190601f1680156100da5780820380516001836020036101000a031916815260200191505b50604052508491508290506100f7826401000000006101d1810204565b8051156101af57600082600160a060020a0316826040518082805190602001908083835b6020831061013a5780518252601f19909201916020918201910161011b565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811461019a576040519150601f19603f3d011682016040523d82523d6000602084013e61019f565b606091505b50509050806101ad57600080fd5b505b506101b79050565b6101c982640100000000610260810204565b50505061028a565b6101e7816401000000006103d361028482021704565b61023c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260368152602001806108fa6036913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b3b151590565b610661806102996000396000f3fe60806040526004361061006a577c010000000000000000000000000000000000000000000000000000000060003504633659cfe681146100815780634f1ef286146100b45780635c60da1b146101345780638f28397014610165578063f851a4401461019857610079565b36610079576100776101ad565b005b6100776101ad565b34801561008d57600080fd5b50610077600480360360208110156100a457600080fd5b5035600160a060020a03166101c7565b610077600480360360408110156100ca57600080fd5b600160a060020a0382351691908101906040810160208201356401000000008111156100f557600080fd5b82018360208201111561010757600080fd5b8035906020019184600183028401116401000000008311171561012957600080fd5b509092509050610201565b34801561014057600080fd5b506101496102ae565b60408051600160a060020a039092168252519081900360200190f35b34801561017157600080fd5b506100776004803603602081101561018857600080fd5b5035600160a060020a03166102eb565b3480156101a457600080fd5b506101496103a8565b6101b56103d9565b6101c56101c061043c565b610461565b565b6101cf610485565b600160a060020a031633600160a060020a031614156101f6576101f1816104aa565b6101fe565b6101fe6101ad565b50565b610209610485565b600160a060020a031633600160a060020a031614156102a15761022b836104aa565b600083600160a060020a031683836040518083838082843760405192019450600093509091505080830381855af49150503d8060008114610288576040519150601f19603f3d011682016040523d82523d6000602084013e61028d565b606091505b505090508061029b57600080fd5b506102a9565b6102a96101ad565b505050565b60006102b8610485565b600160a060020a031633600160a060020a031614156102e0576102d961043c565b90506102e8565b6102e86101ad565b90565b6102f3610485565b600160a060020a031633600160a060020a031614156101f657600160a060020a0381166103545760405160e560020a62461bcd02815260040180806020018281038252603a81526020018061057a603a913960400191505060405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61037d610485565b60408051600160a060020a03928316815291841660208301528051918290030190a16101f1816104ea565b60006103b2610485565b600160a060020a031633600160a060020a031614156102e0576102d9610485565b3b151590565b6103e1610485565b600160a060020a031633600160a060020a031614156104345760405160e560020a62461bcd0281526004018080602001828103825260428152602001806105ea6042913960600191505060405180910390fd5b6101c56101c5565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e808015610480573d6000f35b3d6000fd5b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b6104b38161050e565b604051600160a060020a038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b610517816103d3565b6105555760405160e560020a62461bcd0281526004018080602001828103825260368152602001806105b46036913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5556fe5472616e73706172656e745570677261646561626c6550726f78793a206e65772061646d696e20697320746865207a65726f20616464726573735570677261646561626c6550726f78793a206e657720696d706c656d656e746174696f6e206973206e6f74206120636f6e74726163745472616e73706172656e745570677261646561626c6550726f78793a2061646d696e2063616e6e6f742066616c6c6261636b20746f2070726f787920746172676574a264697066735822122089e39160efdcb1ad81c9907cce15a707617bdaac15e3a72ec1fe60031b09f86f64736f6c634300070600335570677261646561626c6550726f78793a206e657720696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374";
