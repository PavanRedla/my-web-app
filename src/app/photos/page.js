import { Photos } from "@/routes/Photos";

// Actually count is present inside routes/Photos/Photos.jsx
// but we are not giving complete path we are  giving the path only upto folder level (/routes/Photos) in which Photos.jsx present.
//In that case, it will look for index.js file in routes/Photos folder.

// we have imported and exported the Photos.jsx file in routes/Photos/index.js

export default Photos;
