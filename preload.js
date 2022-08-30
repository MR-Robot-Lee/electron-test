const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('comm', {
    ping: () => ipcRenderer.invoke('ping')
});




window.addEventListener('DOMContentLoaded', () => {
    console.log(process.versions, process.platform)
    
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text;
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency]);
    }
})