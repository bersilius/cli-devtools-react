import uuid from 'uuid/v4'

const electron = window.require('electron')
const { ipcRenderer } = electron

const run = ({ path, cmd, args }, onData, onError, onComplete) => {
  const id = uuid()
  
  ipcRenderer.on(`${id}-data`, onData)
  
  ipcRenderer.on(`${id}-error`, onError)
  
  ipcRenderer.on(`${id}-complete`, onComplete)

  ipcRenderer.send('cli-run', { id, path, cmd, args })
}

export default {
  run
}
