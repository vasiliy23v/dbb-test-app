This project is a web application developed using the Dropbox API for file and folder management. After downloading the repository, you need to connect all dependencies using the command npm install, and then start the React application using npm start. The application in development mode will be available at http://localhost:3000.

The main functions available in the application are:

Uploading files and creating new folders.
Managing files and folders: downloading, renaming, and deleting.
Navigating the file structure using buttons and displaying the content of each folder in a table.
The application design is implemented using Material UI.

The project structure includes the following main directories and components:

components: contains application components such as buttons and content display.
const: contains a file with the access token for the Dropbox API.
helpers: contains helper functions.
redux: contains files for managing the application state using Redux.
App.tsx: the main application file.
index.tsx: the file for initializing the application.
This project provides a convenient interface for managing files and folders on Dropbox using React and Redux.