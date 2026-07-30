import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);

import mongoose from 'mongoose';
import {Question} from './models/Question.js'

const seedQuestions = [
  {
    "question": "What's one hobby you've always wanted to try but haven't started yet?",
    "relationship": "Stranger",
    "familiarity": "First meeting",
    "setting": "Coffee",
    "tone": "Casual",
    "tags": ["Hobbies", "Travel", "Lifestyle"],
    "createdAt": "2026-07-27T15:00:00Z",
    "updatedAt": "2026-07-27T15:00:00Z"
  },
  {
    "question": "If you could instantly master one skill for your career, what would it be?",
    "relationship": "Coworker",
    "familiarity": "Acquaintance",
    "setting": "Work",
    "tone": "Professional",
    "tags": ["Career", "Technology", "Growth"],
    "createdAt": "2026-07-27T15:00:00Z",
    "updatedAt": "2026-07-27T15:00:00Z"
  },
  {
    "question": "What's a subject you've learned recently that completely changed your perspective?",
    "relationship": "Classmate",
    "familiarity": "Familiar",
    "setting": "School",
    "tone": "Thoughtful",
    "tags": ["Books", "Learning", "Education"],
    "createdAt": "2026-07-27T15:00:00Z",
    "updatedAt": "2026-07-27T15:00:00Z"
  },
  {
    "question": "What's the funniest misunderstanding we've ever had together?",
    "relationship": "Best friend",
    "familiarity": "Close",
    "setting": "Party",
    "tone": "Funny",
    "tags": ["Memories", "Humor", "Friendship"],
    "createdAt": "2026-07-27T15:00:00Z",
    "updatedAt": "2026-07-27T15:00:00Z"
  },
  {
    "question": "What's one lesson from your parents that has stayed with you the longest?",
    "relationship": "Friend",
    "familiarity": "Close",
    "setting": "Coffee",
    "tone": "Deep",
    "tags": ["Family", "Values", "Life"],
    "createdAt": "2026-07-27T15:00:00Z",
    "updatedAt": "2026-07-27T15:00:00Z"
  },
  {
    "question": "What's the most memorable family tradition you hope never disappears?",
    "relationship": "Parent",
    "familiarity": "Close",
    "setting": "Home",
    "tone": "Thoughtful",
    "tags": ["Family", "Traditions", "Memories"],
    "createdAt": "2026-07-27T15:00:00Z",
    "updatedAt": "2026-07-27T15:00:00Z"
  },
  {
    "question": "If we swapped lives for a week, what do you think would surprise you the most?",
    "relationship": "Sibling",
    "familiarity": "Close",
    "setting": "Home",
    "tone": "Funny",
    "tags": ["Family", "Lifestyle", "Humor"],
    "createdAt": "2026-07-27T15:00:00Z",
    "updatedAt": "2026-07-27T15:00:00Z"
  },
  {
    "question": "What's something small I do that makes you feel appreciated?",
    "relationship": "Partner",
    "familiarity": "Close",
    "setting": "Date",
    "tone": "Deep",
    "tags": ["Relationships", "Love", "Communication"],
    "createdAt": "2026-07-27T15:00:00Z",
    "updatedAt": "2026-07-27T15:00:00Z"
  },
  {
    "question": "What inspired you to start the business you're building today?",
    "relationship": "Client",
    "familiarity": "Familiar",
    "setting": "Networking",
    "tone": "Professional",
    "tags": ["Career", "Business", "Entrepreneurship"],
    "createdAt": "2026-07-27T15:00:00Z",
    "updatedAt": "2026-07-27T15:00:00Z"
  },
  {
    "question": "What's a TV show or movie you wish you could watch again for the first time?",
    "relationship": "Online friend",
    "familiarity": "Acquaintance",
    "setting": "Online",
    "tone": "Casual",
    "tags": ["Movies", "Entertainment", "Streaming"],
    "createdAt": "2026-07-27T15:00:00Z",
    "updatedAt": "2026-07-27T15:00:00Z"
  },
  {
    "question": "What's one experience that strengthened your faith the most?",
    "relationship": "Church member",
    "familiarity": "Familiar",
    "setting": "Church",
    "tone": "Thoughtful",
    "tags": ["Faith", "Community", "Life"],
    "createdAt": "2026-07-27T15:00:00Z",
    "updatedAt": "2026-07-27T15:00:00Z"
  },
  {
    "question": "If money and time weren't an issue, where would you travel first and why?",
    "relationship": "Travel companion",
    "familiarity": "Acquaintance",
    "setting": "Airport",
    "tone": "Casual",
    "tags": ["Travel", "Adventure", "Dreams"],
    "createdAt": "2026-07-27T15:00:00Z",
    "updatedAt": "2026-07-27T15:00:00Z"
  },
  {
    "question": "What's one achievement you're proud of that most people don't know about?",
    "relationship": "Mentor",
    "familiarity": "Familiar",
    "setting": "Conference",
    "tone": "Thoughtful",
    "tags": ["Career", "Growth", "Achievements"],
    "createdAt": "2026-07-27T15:00:00Z",
    "updatedAt": "2026-07-27T15:00:00Z"
  },
  {
    "question": "What's the most ridiculous purchase you've ever convinced yourself was necessary?",
    "relationship": "Neighbor",
    "familiarity": "Acquaintance",
    "setting": "Community event",
    "tone": "Funny",
    "tags": ["Lifestyle", "Shopping", "Humor"],
    "createdAt": "2026-07-27T15:00:00Z",
    "updatedAt": "2026-07-27T15:00:00Z"
  },
  {
    "question": "When you look back ten years from now, what do you hope you'll be most grateful for?",
    "relationship": "Friend",
    "familiarity": "Familiar",
    "setting": "Beach",
    "tone": "Deep",
    "tags": ["Life", "Goals", "Reflection"],
    "createdAt": "2026-07-27T15:00:00Z",
    "updatedAt": "2026-07-27T15:00:00Z"
  }
];

const dbURI = "mongodb+srv://nakiiruzie_db_user:NjqroIjKmqtrRrJ6@cluster0.fngsbwv.mongodb.net/conversationStarterDB?retryWrites=true&w=majority";

const seedDB = async () => {
    try{
        await mongoose.connect(dbURI);
        await Question.deleteMany({});
        await Question.insertMany(seedQuestions);
        console.log('Database successfully seeded with questions!');
    } catch (error) {
        console.log('Error while seeding database:',error)
    } finally {
        mongoose.connection.close();
        console.log('Database connection closed.')
    }
};

seedDB();