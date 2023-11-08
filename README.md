# Organic Potholes API

The Organic Potholes API is a RESTful web service that allows you to manage pothole data in a MongoDB database. You can use this API to add, retrieve, and delete potholes from the database. This README provides information on how to get started with the API.

## Table of Contents

- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Usage Examples](#usage-examples)
- [Environment Variables](#environment-variables)

## Getting Started

Before you can use the Organic Potholes API, make sure you have Node.js and MongoDB installed on your system. Follow these steps to set up and run the API:

1. Clone this repository to your local machine.

2. Navigate to the project directory:

   ```bash
   cd Organic-Potholes-API
   ```

3. Install the required Node.js packages using `npm` or `yarn`:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Create a `.env` file in the project root directory with your MongoDB connection URL. You can use a local MongoDB instance or a cloud-hosted database like MongoDB Atlas. An example `.env` file might look like this:

   ```env
   DATABASE_URL=mongodb://localhost/organicpotholes
   ```

5. Start the API:

   ```bash
   npm start
   # or
   yarn start
   ```

The API should now be running at `http://localhost:3000`. You can change the port by modifying the `app.listen` call in `server.js`.

## API Endpoints

The Organic Potholes API provides the following endpoints for managing potholes:

- `POST /api/pothole/addPothole`: Create and save a single pothole to the database.
- `POST /api/pothole/addManyPotholes`: Add multiple potholes to the database.
- `GET /api/pothole/getAllPotholes`: Fetch a list of all potholes in the database.
- `DELETE /api/pothole/deletePothole/:id`: Delete a pothole by its ID.

For detailed information about each endpoint, see the code and comments in the `routes/potholeRoute.js` file.

## Usage Examples

You can use tools like `curl`, Postman, or any HTTP client library to interact with the API. Here are some usage examples:

### Adding a Pothole

To add a pothole to the database using the `POST /api/pothole/addPothole` endpoint, make a POST request with JSON data in the request body, including `Longitude` and `Latitude` fields:

```bash
curl -X POST http://localhost:3000/api/pothole/addPothole -H "Content-Type: application/json" -d '{"Longitude": "123.456", "Latitude": "789.123"}'
```

### Retrieving All Potholes

To retrieve a list of all potholes in the database using the `GET /api/pothole/getAllPotholes` endpoint:

```bash
curl http://localhost:3000/api/pothole/getAllPotholes
```

### Deleting a Pothole

To delete a pothole by its ID using the `DELETE /api/pothole/deletePothole/:id` endpoint, replace `:id` with the actual ID of the pothole you want to delete:

```bash
curl -X DELETE http://localhost:3000/api/pothole/deletePothole/your-pothole-id
```

## Environment Variables

The API uses environment variables for configuration. You can customize the behavior of the API by setting the following environment variables:

`DATABASE_URL`: The MongoDB connection string.

Ensure that you set the necessary environment variables in your `.env` file, as described in the "[Getting Started](#getting-started)" section.
