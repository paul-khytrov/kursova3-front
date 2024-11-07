// AuthService (auth.service.ts)
import { Injectable } from '@angular/core';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private msalInstance: IPublicClientApplication;

  constructor() {
    this.msalInstance = new PublicClientApplication({
      auth: {
        clientId: 'ea250112-1b5a-4e78-9472-d2d6d5f1efb5',
        authority: 'https://login.microsoftonline.com/70a28522-969b-451f-bdb2-abfea3aaa5bf',
        redirectUri: 'msalea250112-1b5a-4e78-9472-d2d6d5f1efb5://auth',
      },
    });
  }

  acquireTokenByCode(authCodeRequest: any) {
    return this.msalInstance.acquireTokenByCode(authCodeRequest);
  }
}
