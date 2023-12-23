## Unstop Assessment
Description
This project is a ReactJS application with Bootstrap styling that provides an interface for managing assessments. It includes features such as creating new assessments, viewing assessment details, and navigating through different sections.

## Usage
The application provides an interface with a sidebar for easy navigation between different sections such as Dashboard, Assessments, Library, and Round Status. The main section displays an overview of assessments and allows users to create new assessments.

### Components
App Component
# File: App.js

The root component that defines the overall structure of the application. It includes routing for different sections using react-router-dom.

MainSection Component
# File: MainSection.js

This component displays the main content of the application, including the overview of assessments, candidates, and candidate sources. It also allows users to search for assessments.

Header Component
# File: Header.js

The header component provides navigation options and a responsive menu for smaller screens. It includes links to different sections and a drawer for easy navigation.

SideBar Component
# File: SideBar.js

The sidebar component contains buttons for quick navigation to different sections of the application, such as Dashboard, Assessments, My Library, and Round Status.

MyAssessment Component
# File: MyAssessment.js

This component manages the creation and display of assessments. It allows users to add new assessments with details such as name, purpose, description, skills, and duration. Assessments are stored in local storage for persistence.

# Extras
The project uses Bootstrap for styling.
The application follows a responsive design, adapting to different screen sizes.
Assessments are stored locally for persistence, and the user can create new assessments with various details.
Feel free to explore the code in each component file for more specific details on their implementation.






