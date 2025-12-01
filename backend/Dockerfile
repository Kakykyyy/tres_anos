FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./
RUN npm ci --only=production

# copy source
COPY . .

RUN npm run build

EXPOSE 8080

CMD ["node", "dist/index.js"]
