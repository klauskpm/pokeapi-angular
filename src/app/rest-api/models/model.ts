export class Model {

    constructor(data) {
    }

    static create<T extends Model, I>(data: I): T {
        return <T> new this(data);
    }
}
