# Use whatever version you are running locally (see node -v)
FROM node:alpine

# Install dependencies (you are already in /app)
COPY package.json package-lock.json ./
COPY yarn.lock ./

ENV PORT 3000

RUN yarn install

# Add rest of the client code
# .dockerignore needs to skip node_modules
COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]