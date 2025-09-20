export interface ResponseAuth {
  "tokenValue": string,
  "issuedAt": string,
  "expiresAt": string,
  "headers": {
    "alg": string
  },
  "claims": {
    "login": string,
    "exp": string
  },
  "id": string,
  "subject": string,
  "issuer": string,
  "notBefore": string,
  "audience": string
}