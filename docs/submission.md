## Project Submission

/*
Submit the full source code files, including:
    - The React Native project source code
    - Any dependency files (e.g., `package.json`)
    - Necessary documentation or comments within the code
*/

## Project Details

/*
Provide a brief project document, which includes:
    - The tech stack used
    - Design decisions and rationale
    - How data persistence is implemented
*/

### Tech Stack

- React Native
- Expo

### Design Decisions & Rationale

Each task has "id", "content" (string), "isCompleted" (boolean), "dateCreated" (time), "dateCompleted" (time)
I considered having a "user_id" attached to each task, but decided that the scope of this app is a personal task tracker

Edge case: task is checked as complete (isCompleted=true, dateCompleted set) but then unchecked again
- dateCompleted does not reset, but isCompleted does
- Checking the task as complete again sets isCompleted=true and sets the new dateCompleted

### Data Persistence

-

## Live Demo

/*
Please submit a demo using Expo or another method to run the application and demonstrate its functionality.
*/
