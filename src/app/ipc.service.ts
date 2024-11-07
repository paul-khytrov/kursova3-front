import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ElectronService {
  private ipcRenderer = (window as any).electron?.ipcRenderer;

  constructor() {}

  send(channel: string, data: any) {
    if (!this.ipcRenderer) return;
    this.ipcRenderer.send(channel, data);
  }

  on(channel: string, listener: (event: any, ...args: any[]) => void) {
    if (!this.ipcRenderer) return;
    this.ipcRenderer.on(channel, listener);
  }

  once(channel: string, listener: (event: any, ...args: any[]) => void) {
    if (!this.ipcRenderer) return;
    this.ipcRenderer.once(channel, listener);
  }

  removeListener(channel: string, listener: (...args: any[]) => void) {
    if (!this.ipcRenderer) return;
    this.ipcRenderer.removeListener(channel, listener);
  }
  
}
