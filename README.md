# Email Mandrill

Send Email with Mandrill. This service requires the env &#x60;MAILCHIMP_API_KEY&#x60; to contain a Mandrill API key that you can create here https://mailchimp.com

## Contents

- [Installation](#Installation)
  - [MESG SDK](#MESG-SDK)
  - [Deploy the Service](#Service)
- [Definitions](#Definitions)
  - [Tasks](#Tasks)
    - [Send](#send)

## Installation

### MESG SDK

This service requires [MESG SDK](https://github.com/mesg-foundation/engine) to be installed first.

You can install MESG SDK by running the following command or [follow the installation guide](https://docs.mesg.com/guide/start-here/installation.html).

```bash
npm install -g mesg-cli
```

### Deploy the Service

To deploy this service, go to [this service page](https://marketplace.mesg.com/services/email-sendgrid) on the [MESG Marketplace](https://marketplace.mesg.com) and click the button "get/buy this service".

## Definitions


### Tasks

<h4 id="send">Send</h4>

Task key: `send`

Send email with Mandrill

##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **From** | `from` | `String` | The account to send the email from |
| **To** | `to` | `String` | The recipient of the email |
| **Subject** | `subject` | `String` | The subject of the email |
| **Text** | `text` | `String` | **`optional`** The text of the email |
| **HTML** | `html` | `String` | **`optional`** The html content of the email |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Status** | `status` | `Number` | Status returned by the Sendgrid API |
