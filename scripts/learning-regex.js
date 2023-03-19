// console.log("Test and I'm going to fucking sleep");

let string_list = [
    "bestpart goodpart impurity",
    "+ is a shortcut for {1, 0}",
    "so you can say \"one or more\" in a string",
    "Vivian127, Argentum108, Magnesi24, Ozone12, Carver25, Isaac34, Marune58, Harris124509, Weakness798512"
];

let pattern = [
    /\d{1,4}/g, //Get all digits from 1 num to 4 nums
    /\d[1-4]/g, //Get all digits from 1 to 4
]

// console.log(`from 1 num to 4 nums: `, string_list[3].match(pattern[0])); //['127', '108', '24', '12']
// console.log(`from 1 to 4: `, string_list[3].match(pattern[1])); //['127', '108', '24', '12']

