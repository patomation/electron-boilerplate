# Electron Boilerplate


A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.


## USAGE

```bash
# Install dependencies
yarn install
# Run the app
yarn start
```

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
