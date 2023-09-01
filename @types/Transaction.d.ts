declare interface ITxOut {
    account: string;
    amount: number;
}

declare interface ITxIn {
    txOutId: string;
    txOutIndex: number;
    signature?: string | undefined;
}

declare interface ITransaction {
    hash: string;
    txOuts: ITxOut[];
    txIns: ITxIn[];
    /** Method remittance | DID */
    method: string;
    data: any;
}

declare interface IUnspentTxOut {
    txOutId: string;
    txOutIndex: number;
    account: string;
    amount: number;
}