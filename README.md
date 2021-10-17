[![Netlify Status](https://api.netlify.com/api/v1/badges/a361941e-7964-45c5-92e7-10ef8015e5f0/deploy-status)](https://app.netlify.com/sites/opensourcedevs/deploys)

# [Open Source Devs](https://opensourcedevs.com/)

Open Source Devs is an open-source contribution project for newcomers.

<em>If you'd like to save this repository, find related projects, or show your appreciation for this project, click the `⭐️ Star` button.</em>

<img width="1421" alt="Screen Shot 2021-10-17 at 1 19 56 PM" src="https://user-images.githubusercontent.com/24509848/137640026-23fd04f4-9df3-46dc-8506-1873c6219a3c.png">


## How to Run Locally

- Fork this project with the Fork button at the top of the project.

- In your terminal, run the following commands:

  - `git clone https://github.com/MightyJoeW/OpenSourceDevs.git`

  - `cd OpenSourceDevs`

  - `yarn`

    - Linux users, note that `yarn` comes from the Yarn Package Manager, not cmdtest. Please see the Yarn documentation for [how to install yarn via npm](https://yarnpkg.com/getting-started/install)

  - `yarn start`

  The project will run in your browser at `http://localhost:3000/`.

## How to Contribute
*For a more detailed contribution guide (with images), follow along with my [Contributing to Open Source Starter Guide](https://www.getscriptordietryin.com/contributing-to-open-source-starter-guide/).*

- Create a new branch in the terminal with `git checkout -b 'name-of-branch'` i.e. git checkout mightyjoe-card
- In src/components/dev-grid-utils.js, add a new object with your info at the bottom of the file (refer to the existing dev objects as an example).
- Stage your changes with `git add .`
- Commit your changes with `git commit -m "feat: description of change"` i.e. git commit -m "feat: added info for mighty joe"
- Push your changes with `git push origin name-of-branch`

- In GitHub, create a pull request by clicking on the Pull requests tab and clicking the green New pull request button (be sure to change the compare branch to your branch name to point to base: main).
- Give your pull request a name, add a description, a screenshot (optional), and click the gear icon next to Labels to add the `hacktoberfest` label if you want this to count towards the hacktoberfest challenge. Click Create pull request.
  - Note for users new to GitHub: Project access with Triage permission is required to add the label yourself. You will generally not have permissions to add the label yourself on your first Pull Request.
- If your branch has conflicts, you can use the web editor or command line options under `This branch has conflicts that must be resolved` to resolve the conflicts.

### Usage
- The website is running live at [https://opensourcedevs.com/](https://opensourcedevs.com/). 
- Each branch gets a Netlify deploy preview. After creating a pull request, you can find the url for your branch in the `netlify` section. Click on the `Browse the preview:` link.

<img width="850" alt="Screen Shot 2021-10-17 at 1 34 46 PM" src="https://user-images.githubusercontent.com/24509848/137640400-e2136e23-4965-4b6e-912c-58a2a8d5984a.png">


### Front-End Technologies

- HTML
- CSS
- JavaScript
- React
- MUI (Material-UI)

### Testing Libraries

- Jest
- React Testing Library

### Credits
This project was created by and is maintained by Joe Warren. Special thank you to all of our [awesome contributors](https://github.com/MightyJoeW/OpenSourceDevs/graphs/contributors)!

### License
View this project's MIT license [here](https://github.com/MightyJoeW/OpenSourceDevs/blob/main/LICENSE.md).

# Sending Feedback

Found an issue or have a request? [Submit an issue](https://github.com/MightyJoeW/OpenSourceDevs/issues).
