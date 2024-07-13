const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'com.tsr.dzy.getskin',
        copyright: 'Copyright © tsrdzy',
        asar: true,
        win: {
          icon: `./logo.png`,
          target: ['nsis'],
        },
        nsis: {
          oneClick: false,
          perMachine: true,
          allowToChangeInstallationDirectory: true,
          deleteAppDataOnUninstall: true,
          installerIcon: './favicon.ico',
          uninstallerIcon: './favicon.ico',
          installerHeaderIcon: './favicon.ico',
          createDesktopShortcut: true,
          createStartMenuShortcut: true
        }
      }
    }
  }
})
