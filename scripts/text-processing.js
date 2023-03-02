const extractableTextBox = document.getElementById('text-processing');


//Usese keydown if require some key to start processing because input event doesn't handle funtion keys like "Enter"


extractableTextBox.value = 'Application: Top Up Product Credit \nTelegram Group: GS-API-VIVIAN127{A} \nProduct: \n\n3SING : bch\nBbin : L82\nBTI : avivian127vnd\nCMD : VV1VNadmin\nIBC : D86\nSBO : GSG87\nUG Sport(TBS) : VIVIAN127VND\nWBET : VIVIAN127\nAsia Gaming : avivian127vnd\nBig Gaming : VIVIAN127VN\nBbin : L82\nDream Gaming : DG011601CM\nEvolution Gaming : VIVIAN12VN\nHo Gaming : avivian127vnd\nMG Plus : VIVIAN127VN\nN2 Live : avivian127vnd\nPragmatic Play : VIVIAN127VNcs@gmail.com\nPlaytech : PZVIVIAN127VNDVNDadmin\nAWC Sexy Baccarat : vivian127vn\nVivo Gaming : VIVIAN127VN_P\nWM Casino : vv127vndapi\nApollo : gamingsoft-vivian127vnd\nCQ9 : VIVIAN127VND\nDragoon Soft : VIVIAN127VND\nLGD Gaming / Dream Tech : vivian127vnd_admin\nFunky : VIVIAN127VND\nFlowgaming : VIVIAN127_VND_USER\nJDB : Qwer1234\nLive22 : VIVIAN127VND\nMG Plus : VIVIAN127VN\nYL Gaming : yltchgfv\nIA Esport : VIVIAN127VN\nAvia Gaming : vivianvn_admin\nTF Gaming : vivian127vndo01\nGamingsoft Gameplay : M16\nQQ Keno : VN127VNADMIN\n93Connect : VIVIAN127VND\nBig Gaming : VIVIAN127VN\nAsia Gaming : avivian127vnd\nJili : GamingSoft_VIVIAN127VND_VND\nSpade Gaming : VVN12VNADMIN\nYaxinCQ9 : VIV127VN\nDigmaan : VC60PV36\nAWC RCB998 : vivian127vnd\nBole  Gaming : VIVIAN127VND@admin.com\nFun Gaming : VIVIAN127VN\nICG : VIVIAN127VND\nJili : GamingSoft_VIVIAN127VND_VND\nV8 Poker : V12VVND\nLeGaming : VV127VND\n\nOpcode: v12v\nCurrency: VND \nAmount: 1,000,000,000 (1B)';

let toi = extractableTextBox.value.split('\n');

console.log(toi);

extractableTextBox.addEventListener('keydown', (event) => {
    toi = event.target.value;
    extractMainInfo(toi);

    // if (event.key == "Enter") {
    //     console.log(event.target.value);
    //     toi = event.target.value;
    // }
});

function extractMainInfo(request) {
    let brand = request[1];
    let opcode = request[request.length - 3];
    let currency = request[request.length - 2];
    let amount = request[request.length - 1];

    brand = brand.split('-')[2].split('{A}')[0];
    opcode = opcode.split(' ')[1];
    currency = currency.split(' ')[1];
    amount = amount.split(' ')[1];

    console.log(`Brand =`, brand);
    console.log(`Opcode =`, opcode);
    console.log(`Currency =`, currency);
    console.log(`Amount =`, amount);
}

extractMainInfo(toi);

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
