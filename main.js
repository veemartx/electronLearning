const { app, BrowserWindow ,Menu, ipcMain,net ,electron} = require('electron');

// get the file system 
const fs=require('fs');


function createLisenceWindow () {
    // Create the browser window.
    let win = new BrowserWindow({
      width:700,
      height: 500,
      frame:false,
      webPreferences: {
        nodeIntegration: true
      }
    })
  
    // and load the index.html of the app.
    win.loadFile('main.html')
  }


  app.whenReady().then(createLisenceWindow)