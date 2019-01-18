# api-versioning
Simple API versioning system using nested express routers

Master Branch:
The versioning is organized in a top-down fashion. Folders corresponding to the versions (V1, V2 and so on) are at the top level
api
  |-v1
    |-controllers
    | -routes
  -v2
    |-controllers
    |-routes

'v1' Branch:
The versioning is organized in a nested fashion. Folders corresponding to the versions (V1, V2 and so on) are inside the folders where changes have occured. 
For example, at the sublevels of 'routes' and 'controllers'
