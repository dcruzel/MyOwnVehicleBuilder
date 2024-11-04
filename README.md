# Project: My Own Vehicle Builder

## Description
```md
This project will allow the user to either create a new vehicle or select an existing vehicle. After going through the creation or selection process, the user is able to perform certain actions with the selected vehicle until the user decides to exit the program. The motorbike is the only vehicle that can perform the Wheelie and the truck is the only vehicle that can tow car or motorbike that is less than its weight.  
```
## User Story
```md
- AS A developer
- I WANT to update an existing application to include additional vehicle types
- SO THAT I am able to comprehend and work with existing code bases. 
```


## Table of Contents

- [Introduction](#introduction)
- [Technology](#technology)
- [Usage](#usage)
- [Tests](#tests)
- [Contact](#credits)
- [License](#license)

## Introduction
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted to create a new vehicle or existing vehicle
THEN I can choose between the two options 
WHEN I am prompted to choose the vehicle type during creation
THEN I can choose between car, truck, and motorbike
WHEN I am prompted for details about the vehicle
THEN I can enter the vehicle information
WHEN I have entered all the vehicle information
THEN I can use the created vehicle
WHEN I select an existing vehicle
THEN I can use the selected existing vehicle
WHEN I have created a new vehicle or selected an existing vehicle
THEN I can perform actions with that vehicle
WHEN I perform an action with a vehicle
THEN I see the result of the action in the command-line
WHEN I complete the process of performing an action
THEN I can perform additional actions until I choose to exit OR
EXIT WHEN I choose to TOW vehicle
```

## Technology
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-00ff00?style=plastic&logo=TypeScript&logoWidth=10)](https://www.typescriptlang.org/)
[![npm](https://img.shields.io/badge/Tools-npm-ff0000?style=plastic&logo=npm&logoWidth=10)](https://www.npmjs.com/)
[![VS Code](https://img.shields.io/badge/IDE-VSCode-ff0000?style=plastic&logo=VisualStudioCode&logoWidth=10)](https://code.visualstudio.com/docs)

## Usage
- [Github Repo](https://github.com/dcruzel/MyOwnVehicleBuilder)
- [Video](https://drive.google.com/file/d/1idjt0aR4dDSOCgFquhARCZmUR73iKCNm/view?usp=sharing)

## Tests
```md
- The inquirer package was used.
- The user can choose a vehicle: truck, car, or motorbike.
- The truck and motorbike must prompt the user for details.
- The car doesn't need to prompt the user for details. 
- The truck must allow the user to implement an action that the car and motorbike classes can't.
```

## Contact

Elizabeth D'Cruz
- [Github Profile](https://github.com/dcruzel)
- [Email](Liz.c.dcruz@gmail.com)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

