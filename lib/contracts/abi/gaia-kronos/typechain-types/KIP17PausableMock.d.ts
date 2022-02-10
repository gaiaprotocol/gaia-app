import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface KIP17PausableMockInterface extends utils.Interface {
    contractName: "KIP17PausableMock";
    functions: {
        "supportsInterface(bytes4)": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "onlyPauserMock()": FunctionFragment;
        "unpause()": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "isPauser(address)": FunctionFragment;
        "exists(uint256)": FunctionFragment;
        "paused()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "removePauser(address)": FunctionFragment;
        "renouncePauser()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "addPauser(address)": FunctionFragment;
        "pause()": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getApproved", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "onlyPauserMock", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isPauser", values: [string]): string;
    encodeFunctionData(functionFragment: "exists", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "removePauser", values: [string]): string;
    encodeFunctionData(functionFragment: "renouncePauser", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "addPauser", values: [string]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onlyPauserMock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removePauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renouncePauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addPauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    events: {
        "Paused(address)": EventFragment;
        "Unpaused(address)": EventFragment;
        "PauserAdded(address)": EventFragment;
        "PauserRemoved(address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauserAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauserRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
}
export declare type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export declare type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export declare type PauserAddedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PauserAddedEventFilter = TypedEventFilter<PauserAddedEvent>;
export declare type PauserRemovedEvent = TypedEvent<[string], {
    account: string;
}>;
export declare type PauserRemovedEventFilter = TypedEventFilter<PauserRemovedEvent>;
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    from: string;
    to: string;
    tokenId: BigNumber;
}>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export declare type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], {
    owner: string;
    operator: string;
    approved: boolean;
}>;
export declare type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface KIP17PausableMock extends BaseContract {
    contractName: "KIP17PausableMock";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: KIP17PausableMockInterface;
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
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onlyPauserMock(overrides?: CallOverrides): Promise<[void]>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mint(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isPauser(account: string, overrides?: CallOverrides): Promise<[boolean]>;
        exists(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        removePauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renouncePauser(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        addPauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(to: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
    };
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onlyPauserMock(overrides?: CallOverrides): Promise<void>;
    unpause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mint(to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    burn(tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;
    exists(tokenId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    removePauser(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renouncePauser(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    addPauser(account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pause(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(to: string, approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        approve(to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        onlyPauserMock(overrides?: CallOverrides): Promise<void>;
        unpause(overrides?: CallOverrides): Promise<void>;
        mint(to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        burn(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;
        exists(tokenId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        removePauser(account: string, overrides?: CallOverrides): Promise<void>;
        renouncePauser(overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        addPauser(account: string, overrides?: CallOverrides): Promise<void>;
        pause(overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(to: string, approved: boolean, overrides?: CallOverrides): Promise<void>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
        "PauserAdded(address)"(account?: string | null): PauserAddedEventFilter;
        PauserAdded(account?: string | null): PauserAddedEventFilter;
        "PauserRemoved(address)"(account?: string | null): PauserRemovedEventFilter;
        PauserRemoved(account?: string | null): PauserRemovedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
        "Approval(address,address,uint256)"(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        Approval(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
    };
    estimateGas: {
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onlyPauserMock(overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mint(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isPauser(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        exists(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        removePauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renouncePauser(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        addPauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(to: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onlyPauserMock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mint(to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isPauser(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exists(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removePauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renouncePauser(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addPauser(account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(to: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=KIP17PausableMock.d.ts.map