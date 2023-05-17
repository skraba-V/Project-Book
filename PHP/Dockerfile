# Use an official PHP runtime as the base image
FROM php:7.4-cli

# Set the working directory in the container
WORKDIR /app

# Copy the PHP files to the container
COPY . .

# Expose the port on which the PHP server will run
EXPOSE 8000

# Start the PHP server
CMD ["php", "-S", "0.0.0.0:8000"]
