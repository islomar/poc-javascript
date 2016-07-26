#Gulp playground

##How to create a Gulp project
Steps:
1. `sudo npm install gulp -g`
2. Create a folder for your project
3. Inside the folder, run `npm init`
4. `npm install gulp --save-dev`
5. Create a gulpfile.js
6. Run `gulp <taskName>`
7. `npm install gulp-sass --save-dev`

When you download a project, run `npm install`

##Meetup "Gulp Introduction"
Luis de Dios (@luisddm_)
https://github.com/luisddm
https://www.meetup.com/es/ironhack-madrid/events/232751004

git@github.com:luisddm/gulp-examples.git

Features:
* Concat and minify/uglify
* Deletes jpg image info which is useless (it saves space) > imagemin()
* Use **babel** to translate to ES2015 in case it is not compatible with ES6 (Transpile ES6+ into ES5)
* HTML replace: replace JS/CSS with the concat/minified versions
* GZip all the static files

Questions:
* Gulp vs Grunt
* Test automation?
* Typescript?
* JSHint


###Talk
* **What is Node.js?**
A JS platform built on top of Google Chrome's JS runtime engine, V8.

* **What is Gulp?**
* It's a streaming JS build system.
* It leverages the power of streams to automate, organize, and run development tasks very quickly and efficiently.
* Gulp is build upon Node and npm.

* Methods:
  * .src()
  * .pipe()
  * .watch()
  * .dest()

##Interesting links
http://gulpjs.com/
https://css-tricks.com/gulp-for-beginners/