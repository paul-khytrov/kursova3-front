import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { app, BrowserWindow, IpcRenderer } from 'electron'
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';









@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
   
    RouterOutlet,
    RouterLink,
  ],
})
export class AppComponent implements OnInit, OnDestroy {


  private ipcR!: IpcRenderer
  constructor() {
    if ((<any>window).require) {
      try {
        this.ipcR = (<any>window).require('electron').ipcRenderer
      } catch (error) {
        throw error
      }
    } else {
      console.warn('Could not load electron ipc')
    }
  }

  

  loginHandler()
  {
    
    this.ipcR.send("LOGIN")
  }

  
  temp: any;
  
  ngOnInit(): void {

  this.ipcR.on("LOGIN_RESPONSE", (listener, acc)=>{
    this.temp = acc;
    console.log(acc)
  })
    

   
  };
  ngOnDestroy(): void {
   
  };


 
}