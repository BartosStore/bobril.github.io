---
metadata:
  menuLabel: "DEVELOPER GUIDE"
  menuAnchor: "menu-developer-guide"
  previous: ""
  next: "initialization.md"
---

<h2 id='menu-developer-guide'>DEVELOPER GUIDE</h2>

Bobril is component oriented framework with very lightweight virtual dom. It has no dependencies.

There are 2 versions of framework.

First should be used directly as scripts without any build tool, it declares global variable `b` which is like namespace for all Bobril methods. And is probably easiest way to start learning Bobril. 

Second one in package directory which is published in NPM. It is meant to be used with **bobril-build**. And should be used with standard **ES6 imports**. For this version there is also additional NPM module **bobril-g11n** to help with globalization of Bobril applications.

There is used `DEBUG` variable which could be predefined to false and remove some code by uglify, also remove warnings for developer mistakes, so make sure you are using nonminified version in development.
