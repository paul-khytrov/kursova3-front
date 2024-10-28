
import { NgModule } from "@angular/core";


import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { InteractionType } from "@azure/msal-browser";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MsalModule, MsalRedirectComponent, MsalService, MsalInterceptor, MsalGuard, MSAL_INSTANCE } from "@azure/msal-angular";
import { PublicClientApplication } from "@azure/msal-browser";

const isIE =
  window.navigator.userAgent.indexOf("MSIE ") > -1 ||
  window.navigator.userAgent.indexOf("Trident/") > -1;

  export function MSALInstanceFactory(): PublicClientApplication {
    return new PublicClientApplication({
      auth: {
        clientId: "ea250112-1b5a-4e78-9472-d2d6d5f1efb5", // Application (client) ID from the app registration
        authority:
          "https://login.microsoftonline.com/70a28522-969b-451f-bdb2-abfea3aaa5bf", // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
        redirectUri: "msalea250112-1b5a-4e78-9472-d2d6d5f1efb5://auth", // This is your redirect URI
      }
    });
  }


@NgModule({
  declarations: [],
  imports: [

    MsalModule.forRoot(
      MSALInstanceFactory(),
      {
        interactionType: InteractionType.Redirect, // MSAL Guard Configuration
        authRequest: {
          scopes: ['user.read']
        },
        loginFailedRoute: "/login-failed"
      },

      {
        interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map([
          ['Enter_the_Graph_Endpoint_Here/v1.0/me', ['user.read']]
        ])
      })
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },

    MsalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalGuard],
  bootstrap: [MsalRedirectComponent],
})
export class AppModule { }