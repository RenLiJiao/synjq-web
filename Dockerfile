# base node image
FROM node:lts-bullseye-slim

# Install openssl for Prisma
RUN apt-get update && apt-get install -y openssl sqlite3

# optional: set tencent npm mirror
RUN npm config set registry http://mirrors.cloud.tencent.com/npm/

# set environmental vars
ENV NODE_ENV production
ENV DATABASE_URL=file:./sqlite.db
ENV SESSION_SECRET=jiuqiao

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production=false
COPY . ./
RUN npx prisma generate
RUN npx prisma db push
RUN npx prisma db seed
COPY . ./
RUN npm run build

# add shortcut for connecting to database CLI
RUN echo "#!/bin/sh\nset -x\nsqlite3 \$DATABASE_URL" > /usr/local/bin/database-cli && chmod +x /usr/local/bin/database-cli

EXPOSE 3000
CMD ["npm", "start"]
