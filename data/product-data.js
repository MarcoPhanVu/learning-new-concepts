const API_Manage = {
    API_List: {
        Alice: {
            brandName: "alice68",
            currency: "vnd",
            order: 9,
            email: "",
            opcode: "a68v",
            key: "",
        },
        Vivian: {
            brandName: "vivian127",
            currency: "vnd",
            order: 18,
            email: "",
            opcode: "v12v",
            key: "",
        },
        Argentum: {
            brandName: "argentum108",
            currency: "vnd",
            order: 27,
            email: "",
            opcode: "argv",
            key: "",
        }
    }

}

class API_Manager {
    constructor(name, brandname, currency, order, opcode, email, secretkey) {
        this.name = name;
        this.brandname = brandname;
        this.currency = currency;
        this.order = order;
        this.opcode = opcode;
        this.email = email;
        this.secretkey = secretkey;
    }

    toppedUp = {};

    // Getter
    get brandName() { return this.brandname; }
    get order() { return this.order; }
    get opcode() { return this.opcode; }
    get toppedUpProducts() {
        return this.toppedUp;
    }

    // Methods

}