import { Router } from "express";
import {Wallet} from '../../../src/wallet.js';
import { ReceivedTx } from "../../../src/wallet.js";
import {Wallet as W} from '../../../wallet/wallet.js';
import { Transaction } from "../../../src/transaction/transaction.js";

const router: Router = Router();

router.post('/', (req: any, res) => {

    const { method } = req.body;

    if( method === 'remitance'){
        const {
            sender: {account, publicKey},
            received,
            amount
        } = req.body;
    
        /** Remitenace */
        const signature = W.createSign(req.body);
    
        const txObject = {
            sender: publicKey,
            received,
            amount,
            signature,
        }
    
        try{
            const receivedTx: ReceivedTx = txObject;
    
            const tx = Wallet.sendTransaction(receivedTx, req.sdk.getUnspentTxOuts());
    
            req.sdk.appendTransactionPool(tx);
    
            req.sdk.updateUTXO(tx);
    
            res.json({tx: tx});
    
        } catch(e){
            if( e instanceof Error){ 
                console.log(e.message);
                res.status(500).json({
                    error: e.message
                });
            }
        }    
    }
    else{

        /** DID  */
        const {data} = req.body;

        if( !data ) {
            res.status(400).json({
                error: {
                    message: "'data' field can not empty"
                }
            })
        }

        const tx: Transaction = Transaction.createDIDTransaction(data);

        req.sdk.appendTransactionPool(tx);

        res.json({tx: tx});
        
    }
   
    
});

export default router;