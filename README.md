# Electron Boilerplate

The Electron + Webpack template that keeps simplicity in mind. 

## USAGE

```bash
# Install dependencies
npm install
# Run the app
npm run start
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
