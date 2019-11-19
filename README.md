# **API Docs**

## keys with a * are provided by the backend 

| Description  | Endpoint   | Shape | 
| ------------ | ------------ | ------------ |
| login user  | /login (POST)   | { username: " ", password: " "} | 
| create new user  |  /login/new (POST)  | { username: " ", password: " ", location:" "} | 
| get all issues | /issues (GET) | |
| get issue by location | /issues/?location= (GET) | |
| add new issue | /issues (POST) | { *id:int, title:" ", picture: "(url)", location: " ", description: " "} |
| edit issue | /issues/:id (PUT) | {any modified field} |
| delete issue | /issues/:id (DELETE) | | 
| get user's upvotes | /upvote/ (GET) | |
| add new upvote | /upvote/:id (POST) | |
| remove upvote | /upvote/:id (DELETE) | |