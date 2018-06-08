from node:8.11.2-jessie
MAINTAINER Heucles Junior <heucles@gmail.com>

COPY app/ /app

EXPOSE 3000

RUN cd app && npm install

CMD ["node", "/app/index.js", "bin/bash"]