# Demo Video Link
https://drive.google.com/file/d/1Nr3Wf9X99j6plrmAUARsRG9WKTG1vRhy/view

# Social Media API

Welcome to the Social Media API project! This API is designed to power a social media platform, allowing users to create, read, update, and delete posts (thoughts) and reactions.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Components](#api-components)
  - [Controllers](#controllers)
  - [Models](#models)
- [API Endpoints](#api-endpoints)
  - [Thoughts](#thoughts)
  - [Users](#users)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project provides a RESTful API for managing posts (thoughts) and reactions on a social media platform. Users can create new thoughts, retrieve existing thoughts, update their own thoughts, delete thoughts, and interact with thoughts by adding or removing reactions.

## Features

- **Create Thoughts:** Users can create new thoughts with text content.

- **Get All Thoughts:** Retrieve a list of all thoughts from the platform.

- **Get a Single Thought:** Retrieve a specific thought by its unique identifier.

- **Update a Thought:** Users can edit their own thoughts to add or modify content.

- **Delete a Thought:** Users can delete their own thoughts, removing them from the platform.

- **Reactions:** Users can react to thoughts by adding or removing reactions.

## Technologies Used

- Node.js: A JavaScript runtime environment.
- Express.js: A web application framework for Node.js.
- MongoDB: A NoSQL database for storing thoughts and user data.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB.
- RESTful API principles: Follows the principles of Representational State Transfer for designing APIs.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB database set up and running.

## API Components

### Controllers

#### Thought Controller

The Thought Controller handles various actions related to thoughts, including retrieving, creating, updating, and deleting thoughts. It also manages reactions to thoughts.

#### User Controller

The User Controller is responsible for handling user-related actions, such as retrieving users, creating users, updating user profiles, and managing user friendships.

### Models

#### Thought Model

The Thought Model defines the schema for thoughts, including thought text, creation date, and reactions. It also includes virtuals for calculating reaction counts.

#### User Model

The User Model defines the schema for users, including usernames, thoughts, and friends.

## API Endpoints

### Thoughts

- **Create a Thought:** `/api/thoughts` (POST)
- **Get All Thoughts:** `/api/thoughts` (GET)
- **Get a Single Thought:** `/api/thoughts/:thoughtId` (GET)
- **Update a Thought:** `/api/thoughts/:thoughtId` (PUT)
- **Delete a Thought:** `/api/thoughts/:thoughtId` (DELETE)
- **Add Reaction:** `/api/thoughts/:thoughtId/reactions` (POST)
- **Delete Reaction:** `/api/thoughts/:thoughtId/reactions/:reactionId` (DELETE)

### Users

- **Get All Users:** `/api/users` (GET)
- **Get a Single User:** `/api/users/:userId` (GET)
- **Create a User:** `/api/users` (POST)
- **Update a User:** `/api/users/:userId` (PUT)
- **Delete a User:** `/api/users/:userId` (DELETE)
- **Add Friend:** `/api/users/:userId/friends/:friendId` (POST)
- **Remove Friend:** `/api/users/:userId/friends/:friendId` (DELETE)

## Usage

To use this API, you can make HTTP requests to the provided endpoints using a tool like Insomnia or by integrating it into your own frontend or backend application.

Feel free to explore the API's functionality and adapt it to your specific requirements.

## Contributing

If you'd like to contribute to this project, please follow our contributing guidelines.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

