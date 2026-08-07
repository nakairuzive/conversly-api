# conversly-api

Conversation catalyst api   
The purpose of this api is to help people start meaningful conversations and build connections

---

### File structure
conversation-starter-app/        
├── .env                    (secrets — never committed)         
├── .gitignore          
├── package.json
├── package-lock.json    
├── data.json               (stores array with documents for seeding into MongoDB)                            
├── node_modules/                    
├── planning/           
│   └── api-design.md  
│   └── data-model.md
│   └── requirements.md
│   └── routes.md
└── src/                      
    ├── config/         
    │   └── database.js               (MongoDB connection logic)  
    ├── controllers/            
    │   └── questionController.js
    ├── middleware/            
    │   └── errorHandler.js
    ├── models/                     
    │   └── Questions.js 
    ├── routes/         
    │   └── questionRoutes.js          (route definitions)
    ├── services/                       
    │   └── questionService.js              
    ├── app.js          
    ├── seed.js                         (functions for inserting and deleting documents)                
    └── server.js                   

---
### Project Timeline

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
> * Made some logos for the final site :)

### 📅31 July 2026
> * Got a filter for the tags string working
> * Made a route for getting random questions working

### 📅06 & 07 August 2026
> * Database now has 1187 Questions
> * Deployed using Render ... Realized that I am using GET/api/products, this needs to be fixed

---

### Challenges I experienced.
1. Connecting to MongoDB, I had trouble getting the right connection string. The first string I got was just a general string, so when I first seeded to the database using insertMany, it created a collection called test, which was not the collection I wanted to use. I had created a collection for this project. After I changed the connection string, I was able to seed directly into the collection for conversation starters.

2. I had trouble starting this project; it was more of a knowledge/understanding gap. I first learned about APIs, Node.js and Express.js from Scrimba, which is a great learning platform. But because it is "dumbed down" in that you don't set up the environment, it's set up to always work. So it was a big learning experience when I had to now figure out why it's not working in my environment.

3. It was just a tricky learning experience, but once I got my routes working, it all felt so worth it and rewarding.

4. I found it very annoying when I continuously had to "whitelist" my IP address on MongoDB.



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