# JWT

# Authentication

### Token based authentication + protected (authorized) API routes using JSON Web Token

JWT is a popular way to implement authentication and authorization in web applications.

# Definition

JWT is a compact and self-contained JSON object that contains information about an entity, such as a user, and is signed by the server to verify its authenticity.

# Structure

JWT consists of three parts separated by dots: header, payload, and signature. The header defines the type of token and the algorithm used to sign it, the payload contains the claims (e.g., user ID, expiration date), and the signature is used to verify that the sender of the JWT is who it claims to be.

# Encoding

JWT is encoded to a string and can be passed in an HTTP header, in a URL parameter, or in a cookie.

# Stateless

JWT is stateless, meaning that it doesn't rely on the server to maintain the state of the token. Instead, all the information required to verify the token is contained within the token itself.

# Security

JWT is signed, not encrypted, meaning that the payload is readable by anyone who has access to the token. Sensitive information should not be included in the payload, and should be stored on the server.

# Verification

The server verifies the signature of the JWT using the same secret used to sign it to ensure that the token has not been tampered with.

# Scalability

JWT can be easily scaled to multiple servers, as the server does not need to maintain a session state.

# Working

An overview of how JWT Auth works in a full stack application

1. **Server-side setup:** On the server-side, a secret key is generated and used to sign the JWT, which is sent to the client after a successful login. The secret key is also used to verify the signature of the JWT on subsequent requests to ensure that it has not been tampered with.
2. **Login:** During the login process, the client sends the login credentials to the server, which validates the credentials and generates a JWT if the credentials are correct. The JWT is then sent to the client and stored in local storage or as a cookie.
3. **Verifying JWT:** On subsequent requests, the client sends the JWT along with the request. The server verifies the signature of the JWT using the secret key to ensure that it has not been tampered with. If the JWT is valid, the server grants access to the requested resource.
4. **Protecting routes:** On the client-side, React components that need to be protected can be wrapped in a Higher Order Component (HOC) that checks the presence and validity of the JWT before rendering the component. On the server-side, Express routes can be protected using middleware that verifies the JWT and only allows access to the resource if the JWT is valid.
5. **Refreshing JWT:** In some cases, the JWT may need to be refreshed if it is about to expire. A new JWT can be obtained by sending a request to the server with the current JWT, which is verified and used to generate a new JWT.

## Access Tokens and Refresh Tokens

Access tokens and refresh tokens are two types of JWTs used in authentication.

### Access Tokens

- Used to grant access to resources and APIs
- Typically have a short lifespan (a few hours or minutes)
- Stored on the client-side (e.g., in a cookie or local storage)
- Sent with every request to a protected resource or API
- Verified on the server to determine if the client has permission to access the requested resource

### Refresh Tokens

- Used to request a new access token when the current one expires
- Typically have a longer lifespan (a few days or weeks)
- Stored on the server or in a secure location on the client
- Verified on the server to determine if the client is allowed to request a new access token.

Access tokens are used to grant access to resources, while refresh tokens are used to request new access tokens when the current one expires. Access tokens have a short lifespan and are stored on the client, while refresh tokens have a longer lifespan and are stored on the server or a secure location on the client.
