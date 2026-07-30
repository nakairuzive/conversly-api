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


1. Created src file 
2. Created a planning folder        
3. Installed all the files      
4. Created a server file        
5. Server file is working       
6. Something broke had to start again - 30 July         
7. Got it working again - 30 July       