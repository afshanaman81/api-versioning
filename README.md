# api-versioning
Simple API versioning system using nested express routers

Master Branch:
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
'v1' Branch:
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
