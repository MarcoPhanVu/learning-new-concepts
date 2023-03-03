const extractableTextBox = document.getElementById('text-processing');


//Usese keydown if require some key to start processing because input event doesn't handle funtion keys like "Enter"


extractableTextBox.value = 'Application: Top Up Product Credit \nTelegram Group: GS-API-VIVIAN127{A} \nProduct: \n\nBbin : L82\nBTI : avivian127vnd\nCMD : VV1VNadmin\nIBC : D86\nSBO : GSG87\nUG Sport(TBS) : VIVIAN127VND\nWBET : VIVIAN127\nAsia Gaming : avivian127vnd\nBig Gaming : VIVIAN127VN\n\nOpcode: v12v\nCurrency: VND \nAmount: 1,000,000,000 (1B)';

let toi = extractableTextBox.value.split('\n');

console.log(toi);

// Change back to "input" because "keydown" only update the value after function have been executed
extractableTextBox.addEventListener('input', (event) => {
    toi = extractableTextBox.value.split('\n');
    console.log(extractableTextBox.value);
    console.log(toi);
    extractMainInfo(toi);

    // if (event.key == "Enter") {
    //     console.log(event.target.value);
    //     toi = event.target.value;
    // }
});


extractMainInfo(toi);


function extractMainInfo(request) {
    let opcode = request[request.length - 3];
    let brand = request[1];
    let currency = request[request.length - 2];
    let amount = request[request.length - 1];

    opcode = opcode.split(' ')[1];
    brand = brand.split('-')[2].split('{A}')[0];
    currency = currency.split(' ')[1];
    amount = amount.split(' ')[1];

    let name = brand.split('/^\d/')[0];
    console.log(`Name =`, name);

    for (let i = 4; i < request.length - 5; i++) {
        let temp = new API_Set(opcode)
    }
    let firstProd = request[4];
    let lastProd = request[request.length - 5];

    console.log(`Brand =`, brand);
    console.log(`Opcode =`, opcode);
    console.log(`Currency =`, currency);
    console.log(`Amount =`, amount);
    console.log(`firstProd =`, firstProd);
    console.log(`lastProd =`, lastProd);
}

console.log(v12v);












// temp
/*
Application: Top Up Product Credit 
Telegram Group: GS-API-ARGENTUM108{A} 
Product:  GSC
Opcode: argv 
Currency: VND 
Amount: 480,000,000 (480M)
*/


/*
Application: Top Up Product Credit 
Telegram Group: GS-API-VIVIAN127{A} 
Product: 

3SING : bch
Bbin : L82
BTI : avivian127vnd
CMD : VV1VNadmin
IBC : D86
SBO : GSG87
UG Sport(TBS) : VIVIAN127VND
WBET : VIVIAN127
Asia Gaming : avivian127vnd
Big Gaming : VIVIAN127VN
Bbin : L82
Dream Gaming : DG011601CM
Evolution Gaming : VIVIAN12VN
Ho Gaming : avivian127vnd
MG Plus : VIVIAN127VN
N2 Live : avivian127vnd
Pragmatic Play : VIVIAN127VNcs@gmail.com
Playtech : PZVIVIAN127VNDVNDadmin
AWC Sexy Baccarat : vivian127vn
Vivo Gaming : VIVIAN127VN_P
WM Casino : vv127vndapi
Apollo : gamingsoft-vivian127vnd
CQ9 : VIVIAN127VND
Dragoon Soft : VIVIAN127VND
LGD Gaming / Dream Tech : vivian127vnd_admin
Funky : VIVIAN127VND
Flowgaming : VIVIAN127_VND_USER
JDB : Qwer1234
Live22 : VIVIAN127VND
MG Plus : VIVIAN127VN
YL Gaming : yltchgfv
IA Esport : VIVIAN127VN
Avia Gaming : vivianvn_admin
TF Gaming : vivian127vndo01
Gamingsoft Gameplay : M16
QQ Keno : VN127VNADMIN
93Connect : VIVIAN127VND
Big Gaming : VIVIAN127VN
Asia Gaming : avivian127vnd
Jili : GamingSoft_VIVIAN127VND_VND
Spade Gaming : VVN12VNADMIN
YaxinCQ9 : VIV127VN
Digmaan : VC60PV36
AWC RCB998 : vivian127vnd
Bole  Gaming : VIVIAN127VND@admin.com
Fun Gaming : VIVIAN127VN
ICG : VIVIAN127VND
Jili : GamingSoft_VIVIAN127VND_VND
V8 Poker : V12VVND
LeGaming : VV127VND

Opcode: v12v
Currency: VND 
Amount: 1,000,000,000 (1B)
*/
