// Package.js is a package script
// that will run electron-package/electron-zip-package with the correct os

const argv = require('yargs').argv
const { exec } = require('child_process')

// process.platform = 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'
const platform = process.platform
console.log('BUILDing for platform:', platform)
const platformOptions = {
  win32: {
    icon: 'assets/icons/win/icon.ico',
    arch: 'ia32'
  },
  linux: {
    icon: 'assets/icons/png/1024x1024.png',
    arch: 'x64'
  },
  darwin: { // Mac
    // TODO not sure if icon and arch are correct. copied from linux
    icon: 'assets/icons/png/1024x1024.png',
    arch: 'x64'
  },
  sunos: {},
  freebsd: {}
}

const command = argv.zip ? 'electron-zip-packager' : 'electron-packager'

const options = [
  '.', // Build directory root
  'sound-sampler', // App name
  '--overwrite',
  '--asar=true',
  `--platform=${platform}`,
  `--arch=${platformOptions[platform].arch}`,
  `--icon=${platformOptions[platform].icon}`,
  '--prune=true',
  '--out=release-builds',
  '--version-string.CompanyName=CE',
  '--version-string.FileDescription=CE',
  '--version-string.ProductName=Sound Sampler',
  '--ignore=^/src'
]

exec(command + ' ' + options.join(' '), (err, stdout, stderr) => {
  if (err) throw err
  if (stdout) console.log(stdout)
  if (stderr) console.log(stderr)
})
