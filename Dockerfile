# Use Node 24 as the base
FROM node:24-bullseye

# Create app directory
WORKDIR /app

# Copy package files for caching
COPY package*.json ./

# Install all dependencies (including devDependencies for the build)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port Next.js runs on (usually 3000)
EXPOSE 3000

# Start the Next.js production server
CMD ["npm", "start"]