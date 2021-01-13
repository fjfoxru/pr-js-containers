export default class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }
    add(key, value) {
        this.errors.set(key, value);
    }
    translate(code) {
        return this.errors.get(code)
    }
}