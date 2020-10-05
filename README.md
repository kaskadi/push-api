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

The following endpoints are defined in this API:
- [/register](#/register)
- [/public-key](#/public-key)

## `/register` (target lambda → [register-sub](#register-sub)) <a name="/register"></a>

Supported methods:
- [POST](#POST)

### `POST`

**Description:**

This endpoint allows a client to register for push-notification. The body should contain subscription data as defined [here](https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications#how_web_push_works).

**Query string parameters:**

No query string parameters found for this method.

**Request body:**

|     Key    | Default | Description                                                                            |
| :--------: | :-----: | :------------------------------------------------------------------------------------- |
| `endpoint` |         | Client endpoint for the push-notification system.                                      |
|   `keys`   |         | `Object` - set of keys used for authenticaton when pushing notification to the client. |

_Example request:_

```HTTP
POST /register

{
  "endpoint": "endpoint_value",
  "keys": "keys_value"
}
```

## `/public-key` (target lambda → [get-public-key](#get-public-key)) <a name="/public-key"></a>

Supported methods:
- [GET](#GET)

### `GET`

**Description:**

This endpoint returns the public key used in the push-notification protocol.

**Query string parameters:**

No query string parameters found for this method.

**Request body:**

No body found for this method.

_Example request:_

```HTTP
GET /public-key
```

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

- `aws-es-client`, version: `^1.0.2` ([see on NPM](https://www.npmjs.com/package/aws-es-client))
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