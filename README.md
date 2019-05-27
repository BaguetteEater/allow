**MongoDB**

Launch the MongoDB's server on default port (27017):

`mongod --config /usr/local/etc/mongod.conf &`

**Node.js**

Launch Allow Node server on its default port (3000):

`node app.js`

**API REST**

Initialiser un nouvel utilisateur :

`POST /add`


Retourner tous les utilisateurs :

`GET /users`


Retourner un utilisateur précis :

`GET /users/:userId`


Supprimer un utilisateur précis :

`DELETE /users/:userId`

Ajouter un graphic à un utilisateur après sa réponse. Retourne l'utilisateur modifié.

Body : `{ "questionId": 123, "attributes": { "attribute1": "value1", ... } }`

`POST /question/:userId`
