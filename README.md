# api-versioning
Simple API versioning system using a hierarchy of express routers

## Master Branch:

The versioning is organized in a top-down fashion. Folders corresponding to the versions (V1, V2 and so on) are at the top level
```
├── api
│   ├── v1
│   │   ├── controllers
│   │   │   ├── adminController.js
│   │   │   └── userController.js
│   │   ├── index.js
│   │   └── routes
│   │       ├── admin.js
│   │       └── user.js
│   └── v2
│       ├── controllers
│       │   └── userController.js
│       ├── index.js
│       └── routes
│           └── user.js
├── helpers
├── index.js
```
## 'v1' Branch:

The versioning is organized in a nested fashion. Folders corresponding to the versions (V1, V2 and so on) are inside the folders where changes have occured. 
For example, at the sublevels of 'routes' and 'controllers'
```
├── api
│   ├── controllers
│   │   ├── v1
│   │   │   ├── adminController.js
│   │   │   └── userController.js
│   │   └── v2
│   │       └── userController.js
│   ├── models
│   ├── routes
│   │   ├── v1
│   │   │   ├── admin.js
│   │   │   ├── index.js
│   │   │   └── user.js
│   │   └── v2
│   │       ├── index.js
│   │       └── user.js
│   └── services
├── helpers
├── index.js
```
## 'v2' Branch

In this case, there are no folders corresponding to the V1 or V2 version of the API. The distinction is made clear via the file names such as index.v1.js, user.v2.js, userController.v2.js etc. This is not very elegant. Moreover, there will be a ton of files in each folder (routes, controllers) depending on how many API versions are in existence. 
```
├── api
│   ├── controllers
│   │   ├── adminController.js
│   │   ├── userController.js
│   │   └── userController.v2.js
│   └── routes
│       ├── admin.js
│       ├── index.v1.js
│       ├── index.v2.js
│       ├── user.js
│       └── user.v2.js
├── helpers
├── index.js
```

## 'v3' Branch

Similar to the 'v2' branch, there are no folders corresponding to the V1 or V2 version of the API. The different versions of a router/controller are organized in individual folders at the sub-folder level of the routes/controllers folders. For example, if there is a version 2 of 'user' route, there will be a folder 'user' inside 'routes', with 2 files, one for each version of the API. A a postfix distinguises them such as user.js and user.v2.js. The disadvantage in this scheme is the multitude of sub-folders a developer will have to navigate to find different files. 

```
├── api
│   ├── controllers
│   │   ├── adminController.js
│   │   └── user
│   │       ├── userController.js
│   │       └── userController.v2.js
│   └── routes
│       ├── admin.js
│       ├── index.v1.js
│       ├── index.v2.js
│       └── user
│           ├── user.js
│           └── user.v2.js
├── helpers
├── index.js
```