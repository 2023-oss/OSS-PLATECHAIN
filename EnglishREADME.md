
 <p  align="center">
<a  href="https://github.com/2023-oss/platechain"  target="_blank"  rel="noopener noreferrer">
<img src='https://github.com/osamhack2022/CLOUD_APP_IOT_KeepYourEndeavor_Moment/blob/main/images/logo.png?raw=true'/>
</a>
</p>
<h1  align="center">Plate Chain</h1>
<h4  align="center"></h4>

<p align="center">
<img src="https://img.shields.io/github/contributors/2023-oss/OSS-PLATECHAIN">
<img src="https://img.shields.io/github/languages/count/2023-oss/OSS-PLATECHAIN">
<img alt="GitHub license" src="https://img.shields.io/github/issues/2023-oss/OSS-PLATECHAIN">
<img alt="GitHub license" src="https://img.shields.io/github/issues-closed/2023-oss/OSS-PLATECHAIN">
<img src="https://img.shields.io/github/license/2023-oss/OSS-PLATECHAIN">
</p>
<br/>

It is a public blockchain based on 'Plate' web content compensation system and type scripts specialized for DID storage verification. Using Distributed P2P standard 'IPFS' to reduce fast data processing and network bandwidth. All data is encrypted and stored in 'Couchbase', the NoSQL database, so anyone who participates in the network can query block data from their own 'Plate Explorer'.

[Blockchain Explorer Demo](http://block.platechain.shop)

#### PEER NODE

Share the ledger with other peers and play a role in matching blockchain.

## How to install and run blockchain

The following environments are recommended

| service           | version  |
| ----------------- | -------- |
| **NodeJS**        | v16      |
| **helia**      | 3.2.x    |
| Couchbase  | v2       |
| Docker            | 20.10.14 |

There are two ways to run a node: 'npm' and 'docker'.

### How to run NODE

Download 'plateChain' from the [NPM Storage](https://www.npmjs.com/) 

```
$ npm install platechain
```
```
$ npm start
```

### How to run DOCKER

```
$ docker pull platechain
```
```
$ docker
```

## Plate Chain Principle of operation

1. By default, four Block Nodes are enabled as Docker-Compose.
2. Each node provides a blockchain explorer to enable real-time data verification.
3. When a request for adding Transaction to a node is received, it is stored in the Trasaction Pool of that node and shared with other nodes with IPFS Protocol
4. When the Mine operation is performed, the Transaction is collected, uploaded to Blockchain, and propagated to all nodes through the other IPSF's Gassip Protocol.
5. The user who performs the Mine operation will be rewarded with the corresponding public key.

## DID 

## REST API ( Node )

Peer nodes exchange blocks with other nodes at runtime. The database is stored in the Couchbase.
Information on other blocks is obtained from 'bootstrap' in 'libp2p' and connected.

### Get Blocks

API used to query the entire block stored on that node.

**Request**
`GET` `/v1/block?user=USERID`

```shell
curl -i -H 'Accept: application/json' http://block.platechain.shop/v1/block/
```

**Response**

```json
{
  "blocks": [
    {
        "_type": "Block",
        "data": {
      		// any data
    },
        "header": {
          "version": "1.0.0",
          "index": 1,
          "previousHash": "8E15155C5BACE388CBB750CF9724FF3CD63DF3CEED6419F9D5B134A36E01D062",
          "generated_time": "1663988978289",
          "merkleRoot": "B28C94B2195C8ED259F0B415AAEE3F39B0B2920A4537611499FA044956917A21",
          "event_id": "923fe3dc-1b66-4cd0-b0d1-f7796e36b463",
          "organization": "plate"
        },
        "id": "1d7a93ba-e495-44e7-9f96-ebb1d101531a"
      },
      {
        "_type": "Block",
        "data" {
      		// any Data
    		}
        "header": {
          "version": "1.0.0",
          "index": 0,
          "previousHash": "0000000000000000000000000000000000000000000000000000000000000000",
          "generated_time": "1663897055",
          "merkleRoot": "B28C94B2195C8ED259F0B415AAEE3F39B0B2920A4537611499FA044956917A21",
          "event_id": "493fe070-5fb1-411b-ac59-b968ff34cae5",
          "organization": "plate"
        },
        "id": "ea8b5ef8-ccc7-475a-b740-73961afcdc73"
      }
  ]
```

### Add Transaction

**Request**
`POST` `/v1/Trasnation/`

```json
{
  "data": {
    // any Data
  }
}
```

**Response**

```json
{
  "header": {
    "version": "1.0.0",
    "index": 1,
    "previousHash": "8E15155C5BACE388CBB750CF9724FF3CD63DF3CEED6419F9D5B134A36E01D062",
    "generated_time": "1663988978289",
    "merkleRoot": "B28C94B2195C8ED259F0B415AAEE3F39B0B2920A4537611499FA044956917A21",
    "event_id": "923fe3dc-1b66-4cd0-b0d1-f7796e36b463",
    "organization": "plate"
  },
  "data": [
    {
      // any Data
    }
  ],
  "id": "1d7a93ba-e495-44e7-9f96-ebb1d101531a",
  "_type": "Block"
}
```

## Blockchain Explorer

Provides an explorer to easily look up blockchain data and check its status.

The explorer was developed using 'React'.

#### Login Page

![](../images/bc-explorer2.png)

#### Main Page

![](../images/bc-explorer1.png)
