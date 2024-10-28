const { app, BrowserWindow, protocol, dialog } = require('electron');

function createWindow() {
    win = new BrowserWindow({width: 800, height: 800});
    win.loadFile('dist/kursova/browser/index.html');
  }

  app.whenReady().then(() => {

     // Ensure your custom protocol is properly registered
 
    createWindow()
  })

  app.on('open-url', (event, url) => {
    dialog.showMessageBox('Received URL:', url)
    // event.preventDefault();
    // console.log('Received URL:', url);
  
    // // Extract the code from the URL hash
    // const code = new URL(url).hash.split('=')[1];
    // console.log('Extracted Code:', code);
  
    // // Send the code to the renderer process (Angular app)
    // mainWindow.webContents.send('auth-code', code);
  });