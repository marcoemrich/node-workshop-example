FROM node:16 as builder

RUN npm install -g npm@7.17.0

WORKDIR /home/node
COPY . .
RUN chown -R node:node /home/node

USER node
RUN npm ci
ENV NODE_ENV production
RUN npm run build
RUN npm prune --unsafe-perm

# target docker image
FROM node:16-slim


WORKDIR /home/node/app
RUN chown -R node:node /home/node

USER node

COPY --from=builder /home/node/node_modules node_modules
COPY --from=builder /home/node/dist dist

EXPOSE 1337
CMD ["node", "dist/index.js"]
