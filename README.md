# README-Generator

## Description

The purpose of this program is to provide a simple way for anyone to produce a professional grade README file for their own projects. Just by answering a list of prompted questions, they can have a quick way of generating a README that will be of a repeatable level of quality. 

This program utilizes node.js as well as the npm packages 'fs' to write to the outputted README, and 'inquirer' to prompt questions to the user and pass the answers onto 'fs' to write out to the file.

## Installation

This program was built and tested using node.js v16.19.0.

After cloning this repository into a working folder of your own, you'll need to run the following command to pull in the node packages required to run the program.

```md
npm install OR npm i
```

## Usage

After installation, you can run the program by typing:

```md
node index.js
```

This will bring up a series of prompts, that after you have finished answering, will bring up the following message:

```md
Success: README File Generated!
```

The finished README file will then be located in the 'output' folder.

<br>
Here is a video demonstrating how the program should run:

https://user-images.githubusercontent.com/117125528/216513306-e2a7eb99-7a4d-40c0-9341-907cf4b739c2.mp4
