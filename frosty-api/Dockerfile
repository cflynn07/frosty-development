FROM golang:1.13.5
WORKDIR /go/src/frosty-api
RUN go get github.com/codegangsta/gin
RUN go get github.com/eaburns/watch
RUN go get -u github.com/rakyll/gotest
COPY go.mod .
COPY go.sum .
RUN go mod download
COPY . .
CMD gin -p 80 run main.go
