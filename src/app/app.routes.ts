import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BrowserUtils } from "@azure/msal-browser";
import { HomeComponent } from "./home/home.component";
import { LecturersComponent } from "./lecturers/lecturers.component";
import { ProfileComponent } from "./profile/profile.component";

export const routes: Routes = [
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "lecturers",
        component: LecturersComponent,
      },
      {
        path: "profile",
        component: ProfileComponent,
      },

];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, {
        // Don't perform initial navigation in iframes or popups
        initialNavigation:
          !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup()
            ? "enabledNonBlocking"
            : "disabled", // Set to enabledBlocking to use Angular Universal
      }),
    ],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}