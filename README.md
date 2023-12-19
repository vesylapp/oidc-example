# oidc-example

> 🔓 Example of integrating with VESYL using OpenID Connect

## Overview

VESYL Offers an OpenID Connect (OIDC) endpoint for authenticating users. This example demonstrates a simple integration with the OIDC endpoint to authenticate a user and retrieve an access token.

The access token can then be used to access the VESYL API and act on behalf of the user.

The example uses Node.js, but the same principles apply to any language or framework.

## Credentials

To start integrating with VESYL's Authentication service, fist get in touch with us at `developers@vesyl.com` to get your client ID and secret set up.

## Introspection

VESYL's Authentication exponses a [token introspection endpoint](https://www.oauth.com/oauth2-servers/token-introspection-endpoint/):

```
https://auth.test.vesyl.com/.well-known/openid-configuration
```

## Branding

**Colors**

- Accent (Yellow): <span style="padding:1px;height:6px;background:#EDFC33">#EDFC33</span>
- Background (Black): <span style="padding:1px;height:6px;background:#000000;color:#fff">#000000</span>
- Foreground (White): <span style="padding:1px;height:6px;color:#FFFFFF;background:#cecece">#FFFFFF</span>

**Logo SVG (yellow)**

```xml
<svg width="25" height="17" viewBox="0 0 50 34" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M33.3003 0.453231V34L50 17.3005L33.3003 0.453231ZM16.6007 17.3005L33.3003 34H16.7984L0 17.2016L16.7484 0.453231H33.3003L16.6007 17.3005Z"
    fill="#EDFC33"
  />
</svg>
```

**VESYL Button**

```html
<style>
  .vesyl-button {
    background-color: #000;
    color: #fff;

    padding: 0.5rem 1rem;
    cursor: pointer;

    white-space: nowrap;
    vertical-align: middle;
    user-select: none;

    border-radius: 0.25rem;
    border: 1px solid transparent;

    font-size: 1rem;
    font-weight: 700;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 0.5px;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .vesyl-button:hover {
    background-color: #2f2f2f;
  }
</style>

<a
  class="vesyl-button"
  href="https://auth.vesyl.com/auth?client_id=<CLIENT_ID>&response_type=code&state=<STATE>&redirect_uri=<REDIRECT_URI>&scope=openid%20offline_access"
>
  <!-- Logo Icon -->
  <svg
    width="25"
    height="17"
    viewBox="0 0 50 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M33.3003 0.453231V34L50 17.3005L33.3003 0.453231ZM16.6007 17.3005L33.3003 34H16.7984L0 17.2016L16.7484 0.453231H33.3003L16.6007 17.3005Z"
      fill="#EDFC33"
    />
  </svg>

  VESYL
</a>
```

## Help

If you have any questions, please get in touch with us at `developers@vesyl.com`. We are happy to help!

## License

MIT - [VESYL](https://vesyl.com)
