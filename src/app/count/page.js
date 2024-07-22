import { Count } from "@/routes/Count";

// Actually count is present inside routes/Count/Count
// but we are not giving complete path we are  giving the path only upto folder level (/routes/Count) in which count.jsx present. In that case,
// it will look for index.js file in routes/Count folder.

// we have imported and exported the Count.jsx file in routes/Count/index.js

export default Count;
