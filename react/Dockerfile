FROM node:16-alpine

workdir /app

COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "run", "dev"]