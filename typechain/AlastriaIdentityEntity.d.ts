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

interface AlastriaIdentityEntityInterface extends ethers.utils.Interface {
  functions: {
    "addEntity(address,string,string,string,string,string,bool)": FunctionFragment;
    "entitiesList()": FunctionFragment;
    "getEntity(address)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "setCifEntity(address,string)": FunctionFragment;
    "setNameEntity(address,string)": FunctionFragment;
    "setUrlAOA(address,string)": FunctionFragment;
    "setUrlCreateAID(address,string)": FunctionFragment;
    "setUrlLogo(address,string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addEntity",
    values: [string, string, string, string, string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "entitiesList",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getEntity", values: [string]): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setCifEntity",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setNameEntity",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setUrlAOA",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setUrlCreateAID",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setUrlLogo",
    values: [string, string]
  ): string;

  decodeFunctionResult(functionFragment: "addEntity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "entitiesList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getEntity", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCifEntity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNameEntity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setUrlAOA", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setUrlCreateAID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setUrlLogo", data: BytesLike): Result;

  events: {};
}

export class AlastriaIdentityEntity extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: AlastriaIdentityEntityInterface;

  functions: {
    addEntity(
      _addressEntity: string,
      _name: string,
      _cif: string,
      _url_logo: string,
      _url_createAID: string,
      _url_AOA: string,
      _active: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addEntity(address,string,string,string,string,string,bool)"(
      _addressEntity: string,
      _name: string,
      _cif: string,
      _url_logo: string,
      _url_createAID: string,
      _url_AOA: string,
      _active: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    entitiesList(overrides?: CallOverrides): Promise<[string[]]>;

    "entitiesList()"(overrides?: CallOverrides): Promise<[string[]]>;

    getEntity(
      _addressEntity: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, boolean] & {
        _name: string;
        _cif: string;
        _url_logo: string;
        _url_createAID: string;
        _url_AOA: string;
        _active: boolean;
      }
    >;

    "getEntity(address)"(
      _addressEntity: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, boolean] & {
        _name: string;
        _cif: string;
        _url_logo: string;
        _url_createAID: string;
        _url_AOA: string;
        _active: boolean;
      }
    >;

    initialize(
      _firstIdentity: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address)"(
      _firstIdentity: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setCifEntity(
      _addressEntity: string,
      _cif: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setCifEntity(address,string)"(
      _addressEntity: string,
      _cif: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setNameEntity(
      _addressEntity: string,
      _name: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setNameEntity(address,string)"(
      _addressEntity: string,
      _name: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setUrlAOA(
      _addressEntity: string,
      _url_AOA: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setUrlAOA(address,string)"(
      _addressEntity: string,
      _url_AOA: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setUrlCreateAID(
      _addressEntity: string,
      _url_createAID: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setUrlCreateAID(address,string)"(
      _addressEntity: string,
      _url_createAID: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setUrlLogo(
      _addressEntity: string,
      _url_logo: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setUrlLogo(address,string)"(
      _addressEntity: string,
      _url_logo: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addEntity(
    _addressEntity: string,
    _name: string,
    _cif: string,
    _url_logo: string,
    _url_createAID: string,
    _url_AOA: string,
    _active: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addEntity(address,string,string,string,string,string,bool)"(
    _addressEntity: string,
    _name: string,
    _cif: string,
    _url_logo: string,
    _url_createAID: string,
    _url_AOA: string,
    _active: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  entitiesList(overrides?: CallOverrides): Promise<string[]>;

  "entitiesList()"(overrides?: CallOverrides): Promise<string[]>;

  getEntity(
    _addressEntity: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, string, boolean] & {
      _name: string;
      _cif: string;
      _url_logo: string;
      _url_createAID: string;
      _url_AOA: string;
      _active: boolean;
    }
  >;

  "getEntity(address)"(
    _addressEntity: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, string, boolean] & {
      _name: string;
      _cif: string;
      _url_logo: string;
      _url_createAID: string;
      _url_AOA: string;
      _active: boolean;
    }
  >;

  initialize(
    _firstIdentity: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address)"(
    _firstIdentity: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setCifEntity(
    _addressEntity: string,
    _cif: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setCifEntity(address,string)"(
    _addressEntity: string,
    _cif: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setNameEntity(
    _addressEntity: string,
    _name: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setNameEntity(address,string)"(
    _addressEntity: string,
    _name: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setUrlAOA(
    _addressEntity: string,
    _url_AOA: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setUrlAOA(address,string)"(
    _addressEntity: string,
    _url_AOA: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setUrlCreateAID(
    _addressEntity: string,
    _url_createAID: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setUrlCreateAID(address,string)"(
    _addressEntity: string,
    _url_createAID: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setUrlLogo(
    _addressEntity: string,
    _url_logo: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setUrlLogo(address,string)"(
    _addressEntity: string,
    _url_logo: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addEntity(
      _addressEntity: string,
      _name: string,
      _cif: string,
      _url_logo: string,
      _url_createAID: string,
      _url_AOA: string,
      _active: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "addEntity(address,string,string,string,string,string,bool)"(
      _addressEntity: string,
      _name: string,
      _cif: string,
      _url_logo: string,
      _url_createAID: string,
      _url_AOA: string,
      _active: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    entitiesList(overrides?: CallOverrides): Promise<string[]>;

    "entitiesList()"(overrides?: CallOverrides): Promise<string[]>;

    getEntity(
      _addressEntity: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, boolean] & {
        _name: string;
        _cif: string;
        _url_logo: string;
        _url_createAID: string;
        _url_AOA: string;
        _active: boolean;
      }
    >;

    "getEntity(address)"(
      _addressEntity: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, boolean] & {
        _name: string;
        _cif: string;
        _url_logo: string;
        _url_createAID: string;
        _url_AOA: string;
        _active: boolean;
      }
    >;

    initialize(
      _firstIdentity: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address)"(
      _firstIdentity: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setCifEntity(
      _addressEntity: string,
      _cif: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setCifEntity(address,string)"(
      _addressEntity: string,
      _cif: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setNameEntity(
      _addressEntity: string,
      _name: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setNameEntity(address,string)"(
      _addressEntity: string,
      _name: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setUrlAOA(
      _addressEntity: string,
      _url_AOA: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setUrlAOA(address,string)"(
      _addressEntity: string,
      _url_AOA: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setUrlCreateAID(
      _addressEntity: string,
      _url_createAID: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setUrlCreateAID(address,string)"(
      _addressEntity: string,
      _url_createAID: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setUrlLogo(
      _addressEntity: string,
      _url_logo: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setUrlLogo(address,string)"(
      _addressEntity: string,
      _url_logo: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addEntity(
      _addressEntity: string,
      _name: string,
      _cif: string,
      _url_logo: string,
      _url_createAID: string,
      _url_AOA: string,
      _active: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addEntity(address,string,string,string,string,string,bool)"(
      _addressEntity: string,
      _name: string,
      _cif: string,
      _url_logo: string,
      _url_createAID: string,
      _url_AOA: string,
      _active: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    entitiesList(overrides?: CallOverrides): Promise<BigNumber>;

    "entitiesList()"(overrides?: CallOverrides): Promise<BigNumber>;

    getEntity(
      _addressEntity: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getEntity(address)"(
      _addressEntity: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _firstIdentity: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address)"(
      _firstIdentity: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setCifEntity(
      _addressEntity: string,
      _cif: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setCifEntity(address,string)"(
      _addressEntity: string,
      _cif: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setNameEntity(
      _addressEntity: string,
      _name: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setNameEntity(address,string)"(
      _addressEntity: string,
      _name: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setUrlAOA(
      _addressEntity: string,
      _url_AOA: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setUrlAOA(address,string)"(
      _addressEntity: string,
      _url_AOA: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setUrlCreateAID(
      _addressEntity: string,
      _url_createAID: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setUrlCreateAID(address,string)"(
      _addressEntity: string,
      _url_createAID: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setUrlLogo(
      _addressEntity: string,
      _url_logo: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setUrlLogo(address,string)"(
      _addressEntity: string,
      _url_logo: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addEntity(
      _addressEntity: string,
      _name: string,
      _cif: string,
      _url_logo: string,
      _url_createAID: string,
      _url_AOA: string,
      _active: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addEntity(address,string,string,string,string,string,bool)"(
      _addressEntity: string,
      _name: string,
      _cif: string,
      _url_logo: string,
      _url_createAID: string,
      _url_AOA: string,
      _active: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    entitiesList(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "entitiesList()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEntity(
      _addressEntity: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getEntity(address)"(
      _addressEntity: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _firstIdentity: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address)"(
      _firstIdentity: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setCifEntity(
      _addressEntity: string,
      _cif: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setCifEntity(address,string)"(
      _addressEntity: string,
      _cif: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setNameEntity(
      _addressEntity: string,
      _name: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setNameEntity(address,string)"(
      _addressEntity: string,
      _name: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setUrlAOA(
      _addressEntity: string,
      _url_AOA: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setUrlAOA(address,string)"(
      _addressEntity: string,
      _url_AOA: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setUrlCreateAID(
      _addressEntity: string,
      _url_createAID: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setUrlCreateAID(address,string)"(
      _addressEntity: string,
      _url_createAID: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setUrlLogo(
      _addressEntity: string,
      _url_logo: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setUrlLogo(address,string)"(
      _addressEntity: string,
      _url_logo: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
