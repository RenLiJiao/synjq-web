# base node image
FROM node:lts-bullseye-slim as base

# set for base and all layer that inherit from it
ENV NODE_ENV production

# Install openssl for Prisma
RUN apt-get update && apt-get install -y openssl sqlite3

# Install all node_modules, including dev dependencies
FROM base as deps

WORKDIR /synjq-web

ADD package.json package-lock.json ./
RUN npm install --production=false

# Setup production node_modules
FROM base as production-deps

WORKDIR /synjq-web

COPY --from=deps /synjq-web/node_modules /synjq-web/node_modules
ADD package.json package-lock.json ./
RUN npm prune --production

# Build the app
FROM base as build

WORKDIR /synjq-web

COPY --from=deps /synjq-web/node_modules /synjq-web/node_modules

ADD prisma .
RUN npx prisma generate

ADD . .
RUN npm run build

# Finally, build the production image with minimal footprint
FROM base

ENV DATABASE_URL=file:./dev.db
ENV PORT="8080"
ENV NODE_ENV="production"

# add shortcut for connecting to database CLI
RUN echo "#!/bin/sh\nset -x\nsqlite3 \$DATABASE_URL" > /usr/local/bin/database-cli && chmod +x /usr/local/bin/database-cli

WORKDIR /synjq-web

COPY --from=production-deps /synjq-web/node_modules /synjq-web/node_modules
COPY --from=build /synjq-web/node_modules/.prisma /synjq-web/node_modules/.prisma

COPY --from=build /synjq-web/build /synjq-web/build
COPY --from=build /synjq-web/public /synjq-web/public
ADD . .

CMD ["npm", "start"]
