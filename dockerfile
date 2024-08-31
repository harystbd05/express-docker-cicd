# Menggunakan Node.js base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh kode aplikasi
COPY . .

# Expose port aplikasi
EXPOSE 5000

# Command untuk menjalankan aplikasi
CMD ["node", "./src/server.js"]
