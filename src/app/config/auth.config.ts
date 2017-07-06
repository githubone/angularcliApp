interface AuthConfig{
    clientID:string;
    domain: string;
    callbackURL: string;
    accessToken : string;
    idToken : string;
    expiresAt: string;
    responseType: string;
    scope: string;
}

export const AUTH_CONFIG : AuthConfig ={
    clientID: 'TeuhTi0T8hbxzifRfFtktLL4SFLipNRA',
    domain: 'mave.eu.auth0.com',
    callbackURL: 'http://localhost:4200/callback',
    accessToken: 'access_token',
    idToken : 'id_token',
    expiresAt: 'expires_at',
    responseType : 'token id_token',
    scope: 'openid'
}