FROM golang:1.13.5
WORKDIR /go/src/frosty-api
COPY go.mod .
COPY go.sum .
RUN go mod download
COPY . .
# RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o ./main .
CMD go run main.go
