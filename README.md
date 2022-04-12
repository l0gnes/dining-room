# Dining Room 🍴
### For COMP 2513 Final Project 2022

A basic application which is supposed to provide an "smart" alternative to the classic paper cookbook, it will allow the sole user to provide information regarding whether or not the recipes in their cookbook are vegan friendly, contain dairy, etc.

The main stack is the following:
```diff
+ Vue.js
+ Node.js w/ Express.js
+ Prisma ORM connecting to PostgreSQL database
```

# Deploying 🚀

This project comes bundled with a docker compose file for easy parity across different systems, This program was built with the docker container in mind, so it is highly recommended that this is how the project is self-hosted.

```sh
$ docker-compose build && docker-compose up -d
```

Below is a table which contains the information about the ports in the application for (documentation purposes):

| Service | Port |
| :------ | :--- |
| client (Vue.js Application) | `8080` |
| api (Node & Express.js) | `5000` |
| database (postgres) | `5432` | 

---

| Time Spent on Project: | [![wakatime](https://wakatime.com/badge/user/863c0ea9-1f76-4628-9b82-b32d093ded49/project/4a6f5b29-db02-4a00-8e51-49b3dde3f127.svg)](https://wakatime.com/badge/user/863c0ea9-1f76-4628-9b82-b32d093ded49/project/4a6f5b29-db02-4a00-8e51-49b3dde3f127) |
| :--- | :---: |
