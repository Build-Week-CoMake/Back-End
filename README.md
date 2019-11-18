# **API Docs**

## keys with a * are provided by the backend 

| Description  | Endpoint   | Shape | 
| ------------ | ------------ | ------------ |
| login user  | /login (POST)   | { username: " ", password: " "} | 
| create new user  |  /login/new (POST)  | { username: " ", password: " ", location:" "} | 
| get all issues | /issues (GET) | |
| get issue by location | /issues/?location= (GET) | |
| add new issue | /issues (POST) | { *id:int, title:" ", img: "(url)", location: " ", description: " "} |
| edit issue | /issues/:id (PUT) | {any modified field} |
| delete issue | /issues/:id (DELETE) | | 
| get user's upvotes | /upvote/ (GET) | {user_id: "username"} |
| add new upvote | /upvote/vote/ (POST) | {user_id: "username", issue_id: int} |
| remove upvote | /upvote/(DELETE) |  {user_id: "username", issue_id: int} |