# CMPE280_project
Group project
## Install Enviornment
### 1. Install Node.js

download nodejs installer according to your OS

https://nodejs.org/en/download/

Check node is successfully installed, type following code in cmd/terminal 
```
node -v
```

### 2. Install npm
**normally, npm is installed after installing node**

To test whether npm is installed, type `npm -v` in cmd/terminal 

*If installed, skip this step!*

>On Mac OS
```
sudo npm install npm -g
```

>On Windows

Open cmd using administrator
```
npm install -g
```

## Run app

**Make SURE you cloned or downloaded project folder**

In the root directory, you will see this structure:

```
|- bin
|- node_modules
|- public
|- routes
|- views
|app.js
|package.json
|README.md
```

### 1. Install modules
Open cmd or terminal at the root directory of project. (Mac OS might ask for sudo)

```
npm install
```

### 2. Start server

Open cmd or terminal at the root directory of project
```
npm start
```
Open any browser and type in `localhost:3000`
