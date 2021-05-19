## Documents
------------
```bash
└─Github
   │  README.md
   ├─accounts
   │  ├── admin.py
   │  ├── apps.py
   │  ├── models.py
   │  ├── urls.py
   │  └── views.py
   ├─chat
   │  ├── apps.py
   │  ├── consumers.py
   │  ├── routing.py
   │  ├── urls.py
   │  └── views.py
   ├─config
   │  ├── asgi.py
   │  ├── settings.py
   │  ├── urls.py
   │  └── wsgi.py
   ├─static
   │  ├── accounts
   │  │        script.js
   │  │        style.scss
   │  └── chat
   │       ├── entrance
   │       │       style.scss
   │       └── room
   │               script.js
   │               style.scss
   ├─templates
   │  ├── accounts
   │  │        index.html
   │  └── chat
   │           index.html
   │           room.html
   ├─db.sqlite3
   ├─manage.py
   └─requirements.txt
```

## Channel Layers
Use a channel layer that uses Redis as its backing store. After installing docker, to start Redis server on port 6379, run the following command:
```
$ docker run -p 6379:6379 -d redis:5
```

## Run server
```
$ python manage.py runserver
```
Open a browser tab to the room page at http://127.0.0.1:8000/accounts/login/. Create an account and enter a chat room.

Open a second browser tab and follow the same.
