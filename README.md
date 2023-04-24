# How to run

1. Start the container:

    ```
    docker run --rm -it -p 1880:1880 -v $PWD/data:/data --name honeywell nodered/node-red
    ```

2. Open Node-RED at http://localhost:1880
