import { createHelia } from 'helia'
import { json } from '@helia/json'

export default async function (ky2: any) { 
        
    const helia = await createHelia()
    const j = json(helia)

    const myImmutableAddress = await j.add({ hello: 'world' })

    console.log(await j.get(myImmutableAddress))

}
