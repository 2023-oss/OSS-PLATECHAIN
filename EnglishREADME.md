
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

`Plate` 웹 콘텐츠 보상 시스템과 DID 저장 검증에 특화된 타입스크립트를 기반 퍼블릭 블록체인입니다. 분산형 P2P 표준 `IPFS` 를 활용하여 빠른 데이터 처리와 네트워크 대역폭을 절감해줍니다 모든 데이터는 암호화 되어 NoSQL Database 인`Couchbase`에 저장되여 네트워크에 참여하는 모든 사용자는  자체적으로 제공하는 `Plate Explorer`에서 누구나 블록데이터를 조회할 수 있습니다.

[블록체인 탐색기 데모](http://block.platechain.shop)

#### 피어 노드

다른 피어와 원장을 공유하며 블록체인을 일치시키는 역할을 진행합니다.

## 블록체인 설치 및 실행 방법

아래와 같은 환경을 권장합니다.

| service           | version  |
| ----------------- | -------- |
| **NodeJS**        | v16      |
| **helia**      | 3.2.x    |
| Couchbase  | v2       |
| Docker            | 20.10.14 |

노드 실행방법은 `npm` 과 `docker` 두 가지 방식이 있습니다.

### 노드 실행 방법

[NPM 저장소](https://www.npmjs.com/) 에서 `plate Chain`을 다운 받습니다.

```
$ npm install platechain
```
```
$ npm start
```

### 도커 실행 방법

```
$ docker pull platechain
```
```
$ docker
```

## Plate Chain 동작 원리

1. 기본적으로 4개의 Block Node 가 Docker-Compose 로 활성화되어있습니다.
2.  각각의 노드는 블록체인 탐색기를 제공하여 실시간 데이터 확인이 가능합니다.
3. 노드에 Transaction 이 추가요청이 들어오면 해당 노드의 Trasaction Pool 에 저장하고 IPFS Protocol 로 다른 노드와 공유합니다
4. Mine 작업이 수행되면 Transaction 을 모아서 Blockchain 에 업로드 후 다른 IPSF 의 Gassip Protocol 을 통해서 모든 노드에게 전파시킵니다. 
5. Mine 작업을 수행한 유저에게는 해당 퍼블릭키에 보상을 지급합니다.

## DID 

## REST API ( Node )

피어노드는 실행시  블록을 다른 노드들과 주고받습니다. 데이터베이스는 Couchbase 에 저장됩니다.
다른 블럭의 정보는 `libp2p` 의 `bootstrap` 에서 받아온 뒤 연결합니다.

### Get Blocks

해당 노드에 저장되어있는 전체 블록을 조회할 때 사용하는 API 입니다.

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

블록체인 데이터를 손쉽게 조회하고 상태를 확인할 수 있는 탐색기를 제공합니다.

탐색기는 `React`를 사용해서 개발했습니다.

#### 로그인 페이지

![](../images/bc-explorer2.png)

#### 메인페이지

![](../images/bc-explorer1.png)
