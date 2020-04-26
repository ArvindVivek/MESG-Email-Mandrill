# Encrypt &amp; Decrypt (ID: encrypt)



## Contents

- [Installation](#Installation)
  - [MESG SDK](#MESG-SDK)
  - [Deploy the Service](#Service)
- [Definitions](#Definitions)
  - [Tasks](#Tasks)
    - [encrypt](#encrypt)
    - [decrypt](#decrypt)
    - [generate](#generate)

## Installation

### MESG SDK

This service requires [MESG SDK](https://github.com/mesg-foundation/engine) to be installed first.

You can install MESG SDK by running the following command or [follow the installation guide](https://docs.mesg.com/guide/start-here/installation.html).

```bash
npm install -g mesg-cli
```

### Deploy the Service

To deploy this service, go to [this service page](https://marketplace.mesg.com/services/encrypt) on the [MESG Marketplace](https://marketplace.mesg.com) and click the button "get/buy this service".

## Definitions


### Tasks

<h4 id="encrypt">encrypt</h4>

Task key: `encrypt`



##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **publicKey** | `publicKey` | `String` |  |
| **data** | `data` | `String` |  |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **encryptedData** | `encryptedData` | `String` |  |
<h4 id="decrypt">decrypt</h4>

Task key: `decrypt`



##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **privateKey** | `privateKey` | `String` |  |
| **passphrase** | `passphrase` | `String` |  |
| **encryptedData** | `encryptedData` | `String` |  |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **data** | `data` | `String` |  |
<h4 id="generate">generate</h4>

Task key: `generate`



##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **passphrase** | `passphrase` | `String` |  |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **publicKey** | `publicKey` | `String` |  |
| **privateKey** | `privateKey` | `String` |  |

