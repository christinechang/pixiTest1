README 
note - firefox allows anima
chrome blocks local file access in browser - see no images
    - need to host your files off server
    - can use nodejs (in directory of project )
       > npm install -g http-server
       > http-server                             <<<<<<<<<<<<<<<<<<<<<< not how i run it. see below
    - copy one of urls and paste


    helper class
    renderer 
-------------------------------------------
https://www.youtube.com/watch?v=mCbyr8mGNRE&ab_channel=CJGammon
    index1 - very basic using PIXI.Application
    index2--noApplication -- uses renderer instead of Application, and RESPONSIVE
    indexTexture - Manages textures thru texture Cache. 
        - as many loaders as you want:
        let loader = new PIXI.Loader(); // as many loaders as you want.
        but for only one can use pre made tool:
        let loader = PIXI.Loader.shared; // creates a loader for us thru this... shared
----------------------------------------------------
release notes for latest documentation:
http://pixijs.download/release/docs/index.html

----------------------------------------------------------------------------------
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------SOOOOOO to run it:
in visual studio code, i have already installed 'Live Server' extension
in bottom right of vscode window find 'Go Live' and click on it, which opens browser with your animation
------------------OR-----------------------------------------------------------
right click on the index...html file you want to run and 'Open with Live Server' and opens brower with this file
------------------------------------------------
index...html calls app.js or version of app.  index2-...html and later don't even call app...js - they create app in file

