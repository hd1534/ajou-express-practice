# node:18.15.0-slim 기반으로 app.js를 실행시키는 도커파일

FROM node:18.15.0-slim

WORKDIR /app
COPY . /app
RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]

# docker build -t my-node-app .
# docker run -p 3000:3000 my-node-app