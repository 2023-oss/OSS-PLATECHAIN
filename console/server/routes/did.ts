import { Router } from "express";
import {Wallet} from '../../../src/wallet.js';
import { ReceivedTx } from "../../../src/wallet.js";
import {Wallet as W} from '../../../wallet/wallet.js';
import { Transaction } from "../../../src/transaction/transaction.js";
import { Block } from "../../../src/blockchain/block.js";

const router: Router = Router();

router.get('/', async(req: any, res) => {
    //const { did } = req.params;
    const { did } = req.query;

    const {rows} = await req.db.getBlocks();

    rows.forEach((block: Block) => {
        block.data.forEach( (tx : any) => {
            const data = tx.data
            if( data ){
                if( data.document ){
                    if( data.document.id === did){
                        const auth = data.document.authentication[0]
                        res.json({publicKey: auth.publicKeyMultibase})
                    }
                }
            }
        })
    })
    
    res.json({did: 'notfound'});
});

export default router;