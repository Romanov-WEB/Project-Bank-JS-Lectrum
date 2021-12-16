class Storage {
    #data;

    constructor() {
        this.#data = {
            title: 'Пополнение мобильного',
        };
    }

    set(key, value) {
        this.#data[key] = value;
    }

    get(key) {
        return this.#data[key];
    }

    getData() {
        return this.#data;
    }

    reset() {
        this.#data = {
            title: 'Пополнение мобильного',
        };
    }
}

export const storage = new Storage();
