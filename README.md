[![Netlify Status](https://api.netlify.com/api/v1/badges/a361941e-7964-45c5-92e7-10ef8015e5f0/deploy-status)](https://app.netlify.com/sites/opensourcedevs/deploys)

# [Open Source Devs](https://opensourcedevs.com/)

Open Source Devs is an open-source contribution project for newcomers.

<br />

## How to Run Locally

- Fork this project with the Fork button at the top of the project.

- In your terminal, run the following commands (don't include the dollar sign):

  - `git clone https://github.com/MightyJoeW/OpenSourceDevs.git`

  - `cd OpenSourceDevs`

  - `yarn or npm install`

    - Linux users, note that `yarn` comes from the Yarn Package Manager, not cmdtest. Please see the Yarn documentation for [how to install yarn via npm](https://yarnpkg.com/getting-started/install)

  - `yarn start or npm start`

  The project will run in your browser at `http://localhost:3000/`.

## How to Contribute

- Create a new branch in the terminal with `git checkout -b 'name-of-branch'` i.e. git checkout mightyjoe
- In src/components/dev-grid-utils.js, add your info in one of the objects (refer to the first object as an example). If there are no remaining default objects, simply clone the last object and add your details.
- Stage your changes with `git add .`
- Commit your changes with `git commit -m "feat: description of change"` i.e. git commit -m "feat: added info for mighty joe"
- Push your changes with `git push origin name-of-branch`

- In GitHub, create a pull request by clicking on the Pull requests tab and clicking the green New pull request button (be sure to change the compare branch to your branch name to point to base: main).
- Give your pull request a name, add a description, and click the gear icon next to Labels to add the `hacktoberfest` label if you want this to count towards the hacktoberfest challenge. Click Create pull request.
  - Note for users new to GitHub: Project access with Triage permission is required to add the label yourself. You will generally not have permissions to add the label yourself on your first Pull Request.
- If your branch has conflicts, you can use the web editor or command line options under `This branch has conflicts that must be resolved` to resolve the conflicts.

### Front-End technologies

- HTML
- CSS
- JavaScript
- React
- MUI

### Testing

- Jest
- React Testing Library (in progress)

# Sending Feedback

Found an issue or have a request? [Submit an issue](https://github.com/MightyJoeW/OpenSourceDevs/issues).
