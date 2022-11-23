import { ipcRenderer, contextBridge } from 'electron'

contextBridge.exposeInMainWorld('rpc', {
  sendMessage: (message: string) => {
    ipcRenderer.send('message', message)
  },
  onReceiveMessage: (listener: (message: string) => void) => {
    ipcRenderer.on('message', (_event, message) => listener(message))
  },
})
