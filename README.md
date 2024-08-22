# Activity Tracker
## About
A full-stack application used for tracking pupils' accomplishments and behavior and storing them in a database.
## Instructions
1. **Install MongoDB.**
2. **Create a MongoDB database**:
   - Name: `students`
   - Collection: `collection`
3. **Insert pupils into the database**:
   - Every pupil needs to have these attributes:
     - `fullName`: Full name of the pupil
     - `grade`: 5, 6, 7, or 8
     - `classIndex`: Index of the pupil in the class book
     - `goodActivity`: Initially empty
     - `badActivity`: Initially empty
   - Alternatively, you can import the `studentList.json` file if you just want to test the application.
	   - note: studentList.json only has pupils that are in 5th and 6th grade
4. **Clone the repository**:
   ```bash
   cd desired_destination
   git clone https://github.com/cvejicmilos/activity_tracker
   cd activity_tracker
   npm install
   node server.js
## Video Demonstration
[Link to YouTube video](https://www.youtube.com/watch?v=zmldWY1IvTU)