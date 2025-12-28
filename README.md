Project Description

This is a digital stopwatch application that allows users to measure elapsed time accurately using real-time counting. The application displays time in hours, minutes, seconds, and milliseconds. It uses JavaScript to calculate time differences based on the system clock to ensure smooth and precise timing.

Users can interact with the stopwatch using the Start/Continue, Record (Lap), and Pause/Reset buttons. The interface is fully responsive and works seamlessly on desktop, tablet, and mobile devices. Users simply click the Start button to begin timing, record laps while the stopwatch is running, pause the timer, continue counting, or reset the stopwatch when needed.

API Details Used
Base URL

Not applicable

This project does not use an external API. All stopwatch functionalities are handled locally using JavaScript.

Endpoints

Not applicable

The digital stopwatch does not communicate with any server or external endpoint.

Required Parameters

No parameters are required for this application. The stopwatch runs entirely on the client side and does not require authentication or data requests.

Optional Parameters:

None

Authentication

None
This application does not require authentication or an API key. It works offline and does not depend on any external service.

Sample JSON Response

Not applicable

This project does not consume or return JSON data because no API is used.

Fetch the Data (JavaScript)

The application does not use the fetch() API since it does not retrieve data from an external source.
Instead, it uses JavaScript’s real-time timestamp (Date.now()) to calculate elapsed time accurately.

Instructions to Run the Project

Step 1: Open the Project
Open the index.html file in a web browser. You can either:

Double-click the index.html file to open it directly

Use a local server like XAMPP, WAMP, or Live Server extension in VS Code

Use Python's built-in server: python -m http.server 8000

Step 2: Use the Application
Click the Start button to begin the stopwatch.
The timer will begin counting in real time with milliseconds displayed.

Step 3: Record Lap Time
Click the Record button while the stopwatch is running to save the current time as a lap.
The stopwatch will continue running while laps are being recorded.

Step 4: Troubleshooting
If you encounter errors:

Make sure all project files (index.html, style.css, and script.js) are in the same folder

Refresh the browser using Ctrl + F5

Ensure JavaScript is enabled in your browser

Check the browser console for any error messages
