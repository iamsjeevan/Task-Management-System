# Base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire React app
COPY . .

# Build the React app
RUN npm run build

# Expose the React port
EXPOSE 3000

# Serve the React app
CMD ["npm", "start"]
