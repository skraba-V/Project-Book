# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend directory to the container
COPY frontend/ ./

# Expose the port on which the React app will run
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
