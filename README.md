# InfCon 2023 Web Accessibility Hands-on Practice Repository
 
## Table of Contents
 
- [Introduction](#introduction)
- [How the Session Works](#how-the-session-works)
- [Practice Content](#practice-content)
- [Development Tools Installation and Project Start Method](#development-tools-installation-and-project-start-method)
- [Tech Stack](#tech-stack)
- [Team Introduction](#team-introduction)
- [License](#license)
- [How to Contribute to this Project](#how-to-contribute-to-this-project)
- [Other Information](#other-information)
## Introduction
 
This repository contains hands-on practice materials presented at InfCon on August 15, 2023. We read an already completed website with a screen reader to find areas where accessibility breaks down, and we improve them together.
 
Live demo: https://infcon-2023.vercel.app
 
## How the Session Works
 
Most accessibility talks hand you a checklist. You nod along, you go home, and nothing changes.
 
This session works the other way around. You run into the problem yourself first — eyes closed, mouse taken away — and then you work out the rule from what just happened. It stays with you longer that way, and you stop needing to memorize anything.
 
Every exercise follows the same three steps:
 
1. Hit the barrier yourself
2. Talk about what went wrong
3. Fix the code
## Practice Content
 
### 2-1. Creating a subscription form that even visually impaired people can easily understand
 
We will conduct a practice to enhance the web accessibility of the subscription form below.
 
![Subscription form](https://github.com/tae100k/infcon-2023-a11y-presentation/assets/78027252/02bfe41e-945b-43c4-a2b9-97e188db1262)
 
Try it first: complete the form without touching your mouse. Tab, Shift+Tab, Enter, Space, and arrow keys only.
 
Things you will probably run into:
 
- You cannot tell where you are, because the focus outline was removed to make the design look cleaner
- Tab order jumps around the screen, because the layout was rearranged in CSS but not in the DOM
- Some controls cannot be reached at all, usually a div dressed up as a button
- Clicking a label does nothing, because the label was never linked to its input
- An error shows up as a red border and nothing else
Most of the fix is going back to real HTML elements. A native button already knows how to take focus and respond to Enter and Space. Rebuilding that behavior on a div means rebuilding all of it, and it is easy to miss a piece.
 
### 2-2. Alt text, all you need to know!
 
We will conduct a practice to enhance the web accessibility of the images below.
 
![Images for alt text practice](https://github.com/tae100k/infcon-2023-a11y-presentation/assets/78027252/ef79d031-1818-479d-8b1e-f53bb5eea92a)
 
Try it first: close your eyes. Let a screen reader read the page out loud and build a picture in your head from the audio alone. Then open your eyes and compare it to the real screen.
 
The distance between what you imagined and what is actually there is the defect, and you feel it immediately. Nobody needs to be told that alt="image" is bad after that.
 
What usually comes out of the discussion:
 
- Alt text replaces what the image does, not what the file is named
- The same photo needs different text depending on where it sits — a product listing is not an article is not a banner
- Decorative images want an empty alt attribute. Describing them only adds noise
- Very long alt text is its own kind of failure. The point gets buried
### 2-3. Making a carousel that's different by a hair's breadth
 
We will conduct a practice to enhance the web accessibility of the slider below.
 
![Carousel](https://github.com/tae100k/infcon-2023-a11y-presentation/assets/78027252/35e9cba5-7df5-4695-8541-60c7a3de21a5)
 
Try it first: read every slide as it rotates.
 
You cannot. And your own reading speed is not the standard — plenty of people need considerably longer. Anything that moves on its own needs a way to pause or stop it.
 
Then try operating it with the keyboard only:
 
- The next and previous arrows are divs, so you cannot reach them
- The indicator dots are decoration and tell you nothing about state
- Focus wanders into slides that are off-screen
- Nothing tells you how many slides there are or which one you are on
This is also the right moment to ask whether the carousel should auto-rotate at all. Often the most accessible version is the one you delete.
 

## Development Tools Installation and Project Start Method

1. [Visual Studio Code](https://code.visualstudio.com/): Free open source code editor
2. [Git](https://git-scm.com/): Source code version control tool
3. [Node.js](https://nodejs.org) (LTS version recommended) and npm: JavaScript runtime and package manager
4. [Yarn](https://yarnpkg.com/): Package management tool
```
npm install -g yarn
```
5. Install project dependencies
```
yarn
```

## How to Start the Project

1.  Clone the project to your local computer
```
git clone https://github.com/tae100k/infcon-2023-a11y-presentation.git
```
2. Move to the cloned project directory
```
cd infcon-2023-a11y-presentation
```
3. Switch to the `hands-on-session-version` branch
```
git checkout hands-on-session-version
```
4. Open the browser at `localhost:3000`
```
yarn start
```

<br />
- Feel free to modify the code as you conduct the hands-on session. If you want to save your progress, commit and push. If it's a forked repository, you can freely push changes to the remote repository without any restrictions.

<br/> 
<br/>

## Tech Stack

- Stack needed for the practice
  - Knowing React, HTML, CSS will be helpful.
- Stack used in the project
  - React
  - HTML, CSS
  - MUI (Material-UI): It is not used in the practice. However, there are codes written in MUI in the project, so knowing it will be helpful.

<br/> 
<br/>

## Team Introduction

<table>
  <tr>
    <td style="width: 20%; text-align: center; padding: 0 3px;"><img src="https://github.com/tae100k/infcon-2023-a11y-presentation/assets/78027252/064f7fb9-297a-495b-9930-67df4dc67042" width="60%" /><br><strong>Jina Lee (Design)</strong></td>
    <td style="width: 20%; text-align: center; padding: 0 3px;"><img src="https://github.com/tae100k/infcon-2023-a11y-presentation/assets/78027252/bc5634b8-8efe-4ace-b476-c6edc2df93d2" width="60%" /><br><strong>Taehee Kim (Development)</strong></td>
  </tr>
</table>

### Jina Lee

**UI/UX Designer (4 years experience)**

#### Career

- LOVO - Genny Planning and Design
- Planning and production of global dance platform 5six7eight
- Planned and designed the website of '1M HomeDance'
- Planned and designed responsive website of '1M Workshop'

**Social Media:** [LinkedIn](https://www.linkedin.com/in/ginalee-uxdesign/)

### Taehee Kim

**Front-end Developer (2 years experience)**

#### Projects

- Current) Development of LOVO AI voice synthesis technology tool Genny
- Development of voice mask for NFT Auction project
- Development of LOVO's own website, etc.

**Social Media:** [LinkedIn](https://www.linkedin.com/mynetwork/)

<br/> 
<br/>

## License

This project is distributed under the MIT license.

<br/> 
<br/>

## How to Contribute to this Project

If you want to contribute to the project, follow these steps:

1. First, fork the project to your own GitHub account.
2. Clone the forked project to your local development environment.
3. Create a new branch and commit your changes.
4. Push the branch with the changes to your forked remote project.
5. Create a pull request to the original project.

<br/> 
<br/>

## Other Information

If you have any questions or feedback about this repository, please leave a post on the [issue page](https://github.com/tae100k/infcon-2023-a11y-presentation/issues).

