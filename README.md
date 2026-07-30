# conversly-api
conversation catalyst api

### File structure
conversation-starter-app/   
├── server.js              (entry point — starts Express, connects DB)      
├── .env                    (secrets — never committed)         
├── .gitignore          
├── config/         
│   └── db.js               (MongoDB connection logic)          
├── models/         
│   └── Starter.js          (schema definition, if using Mongoose)          
├── routes/         
│   └── starters.js         (route definitions)         
├── controllers/            
│   └── startersController.js  (the actual logic behind each route)         
├── seed/           
│   └── seedData.js         (script to populate initial DB data)        
└── public/                 (your frontend)         
    ├── index.html          
    ├── style.css       
    └── script.js       

### 📅28 - 29 July 2026
> * Created src file 
> * Created a planning folder        
> * Installed all the files      
> * Created a server file        
> * Server file is working  

### 📅30 July 2026
> * Server was still working
> * Something broke had to start again, very sad :(
> * Working server that returns all the questions GET/api/questions
> * Working route that searches by id GET/api/questions/:id
> * Created the first query parameter search, GET/api/questions?relationship=''
> * All the query parameter search categories are working
> * Very happy with progress made :)

---

### Challenges I experienced.
1. Connecting to MongoDB, I had trouble getting the right connection string, the first string I got, was just a general string, so when I first seeded to the database using insertMany, it created a collection called test, which was not the collection I wanted to use. I had created a collection for this project. After I changed the connection string I was able to seed directly into the collection for conversation staters.

2. I had trouble starting this project, it was more of a knowledge/understanding gap. I first learned about APIs, Node.js and Express.js from Scrimba which is a great learning platform. But because it is "dumbed down" in that you don't setup the environment, it'ss set up to always work. So it was a big learning experience when I had to now figure out why its not working in my environment.

3. It's was just a tricky learning experience but once I was my routes working it all felt so worth it and rewarding.

4. I found it very annoying when I continously had to "whitelist" my IP address on MongoDB.


#### Optional additional features:
- Pagination (page and limit query parameters).
- Sorting (for example, alphabetically or by creation date).
- Filtering by multiple tags.
- A favourites feature backed by another collection.
- User authentication.
- API documentation with OpenAPI/Swagger.
- Automated tests for routes and services.
- Rate limiting.
- Caching.
- Analytics, such as tracking the most-requested conversation starters.