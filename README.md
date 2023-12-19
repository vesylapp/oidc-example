# oidc-example

> 🔓 Example of integrating with VESYL using OpenID Connect

## Overview

VESYL Offers an OpenID Connect (OIDC) endpoint for authenticating users. This example demonstrates a simple integration with the OIDC endpoint to authenticate a user and retrieve an access token.

The access token can then be used to access the VESYL API and act on behalf of the user.

The example uses Node.js, but the same principles apply to any language or framework.

## Before you start

To start integrating with VESYL's authentication service, fist get in touch with us at `developers@vesyl.com` to get your client ID and secret.

## Introspection

VESYL's Authentication exponses an [introspection endpoint](https://www.oauth.com/oauth2-servers/token-introspection-endpoint/):

```
https://auth.test.vesyl.com/.well-known/openid-configuration
```