# Technology

This project was generated using [Nx](https://nx.dev).

## Monorepo

I used Nx to set up a monorepo with a backend API server, frontend React app and shared libs. There are disputes of whether it is good or bad to share something between the backend and frontend. However, I experienced much pain while redefining the same types and functions on both projects. Also, it's complex and prone to errors to set up a monorepo structure manually. Therefore, it seems worth trying Nx.

## NestJS framework

I heard about NestJS at JetBrain's Javascript Conference a few weeks ago and wanted to use it in my next project. It must have saved more time than spent while learning it.

## React app

I have more experience in Vue than React, but I chose React because Nx has much more materials and plugins for React.

As component libraries, I used Material-UI and Formik.

## Approach

### API

There are two requirements.

1. post a new feed
1. get all posts

Surely, it needs to add query options at least for search and pagination, but I left it behind to save time.

### Database

At first, I just used an array to store records. Then I changed it to SQLite database because it doesn't require setting up an external database.

### Frontend

I am not sure how many details I should implement. I did just as simply as I could. However, I spent some time on the form because basic conditions and validations are essential, unlike the page layouts and contents are subject to opinions.

I wished to implement pagination and real-time feed updates using socket or GraphQL, but there wasn't enough time.

### Files

I didn't mind organizing files because there are just a few files. If a project is supposed to get bigger, I am sure we need to separate files using directories like controllers, services, entities/models, components, utils, etc.

## Work hours

It seems that I spent about eight hours except an hour of documentation and several hours studying Nx and Nest before.

| Time | Commit                                              |
| ---- | --------------------------------------------------- |
| 1h   | Documentation                                       |
| 5m   | change field name farmer to name                    |
| 20m  | bbc1912 use fake service to test controller         |
| 30m  | e0afe1e add new feed button and link to list page   |
| 20m  | ca0fabe add sqlite database as repository           |
| 30m  | 9ee6db1 e2e test form submission                    |
| 5m   | f62a267 redirect to list page after submitting      |
| 15m  | d4b2a6e add table of feeds                          |
| 10m  | 171c9b8 post feed data                              |
| 2h   | c442a4e add feed form                               |
| 15m  | f32bdec add e2e test for feed form                  |
| 20m  | 6732419 add react routers                           |
| 1m   | 50af928 add dummy feed form                         |
| 5m   | 573540a fix compile error of validation class       |
| 20m  | a5766a3 validate POST data                          |
| 15m  | 6055dc9 define GET and POST of /api/feeds           |
| 30m  | 472b356 add shared libs                             |
| 1h   | 46a13e1 setup nx monorepo of api and react projects |
| 10m  | acc8cb0 initial commit                              |
