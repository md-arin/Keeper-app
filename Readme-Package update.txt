Some students might be running higher versions of Node than shown in the videos. In this case, some of the packages included in the starting files might be incompatible with your version of Node.



One way to fix this is to use a package called npm-check-updates to update the listed dependencies' versions inside the starting files.

https://www.npmjs.com/package/npm-check-updates



To use it, after unzipping and cd'ing into the project directory, but before running npm install



Run:

npm install -g npm-check-updates



Then:

ncu -u



Then:

npm install



Then:

npm start

