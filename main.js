const { app, BrowserWindow, Tray, Menu, ipcMain } = require('electron');
const path = require('path');
const AutoLaunch = require('auto-launch');

let tray = null;
let window = null;
let currentURL = '';

const widgetAutoLauncher = new AutoLaunch({
  name: 'HLTB_Backloggd_Widget',
  path: app.getPath('exe'),
});

app.whenReady().then(() => {
  widgetAutoLauncher.isEnabled().then((isEnabled) => {
    if (!isEnabled) {
      widgetAutoLauncher.enable();
    }
  });

  tray = new Tray(path.join(__dirname, 'icon.ico'));

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'HowLongToBeat',
      click: () => createWindow('https://howlongtobeat.com')
    },
    {
      label: 'Backloggd',
      click: () => createWindow('https://www.backloggd.com')
    },
    { type: 'separator' },
    {
      label: 'Quitter',
      click: () => {
        if (window) window.destroy();
        app.quit();
      }
    }
  ]);

  tray.setToolTip('HLTB / Backloggd Widget');
  tray.setContextMenu(contextMenu);
});

function createWindow(url) {
  currentURL = url;

  if (window) {
    window.webContents.send('load-url', url);
    window.show();
    return;
  }

  window = new BrowserWindow({
    width: 420,
    height: 640,
    show: false,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true
    }
  });

  window.loadFile('index.html');

  window.once('ready-to-show', () => {
    window.webContents.send('load-url', url);
    window.show();
  });

  window.on('close', (e) => {
    e.preventDefault();
    window.hide();
  });
}

app.on('window-all-closed', (e) => {
  e.preventDefault();
});

ipcMain.on('close-window', () => {
  if (window) window.hide();
});