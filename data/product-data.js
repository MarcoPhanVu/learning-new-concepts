class API_Set {
    constructor(opcode, name, brandname, currency) {
        this.opcode = opcode;
        this.name = name;
        this.brandname = brandname;
        this.currency = currency;
        // this.order = order;
    }

    toppedUp = {

    };

    get toppedUpProducts() {
        return this.toppedUp;
    }

    // Methods

}

const v12v = new API_Set("v12v", "Vivian", "VIVIAN127", "VND")
v12v.toppedUp = {
    "Bbin": "L82",
    "BTI": "avivian127vnd",     
    "CMD": "VV1VNadmin",
    "IBC": "D86",
    "SBO": "GSG87",
    "UG Sport(TBS)": "VIVIAN127VND",
    "WBET": "VIVIAN127",
    "Asia Gaming": "avivian127vnd",
    "Big Gaming": "VIVIAN127VN"
}

const API_Manager = {
    VND: [],
    USD: [],
    USDT: [],
    Combined: []
}