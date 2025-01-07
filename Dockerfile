RUN apt-get update && \
   apt-get install -y curl

RUN curl -L https://encore.dev/install.sh | bash

RUN encore build docker myapp

