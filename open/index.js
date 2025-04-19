module.exports = (url) => childProcess.exec(((process.platform === "win32") ? `start "` : ((process.platform === "darwin") ? `open "` : `xdg-open "`)) + url + "`", (process.platform === "win32") ? {
  shell: "powershell.exe"
} : {});