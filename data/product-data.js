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

class API_Set {
    constructor(opcode, name, brandname, currency, order) {
        this.opcode = opcode;
        this.name = name;
        this.brandname = brandname;
        this.currency = currency;
        // this.order = order;
        // this.email = email;
        // this.secretkey = secretkey;
    }

    toppedUp = {};

    get toppedUpProducts() {
        return this.toppedUp;
    }

    // Methods
    
}

const v12v = new API_Set("v12v", "Vivian", "VIVIAN127", "VND")

const API_Manager = {

}