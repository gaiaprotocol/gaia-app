import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface GaiaOperationInterface extends utils.Interface {
    contractName: "GaiaOperation";
    functions: {
        "updateBuyBackFund(address)": FunctionFragment;
        "claim(uint256[],uint256[])": FunctionFragment;
        "claimableKlay(uint256[])": FunctionFragment;
        "whitelistSale()": FunctionFragment;
        "publicSale()": FunctionFragment;
        "kronosStaking()": FunctionFragment;
        "protocolStarted()": FunctionFragment;
        "devFund()": FunctionFragment;
        "withdrawKlay(address)": FunctionFragment;
        "setPublicSale(bool)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "claimKlayViaZap(uint256[],uint256[],uint256,address[])": FunctionFragment;
        "claimableKRNO(uint256[])": FunctionFragment;
        "getKRNOBalance(uint256)": FunctionFragment;
        "setWhitelist(address[],uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "isOwner()": FunctionFragment;
        "klayKRNOLP()": FunctionFragment;
        "sKRNO()": FunctionFragment;
        "gaiaNFT()": FunctionFragment;
        "mintGaiaNFTWithWhitelist(uint256)": FunctionFragment;
        "mintGaiaNFT(uint256)": FunctionFragment;
        "klaySwapFactory()": FunctionFragment;
        "gonsForId(uint256)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "initialKRNOEach()": FunctionFragment;
        "buyBackFund()": FunctionFragment;
        "setWhitelistSale(bool)": FunctionFragment;
        "whitelistTickets(address)": FunctionFragment;
        "emergencyWithdraw()": FunctionFragment;
        "KRNO()": FunctionFragment;
        "updateDevFund(address)": FunctionFragment;
        "gaiaPrice()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "startProtocol()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "updateBuyBackFund", values: [string]): string;
    encodeFunctionData(functionFragment: "claim", values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "claimableKlay", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "whitelistSale", values?: undefined): string;
    encodeFunctionData(functionFragment: "publicSale", values?: undefined): string;
    encodeFunctionData(functionFragment: "kronosStaking", values?: undefined): string;
    encodeFunctionData(functionFragment: "protocolStarted", values?: undefined): string;
    encodeFunctionData(functionFragment: "devFund", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawKlay", values: [string]): string;
    encodeFunctionData(functionFragment: "setPublicSale", values: [boolean]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimKlayViaZap", values: [BigNumberish[], BigNumberish[], BigNumberish, string[]]): string;
    encodeFunctionData(functionFragment: "claimableKRNO", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "getKRNOBalance", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setWhitelist", values: [string[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "klayKRNOLP", values?: undefined): string;
    encodeFunctionData(functionFragment: "sKRNO", values?: undefined): string;
    encodeFunctionData(functionFragment: "gaiaNFT", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintGaiaNFTWithWhitelist", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintGaiaNFT", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "klaySwapFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "gonsForId", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "initialKRNOEach", values?: undefined): string;
    encodeFunctionData(functionFragment: "buyBackFund", values?: undefined): string;
    encodeFunctionData(functionFragment: "setWhitelistSale", values: [boolean]): string;
    encodeFunctionData(functionFragment: "whitelistTickets", values: [string]): string;
    encodeFunctionData(functionFragment: "emergencyWithdraw", values?: undefined): string;
    encodeFunctionData(functionFragment: "KRNO", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateDevFund", values: [string]): string;
    encodeFunctionData(functionFragment: "gaiaPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "startProtocol", values?: undefined): string;
    decodeFunctionResult(functionFragment: "updateBuyBackFund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimableKlay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistSale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "publicSale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kronosStaking", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolStarted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "devFund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawKlay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPublicSale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimKlayViaZap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimableKRNO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getKRNOBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "klayKRNOLP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sKRNO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaiaNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintGaiaNFTWithWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintGaiaNFT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "klaySwapFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gonsForId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialKRNOEach", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buyBackFund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWhitelistSale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelistTickets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "KRNO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateDevFund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gaiaPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startProtocol", data: BytesLike): Result;
    events: {
        "UpdateBuyBackFund(address)": EventFragment;
        "UpdateDevFund(address)": EventFragment;
        "SetWhitelistSale(bool)": EventFragment;
        "SetPublicSale(bool)": EventFragment;
        "StartProtocol(uint256)": EventFragment;
        "ClaimKRNO(uint256,address,uint256)": EventFragment;
        "ClaimKlay(address,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "UpdateBuyBackFund"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateDevFund"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetWhitelistSale"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPublicSale"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StartProtocol"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimKRNO"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimKlay"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export declare type UpdateBuyBackFundEvent = TypedEvent<[
    string
], {
    newBuyBackFund: string;
}>;
export declare type UpdateBuyBackFundEventFilter = TypedEventFilter<UpdateBuyBackFundEvent>;
export declare type UpdateDevFundEvent = TypedEvent<[string], {
    newDevFund: string;
}>;
export declare type UpdateDevFundEventFilter = TypedEventFilter<UpdateDevFundEvent>;
export declare type SetWhitelistSaleEvent = TypedEvent<[boolean], {
    status: boolean;
}>;
export declare type SetWhitelistSaleEventFilter = TypedEventFilter<SetWhitelistSaleEvent>;
export declare type SetPublicSaleEvent = TypedEvent<[boolean], {
    status: boolean;
}>;
export declare type SetPublicSaleEventFilter = TypedEventFilter<SetPublicSaleEvent>;
export declare type StartProtocolEvent = TypedEvent<[
    BigNumber
], {
    initialSKRNOEach: BigNumber;
}>;
export declare type StartProtocolEventFilter = TypedEventFilter<StartProtocolEvent>;
export declare type ClaimKRNOEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], {
    id: BigNumber;
    user: string;
    amountOfKRNO: BigNumber;
}>;
export declare type ClaimKRNOEventFilter = TypedEventFilter<ClaimKRNOEvent>;
export declare type ClaimKlayEvent = TypedEvent<[
    string,
    BigNumber
], {
    user: string;
    totalKlay: BigNumber;
}>;
export declare type ClaimKlayEventFilter = TypedEventFilter<ClaimKlayEvent>;
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface GaiaOperation extends BaseContract {
    contractName: "GaiaOperation";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GaiaOperationInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        updateBuyBackFund(newBuyBackFund: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claim(ids: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimableKlay(ids: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber] & {
            totalKlay: BigNumber;
        }>;
        whitelistSale(overrides?: CallOverrides): Promise<[boolean]>;
        publicSale(overrides?: CallOverrides): Promise<[boolean]>;
        kronosStaking(overrides?: CallOverrides): Promise<[string]>;
        protocolStarted(overrides?: CallOverrides): Promise<[boolean]>;
        devFund(overrides?: CallOverrides): Promise<[string]>;
        withdrawKlay(recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPublicSale(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimKlayViaZap(ids: BigNumberish[], amounts: BigNumberish[], minAmount: BigNumberish, swapRouteArray: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimableKRNO(ids: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber] & {
            totalKRNO: BigNumber;
        }>;
        getKRNOBalance(id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        setWhitelist(users: string[], _tickets: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        isOwner(overrides?: CallOverrides): Promise<[boolean]>;
        klayKRNOLP(overrides?: CallOverrides): Promise<[string]>;
        sKRNO(overrides?: CallOverrides): Promise<[string]>;
        gaiaNFT(overrides?: CallOverrides): Promise<[string]>;
        mintGaiaNFTWithWhitelist(amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintGaiaNFT(amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        klaySwapFactory(overrides?: CallOverrides): Promise<[string]>;
        gonsForId(id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_buyBackFund: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialKRNOEach(overrides?: CallOverrides): Promise<[BigNumber]>;
        buyBackFund(overrides?: CallOverrides): Promise<[string]>;
        setWhitelistSale(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        whitelistTickets(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        emergencyWithdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        KRNO(overrides?: CallOverrides): Promise<[string]>;
        updateDevFund(newDevFund: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        gaiaPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        startProtocol(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    updateBuyBackFund(newBuyBackFund: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claim(ids: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimableKlay(ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
    whitelistSale(overrides?: CallOverrides): Promise<boolean>;
    publicSale(overrides?: CallOverrides): Promise<boolean>;
    kronosStaking(overrides?: CallOverrides): Promise<string>;
    protocolStarted(overrides?: CallOverrides): Promise<boolean>;
    devFund(overrides?: CallOverrides): Promise<string>;
    withdrawKlay(recipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPublicSale(status: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimKlayViaZap(ids: BigNumberish[], amounts: BigNumberish[], minAmount: BigNumberish, swapRouteArray: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimableKRNO(ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
    getKRNOBalance(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    setWhitelist(users: string[], _tickets: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    isOwner(overrides?: CallOverrides): Promise<boolean>;
    klayKRNOLP(overrides?: CallOverrides): Promise<string>;
    sKRNO(overrides?: CallOverrides): Promise<string>;
    gaiaNFT(overrides?: CallOverrides): Promise<string>;
    mintGaiaNFTWithWhitelist(amount: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintGaiaNFT(amount: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    klaySwapFactory(overrides?: CallOverrides): Promise<string>;
    gonsForId(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_buyBackFund: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialKRNOEach(overrides?: CallOverrides): Promise<BigNumber>;
    buyBackFund(overrides?: CallOverrides): Promise<string>;
    setWhitelistSale(status: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    whitelistTickets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    emergencyWithdraw(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    KRNO(overrides?: CallOverrides): Promise<string>;
    updateDevFund(newDevFund: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    gaiaPrice(overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    startProtocol(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        updateBuyBackFund(newBuyBackFund: string, overrides?: CallOverrides): Promise<void>;
        claim(ids: BigNumberish[], amounts: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        claimableKlay(ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        whitelistSale(overrides?: CallOverrides): Promise<boolean>;
        publicSale(overrides?: CallOverrides): Promise<boolean>;
        kronosStaking(overrides?: CallOverrides): Promise<string>;
        protocolStarted(overrides?: CallOverrides): Promise<boolean>;
        devFund(overrides?: CallOverrides): Promise<string>;
        withdrawKlay(recipient: string, overrides?: CallOverrides): Promise<void>;
        setPublicSale(status: boolean, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        claimKlayViaZap(ids: BigNumberish[], amounts: BigNumberish[], minAmount: BigNumberish, swapRouteArray: string[], overrides?: CallOverrides): Promise<BigNumber>;
        claimableKRNO(ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        getKRNOBalance(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setWhitelist(users: string[], _tickets: BigNumberish, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        isOwner(overrides?: CallOverrides): Promise<boolean>;
        klayKRNOLP(overrides?: CallOverrides): Promise<string>;
        sKRNO(overrides?: CallOverrides): Promise<string>;
        gaiaNFT(overrides?: CallOverrides): Promise<string>;
        mintGaiaNFTWithWhitelist(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        mintGaiaNFT(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        klaySwapFactory(overrides?: CallOverrides): Promise<string>;
        gonsForId(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_buyBackFund: string, overrides?: CallOverrides): Promise<void>;
        initialKRNOEach(overrides?: CallOverrides): Promise<BigNumber>;
        buyBackFund(overrides?: CallOverrides): Promise<string>;
        setWhitelistSale(status: boolean, overrides?: CallOverrides): Promise<void>;
        whitelistTickets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        emergencyWithdraw(overrides?: CallOverrides): Promise<void>;
        KRNO(overrides?: CallOverrides): Promise<string>;
        updateDevFund(newDevFund: string, overrides?: CallOverrides): Promise<void>;
        gaiaPrice(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        startProtocol(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "UpdateBuyBackFund(address)"(newBuyBackFund?: null): UpdateBuyBackFundEventFilter;
        UpdateBuyBackFund(newBuyBackFund?: null): UpdateBuyBackFundEventFilter;
        "UpdateDevFund(address)"(newDevFund?: null): UpdateDevFundEventFilter;
        UpdateDevFund(newDevFund?: null): UpdateDevFundEventFilter;
        "SetWhitelistSale(bool)"(status?: null): SetWhitelistSaleEventFilter;
        SetWhitelistSale(status?: null): SetWhitelistSaleEventFilter;
        "SetPublicSale(bool)"(status?: null): SetPublicSaleEventFilter;
        SetPublicSale(status?: null): SetPublicSaleEventFilter;
        "StartProtocol(uint256)"(initialSKRNOEach?: null): StartProtocolEventFilter;
        StartProtocol(initialSKRNOEach?: null): StartProtocolEventFilter;
        "ClaimKRNO(uint256,address,uint256)"(id?: BigNumberish | null, user?: string | null, amountOfKRNO?: null): ClaimKRNOEventFilter;
        ClaimKRNO(id?: BigNumberish | null, user?: string | null, amountOfKRNO?: null): ClaimKRNOEventFilter;
        "ClaimKlay(address,uint256)"(user?: string | null, totalKlay?: null): ClaimKlayEventFilter;
        ClaimKlay(user?: string | null, totalKlay?: null): ClaimKlayEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        updateBuyBackFund(newBuyBackFund: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claim(ids: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimableKlay(ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        whitelistSale(overrides?: CallOverrides): Promise<BigNumber>;
        publicSale(overrides?: CallOverrides): Promise<BigNumber>;
        kronosStaking(overrides?: CallOverrides): Promise<BigNumber>;
        protocolStarted(overrides?: CallOverrides): Promise<BigNumber>;
        devFund(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawKlay(recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPublicSale(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimKlayViaZap(ids: BigNumberish[], amounts: BigNumberish[], minAmount: BigNumberish, swapRouteArray: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimableKRNO(ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        getKRNOBalance(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setWhitelist(users: string[], _tickets: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        isOwner(overrides?: CallOverrides): Promise<BigNumber>;
        klayKRNOLP(overrides?: CallOverrides): Promise<BigNumber>;
        sKRNO(overrides?: CallOverrides): Promise<BigNumber>;
        gaiaNFT(overrides?: CallOverrides): Promise<BigNumber>;
        mintGaiaNFTWithWhitelist(amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintGaiaNFT(amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        klaySwapFactory(overrides?: CallOverrides): Promise<BigNumber>;
        gonsForId(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_buyBackFund: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialKRNOEach(overrides?: CallOverrides): Promise<BigNumber>;
        buyBackFund(overrides?: CallOverrides): Promise<BigNumber>;
        setWhitelistSale(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        whitelistTickets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        emergencyWithdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        KRNO(overrides?: CallOverrides): Promise<BigNumber>;
        updateDevFund(newDevFund: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        gaiaPrice(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        startProtocol(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        updateBuyBackFund(newBuyBackFund: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claim(ids: BigNumberish[], amounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimableKlay(ids: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        whitelistSale(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        publicSale(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        kronosStaking(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolStarted(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        devFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawKlay(recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPublicSale(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimKlayViaZap(ids: BigNumberish[], amounts: BigNumberish[], minAmount: BigNumberish, swapRouteArray: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimableKRNO(ids: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getKRNOBalance(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setWhitelist(users: string[], _tickets: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        klayKRNOLP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sKRNO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gaiaNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintGaiaNFTWithWhitelist(amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintGaiaNFT(amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        klaySwapFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gonsForId(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_buyBackFund: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialKRNOEach(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buyBackFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setWhitelistSale(status: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        whitelistTickets(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        emergencyWithdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        KRNO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateDevFund(newDevFund: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        gaiaPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        startProtocol(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=GaiaOperation.d.ts.map