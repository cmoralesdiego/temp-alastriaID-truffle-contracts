/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface AlastriaIdentityManagerInterface extends ethers.utils.Interface {
  functions: {
    "createAlastriaIdentity(bytes)": FunctionFragment;
    "delegateCall(address,uint256,bytes)": FunctionFragment;
    "identityKeys(address)": FunctionFragment;
    "initialize(address,address,address,address,address,address)": FunctionFragment;
    "pendingIDs(address)": FunctionFragment;
    "prepareAlastriaID(address)": FunctionFragment;
    "recoverAccount(address,address)": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createAlastriaIdentity",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateCall",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "identityKeys",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "pendingIDs", values: [string]): string;
  encodeFunctionData(
    functionFragment: "prepareAlastriaID",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "recoverAccount",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "createAlastriaIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegateCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "identityKeys",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pendingIDs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "prepareAlastriaID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoverAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "IdentityCreated(address,address,address)": EventFragment;
    "IdentityRecovered(address,address,address)": EventFragment;
    "OperationWasNotSupported(string)": EventFragment;
    "PreparedAlastriaID(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "IdentityCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IdentityRecovered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OperationWasNotSupported"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PreparedAlastriaID"): EventFragment;
}

export class AlastriaIdentityManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: AlastriaIdentityManagerInterface;

  functions: {
    createAlastriaIdentity(
      addPublicKeyCallData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createAlastriaIdentity(bytes)"(
      addPublicKeyCallData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    delegateCall(
      _destination: string,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "delegateCall(address,uint256,bytes)"(
      _destination: string,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    identityKeys(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    "identityKeys(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    initialize(
      _aidEntity: string,
      _aidIssuer: string,
      _aidServiceProvider: string,
      _credentialRegistry: string,
      _presentationRegistry: string,
      _publicKeyRegistry: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address,address,address,address,address,address)"(
      _aidEntity: string,
      _aidIssuer: string,
      _aidServiceProvider: string,
      _credentialRegistry: string,
      _presentationRegistry: string,
      _publicKeyRegistry: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    pendingIDs(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "pendingIDs(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    prepareAlastriaID(
      _signAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "prepareAlastriaID(address)"(
      _signAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    recoverAccount(
      accountLost: string,
      newAccount: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "recoverAccount(address,address)"(
      accountLost: string,
      newAccount: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;

    "version()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  createAlastriaIdentity(
    addPublicKeyCallData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createAlastriaIdentity(bytes)"(
    addPublicKeyCallData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  delegateCall(
    _destination: string,
    _value: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "delegateCall(address,uint256,bytes)"(
    _destination: string,
    _value: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  identityKeys(arg0: string, overrides?: CallOverrides): Promise<string>;

  "identityKeys(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(
    _aidEntity: string,
    _aidIssuer: string,
    _aidServiceProvider: string,
    _credentialRegistry: string,
    _presentationRegistry: string,
    _publicKeyRegistry: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address,address,address,address,address,address)"(
    _aidEntity: string,
    _aidIssuer: string,
    _aidServiceProvider: string,
    _credentialRegistry: string,
    _presentationRegistry: string,
    _publicKeyRegistry: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  pendingIDs(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "pendingIDs(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  prepareAlastriaID(
    _signAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "prepareAlastriaID(address)"(
    _signAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  recoverAccount(
    accountLost: string,
    newAccount: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "recoverAccount(address,address)"(
    accountLost: string,
    newAccount: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  "version()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    createAlastriaIdentity(
      addPublicKeyCallData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "createAlastriaIdentity(bytes)"(
      addPublicKeyCallData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    delegateCall(
      _destination: string,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "delegateCall(address,uint256,bytes)"(
      _destination: string,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    identityKeys(arg0: string, overrides?: CallOverrides): Promise<string>;

    "identityKeys(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(
      _aidEntity: string,
      _aidIssuer: string,
      _aidServiceProvider: string,
      _credentialRegistry: string,
      _presentationRegistry: string,
      _publicKeyRegistry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address,address,address,address,address)"(
      _aidEntity: string,
      _aidIssuer: string,
      _aidServiceProvider: string,
      _credentialRegistry: string,
      _presentationRegistry: string,
      _publicKeyRegistry: string,
      overrides?: CallOverrides
    ): Promise<void>;

    pendingIDs(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "pendingIDs(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    prepareAlastriaID(
      _signAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "prepareAlastriaID(address)"(
      _signAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    recoverAccount(
      accountLost: string,
      newAccount: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "recoverAccount(address,address)"(
      accountLost: string,
      newAccount: string,
      overrides?: CallOverrides
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    "version()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    IdentityCreated(
      identity: string | null,
      creator: string | null,
      owner: null
    ): EventFilter;

    IdentityRecovered(
      oldAccount: string | null,
      newAccount: null,
      serviceProvider: string | null
    ): EventFilter;

    OperationWasNotSupported(method: string | null): EventFilter;

    PreparedAlastriaID(signAddress: string | null): EventFilter;
  };

  estimateGas: {
    createAlastriaIdentity(
      addPublicKeyCallData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createAlastriaIdentity(bytes)"(
      addPublicKeyCallData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    delegateCall(
      _destination: string,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "delegateCall(address,uint256,bytes)"(
      _destination: string,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    identityKeys(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "identityKeys(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _aidEntity: string,
      _aidIssuer: string,
      _aidServiceProvider: string,
      _credentialRegistry: string,
      _presentationRegistry: string,
      _publicKeyRegistry: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address,address,address,address,address,address)"(
      _aidEntity: string,
      _aidIssuer: string,
      _aidServiceProvider: string,
      _credentialRegistry: string,
      _presentationRegistry: string,
      _publicKeyRegistry: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    pendingIDs(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "pendingIDs(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    prepareAlastriaID(
      _signAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "prepareAlastriaID(address)"(
      _signAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    recoverAccount(
      accountLost: string,
      newAccount: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "recoverAccount(address,address)"(
      accountLost: string,
      newAccount: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    "version()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createAlastriaIdentity(
      addPublicKeyCallData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createAlastriaIdentity(bytes)"(
      addPublicKeyCallData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    delegateCall(
      _destination: string,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "delegateCall(address,uint256,bytes)"(
      _destination: string,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    identityKeys(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "identityKeys(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _aidEntity: string,
      _aidIssuer: string,
      _aidServiceProvider: string,
      _credentialRegistry: string,
      _presentationRegistry: string,
      _publicKeyRegistry: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address,address,address,address,address,address)"(
      _aidEntity: string,
      _aidIssuer: string,
      _aidServiceProvider: string,
      _credentialRegistry: string,
      _presentationRegistry: string,
      _publicKeyRegistry: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    pendingIDs(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingIDs(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    prepareAlastriaID(
      _signAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "prepareAlastriaID(address)"(
      _signAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    recoverAccount(
      accountLost: string,
      newAccount: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "recoverAccount(address,address)"(
      accountLost: string,
      newAccount: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "version()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
