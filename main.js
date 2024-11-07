const { app, BrowserWindow, protocol, dialog } = require('electron');
const { ipcMain } = require('electron');
const path = require('path');

function createWindow() {
    win = new BrowserWindow({width: 800, height: 800, preload: path.join(__dirname, 'preload.js'),webPreferences: {
      nodeIntegration: true,
  }});
    win.loadFile('dist/kursova/browser/index.html');
  }

  app.whenReady().then(() => {
   
 
    createWindow()
    protocol.registerHttpProtocol('msalea250112-1b5a-4e78-9472-d2d6d5f1efb5', (request, callback) => {
      const url = new URL(request.url);
      console.log(url.hash)
      win.webContents.on('did-finish-load', ()=>{
        win.webContents.send('authcode', url.hash);
      })
     
    });

 
  })

 