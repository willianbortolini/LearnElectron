const { Tray } = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, '../', 'assets', 'bone.png')

function createTray() {
    const tray = new Tray(iconPath)
    tray.setToolTip('Insta Reminder')

    return tray
}

module.exports = createTray()