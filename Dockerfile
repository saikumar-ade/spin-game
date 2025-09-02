# 1. Use an official Node.js runtime as a base image
FROM node:18

# 2. Set working directory inside the container
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy the rest of the app's source code
COPY . .

# 5. Expose the port the app runs on
EXPOSE 3000

# 6. Start the application
CMD ["npm", "start"]
