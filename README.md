# Electron Boilerplate

## USAGE

```bash
# Install dependencies
yarn install
# Run the app
yarn start
```

### Start Development:
```
yarn start
```
Runs electron and webpack dev server

### A: PACKAGE INSTALLER
Build webpack:
```
yarn webpack build
```
Make exe and installer
```
yarn make
```
### B: Just Build BINARY
Build webpack and package binary
```
yarn build
```

# Build Structure
webpack.config.js
looks in app/src/ for index.js and builds bundle from imports
Sass and js modules get imported here
webpack copies index.html and builds bundle.js in app/dist folder
app/electron.prod.js looks for files in the webpack created app/dist folder. 

# Dev Structure
webpack dev server grabs app/src/index.js and index.html and serves files on localhost:8080/index.html
app/electron.dev.js looks for index hosted on localhost:8080

## Troubleshooting
Chrome Error
```
You need to make sure that /node_modules/chrome-sandbox is owned by root and has mode 4755.
```
Solution:
```
sudo chown root:$USER /node_modules/chrome-sandbox
sudo chmod 4755 /onode_modules/chrome-sandbox
```
