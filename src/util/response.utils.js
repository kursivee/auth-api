export class Error {
    constructor(message, status) {
        this.error = true;
        this.status = status;
        this.data = {
            message: message
        }
    }
}

export class Response {
    constructor(data, status = 200) {
        this.status = status;
        this.data = data
    }
}