import SHA256 from 'crypto-js/sha256.js';
import { TxIn } from "./txin.js";
import { TxOut } from "./txout.js";
import { UnspentTxOut } from "./unspentTxOut.js";

export class Transaction {
    public hash: string;
    public txIns: TxIn[];
    public txOuts: TxOut[];
    public data: any;
    public method: string;

    constructor(_txIns: TxIn[], _txOuts: TxOut[], data: any, method: string){
        this.txIns = _txIns;
        this.txOuts = _txOuts;
        this.hash = this.createTransactionHash();
        this.data = data;
        this.method = method;
    }

    createTransactionHash(): string {
        const txoutContent: string = this.txIns.map((v) => Object.values(v).join('')).join('');
        const txinContent: string = this.txOuts.map((v) => Object.values(v).join('')).join('');

        console.log(txinContent, txoutContent);

        return SHA256(txinContent + txoutContent).toString();
    }

    createUTXO(): UnspentTxOut[] {
        const uxto: UnspentTxOut[] = this.txOuts.map((txOut: TxOut, index: number) => {
            return new UnspentTxOut(this.hash, index, txOut.account, txOut.amount);
        });

        return uxto;
    }

    static createTransaction(_receivedTx: any, _myUTXO: UnspentTxOut[]): Transaction {
        const { sum, txIns } = TxIn.createTxIns(_receivedTx, _myUTXO);
        const txOuts: TxOut[] = TxOut.createTxOuts(sum, _receivedTx);

        const tx = new Transaction(txIns, txOuts, "test tx", 'remitence');

        return tx;
    }

    static createDIDTransaction(data: any): Transaction {
        const tx = new Transaction([], [], data, 'did');

        return tx;
    }
}