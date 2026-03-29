FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install && \
    sed -i 's/allowedHosts: serverOptions\.allowedHosts/allowedHosts: true/' \
    node_modules/@angular-devkit/build-angular/src/builders/dev-server/vite-server.js
COPY . .
EXPOSE 4200
ENV HOST=0.0.0.0
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--port", "4200", "--allowed-hosts", "all"]
