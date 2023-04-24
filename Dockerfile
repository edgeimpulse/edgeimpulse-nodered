FROM nodered/node-red

COPY data/package*.json /data/
RUN cd /data/ && npm ci
