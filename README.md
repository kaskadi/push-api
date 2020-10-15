![](https://img.shields.io/github/package-json/v/kaskadi/push-api)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/push-api?color=blue)

**GitHub Actions workflows status**

[![](https://img.shields.io/github/workflow/status/kaskadi/push-api/deploy?label=deployed&logo=Amazon%20AWS)](https://github.com/kaskadi/push-api/actions?query=workflow%3Adeploy)
[![](https://img.shields.io/github/workflow/status/kaskadi/push-api/build?label=build&logo=mocha)](https://github.com/kaskadi/push-api/actions?query=workflow%3Abuild)
[![](https://img.shields.io/github/workflow/status/kaskadi/push-api/syntax-check?label=syntax-check&logo=serverless)](https://github.com/kaskadi/push-api/actions?query=workflow%3Asyntax-check)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/push-api?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/push-api)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/push-api?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/push-api)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/push-api?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/push-api)

**LGTM**

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/push-api?label=code%20quality&logo=LGTM)](https://lgtm.com/projects/g/kaskadi/push-api/?mode=list&logo=LGTM)

<!-- You can add badges inside of this section if you'd like -->

****

<!-- automatically generated documentation will be placed in here -->
# API endpoints

The origin and root path for this API is: `https://api.klimapartner.net/push`

The following endpoints are defined in this API:
- [/public-key](#/public-key)
- [/register](#/register)

## `/public-key` <a name="/public-key"></a>

Supported methods:
- [GET](#public-key-GET)

### `GET` (target lambda → [get-public-key](#get-public-key)) <a name="public-key-GET"></a>

**Description:**

This endpoint returns the public key used in the push-notification protocol. **For now it only returns the public key related to the Kaskadi project!**

**Authorization:**

|   Type  | Identity source                                       |
| :-----: | :---------------------------------------------------- |
| Cognito | <ul><li>method.request.header.Authorization</li></ul> |

**Query string parameters:**

No query string parameters found for this method.

**Request body:**

No body found for this method.

**Examples:**

<details>
<summary>Example #1</summary>

_Request:_

```HTTP
GET https://api.klimapartner.net/push/public-key

Headers:
  Authorization: Bearer COGNITO_ACCESS_TOKEN
```

_Response:_

```HTTP
Status code:
  200

Headers:
  Access-Control-Allow-Origin: *

Body:
  {
    "publicKey": "kaskadi_push_notification_public_key"
  }
```
</details>

## `/register` <a name="/register"></a>

Supported methods:
- [POST](#register-POST)

### `POST` (target lambda → [register-sub](#register-sub)) <a name="register-POST"></a>

**Description:**

This endpoint allows a client to register for push-notification. The body should contain subscription data as defined [here](https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications#how_web_push_works).

**Authorization:**

|   Type  | Identity source                                       |
| :-----: | :---------------------------------------------------- |
| Cognito | <ul><li>method.request.header.Authorization</li></ul> |

**Query string parameters:**

No query string parameters found for this method.

**Request body:**

|     Key    | Default | Description                                                                            |
| :--------: | :-----: | :------------------------------------------------------------------------------------- |
| `endpoint` |         | Client endpoint for the push-notification system.                                      |
|   `keys`   |         | `Object` - set of keys used for authenticaton when pushing notification to the client. |

**Examples:**

<details>
<summary>Example #1</summary>

_Request:_

```HTTP
POST https://api.klimapartner.net/push/register

Headers:
  Authorization: Bearer COGNITO_ACCESS_TOKEN

Body:
  {
    "endpoint": "https://fcm.googleapis.com/fcm/send/dpH5lCsTSSM:APA91bHqjZxM0VImWWqDRN7U0a3AycjUf4O-byuxb_wJsKRaKvV_iKw56s16ekq6FUqoCF7k2nICUpd8fHPxVTgqLunFeVeB9lLCQZyohyAztTH8ZQL9WCxKpA6dvTG_TUIhQUFq_n",
    "keys": {
      "p256dh": "BLQELIDm-6b9Bl07YrEuXJ4BL_YBVQ0dvt9NQGGJxIQidJWHPNa9YrouvcQ9d7_MqzvGS9Alz60SZNCG3qfpk=",
      "auth": "4vQK-SvRAN5eo-8ASlrwA=="
    }
  }
```

_Response:_

```HTTP
Status code:
  201

Headers:
  Access-Control-Allow-Origin: *

Body:
  {
    "message": "Subscriptions successfully registered!"
  }
```
</details>

# API resources

The following lambda functions are used in this API:
- [register-sub](#register-sub)
- [get-public-key](#get-public-key)

The following layers are used in this API:
- [push-api-layer](#push-api-layer)

## register-sub <a name="register-sub"></a>

|     Name     | Sources                | Timeout |                      Handler                      | Layers                                              |
| :----------: | :--------------------- | :-----: | :-----------------------------------------------: | :-------------------------------------------------- |
| register-sub | <ul><li>HTTP</li></ul> | default | [handler](./lambdas/register-sub/register-sub.js) | <ul><li>[push-api-layer](#push-api-layer)</li></ul> |

See [configuration file](./serverless.yml) for more details.

## get-public-key <a name="get-public-key"></a>

|      Name      | Sources                | Timeout |                      Handler                      | Layers                                              |
| :------------: | :--------------------- | :-----: | :-----------------------------------------------: | :-------------------------------------------------- |
| get-public-key | <ul><li>HTTP</li></ul> | default | [handler](./lambdas/public-key/get-public-key.js) | <ul><li>[push-api-layer](#push-api-layer)</li></ul> |

See [configuration file](./serverless.yml) for more details.

## push-api-layer <a name="push-api-layer"></a>

### Description

Layer for push-api

### Dependencies

- `aws-es-client`, version: `1.0.2` ([see on NPM](https://www.npmjs.com/package/aws-es-client))
- `create-es-client` (local utility)

See [configuration file](./serverless.yml) for more details.

# Stack tags

You can use any tags (and their respective values) visible below to find ressources related to this stack on AWS. See [here](https://docs.amazonaws.cn/en_us/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) for more details.

| Tag          | Value    |
| :----------- | :------- |
| app          | kaskadi  |
| service      | push-api |
| logical-unit | push     |
| type         | http     |
<!-- automatically generated documentation will be placed in here -->

<!-- You can customize this template as you'd like! -->