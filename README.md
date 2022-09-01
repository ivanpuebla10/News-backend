# News Test 

## MAIN TECHNOLOGIES 🛠️
- Nodejs
- Express
- Mongoose
- MongoDB

### HOW TO RUN THIS PROJECT 🔧
## Geting Started 🚀
- Clone this repository `https://github.com/ivanpuebla10/News-backend`
- Install the dependencies `npm install`
- Change the .env.example file to .env and within it set the MONGO_URI variable with your own database credentials.
- Run the project `npm start`


## Basic endpoints

* Get all no archived news in db(GET): `http://localhost:5000/news`
* Get all archived news in db(GET): `http://localhost:5000/news/archived`
* Get news by id(GET): `http://localhost:5000/news/detail/:_id`
* Populate DB(GET): `http://localhost:5000/news/populate`
* Publish news(POST): `http://localhost:5000/news`
* Archive news by id(PUT): `http://localhost:5000/news/archive/:_id`
* Delete new by id(DELETE): `http://localhost:5000/news/:_id`

### Documentation
```
https://documenter.getpostman.com/view/19187499/VUxNSoBY
```


## Author ✒️
* **Ivan Puebla** - [ivanpuebla10](https://github.com/ivanpuebla10)




