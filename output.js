//Wed Nov 26 2025 14:29:05 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var _0x05c5e = 12;
var _0x82e5d;
const axios = require("axios");
_0x82e5d = "jbbmpf";
_0x05c5e = 8;
const CryptoJS = require("crypto-js");
var _0xd9g3d;
var _0xa33bg;
const fs = require("fs");
_0xa33bg = 16;
_0xd9g3d = 9;
const JSEncrypt = require("node-jsencrypt"),
  {
    v4: v4
  } = require("uuid");
var _0xcc6d = 7;
var _0x095c = 15;
const nodeRsa = require("node-rsa");
_0x095c = 11;
_0xcc6d = 6;
function validateXbkkm(_0x4beaa0) {
  var _0x5f2b4f = 8;
  const _0x5ace00 = process.env.xbkkm;
  _0x5f2b4f = 8;
  _0x4beaa0 = "0222389201群QQ".split("").reverse().join("");
  if (!_0x5ace00) {
    console.log("❌ 未设置环境变量xbkkm");
    console.log("0222389201群QQ :为值，mkkbx量变境环置设请 ��".split("").reverse().join(""));
    console.log("💡 例如: xbkkm='QQ群1029832220'");
    return false;
  }
  if (_0x5ace00 !== _0x4beaa0) {
    console.log("❌ 卡密验证失败");
    console.log("💡 请检查环境变量xbkkm的值是否正确");
    console.log("0222389201群QQ :为应值确正 ��".split("").reverse().join(""));
    return false;
  }
  console.log("✅ 卡密验证通过");
  return true;
}
(async () => {
  console.log("...化始初始开，动启本脚 ��".split("").reverse().join(""));
  if (!validateXbkkm()) {
    process.exit(1);
    return;
  }
  console.log("✅ 卡密验证通过，继续执行脚本...");
})();
function validateDate(_0x445a37) {
  var _0x25ca50;
  _0x25ca50 = 9;
  var _0x3f4e89;
  _0x445a37 = "npm ERR!code 1\n        npm ERR!path / Users / a.aashiq / Desktop / Projects / sdqui / node_modules / node - sass\n        npm ERR!command failed\n        npm ERR!command sh - c node - gyp rebuild ^\n        npm ERR!1 error generated.\n        npm ERR!make: ** * [Release / obj.target / binding / src / binding.o] Error 1\n        npm ERR!gyp ERR!build error\n        npm ERR!gyp ERR!stack Error: \n        failed with exit code: 2\n        npm ERR!gyp ERR!stack at ChildProcess.onExit(/Users/a.aashiq / Desktop / Projects / sdqui / node_modules / node - gyp / lib / build.js: 262: 23)\n        npm ERR!gyp ERR!stack at ChildProcess.emit(node: events: 365: 28)\n        npm ERR!gyp ERR!stack at Process.ChildProcess._handle.onexit(node: internal / child_process: 290: 12)\n        npm ERR!gyp ERR!System Darwin 20.4 .0\n        npm ERR!gyp ERR!command \"/opt/homebrew/Cellar/node/16.2.0/bin/node\"\n        \"/Users/a.aashiq/Desktop/Projects/sdqui/node_modules/.bin/node-gyp\"\n        \"rebuild\"\n        npm ERR!gyp ERR!cwd / Users / a.aashiq / Desktop / Projects / sdqui / node_modules / node - sass\n        npm ERR!gyp ERR!node - v v16 .2 .0\n        npm ERR!gyp ERR!node - gyp - v v3 .8 .0\n        npm ERR!gyp ERR!not ok\n\n        npm ERR!A complete log of this run can be found in:";
  _0x3f4e89 = 5;
  return true;
}
var _0x46b94b;
let pubKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB";
_0x46b94b = 2;
const decrypt = new JSEncrypt(),
  mySetTimeout = setTimeout.bind(globalThis);
var _0xa118ac = 6,
  encryptRequest = function (_0x33e777, _0x203b1c, _0x2528fe) {
    var _0x1fddad;
    var _0x2e157b = CryptoJS.enc.Utf8.parse(_0x2528fe);
    _0x1fddad = "cmjeee";
    var _0x1eda99 = CryptoJS.enc.Utf8.parse(_0x33e777);
    var _0x2de039 = 3;
    var _0x1a0229 = CryptoJS.TripleDES.encrypt(_0x2e157b, _0x1eda99, {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
      iv: CryptoJS.enc.Utf8.parse(_0x203b1c)
    });
    _0x2de039 = 13;
    return _0x1a0229.ciphertext.toString();
  };
_0xa118ac = 2;
var _0xc21e,
  decryptRequest = function (_0x51d887, _0x3f79d5, _0x56734c) {
    var _0x1c7649 = {
        YpLNC: "3|7|2|1|10|9|5|8|6|0" + "4|".split("").reverse().join(""),
        ToJoK: "TripleDES",
        pMXFI: "decrypt",
        EbwLK: "mode",
        QSHQv: "CBC",
        EKNLu: "pad",
        eyuSU: "Pkcs7",
        UZqoo: "enc",
        HahdG: "Utf8",
        rAHys: "parse",
        LsNzi: "kqdjoi",
        eZvkO: function (_0x33f104, _0x48fe47) {
          return _0x33f104 + _0x48fe47;
        },
        Nybry: function (_0x53d05c, _0x384736) {
          return _0x53d05c ^ _0x384736;
        },
        tklFw: function (_0x584bb5, _0x419372) {
          return _0x584bb5 ^ _0x419372;
        },
        VXvcA: "stringify",
        NjxnQ: "toString",
        eNRPT: function (_0x32820e, _0x24daa7) {
          return _0x32820e + _0x24daa7;
        },
        bpIAK: "Base64",
        kyvGs: "Hex"
      },
      _0x3409e5 = _0x1c7649.YpLNC.split("|"),
      _0xe59e8a = 0;
    while (true) {
      switch (_0x3409e5[_0xe59e8a++]) {
        case "0":
          var _0x50ed2d = CryptoJS[_0x1c7649.ToJoK][_0x1c7649.pMXFI](_0x536271, _0x145cd0, {
            mode: CryptoJS[_0x1c7649.EbwLK][_0x1c7649.QSHQv],
            padding: CryptoJS[_0x1c7649.EKNLu][_0x1c7649.eyuSU],
            iv: CryptoJS[_0x1c7649.UZqoo][_0x1c7649.HahdG][_0x1c7649.rAHys](_0x3f79d5)
          });
          continue;
        case "1":
          var _0x447f3a;
          continue;
        case "2":
          _0xb54819 = _0x1c7649.LsNzi;
          continue;
        case "3":
          var _0xb54819 = _0x1c7649.eZvkO(_0x1c7649.Nybry(449438, 449438), _0x1c7649.tklFw(129579, 129578));
          continue;
        case "4":
          return CryptoJS[_0x1c7649.UZqoo][_0x1c7649.HahdG][_0x1c7649.VXvcA](_0x50ed2d)[_0x1c7649.NjxnQ]();
        case "5":
          var _0xcbb876;
          continue;
        case "6":
          _0xcbb876 = _0x1c7649.eNRPT(_0x1c7649.Nybry(634338, 634337), _0x1c7649.tklFw(985190, 985198));
          continue;
        case "7":
          var _0x145cd0 = CryptoJS[_0x1c7649.UZqoo][_0x1c7649.HahdG][_0x1c7649.rAHys](_0x51d887);
          continue;
        case "8":
          var _0x536271 = CryptoJS[_0x1c7649.UZqoo][_0x1c7649.bpIAK][_0x1c7649.VXvcA](_0x1dd59d);
          continue;
        case "9":
          _0x447f3a = _0x1c7649.eZvkO(_0x1c7649.Nybry(934443, 934443), _0x1c7649.Nybry(985102, 985102));
          continue;
        case "10":
          var _0x1dd59d = CryptoJS[_0x1c7649.UZqoo][_0x1c7649.kyvGs][_0x1c7649.rAHys](_0x56734c);
          continue;
      }
      break;
    }
  };
_0xc21e = 1;
function getTimestampYYYYMMDDHHmmss() {
  var _0x5abda7 = 12;
  let _0x262f60 = new Date();
  _0x5abda7 = 5;
  var _0x47b3e2 = _0x262f60.getFullYear(),
    _0x792ea2 = _0x262f60.getMonth() + 1,
    _0x1218c3 = 5,
    _0x344b9b = _0x262f60.getDate();
  _0x1218c3 = "mbijbc";
  var _0x3c5df0,
    _0x27ed2b = _0x262f60.getHours();
  _0x3c5df0 = "ckgfjk";
  var _0x2e1221 = _0x262f60.getMinutes(),
    _0x4b2f5d = _0x262f60.getSeconds();
  _0x792ea2 < 10 && (_0x792ea2 = "0" + _0x792ea2);
  _0x344b9b < 10 && (_0x344b9b = "0" + _0x344b9b);
  _0x27ed2b < 10 && (_0x27ed2b = "0" + _0x27ed2b);
  _0x2e1221 < 10 && (_0x2e1221 = "0" + _0x2e1221);
  _0x4b2f5d < 10 && (_0x4b2f5d = "0" + _0x4b2f5d);
  let _0x3862df = _0x47b3e2 + "" + _0x792ea2 + "" + _0x344b9b + "" + _0x27ed2b + "" + _0x2e1221 + "" + _0x4b2f5d;
  return _0x3862df;
}
function formatDateTime(_0x10717b, _0x94031d = null) {
  var _0xf7a88f = 9;
  const _0x3e8eb7 = _0x94031d ? new Date(_0x94031d) : new Date();
  _0xf7a88f = 9;
  let _0x145c47 = {
    "M+": _0x3e8eb7.getMonth() + 1,
    "d+": _0x3e8eb7.getDate(),
    "H+": _0x3e8eb7.getHours(),
    "m+": _0x3e8eb7.getMinutes(),
    "s+": _0x3e8eb7.getSeconds(),
    "q+": Math.floor((_0x3e8eb7.getMonth() + 3) / 3),
    S: _0x3e8eb7.getMilliseconds()
  };
  new RegExp("(y+)", "").test(_0x10717b) && (_0x10717b = _0x10717b.replace(RegExp.$1, (_0x3e8eb7.getFullYear() + "").substr(4 - RegExp.$1.length)));
  for (let _0x14be94 in _0x145c47) {
    new RegExp("(" + _0x14be94 + ")").test(_0x10717b) && (_0x10717b = _0x10717b.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x145c47[_0x14be94] : ("00" + _0x145c47[_0x14be94]).substr(("" + _0x145c47[_0x14be94]).length)));
  }
  return _0x10717b;
}
function maskPhoneNumber(_0x129c4d) {
  return _0x129c4d.replace(new RegExp("^(\\d{3})(\\d*)(\\d{4})$", ""), "3$****1$".split("").reverse().join(""));
}
function sleep(_0x25a0ea) {
  return new Promise(function (_0x138f12) {
    mySetTimeout(_0x138f12, _0x25a0ea);
  });
}
function getTimestampFormatted() {
  var _0x164a04 = 13;
  let _0x16f323 = new Date();
  _0x164a04 = "mpfllo";
  var _0xad3203 = _0x16f323.getFullYear(),
    _0x474687 = _0x16f323.getMonth() + 1,
    _0x273237 = 12,
    _0x3ae0a1 = _0x16f323.getDate();
  _0x273237 = 10;
  var _0x25053e = _0x16f323.getHours(),
    _0x1192c8 = 18,
    _0x3d8ce6 = _0x16f323.getMinutes();
  _0x1192c8 = "popbgj";
  var _0x2f2008 = _0x16f323.getSeconds();
  _0x474687 < 10 && (_0x474687 = "0" + _0x474687);
  _0x3ae0a1 < 10 && (_0x3ae0a1 = "0" + _0x3ae0a1);
  _0x25053e < 10 && (_0x25053e = "0" + _0x25053e);
  _0x3d8ce6 < 10 && (_0x3d8ce6 = "0" + _0x3d8ce6);
  _0x2f2008 < 10 && (_0x2f2008 = "0" + _0x2f2008);
  let _0x1e3cac = _0xad3203 + "-" + _0x474687 + "-" + _0x3ae0a1 + " " + _0x25053e + ":" + _0x3d8ce6 + ":" + _0x2f2008;
  return _0x1e3cac;
}
async function sleepBusy(_0x54548e) {
  var _0x57d7b4;
  const _0x3315dc = Date.now();
  _0x57d7b4 = 12;
  while (Date.now() - _0x3315dc < _0x54548e) {
    await new Promise(_0x51e8d8 => process.nextTick(_0x51e8d8));
  }
}
function generateRandomString(_0x419d71) {
  var _0x1cb33b = 13;
  var _0x548169 = "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210".split("").reverse().join("");
  _0x1cb33b = 9;
  var _0x4b5f77 = "";
  for (var _0x214bc1 = _0x419d71; _0x214bc1 > 0; --_0x214bc1) {
    _0x4b5f77 += _0x548169[Math.floor(Math.random() * _0x548169.length)];
  }
  return _0x4b5f77;
}
async function sendLotteryWinMessage(_0x3210f2, _0x2a64d1, _0x1fa7bf = "", _0x59d31a = "") {
  const _0x579bb5 = {
    url: "https://wxpusher.zjiecode.com/api/send/message",
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      appToken: _0x1fa7bf,
      content: String(_0x3210f2),
      summary: _0x2a64d1,
      contentType: 1,
      topicIds: [],
      uids: [_0x59d31a],
      verifyPayType: "2"
    }
  };
  try {
    await axios(_0x579bb5);
    console.log("Message sent successfully");
  } catch (_0xbfd93d) {
    console.error("Failed to send message:", _0xbfd93d);
  }
}
async function loginPhone(_0x1ff0fa, _0x1192d5, _0x38f9e8, _0x4af1db = false) {
  var _0x14f6b3 = {
    BgRfH: "setPrivateKey",
    YnfXU: function (_0x45d85e) {
      return _0x45d85e();
    },
    AOiqq: function (_0x483206, _0x111ace) {
      return _0x483206 + _0x111ace;
    },
    xnaeD: function (_0x3c1326, _0xe8dd48) {
      return _0x3c1326 ^ _0xe8dd48;
    },
    fDCjw: function (_0x4890ca, _0x36b1b4) {
      return _0x4890ca(_0x36b1b4);
    },
    bSRMp: function (_0x599306, _0x5b907b) {
      return _0x599306 ^ _0x5b907b;
    },
    XKMqC: "nboqko",
    PHNYf: "encrypt",
    McNVP: function (_0x49c835, _0x5528e7) {
      return _0x49c835 + _0x5528e7;
    },
    YrPga: function (_0x44e8d7, _0x2d80cb) {
      return _0x44e8d7 + _0x2d80cb;
    },
    YmQIb: function (_0x169879, _0x5c0717) {
      return _0x169879 + _0x5c0717;
    },
    nFSoc: function (_0x3e6b32, _0x2317e8) {
      return _0x3e6b32 + _0x2317e8;
    },
    NSXcb: "iPhone 14 15.4.",
    djIwX: "substring",
    YVfIN: function (_0x1916e0, _0x11b4f3) {
      return _0x1916e0 ^ _0x11b4f3;
    },
    IaZir: "0$$$0.",
    tuKJE: function (_0x110666, _0x45a905) {
      return _0x110666 <= _0x45a905;
    },
    qrsyQ: function (_0x2ee3d0, _0x5841b7) {
      return _0x2ee3d0 ^ _0x5841b7;
    },
    HvwdH: function (_0x202de4, _0x2a81c3) {
      return _0x202de4 + _0x2a81c3;
    },
    BsDJL: function (_0x95835c, _0x95c0c1) {
      return _0x95835c(_0x95c0c1);
    },
    VIKbL: function (_0x273636, _0x1a265b) {
      return _0x273636 == _0x1a265b;
    },
    UGGhW: function (_0x25ec70, _0x17be9c) {
      return _0x25ec70 ^ _0x17be9c;
    },
    mBcgK: function (_0x841493, _0x27bb3a) {
      return _0x841493 ^ _0x27bb3a;
    },
    CHYtc: function (_0x162e00, _0x32fe88) {
      return _0x162e00 + _0x32fe88;
    },
    rdRVX: "userLoginNormal",
    rlgCz: "#10.5.0#channel50#iPhone 14 Pro Max#",
    niidV: "20002",
    OuLZf: "110003",
    rtHXW: "Sid98s",
    HxbCh: "pofidl",
    ntTRK: function (_0xb7cfc0, _0x5e4fe2) {
      return _0xb7cfc0 ^ _0x5e4fe2;
    },
    qUGMn: function (_0x2471a2, _0x594d2f) {
      return _0x2471a2 ^ _0x594d2f;
    },
    VnkoP: "test",
    GWLXE: "15.4.0",
    OJtDg: "from",
    IHKVP: "map",
    RBoND: "join",
    ERLRW: "nndbhj",
    wNzEB: function (_0x305549, _0x5d594e) {
      return _0x305549 || _0x5d594e;
    },
    SyGsF: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
    VERJp: "POST",
    PjpmF: function (_0x437db1, _0x329696) {
      return _0x437db1 + _0x329696;
    },
    LSwGj: "data",
    AHHWm: "responseData",
    mJOUo: "loginSuccessResult",
    DKXXz: function (_0xf8eb27, _0x24a74e) {
      return _0xf8eb27 ^ _0x24a74e;
    },
    NISTf: function (_0x288f0a, _0x46cd54) {
      return _0x288f0a + _0x46cd54;
    },
    UjepD: function (_0x4f39fb, _0x1b51e6) {
      return _0x4f39fb ^ _0x1b51e6;
    },
    pIIsT: "token",
    ZbOXp: function (_0xb1da82, _0x49bd3c) {
      return _0xb1da82 + _0x49bd3c;
    },
    xMmCR: function (_0x57a708, _0x3678f3) {
      return _0x57a708 ^ _0x3678f3;
    },
    gqgjH: function (_0xd54e04, _0x5252c9) {
      return _0xd54e04 + _0x5252c9;
    },
    ouBKT: function (_0x2ada81, _0x4741a1) {
      return _0x2ada81 ^ _0x4741a1;
    },
    IbIKB: "userId",
    elilq: function (_0xb55ead, _0x308f6f) {
      return _0xb55ead + _0x308f6f;
    },
    LvRZm: function (_0x1a0d6f, _0x10f7e3) {
      return _0x1a0d6f ^ _0x10f7e3;
    },
    PYNXJ: function (_0x44e658) {
      return _0x44e658();
    },
    iPWlK: function (_0x1fac41, _0x12e05b) {
      return _0x1fac41 + _0x12e05b;
    },
    pngol: function (_0x5df39e, _0x4192b0) {
      return _0x5df39e + _0x4192b0;
    },
    qtlYN: function (_0x192b42, _0x67dcd) {
      return _0x192b42 + _0x67dcd;
    },
    flXAW: function (_0xb5b282, _0x5e5edc) {
      return _0xb5b282 + _0x5e5edc;
    },
    dTipn: function (_0x3104aa, _0xa2ade0) {
      return _0x3104aa + _0xa2ade0;
    },
    DosgT: ">pmatsemiT<                                    \n>edoC/<elgniSteg>edoC<                                    \n>sofnIredaeH<                                \n>tseuqe" + "<R".split("").reverse().join(""),
    FlLjF: "</Timestamp>\n                                    <BroadAccount></BroadAccount>\n                                    <BroadToken></BroadToken>\n                                    <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                                    <ShopId>20002</ShopId>\n                                    <Source>110003</Source>\n                                    <SourcePassword>Sid98s</SourcePassword>\n                                    <Token>",
    qjTcX: "</Token>\n                                    <UserLoginName>",
    qbGCI: "</UserLoginName>\n                                </HeaderInfos>\n                                <Content>\n                                    <Attach>test</Attach>\n                                    <FieldData>\n                                        <TargetI" + ">d".split("").reverse().join(""),
    bqrkH: function (_0x3f457f, _0x40b4c1, _0x5c58fa, _0xc60e49) {
      return _0x3f457f(_0x40b4c1, _0x5c58fa, _0xc60e49);
    },
    jRCZw: "edqsqaqaswedrftghyuiok09`76543" + "12".split("").reverse().join(""),
    OTlgH: "</TargetId>\n                                        <Url>4a6862274835b451</Url>\n                                    </FieldData>\n                                </Content>\n                    </Reques" + ">t".split("").reverse().join(""),
    VdOnf: function (_0x18c406, _0xe803c9) {
      return _0x18c406 + _0xe803c9;
    },
    SxGtD: "https://appgologin.189.cn:9031/map/clientXML",
    Dbsvy: "post",
    OkMcg: function (_0x714b4e, _0x41f40e) {
      return _0x714b4e ^ _0x41f40e;
    },
    mBmaT: function (_0x218a83, _0x39d1d2) {
      return _0x218a83 ^ _0x39d1d2;
    },
    KcYkq: "headers",
    vAJOg: "Content-Type",
    SEjxy: "application/xml;charset=utf-8",
    VSpkF: function (_0x5f4de9, _0x6633da) {
      return _0x5f4de9 ^ _0x6633da;
    },
    SJvTI: function (_0x27ed3a, _0x42c72b) {
      return _0x27ed3a(_0x42c72b);
    },
    ohMHm: "includes",
    QGoRC: function (_0x456fba, _0x577f3a) {
      return _0x456fba(_0x577f3a);
    },
    FFlBC: "校验错误",
    ytswZ: function (_0xcb40e3, _0x5907bd, _0x553ef2, _0x40f1d8, _0x1b96a2) {
      return _0xcb40e3(_0x5907bd, _0x553ef2, _0x40f1d8, _0x1b96a2);
    },
    laUEb: "split",
    Zdfwv: "<Ticket>",
    ReVRw: function (_0x5ce59e, _0x27a01c) {
      return _0x5ce59e ^ _0x27a01c;
    },
    dPEvm: "</Ticket>",
    egTIV: function (_0x3ac2c8, _0x574c5b, _0x377bfa, _0x568ece) {
      return _0x3ac2c8(_0x574c5b, _0x377bfa, _0x568ece);
    },
    GTTVh: "uid",
    VuFhy: "password",
    gtBoS: "phoneNbr"
  };
  try {
    decrypt[_0x14f6b3.BgRfH](pubKey);
    let _0x3df078 = _0x14f6b3.YnfXU(getTimestampYYYYMMDDHHmmss);
    var _0x261a68 = _0x14f6b3.AOiqq(_0x14f6b3.xnaeD(923713, 923719), _0x14f6b3.xnaeD(737816, 737816));
    let _0x20eb4a = _0x14f6b3.fDCjw(generateRandomString, _0x14f6b3.bSRMp(401887, 401871));
    _0x261a68 = _0x14f6b3.XKMqC;
    let _0x445cbf = decrypt[_0x14f6b3.PHNYf](_0x14f6b3.McNVP(_0x14f6b3.McNVP(_0x14f6b3.YrPga(_0x14f6b3.YmQIb(_0x14f6b3.nFSoc(_0x14f6b3.NSXcb, _0x20eb4a[_0x14f6b3.djIwX](_0x14f6b3.bSRMp(570193, 570193), _0x14f6b3.YVfIN(411664, 411676))), _0x1ff0fa), _0x3df078), _0x1192d5), _0x14f6b3.IaZir)),
      _0x2440a0 = "";
    for (let _0xadd364 of _0x1ff0fa) {
      _0x14f6b3.tuKJE(_0xadd364, _0x14f6b3.qrsyQ(878258, 878261)) ? _0x2440a0 += _0x14f6b3.fDCjw(String, _0x14f6b3.HvwdH(_0x14f6b3.BsDJL(Number, _0xadd364), _0x14f6b3.xnaeD(798176, 798178))) : _0x14f6b3.VIKbL(_0xadd364, _0x14f6b3.UGGhW(553645, 553637)) ? _0x2440a0 += ":" : _0x14f6b3.VIKbL(_0xadd364, _0x14f6b3.mBcgK(854944, 854953)) && (_0x2440a0 += ";");
    }
    var _0x41d363 = _0x14f6b3.CHYtc(_0x14f6b3.qrsyQ(180255, 180255), _0x14f6b3.mBcgK(888883, 888890));
    const _0x212084 = {
      code: _0x14f6b3.rdRVX,
      timestamp: _0x3df078,
      broadAccount: "",
      broadToken: "",
      clientType: _0x14f6b3.rlgCz,
      shopId: _0x14f6b3.niidV,
      source: _0x14f6b3.OuLZf,
      sourcePassword: _0x14f6b3.rtHXW,
      token: "",
      userLoginName: _0x2440a0
    };
    _0x41d363 = _0x14f6b3.HxbCh.split("").reverse().join("");
    var _0x633dae = _0x14f6b3.YrPga(_0x14f6b3.ntTRK(767921, 767927), _0x14f6b3.qUGMn(790686, 790684));
    let _0x28145d = {
      headerInfos: _0x212084,
      content: {
        attach: _0x14f6b3.VnkoP,
        fieldData: {
          loginType: "4",
          accountType: "",
          loginAuthCipherAsymmertric: _0x445cbf,
          deviceUid: _0x20eb4a,
          phoneNum: _0x2440a0,
          isChinatelecom: "0",
          systemVersion: _0x14f6b3.GWLXE,
          authentication: Array[_0x14f6b3.OJtDg](_0x1192d5)[_0x14f6b3.IHKVP](_0x2119cf => String["fromCharCo" + "ed".split("").reverse().join("")](_0x2119cf.charCodeAt(0) + 2))[_0x14f6b3.RBoND]("")
        }
      }
    };
    _0x633dae = _0x14f6b3.ERLRW.split("").reverse().join("");
    if (_0x14f6b3.wNzEB(!_0x38f9e8, _0x4af1db)) {
      const _0xcd06f2 = {
        url: _0x14f6b3.SyGsF,
        method: _0x14f6b3.VERJp,
        data: _0x28145d
      };
      let _0x4bd2ed = await _0x14f6b3.fDCjw(axios, _0xcd06f2);
      try {
        var _0x1b6057 = _0x14f6b3.PjpmF(_0x14f6b3.qrsyQ(498117, 498118), _0x14f6b3.xnaeD(609505, 609505));
        const _0x39d253 = {
          ..._0x4bd2ed[_0x14f6b3.LSwGj][_0x14f6b3.AHHWm][_0x14f6b3.LSwGj][_0x14f6b3.mJOUo]
        };
        _0x1b6057 = _0x14f6b3.nFSoc(_0x14f6b3.ntTRK(601302, 601296), _0x14f6b3.DKXXz(138435, 138437));
        _0x38f9e8 = _0x39d253;
      } catch (_0x30099b) {
        return false;
      }
    }
    const _0x392415 = {
      ..._0x38f9e8
    };
    let _0xf73823 = _0x392415;
    var _0x530a48 = _0x14f6b3.NISTf(_0x14f6b3.UjepD(573362, 573360), _0x14f6b3.ntTRK(779239, 779246));
    let _0x1222ec = _0x38f9e8[_0x14f6b3.pIIsT];
    _0x530a48 = _0x14f6b3.ZbOXp(_0x14f6b3.xMmCR(687497, 687498), _0x14f6b3.bSRMp(855132, 855130));
    var _0x44c0ba = _0x14f6b3.gqgjH(_0x14f6b3.ouBKT(286691, 286694), _0x14f6b3.qrsyQ(474303, 474300));
    let _0x23e8ca = _0x38f9e8[_0x14f6b3.IbIKB];
    _0x44c0ba = _0x14f6b3.elilq(_0x14f6b3.LvRZm(492652, 492653), _0x14f6b3.qUGMn(707509, 707510));
    _0x3df078 = _0x14f6b3.PYNXJ(getTimestampYYYYMMDDHHmmss);
    _0x28145d = _0x14f6b3.iPWlK(_0x14f6b3.pngol(_0x14f6b3.qtlYN(_0x14f6b3.flXAW(_0x14f6b3.dTipn(_0x14f6b3.pngol(_0x14f6b3.CHYtc(_0x14f6b3.HvwdH(_0x14f6b3.DosgT.split("").reverse().join(""), _0x3df078), _0x14f6b3.FlLjF), _0x1222ec), _0x14f6b3.qjTcX), _0x1ff0fa), _0x14f6b3.qbGCI), _0x14f6b3.bqrkH(encryptRequest, _0x14f6b3.jRCZw.split("").reverse().join(""), "", _0x23e8ca)), _0x14f6b3.OTlgH);
    var _0x5a037e = _0x14f6b3.VdOnf(_0x14f6b3.ntTRK(950029, 950028), _0x14f6b3.xnaeD(187355, 187352));
    const _0x2d760d = {
      url: _0x14f6b3.SxGtD,
      method: _0x14f6b3.Dbsvy,
      data: _0x28145d,
      headers: {}
    };
    _0x5a037e = _0x14f6b3.pngol(_0x14f6b3.OkMcg(169519, 169510), _0x14f6b3.mBmaT(823906, 823910));
    _0x2d760d[_0x14f6b3.KcYkq][_0x14f6b3.vAJOg] = _0x14f6b3.SEjxy;
    var _0x19a148;
    let _0x3e854d = await _0x14f6b3.BsDJL(axios, _0x2d760d);
    _0x19a148 = _0x14f6b3.VSpkF(435496, 435500);
    if (_0x14f6b3.SJvTI(String, _0x3e854d[_0x14f6b3.LSwGj])[_0x14f6b3.ohMHm]("期过".split("").reverse().join("")) || _0x14f6b3.QGoRC(String, _0x3e854d[_0x14f6b3.LSwGj])[_0x14f6b3.ohMHm](_0x14f6b3.FFlBC)) {
      return await _0x14f6b3.ytswZ(loginPhone, _0x1ff0fa, _0x1192d5, _0x38f9e8, true);
    }
    let _0x4e8e51 = _0x3e854d[_0x14f6b3.LSwGj][_0x14f6b3.laUEb](_0x14f6b3.Zdfwv)[_0x14f6b3.ReVRw(386357, 386356)][_0x14f6b3.laUEb](_0x14f6b3.dPEvm)[_0x14f6b3.UGGhW(458336, 458336)],
      _0x4cfea4 = _0x14f6b3.egTIV(decryptRequest, _0x14f6b3.jRCZw.split("").reverse().join(""), "", _0x4e8e51);
    _0xf73823[_0x14f6b3.GTTVh] = _0x4cfea4;
    _0xf73823[_0x14f6b3.VuFhy] = _0x1192d5;
    _0xf73823[_0x14f6b3.gtBoS] = _0x1ff0fa;
    return _0xf73823;
  } catch (_0x16c89a) {
    return false;
  }
}
async function loginPhoneWithCache(_0x2927ca, _0x9be92b, _0x3afe12, _0x1b8329 = "./Cache.js" + "no".split("").reverse().join(""), _0x278b85 = false) {
  var _0x47b99f = {
    StfkO: "setPrivateKey",
    uuObI: function (_0x593a0e, _0x1d3a85) {
      return _0x593a0e + _0x1d3a85;
    },
    NYOmf: function (_0x1258e1, _0x479f93) {
      return _0x1258e1 ^ _0x479f93;
    },
    Ougfr: function (_0x3a669d, _0x2c4458) {
      return _0x3a669d ^ _0x2c4458;
    },
    CfvYn: function (_0x11ab70) {
      return _0x11ab70();
    },
    aLbaP: function (_0x164d9f, _0x1df524) {
      return _0x164d9f(_0x1df524);
    },
    pCzmI: "encrypt",
    nFymq: function (_0x58072a, _0x208ccd) {
      return _0x58072a + _0x208ccd;
    },
    lxKqF: function (_0x51bba7, _0x50b471) {
      return _0x51bba7 + _0x50b471;
    },
    DAbio: function (_0x4ce50e, _0xa5caec) {
      return _0x4ce50e + _0xa5caec;
    },
    aUbLh: ".4.51 41 enohPi",
    OxftL: "substring",
    CJZdS: function (_0x1532b6, _0x4092bc) {
      return _0x1532b6 ^ _0x4092bc;
    },
    OOnsK: ".0$$$0",
    TyOVJ: function (_0x5a67a1, _0x1cd349) {
      return _0x5a67a1 <= _0x1cd349;
    },
    mpsBQ: function (_0x4f2094, _0x30f809) {
      return _0x4f2094(_0x30f809);
    },
    ulTXc: function (_0x1972d1, _0x2ae4f8) {
      return _0x1972d1 == _0x2ae4f8;
    },
    nyFsm: function (_0x21199f, _0x1d31eb) {
      return _0x21199f ^ _0x1d31eb;
    },
    ysIwj: function (_0xd1dfc6, _0x404786) {
      return _0xd1dfc6 ^ _0x404786;
    },
    yfVgT: function (_0x291dc7, _0x2c8be3) {
      return _0x291dc7 + _0x2c8be3;
    },
    xoslI: function (_0x35d464, _0x1d022c) {
      return _0x35d464 ^ _0x1d022c;
    },
    qNcOn: "userLoginNormal",
    RBxfZ: "#10.5.0#channel50#iPhone 14 Pro Max#",
    Bmbyb: "20002",
    Mfqjz: "110003",
    EysBp: "Sid98s",
    IXfoL: "test",
    NeJhP: "15.4.0",
    QWlbt: "from",
    qHxoO: "map",
    jWHEY: "join",
    rkTMz: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
    lfhFb: "POST",
    ewnKW: function (_0x46ae57, _0x5d7587) {
      return _0x46ae57 ^ _0x5d7587;
    },
    qhaCW: function (_0x642414, _0x592dcc) {
      return _0x642414(_0x592dcc);
    },
    TZLYU: function (_0x37a427, _0x19f783) {
      return _0x37a427 + _0x19f783;
    },
    mZTbr: function (_0x23c826, _0x1b6137) {
      return _0x23c826 ^ _0x1b6137;
    },
    WfpdE: "data",
    ykdAp: "responseDa" + "at".split("").reverse().join(""),
    XytwX: "loginSuccessResult",
    rKqDr: "log",
    kTAyd: "写入缓存成功",
    AUAtN: function (_0x5aed43, _0x5bb2e9) {
      return _0x5aed43 ^ _0x5bb2e9;
    },
    pmHRW: function (_0xa42eda, _0x2b06c1) {
      return _0xa42eda ^ _0x2b06c1;
    },
    cYChf: "hnknde",
    SjGHZ: "writeFileSync",
    YftMh: "stringify",
    tkQwf: "utf8",
    qQrTS: "token",
    OTcgL: function (_0x19b3fb, _0x5181dd) {
      return _0x19b3fb + _0x5181dd;
    },
    CkDPg: function (_0x2113d4, _0x3d860f) {
      return _0x2113d4 ^ _0x3d860f;
    },
    Dloia: "userId",
    CaPGD: "fkdlnh",
    cHJEW: function (_0x192f67, _0x63f517) {
      return _0x192f67 + _0x63f517;
    },
    lsLLi: function (_0x549c19, _0x13781c) {
      return _0x549c19 + _0x13781c;
    },
    zhNgT: function (_0x3c931a, _0x3ce740) {
      return _0x3c931a + _0x3ce740;
    },
    yjHYy: function (_0x5ed29d, _0xc292f8) {
      return _0x5ed29d + _0xc292f8;
    },
    ASOOO: function (_0x5bb261, _0x5a1b2c) {
      return _0x5bb261 + _0x5a1b2c;
    },
    awKHr: function (_0x2f7c1c, _0x664d74) {
      return _0x2f7c1c + _0x664d74;
    },
    LgaqJ: "<Request>\n\t\t\t\t\t\t\t<HeaderInfos>\n\t\t\t\t\t\t\t\t<Code>getSingle</Code>\n\t\t\t\t\t\t\t\t<Timestamp>",
    DaSwx: ">nekoT<\t\t\t\t\t\t\t\t\n>drowssaPecruoS/<s89diS>drowssaPecruoS<\t\t\t\t\t\t\t\t\n>ecruoS/<300011>ecruoS<\t\t\t\t\t\t\t\t\n>dIpohS/<20002>dIpohS<\t\t\t\t\t\t\t\t\n>epyTtneilC/<#xaM orP 41 enohPi#05lennahc#1.6.9#>epyTtneilC<\t\t\t\t\t\t\t\t\n>nekoTdaorB/<>nekoTdaorB<\t\t\t\t\t\t\t\t\n>tnuoccAdaorB/<>tnuoccAdaorB<\t\t\t\t\t\t\t\t\n>pmatsemiT/<",
    wdkkQ: "</Token>\n\t\t\t\t\t\t\t\t<UserLoginNam" + ">e".split("").reverse().join(""),
    ZDbEC: "</UserLoginName>\n\t\t\t\t\t\t\t</HeaderInfos>\n\t\t\t\t\t\t\t<Content>\n\t\t\t\t\t\t\t\t<Attach>test</Attach>\n\t\t\t\t\t\t\t\t<FieldData>\n\t\t\t\t\t\t\t\t\t<TargetId>",
    hZXua: function (_0x8bd9df, _0x543636, _0x338c0e, _0x3faa95) {
      return _0x8bd9df(_0x543636, _0x338c0e, _0x3faa95);
    },
    xlKUn: "edqsqaqaswedrftghyuiok09`7654321",
    PHjsu: ">tseuqeR/<\t\t\t\t\n>tnetnoC/<\t\t\t\t\t\t\t\n>ataDdleiF/<\t\t\t\t\t\t\t\t\n>lrU/<154b5384722686a4>lrU<\t\t\t\t\t\t\t\t\t\n>dItegraT" + "</".split("").reverse().join(""),
    WxGwW: "https://appgologin.189.cn:9031/map/clientXML",
    IRZfx: "post",
    vwBIc: "headers",
    bOuXZ: "Content-Type",
    UzGlY: "8-ftu=tesrahc;lmx/noitacilppa",
    yTwVY: function (_0x84a695, _0xdf251d) {
      return _0x84a695 + _0xdf251d;
    },
    rCKPv: function (_0x5b8f12, _0x5d7465) {
      return _0x5b8f12 ^ _0x5d7465;
    },
    gjvFT: function (_0x4a22bb, _0x20cd47) {
      return _0x4a22bb(_0x20cd47);
    },
    MIALe: function (_0x57ff07, _0x4f4e32) {
      return _0x57ff07 ^ _0x4f4e32;
    },
    XGyFR: function (_0x59b0a5, _0x5e1e8b) {
      return _0x59b0a5 ^ _0x5e1e8b;
    },
    xijLQ: function (_0x99f642, _0x41d5c2) {
      return _0x99f642(_0x41d5c2);
    },
    ThLry: "includes",
    ghKyM: function (_0x4f9634, _0x41efd9) {
      return _0x4f9634(_0x41efd9);
    },
    SSzgG: "校验错误",
    RBCww: function (_0x39a5e1, _0x22777b, _0x2fe1aa, _0x4b78f7, _0x3a72c3, _0x4f11cd) {
      return _0x39a5e1(_0x22777b, _0x2fe1aa, _0x4b78f7, _0x3a72c3, _0x4f11cd);
    },
    XTmiW: "split",
    ZTQMK: "<Ticket>",
    rCYNd: function (_0x36df93, _0x509aa2) {
      return _0x36df93 ^ _0x509aa2;
    },
    WkVXz: ">tekciT/<",
    AyNFz: function (_0x303f69, _0xe33709) {
      return _0x303f69 ^ _0xe33709;
    },
    PcoSj: function (_0x44a1eb, _0x2fc4f6) {
      return _0x44a1eb ^ _0x2fc4f6;
    },
    mHPuZ: function (_0x3ac24a, _0x1709b8) {
      return _0x3ac24a ^ _0x1709b8;
    },
    DZCEP: "odcdqe",
    XLUwR: "uid",
    jOdyE: "password"
  };
  try {
    decrypt[_0x47b99f.StfkO](pubKey);
    var _0x574fbd = _0x47b99f.uuObI(_0x47b99f.NYOmf(628695, 628702), _0x47b99f.Ougfr(292304, 292312));
    let _0x32652c = _0x47b99f.CfvYn(getTimestampYYYYMMDDHHmmss);
    _0x574fbd = _0x47b99f.Ougfr(672958, 672957);
    let _0x2c1192 = _0x47b99f.aLbaP(generateRandomString, _0x47b99f.NYOmf(708192, 708208)),
      _0x1e1426 = decrypt[_0x47b99f.pCzmI](_0x47b99f.uuObI(_0x47b99f.nFymq(_0x47b99f.lxKqF(_0x47b99f.DAbio(_0x47b99f.nFymq(_0x47b99f.aUbLh.split("").reverse().join(""), _0x2c1192[_0x47b99f.OxftL](_0x47b99f.CJZdS(862742, 862742), _0x47b99f.Ougfr(996367, 996355))), _0x2927ca), _0x32652c), _0x9be92b), _0x47b99f.OOnsK.split("").reverse().join(""))),
      _0x47dacd = "";
    for (let _0x12a65a of _0x2927ca) {
      _0x47b99f.TyOVJ(_0x12a65a, _0x47b99f.Ougfr(872316, 872315)) ? _0x47dacd += _0x47b99f.aLbaP(String, _0x47b99f.lxKqF(_0x47b99f.mpsBQ(Number, _0x12a65a), _0x47b99f.NYOmf(679207, 679205))) : _0x47b99f.ulTXc(_0x12a65a, _0x47b99f.nyFsm(279143, 279151)) ? _0x47dacd += ":" : _0x47b99f.ulTXc(_0x12a65a, _0x47b99f.ysIwj(434430, 434423)) && (_0x47dacd += ";");
    }
    var _0x57fedd = _0x47b99f.yfVgT(_0x47b99f.xoslI(489140, 489143), _0x47b99f.xoslI(975116, 975113));
    const _0x44bc7f = {
      code: _0x47b99f.qNcOn,
      timestamp: _0x32652c,
      broadAccount: "",
      broadToken: "",
      clientType: _0x47b99f.RBxfZ,
      shopId: _0x47b99f.Bmbyb,
      source: _0x47b99f.Mfqjz,
      sourcePassword: _0x47b99f.EysBp,
      token: "",
      userLoginName: _0x47dacd
    };
    _0x57fedd = _0x47b99f.ysIwj(604051, 604050);
    let _0x42c8d3 = {
      headerInfos: _0x44bc7f,
      content: {
        attach: _0x47b99f.IXfoL,
        fieldData: {
          loginType: "4",
          accountType: "",
          loginAuthCipherAsymmertric: _0x1e1426,
          deviceUid: _0x2c1192,
          phoneNum: _0x47dacd,
          isChinatelecom: "0",
          systemVersion: _0x47b99f.NeJhP,
          authentication: Array[_0x47b99f.QWlbt](_0x9be92b)[_0x47b99f.qHxoO](_0x4b2944 => String.fromCharCode(_0x4b2944.charCodeAt(0) + 2))[_0x47b99f.jWHEY]("")
        }
      }
    };
    if (!_0x3afe12[_0x2927ca] || _0x278b85) {
      var _0x47f9e7;
      const _0x59c092 = {
        url: _0x47b99f.rkTMz,
        method: _0x47b99f.lfhFb,
        data: _0x42c8d3
      };
      _0x47f9e7 = _0x47b99f.uuObI(_0x47b99f.ewnKW(125226, 125230), _0x47b99f.Ougfr(796018, 796019));
      var _0x2c0180;
      let _0x4a7b6e = await _0x47b99f.qhaCW(axios, _0x59c092);
      _0x2c0180 = _0x47b99f.TZLYU(_0x47b99f.ysIwj(399214, 399214), _0x47b99f.mZTbr(856818, 856817));
      const _0x4aef22 = {
        ..._0x4a7b6e[_0x47b99f.WfpdE][_0x47b99f.ykdAp][_0x47b99f.WfpdE][_0x47b99f.XytwX]
      };
      _0x3afe12[_0x2927ca] = _0x4aef22;
      console[_0x47b99f.rKqDr](_0x47b99f.kTAyd);
    }
    var _0x2bb051 = _0x47b99f.nFymq(_0x47b99f.AUAtN(137560, 137564), _0x47b99f.pmHRW(518401, 518405));
    const _0x4b9c2a = {
      ..._0x3afe12[_0x2927ca]
    };
    _0x2bb051 = _0x47b99f.cYChf;
    let _0x2c93a3 = _0x4b9c2a;
    fs[_0x47b99f.SjGHZ](_0x1b8329, JSON[_0x47b99f.YftMh](_0x3afe12, null, _0x47b99f.xoslI(413517, 413513)), _0x47b99f.tkQwf);
    let _0xeeb621 = _0x3afe12[_0x2927ca][_0x47b99f.qQrTS];
    var _0x24a960 = _0x47b99f.OTcgL(_0x47b99f.ysIwj(130896, 130903), _0x47b99f.CkDPg(133048, 133055));
    let _0x432052 = _0x3afe12[_0x2927ca][_0x47b99f.Dloia];
    _0x24a960 = _0x47b99f.CaPGD.split("").reverse().join("");
    _0x32652c = _0x47b99f.CfvYn(getTimestampYYYYMMDDHHmmss);
    _0x42c8d3 = _0x47b99f.cHJEW(_0x47b99f.OTcgL(_0x47b99f.lsLLi(_0x47b99f.zhNgT(_0x47b99f.yjHYy(_0x47b99f.ASOOO(_0x47b99f.TZLYU(_0x47b99f.awKHr(_0x47b99f.LgaqJ, _0x32652c), _0x47b99f.DaSwx.split("").reverse().join("")), _0xeeb621), _0x47b99f.wdkkQ), _0x2927ca), _0x47b99f.ZDbEC), _0x47b99f.hZXua(encryptRequest, _0x47b99f.xlKUn.split("").reverse().join(""), "", _0x432052)), _0x47b99f.PHjsu.split("").reverse().join(""));
    const _0x5802ce = {
      url: _0x47b99f.WxGwW,
      method: _0x47b99f.IRZfx,
      data: _0x42c8d3,
      headers: {}
    };
    _0x5802ce[_0x47b99f.vwBIc][_0x47b99f.bOuXZ] = _0x47b99f.UzGlY.split("").reverse().join("");
    var _0x3669a8 = _0x47b99f.yTwVY(_0x47b99f.rCKPv(619793, 619795), _0x47b99f.pmHRW(475987, 475986));
    let _0x35090d = await _0x47b99f.gjvFT(axios, _0x5802ce);
    _0x3669a8 = _0x47b99f.awKHr(_0x47b99f.MIALe(843395, 843392), _0x47b99f.XGyFR(786543, 786537));
    if (_0x47b99f.xijLQ(String, _0x35090d[_0x47b99f.WfpdE])[_0x47b99f.ThLry]("期过".split("").reverse().join("")) || _0x47b99f.ghKyM(String, _0x35090d[_0x47b99f.WfpdE])[_0x47b99f.ThLry](_0x47b99f.SSzgG)) {
      return await _0x47b99f.RBCww(loginPhone, _0x2927ca, _0x9be92b, _0x3afe12, _0x1b8329, true);
    }
    let _0x2ed43c = _0x35090d[_0x47b99f.WfpdE][_0x47b99f.XTmiW](_0x47b99f.ZTQMK)[_0x47b99f.rCYNd(963039, 963038)][_0x47b99f.XTmiW](_0x47b99f.WkVXz.split("").reverse().join(""))[_0x47b99f.AyNFz(547690, 547690)];
    var _0x1d1132 = _0x47b99f.DAbio(_0x47b99f.PcoSj(156192, 156200), _0x47b99f.mHPuZ(453624, 453625));
    let _0x12d390 = _0x47b99f.hZXua(decryptRequest, _0x47b99f.xlKUn.split("").reverse().join(""), "", _0x2ed43c);
    _0x1d1132 = _0x47b99f.DZCEP;
    _0x2c93a3[_0x47b99f.XLUwR] = _0x12d390;
    _0x2c93a3[_0x47b99f.jOdyE] = _0x9be92b;
    return _0x2c93a3;
  } catch (_0x530a78) {
    console[_0x47b99f.rKqDr](_0x530a78);
    return false;
  }
}
var _0x1c_0x85c;
let keyContent = "BAQADIwry6othbBwEfpYLPbk3Boa5/NunPU8NsXm0ZtqES1tZyzMKA+K6quE36W8o59OoqJpolcJAEKLX5Hcezws1DEhbiNzMAYiOIKHJPsUxI4HSal98qQKlqmyFZwvEWmcplcy+8C6UbEcd/BJ4TyvEkYsSE+xrvFplTs4p6sjtHOPIDQgBKQiBCDANG4AAUQABEQD3bISGqSCG0AMfGIM".split("").reverse().join("");
_0x1c_0x85c = 3;
var _0x7_0x511 = 7;
let resKey = "-----BEGIN PUBLIC KEY-----\n" + keyContent + "\n-----END PUBLIC KEY-----";
_0x7_0x511 = 1;
var _0xb2b9c = 12;
let rsaJiami = new nodeRsa(resKey);
_0xb2b9c = "mejmpk";
var _0x6f2ca = 9;
const rsaOptions = {
  encryptionScheme: "pkcs1"
};
_0x6f2ca = 8;
rsaJiami.setOptions(rsaOptions);
function retryDecorator(_0x1d2b46 = 3, _0x4f62a = 1000) {
  return function (_0x2de16a) {
    return async function (..._0x1b8872) {
      let _0xfdb1fe;
      for (let _0x145c18 = 0; _0x145c18 < _0x1d2b46; _0x145c18++) {
        try {
          return await _0x2de16a.apply(this, _0x1b8872);
        } catch (_0x9edd94) {
          _0xfdb1fe = _0x9edd94;
          console.log("⚠️ 方法 " + (_0x2de16a.name || "suomynona".split("").reverse().join("")) + " 第 ".split("").reverse().join("") + (_0x145c18 + 1) + " :误错 ,试重次 ".split("").reverse().join("") + _0x9edd94.message);
          await new Promise(_0x28e533 => setTimeout(_0x28e533, _0x4f62a * (_0x145c18 + 1)));
        }
      }
      throw _0xfdb1fe;
    };
  };
}
async function getUserCode(_0x1e9ae8) {
  console.log("🔑 开始获取usercode（ticket: " + _0x1e9ae8.substring(0, 8) + "...）");
  return retryDecorator(5, 2000)(getUserCodeImpl).call(this, _0x1e9ae8);
}
async function getUserCodeImpl(_0x25f5cf, _0x9317c5) {
  var _0xdc0d70;
  const _0x2a15cb = {
    method: "get",
    url: "https://xbk.189.cn/xbkapi/api/auth/jump",
    params: {},
    headers: {}
  };
  _0xdc0d70 = 14;
  _0x2a15cb.params.userID = _0x25f5cf;
  _0x2a15cb.params.version = "0.5.01".split("").reverse().join("");
  _0x2a15cb.params.type = "room";
  _0x2a15cb.params.l = "renwu";
  _0x2a15cb.headers["User-Agent"] = "1.335/irafaS eliboM 0.5/noisreV )okceG ekil ,LMTHK( 1.335/tiKbeWelppA )300.617091.1QKQ/dliuB 0009A SULPENO ;nc-hz ;21 diordnA ;U ;xuniL( 0.5/allizoM".split("").reverse().join("");
  var _0xf111ec;
  let _0x338214 = await axios(_0x2a15cb);
  _0xf111ec = 11;
  var _0x36694d = 7;
  let _0x562995 = _0x338214.request.path;
  _0x36694d = "aojioq".split("").reverse().join("");
  var _0x934ed5 = 16;
  let _0x549c08 = _0x562995.split("?")[1].split("&");
  _0x934ed5 = 8;
  var _0x66ba9a = 16;
  _0x9317c5 = "";
  _0x66ba9a = 6;
  _0x549c08.map(_0x40d483 => {
    _0x40d483.split("=")[0] == "usercode" && (_0x9317c5 = _0x40d483.split("=")[1]);
  });
  console.log(" :edocresu（功成edocresu取获 ✅".split("").reverse().join("") + _0x9317c5.substring(0, 8) + "）...".split("").reverse().join(""));
  return _0x9317c5;
}
async function getAccessToken(_0x21fd0b) {
  console.log("🔑 开始获取token（usercode: " + _0x21fd0b.substring(0, 8) + "...）");
  return retryDecorator(5, 2000)(getAccessTokenImpl).call(this, _0x21fd0b);
}
async function getAccessTokenImpl(_0x3ab337) {
  var _0x564097 = 10;
  const _0x48b401 = {
    usercode: _0x3ab337
  };
  _0x564097 = "ofdhja".split("").reverse().join("");
  const _0x41fa91 = {
    method: "post",
    url: "https://xbk.189.cn/xbkapi/api/auth/userinfo/codeToken",
    data: _0x48b401
  };
  var _0x37c7c6;
  let _0x195471 = await axios(_0x41fa91);
  _0x37c7c6 = 8;
  console.log(" :nekot（功成nekot取获 ✅".split("").reverse().join("") + _0x195471.data.data.token.substring(0, 8) + "）...".split("").reverse().join(""));
  return _0x195471.data.data.token;
}
var _0xgcf2a = 10;
let cacheLive = [];
_0xgcf2a = 7;
async function initLiveRoomFloor(_0x162298, _0x4609c3, _0x31a99c, _0xc0053) {
  console.log("🏠 开始加载直播间数据（省份: " + _0x162298 + " :码页 ,".split("").reverse().join("") + _0x4609c3 + ", khd: " + _0x31a99c + "）");
  return retryDecorator(3, 3000)(initLiveRoomFloorImpl).call(this, _0x162298, _0x4609c3, _0x31a99c, _0xc0053);
}
async function initLiveRoomFloorImpl(_0x102ab7, _0x2500bf, _0xe9f6b0, _0x1586db) {
  var _0x1e0986 = {
    UMcIT: function (_0x4ee03f, _0x350360) {
      return _0x4ee03f == _0x350360;
    },
    qumeQ: "liveType",
    Ofvsl: function (_0x55194c, _0x24ab65) {
      return _0x55194c ^ _0x24ab65;
    },
    cgTJJ: function (_0x17d2ed, _0x101468) {
      return _0x17d2ed == _0x101468;
    },
    lHcao: function (_0x538930, _0x51af9e) {
      return _0x538930 ^ _0x51af9e;
    },
    IsnaO: "liveStartTime",
    hGKzy: "replace",
    decFv: "valueOf",
    QjwQb: function (_0x3ff78c, _0x2b3466) {
      return _0x3ff78c < _0x2b3466;
    },
    rhqpv: function (_0xf9f809, _0x160331) {
      return _0xf9f809 - _0x160331;
    },
    FRmJk: "push",
    VjGzP: function (_0x5a46f3, _0x1fc3f3) {
      return _0x5a46f3 ^ _0x1fc3f3;
    },
    VICZV: function (_0x5bc9d3, _0x3047da) {
      return _0x5bc9d3 == _0x3047da;
    },
    MzKAA: function (_0x1787ca, _0xa7e3d0) {
      return _0x1787ca ^ _0xa7e3d0;
    },
    fNcxY: function (_0x5b71d2, _0x36436f) {
      return _0x5b71d2 + _0x36436f;
    },
    hyCzn: function (_0x3be2dd, _0x2149ff) {
      return _0x3be2dd - _0x2149ff;
    },
    PdKkI: "log",
    dSNsQ: function (_0x44bce2, _0x2a4b8c) {
      return _0x44bce2 + _0x2a4b8c;
    },
    gZiuq: "🏠 加载直播间数据：省份",
    jBtQB: function (_0x172db9, _0x1bcfe4) {
      return _0x172db9 + _0x1bcfe4;
    },
    FLDeD: "get",
    ysrde: function (_0x218f05, _0x3d7310) {
      return _0x218f05 + _0x3d7310;
    },
    FLakq: function (_0x3b6cf1, _0x25d763) {
      return _0x3b6cf1 + _0x25d763;
    },
    seIrn: function (_0xe80544, _0x50c3e7) {
      return _0xe80544 + _0x50c3e7;
    },
    wSlZj: "https://xbk.189.cn/xbkapi/api/room/index/floor?provinceCode=",
    ukgYg: function (_0x531dfc, _0x3a5fa9) {
      return _0x531dfc ^ _0x3a5fa9;
    },
    RNuwV: function (_0xb08ce4, _0xd3c5c2) {
      return _0xb08ce4 + _0xd3c5c2;
    },
    eOUPG: "=egap&1=epyTegap&",
    EFFbu: "=dhk&",
    sBEMx: "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
    gGGkC: function (_0x1f9d1a, _0x57e849) {
      return _0x1f9d1a + _0x57e849;
    },
    jkhNW: "Bearer ",
    Vmmdm: "encrypt",
    vUxWX: "base64",
    zzZrx: "pgeono",
    nDGDj: function (_0x47b1ec, _0x5b02c1) {
      return _0x47b1ec + _0x5b02c1;
    },
    gZHLO: function (_0x75da36, _0x144d86) {
      return _0x75da36 ^ _0x144d86;
    },
    rvOxo: function (_0x2f25ce, _0x6b71a5) {
      return _0x2f25ce ^ _0x6b71a5;
    },
    XfeRh: function (_0x4724e5, _0x37f969) {
      return _0x4724e5(_0x37f969);
    },
    yCZRU: function (_0x2de1a8, _0x39732b) {
      return _0x2de1a8 + _0x39732b;
    },
    gYrhB: function (_0x38d2e9, _0x12d8b5) {
      return _0x38d2e9 ^ _0x12d8b5;
    },
    kPJXK: function (_0x553198, _0x213c1f) {
      return _0x553198 + _0x213c1f;
    },
    JLhqe: function (_0x30f139, _0x68e177) {
      return _0x30f139 + _0x68e177;
    },
    XOwQN: function (_0x2e16c5, _0x32882e) {
      return _0x2e16c5 + _0x32882e;
    },
    AGKZF: "🏠 第",
    ecEGU: "页加载完成，新增",
    Sjpkd: "个有效直播间，累计",
    griSa: "length",
    xVULU: function (_0x47d595, _0x1b3088) {
      return _0x47d595 > _0x1b3088;
    },
    MVSPh: function (_0xd2e06d, _0x311388, _0x4c7700, _0x4e7ffc, _0x1882eb) {
      return _0xd2e06d(_0x311388, _0x4c7700, _0x4e7ffc, _0x1882eb);
    },
    OaTvB: function (_0xa2acac, _0x583106) {
      return _0xa2acac == _0x583106;
    },
    JHskz: function (_0x3786de, _0x148bbf) {
      return _0x3786de + _0x148bbf;
    },
    xlLfW: "🏠 省份",
    hvAnl: "2=dhk载加始开，成完载加1=dhk的",
    azboC: function (_0x449d7a, _0x39f721) {
      return _0x449d7a ^ _0x39f721;
    },
    KkNgm: function (_0x5eeea2, _0x3bddc4, _0x1b28e1, _0x400380, _0x5bc42d) {
      return _0x5eeea2(_0x3bddc4, _0x1b28e1, _0x400380, _0x5bc42d);
    },
    wNuHM: function (_0x4abe2c, _0x5b1685) {
      return _0x4abe2c ^ _0x5b1685;
    },
    AEncy: "的khd=2加载完成，开始处理数据",
    xKCVk: "sort",
    ObIGQ: function (_0xd9bdea, _0x5725d5) {
      return _0xd9bdea + _0x5725d5;
    },
    wJaaI: "✅ 直播间数据加载完成，共",
    hGOMQ: "个有效直播间（仅使用省份1数据）",
    qhvUA: "writeFileSync",
    ObfLn: "nosj.tsiLevil/.",
    SEmDD: "stringify",
    wtEoU: "utf8",
    MrUzC: function (_0x1ef464, _0x2fd631) {
      return _0x1ef464 + _0x2fd631;
    },
    kqYKO: function (_0xf27d8d, _0x2884da) {
      return _0xf27d8d ^ _0x2884da;
    },
    rUtmm: function (_0x526aa1, _0x12ac18) {
      return _0x526aa1 ^ _0x12ac18;
    },
    BdruF: "parse",
    FIYDY: "readFileSy" + "cn".split("").reverse().join(""),
    HkliD: "./liveList.json",
    CtMKi: "8ftu",
    ZcjsG: function (_0x4612b2, _0x58d876) {
      return _0x4612b2 + _0x58d876;
    },
    cTKoY: " :量数，件文地本入写已据数间播直 ��",
    mXwFP: function (_0x4a1b2a, _0x219bbb) {
      return _0x4a1b2a(_0x219bbb);
    },
    AGusU: "error",
    bkOnO: ":败失据数间播直页一下载加 ❌",
    FdRqu: "message",
    JRaUp: function (_0x428691, _0x2dd29a, _0x2c97e4, _0x57c09f, _0xb275ad) {
      return _0x428691(_0x2dd29a, _0x2c97e4, _0x57c09f, _0xb275ad);
    },
    rEbyu: function (_0x5ef67e, _0x25a80f) {
      return _0x5ef67e + _0x25a80f;
    },
    cneJj: function (_0x52c2c0, _0x132e1e) {
      return _0x52c2c0 + _0x132e1e;
    },
    kihlC: function (_0x15672f, _0xb365fd) {
      return _0x15672f + _0xb365fd;
    },
    msNXA: function (_0x21743f, _0x35f5c2) {
      return _0x21743f + _0x35f5c2;
    },
    XqkHV: function (_0x27f153, _0x1d9dbc) {
      return _0x27f153 + _0x1d9dbc;
    },
    biqyH: "&pageType=1&page=",
    adzSO: "&khd=",
    zKcTL: function (_0x22b179, _0x41b9dc) {
      return _0x22b179 + _0x41b9dc;
    },
    ZRrRh: " reraeB",
    ZALsK: function (_0x34a25f, _0x48c5e1) {
      return _0x34a25f(_0x48c5e1);
    },
    SLKPz: ":败失据数间播直化始初 ❌",
    KxvhF: function (_0x205b0d, _0x188aaf) {
      return _0x205b0d(_0x188aaf);
    },
    Wtqeh: function (_0x427bd2, _0x374f07) {
      return _0x427bd2 == _0x374f07;
    },
    BSFEf: function (_0x57de2e, _0x37e0fb) {
      return _0x57de2e ^ _0x37e0fb;
    },
    JwCoR: "🏠 初始化直播间数据：开始加载省份1的数据..."
  };
  _0x1e0986.Wtqeh(_0x102ab7, _0x1e0986.BSFEf(429907, 429906)) && _0x1e0986.OaTvB(_0x2500bf, _0x1e0986.BSFEf(274556, 274557)) && _0x1e0986.UMcIT(_0xe9f6b0, _0x1e0986.lHcao(189422, 189423)) && (cacheLive = [], console[_0x1e0986.PdKkI](_0x1e0986.JwCoR));
  return new Promise(async (_0x200f3a, _0x119cac) => {
    try {
      const _0x3924ec = {
        method: _0x1e0986.FLDeD,
        url: _0x1e0986.yCZRU(_0x1e0986.rEbyu(_0x1e0986.cneJj(_0x1e0986.kihlC(_0x1e0986.FLakq(_0x1e0986.wSlZj, _0x1e0986.QjwQb(_0x102ab7, _0x1e0986.wNuHM(545365, 545375)) ? _0x1e0986.msNXA("0", _0x102ab7) : _0x1e0986.XqkHV(_0x102ab7, "")), _0x1e0986.biqyH), _0x2500bf), _0x1e0986.adzSO), _0xe9f6b0),
        headers: {
          "User-Agent": _0x1e0986.sBEMx,
          Authorization: _0x1e0986.zKcTL(_0x1e0986.ZRrRh.split("").reverse().join(""), rsaJiami[_0x1e0986.Vmmdm](_0x1586db, _0x1e0986.vUxWX))
        }
      };
      let _0x231c92 = await _0x1e0986.ZALsK(axios, _0x3924ec),
        _0x325145 = new Date()[_0x1e0986.decFv]();
      _0x231c92?.["data"]?.["data"]?.["map"](_0x29d7e8 => {
        if (_0x1e0986.UMcIT(_0x29d7e8[_0x1e0986.qumeQ], _0x1e0986.Ofvsl(512388, 512390)) || _0x1e0986.cgTJJ(_0x29d7e8[_0x1e0986.qumeQ], _0x1e0986.lHcao(570311, 570310))) {
          let _0xb23ae6 = new Date(_0x29d7e8[_0x1e0986.IsnaO][_0x1e0986.hGKzy](new RegExp("-", "g"), "/"))[_0x1e0986.decFv]();
          _0x1e0986.QjwQb(_0x1e0986.rhqpv(_0x325145, 604800000), _0xb23ae6) && cacheLive[_0x1e0986.FRmJk](_0x29d7e8);
        }
      });
      async function _0x636g(_0x3b6643, _0x54115d, _0x246ae7, _0x27031c) {
        var _0x5fbea0 = {
          yNOmQ: function (_0x34756e, _0x456d0a) {
            return _0x1e0986.UMcIT(_0x34756e, _0x456d0a);
          },
          ogbSH: _0x1e0986.qumeQ,
          AZSsV: function (_0x3b21a3, _0x4f3592) {
            return _0x1e0986.VjGzP(_0x3b21a3, _0x4f3592);
          },
          KBcTG: function (_0x452fb9, _0x1f719b) {
            return _0x1e0986.VICZV(_0x452fb9, _0x1f719b);
          },
          CEJLm: function (_0x593540, _0x33ad15) {
            return _0x1e0986.MzKAA(_0x593540, _0x33ad15);
          },
          IImjY: _0x1e0986.IsnaO,
          yNKfs: _0x1e0986.hGKzy,
          DlClX: _0x1e0986.decFv,
          tuPDI: function (_0x36a2d2, _0x1aa984) {
            return _0x1e0986.QjwQb(_0x36a2d2, _0x1aa984);
          },
          ZiaRF: function (_0x32225a, _0x317abf) {
            return _0x1e0986.rhqpv(_0x32225a, _0x317abf);
          },
          QQwyn: _0x1e0986.FRmJk,
          pwgKO: function (_0x2fdc1e, _0x384660) {
            return _0x1e0986.fNcxY(_0x2fdc1e, _0x384660);
          },
          iiaeJ: function (_0x1ca863, _0x29458f) {
            return _0x1e0986.Ofvsl(_0x1ca863, _0x29458f);
          },
          AoRyY: function (_0x154861, _0x1f437b) {
            return _0x1e0986.lHcao(_0x154861, _0x1f437b);
          },
          cjrJs: function (_0x435909, _0x2842e2) {
            return _0x1e0986.hyCzn(_0x435909, _0x2842e2);
          }
        };
        try {
          _0x54115d++;
          console[_0x1e0986.PdKkI](_0x1e0986.dSNsQ(_0x1e0986.dSNsQ(_0x1e0986.fNcxY(_0x1e0986.fNcxY(_0x1e0986.gZiuq, _0x3b6643), "第，".split("").reverse().join("")), _0x54115d), "页"));
          var _0x9c4af5 = _0x1e0986.jBtQB(_0x1e0986.Ofvsl(276861, 276862), _0x1e0986.VjGzP(477540, 477541));
          const _0x199c38 = {
            method: _0x1e0986.FLDeD,
            url: _0x1e0986.ysrde(_0x1e0986.ysrde(_0x1e0986.dSNsQ(_0x1e0986.FLakq(_0x1e0986.seIrn(_0x1e0986.wSlZj, _0x1e0986.QjwQb(_0x3b6643, _0x1e0986.ukgYg(965448, 965442)) ? _0x1e0986.jBtQB("0", _0x3b6643) : _0x1e0986.RNuwV(_0x3b6643, "")), _0x1e0986.eOUPG.split("").reverse().join("")), _0x54115d), _0x1e0986.EFFbu.split("").reverse().join("")), _0x246ae7),
            headers: {
              "User-Agent": _0x1e0986.sBEMx,
              Authorization: _0x1e0986.gGGkC(_0x1e0986.jkhNW, rsaJiami[_0x1e0986.Vmmdm](_0x27031c, _0x1e0986.vUxWX))
            }
          };
          _0x9c4af5 = _0x1e0986.zzZrx;
          var _0x4d7f48 = _0x1e0986.nDGDj(_0x1e0986.gZHLO(801675, 801667), _0x1e0986.rvOxo(692415, 692411));
          let _0x4bd1b1 = await _0x1e0986.XfeRh(axios, _0x199c38);
          _0x4d7f48 = _0x1e0986.yCZRU(_0x1e0986.lHcao(592435, 592434), _0x1e0986.lHcao(614042, 614045));
          let _0x421b4a = new Date()[_0x1e0986.decFv](),
            _0x3744fc = _0x1e0986.gYrhB(820631, 820631);
          _0x4bd1b1?.["data"]?.["data"]?.["map"](_0x26b0bf => {
            if (_0x5fbea0.yNOmQ(_0x26b0bf[_0x5fbea0.ogbSH], _0x5fbea0.AZSsV(901374, 901372)) || _0x5fbea0.KBcTG(_0x26b0bf[_0x5fbea0.ogbSH], _0x5fbea0.CEJLm(151203, 151202))) {
              let _0x346c8d = new Date(_0x26b0bf[_0x5fbea0.IImjY][_0x5fbea0.yNKfs](new RegExp("-", "g"), "/"))[_0x5fbea0.DlClX]();
              _0x5fbea0.tuPDI(_0x5fbea0.ZiaRF(_0x421b4a, 604800000), _0x346c8d) && (cacheLive[_0x5fbea0.QQwyn](_0x26b0bf), _0x3744fc++);
            }
          });
          console[_0x1e0986.PdKkI](_0x1e0986.kPJXK(_0x1e0986.JLhqe(_0x1e0986.kPJXK(_0x1e0986.FLakq(_0x1e0986.seIrn(_0x1e0986.XOwQN(_0x1e0986.AGKZF, _0x54115d), _0x1e0986.ecEGU), _0x3744fc), _0x1e0986.Sjpkd), cacheLive[_0x1e0986.griSa]), "个"));
          if (_0x1e0986.xVULU(_0x3744fc, _0x1e0986.MzKAA(343591, 343591))) {
            await _0x1e0986.MVSPh(_0x636g, _0x3b6643, _0x54115d, _0x246ae7, _0x27031c);
          } else {
            if (_0x1e0986.OaTvB(_0x246ae7, _0x1e0986.VjGzP(553919, 553918))) {
              console[_0x1e0986.PdKkI](_0x1e0986.JLhqe(_0x1e0986.JHskz(_0x1e0986.xlLfW, _0x3b6643), _0x1e0986.hvAnl.split("").reverse().join("")));
              _0x246ae7 = _0x1e0986.azboC(534329, 534331);
              _0x1e0986.XfeRh(_0x200f3a, await _0x1e0986.KkNgm(initLiveRoomFloor, _0x3b6643, _0x1e0986.wNuHM(265276, 265277), _0x246ae7, _0x27031c));
            } else {
              if (_0x1e0986.UMcIT(_0x246ae7, _0x1e0986.VjGzP(692939, 692937))) {
                console[_0x1e0986.PdKkI](_0x1e0986.dSNsQ(_0x1e0986.nDGDj(_0x1e0986.xlLfW, _0x3b6643), _0x1e0986.AEncy));
                cacheLive = _0x1e0986.XfeRh(deduplicateLiveRooms, cacheLive);
                cacheLive[_0x1e0986.xKCVk]((_0x57b92a, _0xc888e8) => {
                  var _0xcf78ba = _0x5fbea0.pwgKO(_0x5fbea0.iiaeJ(388719, 388719), _0x5fbea0.AoRyY(184274, 184283));
                  let _0x56e2ec = new Date(_0x57b92a[_0x5fbea0.IImjY][_0x5fbea0.yNKfs](new RegExp("-", "g"), "/"))[_0x5fbea0.DlClX]();
                  _0xcf78ba = _0x5fbea0.AZSsV(838901, 838898);
                  let _0x431629 = new Date(_0xc888e8[_0x5fbea0.IImjY][_0x5fbea0.yNKfs](new RegExp("-", "g"), "/"))[_0x5fbea0.DlClX]();
                  return _0x5fbea0.cjrJs(_0x56e2ec, _0x431629);
                });
                cacheLive[_0x1e0986.xKCVk]((_0x22d47c, _0x23ff6d) => {
                  return _0x5fbea0.cjrJs(_0x23ff6d[_0x5fbea0.ogbSH], _0x22d47c[_0x5fbea0.ogbSH]);
                });
                console[_0x1e0986.PdKkI](_0x1e0986.ObIGQ(_0x1e0986.nDGDj(_0x1e0986.wJaaI, cacheLive[_0x1e0986.griSa]), _0x1e0986.hGOMQ));
                fs[_0x1e0986.qhvUA](_0x1e0986.ObfLn.split("").reverse().join(""), JSON[_0x1e0986.SEmDD](cacheLive), _0x1e0986.wtEoU);
                var _0x330fbf = _0x1e0986.MrUzC(_0x1e0986.kqYKO(235473, 235474), _0x1e0986.rUtmm(310618, 310610));
                let _0x31ec90 = JSON[_0x1e0986.BdruF](fs[_0x1e0986.FIYDY](_0x1e0986.HkliD, _0x1e0986.CtMKi.split("").reverse().join("")));
                _0x330fbf = _0x1e0986.gZHLO(107011, 107011);
                console[_0x1e0986.PdKkI](_0x1e0986.ZcjsG(_0x1e0986.cTKoY.split("").reverse().join(""), _0x31ec90[_0x1e0986.griSa]));
                _0x1e0986.mXwFP(_0x200f3a, cacheLive);
              }
            }
          }
        } catch (_0x35c24b) {
          console[_0x1e0986.AGusU](_0x1e0986.bkOnO.split("").reverse().join(""), _0x35c24b[_0x1e0986.FdRqu]);
          await _0x1e0986.JRaUp(_0x636g, _0x3b6643, _0x54115d, _0x246ae7, _0x27031c);
        }
      }
      await _0x1e0986.MVSPh(_0x636g, _0x102ab7, _0x2500bf, _0xe9f6b0, _0x1586db);
    } catch (_0x58a73e) {
      console[_0x1e0986.AGusU](_0x1e0986.SLKPz.split("").reverse().join(""), _0x58a73e[_0x1e0986.FdRqu]);
      _0x1e0986.KxvhF(_0x200f3a, await _0x1e0986.MVSPh(initLiveRoomFloor, _0x102ab7, _0x2500bf, _0xe9f6b0, _0x1586db));
    }
  });
}
async function getGoodsList(_0x10ccf6, _0x1d3912, _0x392ed4) {
  console.log("=dIevil：品商间播直取获 ��".split("").reverse().join("") + _0x10ccf6 + "第，".split("").reverse().join("") + _0x1d3912 + "页");
  return retryDecorator(3, 2000)(getGoodsListImpl).call(this, _0x10ccf6, _0x1d3912, _0x392ed4);
}
async function getGoodsListImpl(_0x1475b, _0x580e13, _0x21087c) {
  try {
    var _0x5eec47 = 13;
    const _0x3cf01c = {
      method: "get",
      url: "=dIevil?tsiLsdooGeviLteg/moor/noitaretl/ipakbx/nc.981.kbx//:sptth".split("").reverse().join("") + _0x1475b + "=egap&yranidro=epyt_tsil&".split("").reverse().join("") + _0x580e13,
      headers: {
        "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
        Authorization: "Bearer " + rsaJiami.encrypt(_0x21087c, "base64")
      }
    };
    _0x5eec47 = 0;
    var _0x5789fe;
    let _0x123e40 = await axios(_0x3cf01c);
    _0x5789fe = 7;
    console.log("=dIevil：功成取获品商间播直 ��".split("").reverse().join("") + _0x1475b + "第，".split("").reverse().join("") + _0x580e13 + "共，页".split("").reverse().join("") + (_0x123e40.data?.["data"]?.["count"] || 0) + "个商品");
    return _0x123e40.data;
  } catch (_0x14ca31) {
    console.error("❌ 获取直播间商品列表失败:", _0x14ca31.message);
    throw _0x14ca31;
  }
}
function deduplicateLiveRooms(_0x4cdc24) {
  var _0x4e70b5 = 8;
  let _0x17f72a = [];
  _0x4e70b5 = 12;
  var _0x923f66 = 13;
  let _0x31f36b = {};
  _0x923f66 = 1;
  for (let _0x22aea8 = 0; _0x22aea8 < _0x4cdc24.length; _0x22aea8++) {
    !_0x31f36b[_0x4cdc24[_0x22aea8].liveId] && (_0x17f72a.push(_0x4cdc24[_0x22aea8]), _0x31f36b[_0x4cdc24[_0x22aea8].liveId] = true);
  }
  return _0x17f72a;
}
async function getCaptchaImage() {
  console.log("📷 开始获取验证码图片");
  return retryDecorator(5, 1000)(getCaptchaImageImpl).call(this);
}
async function getCaptchaImageImpl() {
  var _0xc748a1 = {
    BOutT: function (_0x347d3b) {
      return _0x347d3b();
    },
    sKIBa: function (_0x2e3159, _0xc64ac2) {
      return _0x2e3159 + _0xc64ac2;
    },
    gNXbQ: "https://xbk.189.cn/xbkapi/api/auth/captcha?guid=",
    YInWL: "GET",
    RxZYj: "arraybuffer",
    DbJER: function (_0x9bc6b2, _0x2694cc) {
      return _0x9bc6b2 ^ _0x2694cc;
    },
    HEOLq: function (_0x40919f, _0x503192) {
      return _0x40919f ^ _0x503192;
    },
    NCLLD: function (_0x43ed38, _0x191380) {
      return _0x43ed38(_0x191380);
    },
    WsYkV: function (_0x3c3a25, _0x1a88e0) {
      return _0x3c3a25 + _0x1a88e0;
    },
    iSqRQ: function (_0x4c6b99, _0x148771) {
      return _0x4c6b99 ^ _0x148771;
    },
    OfQxe: "from",
    AIlUd: "data",
    wvIUr: "binary",
    bZjye: "toString",
    VFIzp: "base64",
    cWZfu: "log",
    pAlAo: "功成取获片图码证验 " + "��".split("").reverse().join(""),
    KujAK: "data:image/png;base6" + ",4".split("").reverse().join("")
  };
  const _0x438290 = _0xc748a1.BOutT(v4);
  var _0x10b5db;
  const _0x200ebb = {
    url: _0xc748a1.sKIBa(_0xc748a1.gNXbQ, _0x438290),
    method: _0xc748a1.YInWL,
    responseType: _0xc748a1.RxZYj
  };
  _0x10b5db = _0xc748a1.sKIBa(_0xc748a1.DbJER(624545, 624546), _0xc748a1.HEOLq(527616, 527620));
  var _0xe0051d = _0xc748a1.sKIBa(_0xc748a1.HEOLq(288416, 288420), _0xc748a1.HEOLq(572436, 572436));
  let _0x1ff737 = await _0xc748a1.NCLLD(axios, _0x200ebb);
  _0xe0051d = _0xc748a1.WsYkV(_0xc748a1.HEOLq(599952, 599952), _0xc748a1.iSqRQ(632800, 632802));
  var _0x21a7a5;
  const _0x30c233 = Buffer[_0xc748a1.OfQxe](_0x1ff737[_0xc748a1.AIlUd], _0xc748a1.wvIUr)[_0xc748a1.bZjye](_0xc748a1.VFIzp);
  _0x21a7a5 = _0xc748a1.DbJER(377491, 377498);
  console[_0xc748a1.cWZfu](_0xc748a1.pAlAo.split("").reverse().join(""));
  return {
    file: _0x1ff737[_0xc748a1.AIlUd],
    base64: _0xc748a1.WsYkV(_0xc748a1.KujAK, _0x30c233),
    uuid: _0x438290
  };
}
async function recognizeCaptcha(_0x4d6267) {
  console.log("🔍 开始识别验证码");
  return retryDecorator(5, 1000)(recognizeCaptchaImpl).call(this, _0x4d6267);
}
async function recognizeCaptchaImpl(_0x7c9664) {
  var _0x380ba3 = {
      AiYqj: function (_0x55a4bf, _0x53fde5) {
        return _0x55a4bf + _0x53fde5;
      },
      gZtjH: function (_0x315960, _0x2d0b33) {
        return _0x315960 ^ _0x2d0b33;
      },
      XhHQl: function (_0xdedff1) {
        return _0xdedff1();
      },
      OlSIt: "ndjhkl",
      knUKu: "/7777:601.421.51.54//:ptth",
      hSUZy: "log",
      QgckV: "！的我用使认默则置设有没果如，LRU务服RCO取获rcoxd量变境环从��",
      UYsmQ: "base64",
      XTcDM: function (_0x258124, _0x8d14bd) {
        return _0x258124 ^ _0x8d14bd;
      },
      YoNWU: function (_0x8c0350, _0x20714d) {
        return _0x8c0350 + _0x20714d;
      },
      SLYci: "post",
      iNMES: function (_0x37c04f, _0x4814d5) {
        return _0x37c04f + _0x4814d5;
      },
      MpWwn: "headers",
      htbJS: "Content-Ty" + "ep".split("").reverse().join(""),
      KJOeH: "dedocnelru-mrof-www-x/noitacilppa",
      MFyog: function (_0x24d234, _0x28981b) {
        return _0x24d234 ^ _0x28981b;
      },
      GMPyI: function (_0x293654, _0x2fd519) {
        return _0x293654 ^ _0x2fd519;
      },
      dxWSt: function (_0x5cd5cf, _0x23298d) {
        return _0x5cd5cf(_0x23298d);
      },
      AuAGH: function (_0x24b472, _0x570e3a) {
        return _0x24b472 ^ _0x570e3a;
      },
      anJBc: function (_0x1f6437, _0x37fd39) {
        return _0x1f6437 ^ _0x37fd39;
      },
      OMNNm: function (_0x2ab298, _0x5e6cae) {
        return _0x2ab298 == _0x5e6cae;
      },
      bAGEG: "data",
      vTBjD: "code",
      pjToG: function (_0x2c2ba3, _0x17f63f) {
        return _0x2c2ba3 ^ _0x17f63f;
      },
      oaCjb: function (_0x33d41f, _0x3352ae) {
        return _0x33d41f + _0x3352ae;
      },
      PisxA: function (_0xb4bfb2, _0xa6a3cd) {
        return _0xb4bfb2 ^ _0xa6a3cd;
      },
      TmlcJ: function (_0x2cfa29, _0x2208ff) {
        return _0x2cfa29 ^ _0x2208ff;
      },
      UTmSZ: "split",
      XgmWq: function (_0x45201e, _0x3f525b) {
        return _0x45201e > _0x3f525b;
      },
      lomVZ: "length",
      Sjnmu: function (_0x238e7d, _0x2e57ed) {
        return _0x238e7d ^ _0x2e57ed;
      },
      pzggk: function (_0x3f4893, _0x3a329b) {
        return _0x3f4893 + _0x3a329b;
      },
      xjBbz: function (_0x17313f, _0x499f2b) {
        return _0x17313f ^ _0x499f2b;
      },
      kgfLB: function (_0x21c2d4, _0x2ef54a) {
        return _0x21c2d4 + _0x2ef54a;
      },
      zPtMQ: "🔍 验证码识别成功：计算结果=",
      JAXUT: function (_0x464b2a, _0x356337) {
        return _0x464b2a ^ _0x356337;
      },
      jYISa: "uuid",
      iJwEX: function (_0x45a4d8, _0x167230) {
        return _0x45a4d8 + _0x167230;
      },
      nehED: function (_0x127acc, _0x583fa8) {
        return _0x127acc ^ _0x583fa8;
      },
      SlukH: function (_0x4adf63, _0x23a73f) {
        return _0x4adf63 ^ _0x23a73f;
      },
      IULwH: "败失别识RCO"
    },
    _0x6c5192 = _0x380ba3.AiYqj(_0x380ba3.gZtjH(499195, 499198), _0x380ba3.gZtjH(843495, 843488));
  let _0x2ad63a = await _0x380ba3.XhHQl(getCaptchaImage);
  _0x6c5192 = _0x380ba3.OlSIt;
  const _0x176020 = process?.["env"]?.["dxocr"] || _0x380ba3.knUKu.split("").reverse().join("");
  console[_0x380ba3.hSUZy](_0x380ba3.QgckV.split("").reverse().join(""));
  const _0x43ebb7 = {
    image: _0x2ad63a[_0x380ba3.UYsmQ],
    userName: _0x7c9664
  };
  var _0x40faea = _0x380ba3.AiYqj(_0x380ba3.gZtjH(661885, 661882), _0x380ba3.XTcDM(634291, 634288));
  const _0x4e2062 = {
    url: _0x380ba3.YoNWU("", _0x176020),
    method: _0x380ba3.SLYci,
    headers: {},
    data: _0x43ebb7
  };
  _0x40faea = _0x380ba3.iNMES(_0x380ba3.XTcDM(138959, 138952), _0x380ba3.XTcDM(628206, 628203));
  _0x4e2062[_0x380ba3.MpWwn][_0x380ba3.htbJS] = _0x380ba3.KJOeH.split("").reverse().join("");
  var _0x257ad3 = _0x380ba3.YoNWU(_0x380ba3.MFyog(310443, 310446), _0x380ba3.GMPyI(695212, 695209));
  let _0x5377c2 = await _0x380ba3.dxWSt(axios, _0x4e2062);
  _0x257ad3 = _0x380ba3.YoNWU(_0x380ba3.AuAGH(775547, 775539), _0x380ba3.anJBc(710448, 710450));
  if (_0x380ba3.OMNNm(_0x5377c2[_0x380ba3.bAGEG][_0x380ba3.vTBjD], _0x380ba3.pjToG(301443, 301387))) {
    var _0x2679cb;
    let _0x3513cb = _0x5377c2[_0x380ba3.bAGEG][_0x380ba3.bAGEG];
    _0x2679cb = _0x380ba3.oaCjb(_0x380ba3.PisxA(692147, 692147), _0x380ba3.TmlcJ(408920, 408924));
    let _0x3edfc2 = _0x3513cb[_0x380ba3.UTmSZ]("="),
      _0x444145 = "";
    _0x380ba3.XgmWq(_0x3edfc2[_0x380ba3.lomVZ], _0x380ba3.Sjnmu(451018, 451019)) ? _0x444145 = _0x3edfc2[_0x380ba3.AuAGH(897094, 897094)] : _0x444145 = _0x380ba3.iNMES(_0x380ba3.iNMES(_0x3513cb[_0x380ba3.UTmSZ]("x")[_0x380ba3.GMPyI(280321, 280321)], "+"), _0x3513cb[_0x380ba3.UTmSZ]("x")[_0x380ba3.pjToG(886969, 886968)]);
    var _0x143e27 = _0x380ba3.pzggk(_0x380ba3.pjToG(117423, 117422), _0x380ba3.xjBbz(543885, 543876));
    let _0x29510f = _0x380ba3.dxWSt(eval, _0x380ba3.AiYqj("", _0x444145));
    _0x143e27 = _0x380ba3.MFyog(640017, 640017);
    console[_0x380ba3.hSUZy](_0x380ba3.kgfLB(_0x380ba3.zPtMQ, _0x29510f));
    var _0x25d860 = _0x380ba3.kgfLB(_0x380ba3.JAXUT(363691, 363694), _0x380ba3.TmlcJ(957306, 957309));
    const _0x5dad92 = {
      data: _0x29510f,
      uuid: _0x2ad63a[_0x380ba3.jYISa]
    };
    _0x25d860 = _0x380ba3.iJwEX(_0x380ba3.nehED(459760, 459760), _0x380ba3.SlukH(973262, 973259));
    return _0x5dad92;
  }
  throw new Error(_0x380ba3.IULwH.split("").reverse().join(""));
}
async function doLottery(_0x4e692a, _0x581a5b, _0x598146, _0x2f7b3b, _0x32b848) {
  console.log("=dIevil：奖抽始开 ��".split("").reverse().join("") + _0x4e692a + "=edoc_evitca，".split("").reverse().join("") + _0x581a5b + "，手机号=" + maskPhoneNumber(_0x2f7b3b));
  try {
    let _0x32dffc = await recognizeCaptcha(process?.["env"]?.["dxUserName1"] || "aaabbb");
    const _0x593832 = {
      active_code: _0x581a5b,
      captcha: _0x32dffc.data,
      guid: _0x32dffc.uuid,
      liveId: _0x4e692a,
      period: "1"
    };
    let _0x5bcb65 = {
      method: "post",
      url: "https://xbk.189.cn/xbkapi/active/v2/lottery/do",
      headers: {
        "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
        Authorization: "Bearer " + rsaJiami.encrypt(_0x598146, "base64")
      },
      data: _0x593832
    };
    var _0x280124 = 8;
    let _0x1ef3be = await axios(_0x5bcb65);
    _0x280124 = 12;
    if (_0x1ef3be?.["data"]?.["msg"] === "sseccus".split("").reverse().join("")) {
      const _0x1fb691 = _0x1ef3be?.["data"]?.["data"]?.["title"];
      console.log("🎉 抽奖成功！手机号: " + maskPhoneNumber(_0x2f7b3b) + ", 获得: " + _0x1fb691);
      return {
        success: true,
        phone: _0x2f7b3b,
        prize: _0x1fb691,
        uid: _0x32b848
      };
    } else {
      return _0x1ef3be?.["data"]?.["msg"] === "足不会机奖抽".split("").reverse().join("") ? (console.log("=号机手：足不会机奖抽 ️⚠".split("").reverse().join("") + maskPhoneNumber(_0x2f7b3b)), {
        success: false,
        reason: "no_chance"
      }) : _0x1ef3be?.["data"]?.["msg"] === "过通未验校码证验形图".split("").reverse().join("") ? (console.log("⚠️ 图形验证码校验未通过，重试：手机号=" + maskPhoneNumber(_0x2f7b3b)), await sleep(6000), await doLottery(_0x4e692a, _0x581a5b, _0x598146, _0x2f7b3b, _0x32b848)) : _0x1ef3be?.["data"]?.["msg"]?.["includes"]("繁频于过作操".split("").reverse().join("")) ? (console.log("=号机手：试重，繁频于过作操 ️⚠".split("").reverse().join("") + maskPhoneNumber(_0x2f7b3b)), await sleep(6000), await doLottery(_0x4e692a, _0x581a5b, _0x598146, _0x2f7b3b, _0x32b848)) : (console.log("🎰 抽奖结果：" + (_0x1ef3be?.["data"]?.["data"]?.["title"] || _0x1ef3be?.["data"]?.["msg"]) + "，手机号=" + maskPhoneNumber(_0x2f7b3b)), {
        success: false,
        reason: "other",
        message: _0x1ef3be?.["data"]?.["msg"]
      });
    }
  } catch (_0x4b3487) {
    console.error("❌ 抽奖过程错误：" + _0x4b3487.message + "，手机号=" + maskPhoneNumber(_0x2f7b3b));
    await sleep(6000);
    return await doLottery(_0x4e692a, _0x581a5b, _0x598146, _0x2f7b3b, _0x32b848);
  }
}
async function getPrizeList(_0x4560cd, _0x51a378, _0x59130c) {
  console.log("🎁 获取活动奖品列表：active_code=" + _0x51a378);
  return retryDecorator(3, 1000)(getPrizeListImpl).call(this, _0x4560cd, _0x51a378, _0x59130c);
}
async function getPrizeListImpl(_0x359368, _0xf4b553, _0x462a98, _0x178ba7) {
  var _0x16a096 = {
    LzpYz: "text",
    oraiD: "match",
    dBlga: "\\d+",
    xgUKo: "pejgjj",
    rFedY: function (_0x5e286d, _0xedce3e) {
      return _0x5e286d < _0xedce3e;
    },
    lWRHR: function (_0x419204, _0x245e95) {
      return _0x419204(_0x245e95);
    },
    fCkIb: function (_0x23581e, _0x242137) {
      return _0x23581e ^ _0x242137;
    },
    VOTZW: function (_0xc3bea1, _0x96838c) {
      return _0xc3bea1(_0x96838c);
    },
    dDSGI: "get",
    PliwI: function (_0x3cea50, _0x3f1c55) {
      return _0x3cea50 + _0x3f1c55;
    },
    wDOjX: function (_0x177b61, _0x10680a) {
      return _0x177b61 + _0x10680a;
    },
    glJWx: function (_0x1f9550, _0x1fb376) {
      return _0x1f9550 + _0x1fb376;
    },
    bMTEq: "=edoc_evitca?tsiLezirp/yrettol/2v/evitca/ipakbx/nc.981.kbx//:sptth",
    xUXKS: "&liveId=",
    tKbOV: "&period=1",
    RThEp: "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
    oTdiL: function (_0x59bf5e, _0x3065cd) {
      return _0x59bf5e + _0x3065cd;
    },
    Crbia: " reraeB",
    DjZKq: "encrypt",
    MegnV: "46esab",
    rqDiY: function (_0x328981, _0x4d6890) {
      return _0x328981 ^ _0x4d6890;
    },
    NzGoy: function (_0x36a0c3, _0x46b17a) {
      return _0x36a0c3 ^ _0x46b17a;
    },
    MUzFB: function (_0x41f1cb, _0x412356) {
      return _0x41f1cb ^ _0x412356;
    },
    mXNfI: "log",
    CCbKX: "：额金品奖大最动活 " + "��".split("").reverse().join("")
  };
  const _0x2b09f8 = {
    method: _0x16a096.dDSGI,
    url: _0x16a096.PliwI(_0x16a096.wDOjX(_0x16a096.PliwI(_0x16a096.glJWx(_0x16a096.bMTEq.split("").reverse().join(""), _0xf4b553), _0x16a096.xUXKS), _0x462a98), _0x16a096.tKbOV),
    headers: {
      "User-Agent": _0x16a096.RThEp,
      Authorization: _0x16a096.oTdiL(_0x16a096.Crbia.split("").reverse().join(""), rsaJiami[_0x16a096.DjZKq](_0x359368, _0x16a096.MegnV.split("").reverse().join("")))
    }
  };
  var _0xe16b02;
  let _0x44d36c = await _0x16a096.lWRHR(axios, _0x2b09f8);
  _0xe16b02 = _0x16a096.wDOjX(_0x16a096.rqDiY(433678, 433675), _0x16a096.rqDiY(472044, 472045));
  var _0x297a93;
  _0x178ba7 = _0x16a096.NzGoy(196733, 196733);
  _0x297a93 = _0x16a096.glJWx(_0x16a096.MUzFB(741160, 741164), _0x16a096.fCkIb(157543, 157538));
  _0x44d36c?.["data"]?.["data"]?.["map"](_0x593ad5 => {
    var _0x2af817;
    let _0x428829 = _0x593ad5[_0x16a096.LzpYz][_0x16a096.oraiD](new RegExp(_0x16a096.dBlga, "g"));
    _0x2af817 = _0x16a096.xgUKo;
    _0x428829 && _0x16a096.rFedY(_0x178ba7, _0x16a096.lWRHR(Number, _0x428829[_0x16a096.fCkIb(945374, 945374)])) && (_0x178ba7 = _0x16a096.VOTZW(Number, _0x428829[_0x16a096.fCkIb(147422, 147422)]));
  });
  console[_0x16a096.mXNfI](_0x16a096.oTdiL(_0x16a096.oTdiL(_0x16a096.CCbKX.split("").reverse().join(""), _0x178ba7), "元"));
  return _0x178ba7;
}
async function getLotteryChances(_0x1f851b, _0x2fdd3f) {
  console.log("=edoc_evitca：数次奖抽询查 ��".split("").reverse().join("") + _0x2fdd3f);
  return retryDecorator(3, 1000)(getLotteryChancesImpl).call(this, _0x1f851b, _0x2fdd3f);
}
async function getLotteryChancesImpl(_0x164cf1, _0x21b932) {
  const _0x501b5a = {
    method: "get",
    url: "=edoc_evitca?ecnahCyrettoLteg/yrettol/2v/evitca/ipakbx/nc.981.kbx//:sptth".split("").reverse().join("") + _0x21b932,
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
      Authorization: "Bearer " + rsaJiami.encrypt(_0x164cf1, "base64")
    }
  };
  let _0x22e97f = await axios(_0x501b5a);
  var _0x52aebd;
  const _0x401226 = _0x22e97f.data?.["data"] || 0;
  _0x52aebd = 5;
  console.log("🎫 抽奖次数查询结果：" + _0x401226 + "次");
  return _0x401226;
}
async function getMyWinList(_0x24b91a) {
  console.log("录记奖中月本询查 ��".split("").reverse().join(""));
  return retryDecorator(3, 1000)(getMyWinListImpl).call(this, _0x24b91a);
}
async function getMyWinListImpl(_0x27a0e9) {
  try {
    var _0x44ddf6 = 14;
    const _0x1ffaef = {
      method: "get",
      url: "https://xbk.189.cn/xbkapi/active/v2/lottery/getMyWinList?page=1&give_status=200&activeCode=",
      headers: {
        "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
        Authorization: "Bearer " + rsaJiami.encrypt(_0x27a0e9, "46esab".split("").reverse().join(""))
      }
    };
    _0x44ddf6 = 6;
    var _0x40a9ee;
    let _0x55b50d = await axios(_0x1ffaef);
    _0x40a9ee = 3;
    var _0x3d19c8;
    let _0x16e8f5 = 0;
    _0x3d19c8 = "qmkchq";
    const _0x44f82d = new Date();
    _0x55b50d?.["data"]?.["data"]?.["map"](_0x5222e5 => {
      var _0x11ba38 = 5;
      const _0x110e59 = new Date(_0x5222e5.win_time);
      _0x11ba38 = "dlgfmh";
      var _0x5620e9 = 5;
      const _0x43ba7e = _0x110e59.getFullYear() === _0x44f82d.getFullYear() && _0x110e59.getMonth() === _0x44f82d.getMonth();
      _0x5620e9 = 0;
      _0x43ba7e && String(_0x5222e5.title).includes("话费") && (_0x16e8f5 += 1);
    });
    console.log("🏆 本月话费中奖次数：" + _0x16e8f5 + "次（超过4次将限制抽奖）");
    return _0x16e8f5 >= 4;
  } catch (_0x83cf89) {
    console.error(":败失录记奖中取获 ❌".split("").reverse().join(""), _0x83cf89.message);
    return true;
  }
}
var _0x9c_0x583 = 12;
let liveListAll = [];
_0x9c_0x583 = 4;
var _0xd51ed = 9;
var _0x6e0af;
let isGetLive = false;
_0x6e0af = 1;
_0xd51ed = 1;
var _0xcc9cb;
let pushArr = {};
_0xcc9cb = 9;
var _0x19def = 6;
let sendTxt = {};
_0x19def = 8;
let runGameId = [],
  isStart = false;
async function sendMsg(_0x45e3ec, _0x363317) {
  var _0x101f84 = {
    uxWaD: "log",
    tSnTA: function (_0x5d9552, _0x280533) {
      return _0x5d9552 + _0x280533;
    },
    gpfze: "📤 准备推送消息到uuid: ",
    LskZk: "env",
    EIbKK: "pushAppToken",
    xFDlM: "星播客中奖",
    kfrpS: function (_0x1f81d9, _0x1959f4) {
      return _0x1f81d9 ^ _0x1959f4;
    },
    TlPwN: function (_0x5bbb59, _0x1a4f2d) {
      return _0x5bbb59 ^ _0x1a4f2d;
    },
    ksNVm: "https://wxpusher.zjiecode.com/api/send/message",
    AxsAo: "post",
    tSJoX: "hdljqg",
    uJuGI: "headers",
    gURwK: "Content-Ty" + "ep".split("").reverse().join(""),
    XeYGl: "application/json",
    ieYGV: function (_0x27d201, _0x421127) {
      return _0x27d201(_0x421127);
    },
    DDCtj: function (_0x126a8b, _0x6cc98b) {
      return _0x126a8b + _0x6cc98b;
    },
    BQWuz: " :果结送推息消 ��",
    nUkJG: "data",
    cUFRv: "success",
    uNSLk: ":应响，",
    ARpsF: "error",
    muaEp: "❌ 消息推送失败:",
    sIoia: "message"
  };
  try {
    console[_0x101f84.uxWaD](_0x101f84.tSnTA(_0x101f84.gpfze, _0x363317));
    const _0x12b631 = process[_0x101f84.LskZk][_0x101f84.EIbKK] || "",
      _0x9880a3 = {
        appToken: _0x12b631,
        content: _0x45e3ec,
        summary: _0x101f84.xFDlM,
        contentType: 2,
        topicIds: [],
        uids: [_0x363317],
        verifyPayType: "2"
      };
    var _0x83383f = _0x101f84.tSnTA(_0x101f84.kfrpS(184862, 184862), _0x101f84.TlPwN(135142, 135136));
    const _0xab24b5 = {
      url: _0x101f84.ksNVm,
      method: _0x101f84.AxsAo,
      headers: {},
      data: _0x9880a3
    };
    _0x83383f = _0x101f84.tSJoX.split("").reverse().join("");
    _0xab24b5[_0x101f84.uJuGI][_0x101f84.gURwK] = _0x101f84.XeYGl;
    const _0x5d6d63 = await _0x101f84.ieYGV(axios, _0xab24b5);
    console[_0x101f84.uxWaD](_0x101f84.tSnTA(_0x101f84.DDCtj(_0x101f84.BQWuz.split("").reverse().join(""), _0x5d6d63[_0x101f84.nUkJG][_0x101f84.cUFRv] ? "成功" : "失败"), _0x101f84.uNSLk.split("").reverse().join("")), _0x5d6d63[_0x101f84.nUkJG]);
    return _0x5d6d63[_0x101f84.nUkJG];
  } catch (_0x480048) {
    console[_0x101f84.ARpsF](_0x101f84.muaEp, _0x480048[_0x101f84.sIoia]);
    throw _0x480048;
  }
}
function extractNumbersWithDecimalsAndNegatives(_0x290b3e) {
  const _0x4a6554 = new RegExp("?)+d\\.\\(+d\\?-".split("").reverse().join(""), "g");
  var _0x221421;
  const _0x3fc122 = _0x290b3e.match(_0x4a6554);
  _0x221421 = 14;
  return _0x3fc122 ? _0x3fc122.map(Number) : [];
}
async function checkAvailableLotteries(_0x174368) {
  var _0x5f4f93 = {
    TsYDh: "activeCode",
    jBPuf: "includes",
    UNIhV: "liveId",
    ktLMt: "push",
    YHzoK: "log",
    DMafh: function (_0x667c89, _0xd64339) {
      return _0x667c89 + _0xd64339;
    },
    jlGlS: function (_0x4cfd95, _0x1e3152) {
      return _0x4cfd95 + _0x1e3152;
    },
    YFhki: function (_0x4da6c8, _0x23c88a) {
      return _0x4da6c8 + _0x23c88a;
    },
    tzNQX: function (_0x1255c3, _0x37aedb) {
      return _0x1255c3 + _0x37aedb;
    },
    ySqoU: "🎁 发现新的可抽奖活动：liveId=",
    jbRrd: "=称名间播直，",
    YMScd: "title",
    XddTt: "=edoCevitc" + "，a".split("").reverse().join(""),
    vupee: "=edoCevitca：过跳，动活的过取抽已 ️ℹ",
    tQOlb: function (_0x3ce242, _0x30ca30, _0x5b1fcb, _0x1d50b4) {
      return _0x3ce242(_0x30ca30, _0x5b1fcb, _0x1d50b4);
    },
    JvDer: function (_0x16c26a, _0xa6e59f) {
      return _0x16c26a ^ _0xa6e59f;
    },
    eDaNS: function (_0x46fd90, _0x3be55d) {
      return _0x46fd90 + _0x3be55d;
    },
    gboaR: function (_0x43e061, _0x2a461a) {
      return _0x43e061 ^ _0x2a461a;
    },
    DpmML: function (_0x80d6bd, _0x2bab27) {
      return _0x80d6bd ^ _0x2bab27;
    },
    LcUKC: function (_0x130c6b, _0x305f29) {
      return _0x130c6b == _0x305f29;
    },
    rJaYq: function (_0x5b5b29, _0x2f6c73) {
      return _0x5b5b29 + _0x2f6c73;
    },
    qwZNx: function (_0x5022ae, _0x4e97be) {
      return _0x5022ae + _0x4e97be;
    },
    Jlkqe: "⚠️ 直播间商品数量不一致：liveId=",
    zIOUf: "，返回",
    UkWlW: function (_0xa0dc60, _0x1c388e) {
      return _0xa0dc60 ^ _0x1c388e;
    },
    FfgvW: "际实，个",
    Ffxgp: function (_0x40ec10, _0x1ef753) {
      return _0x40ec10 ^ _0x1ef753;
    },
    TKsYY: function (_0x136224, _0x3cb532) {
      return _0x136224 + _0x3cb532;
    },
    kmOgx: "njkcmo",
    ZzuwY: "some",
    glJlj: "🔍 开始检查可抽奖活动",
    bomfU: function (_0x1b5a6d, _0x8c8348) {
      return _0x1b5a6d + _0x8c8348;
    },
    lZwgs: function (_0x43da3e, _0x291f96) {
      return _0x43da3e ^ _0x291f96;
    },
    eFiFW: function (_0x5e8a4d, _0x5775d6) {
      return _0x5e8a4d + _0x5775d6;
    },
    ejccW: function (_0x4a76e8, _0x136cd5) {
      return _0x4a76e8 ^ _0x136cd5;
    },
    HUzcY: function (_0x2893e4, _0x44223e) {
      return _0x2893e4 ^ _0x44223e;
    },
    lMZsF: "parse",
    hmxWo: "stringify",
    rppXH: function (_0x5b4ae6, _0x88a731) {
      return _0x5b4ae6 ^ _0x88a731;
    },
    wndxB: function (_0x5ceab4, _0x54f3b1) {
      return _0x5ceab4 ^ _0x54f3b1;
    },
    tLtnT: function (_0x5cca74, _0x38c1d4) {
      return _0x5cca74 + _0x38c1d4;
    },
    evgZm: "🔍 开始检查直播间商品（共",
    zHKwg: "length",
    wQAPf: "）间播直个",
    fajJS: function (_0x59f6ed, _0x5c631e) {
      return _0x59f6ed + _0x5c631e;
    },
    wSbcX: function (_0x2910a9, _0x1d2da6) {
      return _0x2910a9 ^ _0x1d2da6;
    },
    qlUzd: function (_0xf8febd, _0x50e782) {
      return _0xf8febd ^ _0x50e782;
    },
    SPIcl: "map",
    gwnyt: function (_0x39806e, _0x23ddb8) {
      return _0x39806e ^ _0x23ddb8;
    },
    eZjIJ: function (_0x27ade1, _0x587c36) {
      return _0x27ade1 ^ _0x587c36;
    },
    bYvYN: "all",
    wLMbl: function (_0x27304b, _0x4297a5) {
      return _0x27304b ^ _0x4297a5;
    },
    rHHlG: "reduce",
    vVodp: "现发共，成完查检动活奖抽可 ��",
    QkUSO: "个新活动",
    IffKK: function (_0x33280a, _0x5d69d3) {
      return _0x33280a > _0x5d69d3;
    },
    YrOFD: function (_0x5eea1, _0x55217b) {
      return _0x5eea1 ^ _0x55217b;
    },
    AInDH: function (_0x486224, _0x7815e0) {
      return _0x486224(_0x7815e0);
    },
    HFaYh: "动活奖抽可的新现发未 ��",
    QrUKw: "error",
    AbYhR: "❌ 获取可抽奖活动错误:",
    RXjvx: "message"
  };
  console[_0x5f4f93.YHzoK](_0x5f4f93.glJlj);
  var _0x183b86 = _0x5f4f93.bomfU(_0x5f4f93.UkWlW(789811, 789815), _0x5f4f93.lZwgs(459626, 459630));
  let _0x11da27 = [];
  _0x183b86 = _0x5f4f93.eFiFW(_0x5f4f93.gboaR(387363, 387371), _0x5f4f93.gboaR(191638, 191639));
  var _0x3f5b3c = _0x5f4f93.TKsYY(_0x5f4f93.ejccW(960430, 960431), _0x5f4f93.HUzcY(125520, 125525));
  let _0x30205f = JSON[_0x5f4f93.lMZsF](JSON[_0x5f4f93.hmxWo](liveListAll));
  _0x3f5b3c = _0x5f4f93.eDaNS(_0x5f4f93.rppXH(120023, 120021), _0x5f4f93.wndxB(432703, 432698));
  console[_0x5f4f93.YHzoK](_0x5f4f93.tLtnT(_0x5f4f93.bomfU(_0x5f4f93.evgZm, _0x30205f[_0x5f4f93.zHKwg]), _0x5f4f93.wQAPf.split("").reverse().join("")));
  try {
    var _0x226f7d = _0x5f4f93.fajJS(_0x5f4f93.wSbcX(541984, 541993), _0x5f4f93.qlUzd(707279, 707276));
    let _0x2c523b = _0x30205f[_0x5f4f93.SPIcl](async _0x501229 => {
      var _0x20f74d;
      let _0x324466 = await _0x5f4f93.tQOlb(getGoodsList, _0x501229[_0x5f4f93.UNIhV], _0x5f4f93.JvDer(645853, 645852), _0x174368);
      _0x20f74d = _0x5f4f93.eDaNS(_0x5f4f93.gboaR(702768, 702777), _0x5f4f93.DpmML(733737, 733738));
      _0x5f4f93.LcUKC(_0x324466?.["data"]?.["list"]?.["length"], _0x324466?.["data"]?.["count"]) ? _0x324466?.["data"]?.["list"]?.["map"](async _0x48662b => {
        _0x48662b[_0x5f4f93.TsYDh] && !runGameId[_0x5f4f93.jBPuf](_0x48662b[_0x5f4f93.TsYDh]) ? (_0x48662b[_0x5f4f93.UNIhV] = _0x501229?.["liveId"], _0x11da27[_0x5f4f93.ktLMt](_0x48662b), console[_0x5f4f93.YHzoK](_0x5f4f93.DMafh(_0x5f4f93.jlGlS(_0x5f4f93.YFhki(_0x5f4f93.DMafh(_0x5f4f93.tzNQX(_0x5f4f93.ySqoU, _0x48662b[_0x5f4f93.UNIhV]), _0x5f4f93.jbRrd.split("").reverse().join("")), _0x501229[_0x5f4f93.YMScd]), _0x5f4f93.XddTt.split("").reverse().join("")), _0x48662b[_0x5f4f93.TsYDh])), runGameId[_0x5f4f93.ktLMt](_0x48662b[_0x5f4f93.TsYDh])) : _0x48662b[_0x5f4f93.TsYDh] && console[_0x5f4f93.YHzoK](_0x5f4f93.tzNQX(_0x5f4f93.vupee.split("").reverse().join(""), _0x48662b[_0x5f4f93.TsYDh]));
      }) : console[_0x5f4f93.YHzoK](_0x5f4f93.YFhki(_0x5f4f93.rJaYq(_0x5f4f93.jlGlS(_0x5f4f93.rJaYq(_0x5f4f93.qwZNx(_0x5f4f93.YFhki(_0x5f4f93.Jlkqe, _0x501229[_0x5f4f93.UNIhV]), _0x5f4f93.zIOUf), _0x324466?.["data"]?.["list"]?.["length"] || _0x5f4f93.UkWlW(975784, 975784)), _0x5f4f93.FfgvW.split("").reverse().join("")), _0x324466?.["data"]?.["count"] || _0x5f4f93.gboaR(192788, 192788)), "个"));
    });
    _0x226f7d = _0x5f4f93.tzNQX(_0x5f4f93.gwnyt(705309, 705304), _0x5f4f93.eZjIJ(340455, 340462));
    await Promise[_0x5f4f93.bYvYN](_0x2c523b);
    var _0x20eb58 = _0x5f4f93.eFiFW(_0x5f4f93.gboaR(511549, 511550), _0x5f4f93.wLMbl(218258, 218263));
    const _0x36d532 = _0x11da27[_0x5f4f93.rHHlG]((_0x2f4b25, _0x3737fc) => {
      var _0x49a0d4 = _0x5f4f93.eDaNS(_0x5f4f93.Ffxgp(723553, 723554), _0x5f4f93.DpmML(753077, 753072));
      const _0x3a254a = _0x5f4f93.tzNQX(_0x5f4f93.TKsYY(_0x3737fc[_0x5f4f93.UNIhV], "-"), _0x3737fc[_0x5f4f93.TsYDh]);
      _0x49a0d4 = _0x5f4f93.kmOgx.split("").reverse().join("");
      !_0x2f4b25[_0x5f4f93.ZzuwY](_0x5e7531 => _0x5e7531.liveId + "-" + _0x5e7531.activeCode === _0x3a254a) && _0x2f4b25[_0x5f4f93.ktLMt](_0x3737fc);
      return _0x2f4b25;
    }, []);
    _0x20eb58 = _0x5f4f93.wLMbl(405145, 405147);
    console[_0x5f4f93.YHzoK](_0x5f4f93.eDaNS(_0x5f4f93.fajJS(_0x5f4f93.vVodp.split("").reverse().join(""), _0x36d532[_0x5f4f93.zHKwg]), _0x5f4f93.QkUSO));
    _0x5f4f93.IffKK(_0x36d532[_0x5f4f93.zHKwg], _0x5f4f93.YrOFD(280387, 280387)) ? await _0x5f4f93.AInDH(processAllLotteries, _0x36d532) : console[_0x5f4f93.YHzoK](_0x5f4f93.HFaYh.split("").reverse().join(""));
    return _0x36d532;
  } catch (_0x14fdd9) {
    console[_0x5f4f93.QrUKw](_0x5f4f93.AbYhR, _0x14fdd9[_0x5f4f93.RXjvx]);
    return [];
  }
}
async function processAllLotteries(_0x35b531, _0x49de7d) {
  var _0x98cbd6 = {
    FXMSs: function (_0x70d813, _0x5bf2ae) {
      return _0x70d813 > _0x5bf2ae;
    },
    dzusq: "length",
    Xpqix: function (_0x2f9332, _0x4c4ea2) {
      return _0x2f9332 ^ _0x4c4ea2;
    },
    DrlBV: function (_0x2e6ecc, _0x1b363c, _0x37c44f) {
      return _0x2e6ecc(_0x1b363c, _0x37c44f);
    },
    qhLzO: "log",
    IbmKa: function (_0x21753b, _0x343618) {
      return _0x21753b + _0x343618;
    },
    WzECI: function (_0x3aa148, _0x4aba0e) {
      return _0x3aa148 + _0x4aba0e;
    },
    zkfRK: "共（动活奖抽理处始开 ��",
    CaqSA: "）动活个",
    hLoUG: function (_0x173324, _0x3b2b0e) {
      return _0x173324 === _0x3b2b0e;
    },
    QHZay: function (_0x4a00f4, _0x3250e3) {
      return _0x4a00f4 ^ _0x3250e3;
    },
    pdGMl: "🎯 没有可抽奖的活动，结束流程",
    TloYg: function (_0x3d858a, _0x4d9f72) {
      return _0x3d858a + _0x4d9f72;
    },
    csFqx: "共，奖抽行执始开 ��",
    ZJegq: "个活动需要处理",
    vPYXw: function (_0x419318, _0x2426b) {
      return _0x419318 < _0x2426b;
    },
    AcGeO: function (_0x5f3790, _0x445a29) {
      return _0x5f3790 ^ _0x445a29;
    },
    PKYzD: function (_0x309bbb, _0xb2aa79) {
      return _0x309bbb + _0xb2aa79;
    },
    uvZHD: function (_0x13e449, _0xfe2536) {
      return _0x13e449 + _0xfe2536;
    },
    iSPNY: function (_0x62f47f, _0x258181) {
      return _0x62f47f + _0x258181;
    },
    pagYp: function (_0x36fd52, _0x3e4227) {
      return _0x36fd52 + _0x3e4227;
    },
    guvfm: "🎯 处理第",
    RkwDb: "个活动：liveId=",
    bFMmj: "liveId",
    plEek: "，activeCode=",
    xYwzL: "activeCode",
    PWgap: "xbkToken",
    hboby: "isDo",
    rCGat: function (_0x49ebb9, _0x522a50) {
      return _0x49ebb9 ^ _0x522a50;
    },
    DIBHH: function (_0x203b1e, _0x3f44b2, _0xcc294b) {
      return _0x203b1e(_0x3f44b2, _0xcc294b);
    },
    zAzIm: function (_0x4907c9, _0x278d15) {
      return _0x4907c9 ^ _0x278d15;
    },
    rQxok: function (_0x2baa2e, _0x38450d) {
      return _0x2baa2e + _0x38450d;
    },
    DgwpK: "ℹ️ 账号",
    PstNI: function (_0x20442a, _0x2a0823) {
      return _0x20442a(_0x2a0823);
    },
    rwQhj: "phone",
    Tsrjx: "次抽奖机会",
    ESPcJ: function (_0x3741ea, _0x5dd3ea) {
      return _0x3741ea ^ _0x5dd3ea;
    },
    aLVji: function (_0x25b15f, _0x4a231c) {
      return _0x25b15f + _0x4a231c;
    },
    KfvAk: function (_0x1e1ea6, _0x28ad8d) {
      return _0x1e1ea6 + _0x28ad8d;
    },
    eMgPS: function (_0x90e83b, _0x2f31b1) {
      return _0x90e83b + _0x2f31b1;
    },
    UGNVp: "🎰 账号",
    TqNdw: function (_0x566951, _0x111ffb) {
      return _0x566951 + _0x111ffb;
    },
    MvBtz: function (_0x2743a5, _0x1c32c7) {
      return _0x2743a5 ^ _0x1c32c7;
    },
    NwBZx: "动活（奖抽次",
    zzgeV: function (_0x19af99, _0x20499f) {
      return _0x19af99 ^ _0x20499f;
    },
    TvjOW: function (_0x3498f1, _0x5892d8, _0x244d5d, _0x1f70cd, _0x4d89a4, _0x311ab6) {
      return _0x3498f1(_0x5892d8, _0x244d5d, _0x1f70cd, _0x4d89a4, _0x311ab6);
    },
    GJhCh: "uid",
    vXnFR: function (_0x132a08, _0x18c39e) {
      return _0x132a08 + _0x18c39e;
    },
    BPfKw: function (_0x296476, _0xd51fa7) {
      return _0x296476 ^ _0xd51fa7;
    },
    VYmDz: "success",
    cNtzg: function (_0x11b0c3, _0x38f044) {
      return _0x11b0c3 + _0x38f044;
    },
    ZnYUa: function (_0x2b0d7a, _0x1adf78) {
      return _0x2b0d7a + _0x1adf78;
    },
    RdFMr: function (_0x533849, _0x253cad) {
      return _0x533849 + _0x253cad;
    },
    UoCGT: "<div>手机号: ",
    lAIHH: function (_0x25843c, _0x4a4070) {
      return _0x25843c(_0x4a4070);
    },
    lyykV: ",抽奖成功, 获得:<span style=\"color: red;\">",
    egSXo: "prize",
    DFbNT: "</span></div>",
    fvXMn: function (_0xe9d024, _0x5bb254) {
      return _0xe9d024 + _0x5bb254;
    },
    GLCMT: function (_0x272883, _0x539938) {
      return _0x272883 + _0x539938;
    },
    XNPRm: "⚠️ 账号",
    hqxzq: "奖抽过跳，nekot到取获未",
    nQjDl: function (_0x147063, _0x3029f0) {
      return _0x147063 + _0x3029f0;
    },
    JQbjz: "号账 ️⚠",
    rtITW: function (_0x2ad5a9, _0xa81b94) {
      return _0x2ad5a9(_0xa81b94);
    },
    IZBXa: "已达抽奖上限，跳过",
    Hfrja: "🎯 所有抽奖活动处理完毕，准备推送结果",
    glUpQ: function (_0x5cd64b, _0x5ce6c4) {
      return _0x5cd64b + _0x5ce6c4;
    },
    JifAu: function (_0x49e053, _0x3c1860) {
      return _0x49e053 ^ _0x3c1860;
    },
    WLVKE: function (_0x37210a, _0x4cd8e2) {
      return _0x37210a ^ _0x4cd8e2;
    },
    fUECD: function (_0x18cf70, _0x117faa) {
      return _0x18cf70 - _0x117faa;
    },
    xixfx: function (_0x319751, _0xa6e779) {
      return _0x319751 ^ _0xa6e779;
    },
    ccaSS: function (_0x568e72, _0x2d0f3c) {
      return _0x568e72 > _0x2d0f3c;
    },
    mHphW: function (_0x2ebc63, _0x2a3fe1) {
      return _0x2ebc63 ^ _0x2a3fe1;
    },
    mYcFe: "费话元",
    mJiqB: "📝 准备推送的中奖结果：",
    VIfkr: "substring",
    TgQii: function (_0x13b6da, _0x4a0e9c) {
      return _0x13b6da ^ _0x4a0e9c;
    },
    KqpEp: "...",
    STTuO: "🎯 所有抽奖活动处理" + "成完".split("").reverse().join(""),
    PdqIM: "error",
    grjtA: "❌ 抽奖流程严重错误：",
    KwTTv: "message",
    yzXdY: function (_0x456df9, _0x592fba, _0x31e516) {
      return _0x456df9(_0x592fba, _0x31e516);
    }
  };
  console[_0x98cbd6.qhLzO](_0x98cbd6.IbmKa(_0x98cbd6.WzECI(_0x98cbd6.zkfRK.split("").reverse().join(""), _0x35b531[_0x98cbd6.dzusq]), _0x98cbd6.CaqSA.split("").reverse().join("")));
  try {
    if (_0x98cbd6.hLoUG(_0x35b531[_0x98cbd6.dzusq], _0x98cbd6.QHZay(503693, 503693))) {
      console[_0x98cbd6.qhLzO](_0x98cbd6.pdGMl);
      return;
    }
    isStart = true;
    console[_0x98cbd6.qhLzO](_0x98cbd6.IbmKa(_0x98cbd6.TloYg(_0x98cbd6.csFqx.split("").reverse().join(""), _0x35b531[_0x98cbd6.dzusq]), _0x98cbd6.ZJegq));
    for (let _0x18b427 = _0x98cbd6.Xpqix(404470, 404470); _0x98cbd6.vPYXw(_0x18b427, _0x35b531[_0x98cbd6.dzusq]); _0x18b427++) {
      var _0x5420ea;
      const _0x19f3de = _0x35b531[_0x18b427];
      _0x5420ea = _0x98cbd6.WzECI(_0x98cbd6.Xpqix(406239, 406238), _0x98cbd6.AcGeO(121474, 121482));
      console[_0x98cbd6.qhLzO](_0x98cbd6.TloYg(_0x98cbd6.IbmKa(_0x98cbd6.IbmKa(_0x98cbd6.PKYzD(_0x98cbd6.uvZHD(_0x98cbd6.iSPNY(_0x98cbd6.pagYp(_0x98cbd6.guvfm, _0x98cbd6.WzECI(_0x18b427, _0x98cbd6.QHZay(185854, 185855))), "/"), _0x35b531[_0x98cbd6.dzusq]), _0x98cbd6.RkwDb), _0x19f3de[_0x98cbd6.bFMmj]), _0x98cbd6.plEek), _0x19f3de[_0x98cbd6.xYwzL]));
      for (const _0x2f2eff of _0x49de7d) {
        if (_0x2f2eff[_0x98cbd6.PWgap] && _0x2f2eff[_0x98cbd6.hboby]) {
          var _0x22c851 = _0x98cbd6.IbmKa(_0x98cbd6.AcGeO(736943, 736935), _0x98cbd6.rCGat(107884, 107877));
          const _0x1dc32c = await _0x98cbd6.DIBHH(getLotteryChances, _0x2f2eff[_0x98cbd6.PWgap], _0x19f3de[_0x98cbd6.xYwzL]);
          _0x22c851 = _0x98cbd6.iSPNY(_0x98cbd6.zAzIm(838565, 838572), _0x98cbd6.AcGeO(149074, 149076));
          console[_0x98cbd6.qhLzO](_0x98cbd6.rQxok(_0x98cbd6.IbmKa(_0x98cbd6.iSPNY(_0x98cbd6.TloYg(_0x98cbd6.DgwpK, _0x98cbd6.PstNI(maskPhoneNumber, _0x2f2eff[_0x98cbd6.rwQhj])), "有"), _0x1dc32c), _0x98cbd6.Tsrjx));
          for (let _0x5cc135 = _0x98cbd6.ESPcJ(739857, 739857); _0x98cbd6.vPYXw(_0x5cc135, _0x1dc32c); _0x5cc135++) {
            console[_0x98cbd6.qhLzO](_0x98cbd6.rQxok(_0x98cbd6.aLVji(_0x98cbd6.KfvAk(_0x98cbd6.rQxok(_0x98cbd6.uvZHD(_0x98cbd6.eMgPS(_0x98cbd6.pagYp(_0x98cbd6.uvZHD(_0x98cbd6.KfvAk(_0x98cbd6.iSPNY(_0x98cbd6.UGNVp, _0x98cbd6.PstNI(maskPhoneNumber, _0x2f2eff[_0x98cbd6.rwQhj])), "第的".split("").reverse().join("")), _0x98cbd6.TqNdw(_0x5cc135, _0x98cbd6.MvBtz(854640, 854641))), "/"), _0x1dc32c), _0x98cbd6.NwBZx.split("").reverse().join("")), _0x98cbd6.WzECI(_0x18b427, _0x98cbd6.zzgeV(988832, 988833))), "/"), _0x35b531[_0x98cbd6.dzusq]), "）"));
            var _0x2d0132;
            const _0x4a5636 = await _0x98cbd6.TvjOW(doLottery, _0x19f3de[_0x98cbd6.bFMmj], _0x19f3de[_0x98cbd6.xYwzL], _0x2f2eff[_0x98cbd6.PWgap], _0x2f2eff[_0x98cbd6.rwQhj], _0x2f2eff[_0x98cbd6.GJhCh]);
            _0x2d0132 = _0x98cbd6.vXnFR(_0x98cbd6.BPfKw(679745, 679745), _0x98cbd6.BPfKw(756384, 756387));
            _0x4a5636 && _0x4a5636[_0x98cbd6.VYmDz] && (!pushArr[_0x2f2eff[_0x98cbd6.GJhCh]] && (pushArr[_0x2f2eff[_0x98cbd6.GJhCh]] = {}), pushArr[_0x2f2eff[_0x98cbd6.GJhCh]][_0x2f2eff[_0x98cbd6.rwQhj]] = _0x98cbd6.cNtzg(_0x98cbd6.ZnYUa(_0x98cbd6.RdFMr(_0x98cbd6.rQxok(_0x98cbd6.UoCGT, _0x98cbd6.lAIHH(maskPhoneNumber, _0x2f2eff[_0x98cbd6.rwQhj])), _0x98cbd6.lyykV), _0x4a5636[_0x98cbd6.egSXo]), _0x98cbd6.DFbNT));
            await _0x98cbd6.PstNI(sleep, _0x98cbd6.BPfKw(190653, 190237));
          }
        } else {
          !_0x2f2eff[_0x98cbd6.PWgap] ? console[_0x98cbd6.qhLzO](_0x98cbd6.fvXMn(_0x98cbd6.GLCMT(_0x98cbd6.XNPRm, _0x98cbd6.PstNI(maskPhoneNumber, _0x2f2eff[_0x98cbd6.rwQhj])), _0x98cbd6.hqxzq.split("").reverse().join(""))) : !_0x2f2eff[_0x98cbd6.hboby] && console[_0x98cbd6.qhLzO](_0x98cbd6.nQjDl(_0x98cbd6.TqNdw(_0x98cbd6.JQbjz.split("").reverse().join(""), _0x98cbd6.rtITW(maskPhoneNumber, _0x2f2eff[_0x98cbd6.rwQhj])), _0x98cbd6.IZBXa));
        }
      }
    }
    console[_0x98cbd6.qhLzO](_0x98cbd6.Hfrja);
    for (let _0x4a9508 in pushArr) {
      var _0x5576c1;
      let _0x207cc4 = "";
      _0x5576c1 = _0x98cbd6.MvBtz(406016, 406024);
      var _0x4b94e0;
      let _0x32055a = _0x98cbd6.zAzIm(489106, 489106);
      _0x4b94e0 = _0x98cbd6.glUpQ(_0x98cbd6.JifAu(841533, 841524), _0x98cbd6.WLVKE(722673, 722672));
      for (let _0x4eda99 in pushArr[_0x4a9508]) {
        _0x207cc4 += pushArr[_0x4a9508][_0x4eda99];
        let _0x3646f8 = _0x98cbd6.lAIHH(extractNumbersWithDecimalsAndNegatives, pushArr[_0x4a9508][_0x4eda99]);
        _0x32055a += _0x3646f8[_0x98cbd6.fUECD(_0x3646f8[_0x98cbd6.dzusq], _0x98cbd6.xixfx(770169, 770168))] || _0x98cbd6.rCGat(947157, 947157);
      }
      _0x98cbd6.ccaSS(_0x32055a, _0x98cbd6.mHphW(472404, 472404)) && (_0x207cc4 += _0x98cbd6.WzECI(_0x32055a, _0x98cbd6.mYcFe.split("").reverse().join("")), sendTxt[_0x4a9508] = _0x207cc4, console[_0x98cbd6.qhLzO](_0x98cbd6.glUpQ(_0x98cbd6.rQxok(_0x98cbd6.mJiqB, _0x207cc4[_0x98cbd6.VIfkr](_0x98cbd6.Xpqix(526716, 526716), _0x98cbd6.TgQii(389395, 389409))), _0x98cbd6.KqpEp)));
    }
    pushArr = {};
    isStart = false;
    console[_0x98cbd6.qhLzO](_0x98cbd6.STTuO);
  } catch (_0x4a1f3d) {
    console[_0x98cbd6.PdqIM](_0x98cbd6.TloYg(_0x98cbd6.grjtA, _0x4a1f3d[_0x98cbd6.KwTTv]));
    isStart = false;
    _0x98cbd6.yzXdY(setTimeout, () => {
      _0x35b531 && _0x98cbd6.FXMSs(_0x35b531[_0x98cbd6.dzusq], _0x98cbd6.Xpqix(817986, 817986)) && _0x98cbd6.DrlBV(processAllLotteries, _0x35b531, _0x49de7d);
    }, _0x98cbd6.JifAu(291616, 301376));
  }
}
async function getLiveListByPhone(_0x13617c, _0x323a51, _0x156a0e) {
  console.log("📱 开始获取直播间列表（手机号：" + maskPhoneNumber(_0x13617c) + "）");
  try {
    let _0x2bdd3f = await loginPhone(_0x13617c, _0x323a51, _0x156a0e);
    if (!_0x2bdd3f) {
      console.log("❌ 登录失败，无法获取直播间（手机号：" + maskPhoneNumber(_0x13617c) + "）");
      initLiveList("init");
      return;
    }
    let _0x486117 = await getUserCode(_0x2bdd3f.uid),
      _0x97c57 = await getAccessToken(_0x486117);
    console.log("：号机手（据数间播直化始初始开，功成录登 ✅".split("").reverse().join("") + maskPhoneNumber(_0x13617c) + "）");
    await initLiveRoomFloor(1, 1, 1, _0x97c57);
  } catch (_0x961fd1) {
    console.error("❌ 获取直播间列表错误：" + _0x961fd1.message + "（手机号：" + maskPhoneNumber(_0x13617c) + "）");
  }
}
async function initLiveList(_0x3b7ae3, _0x22aba7) {
  console.log("：型类（据数间播直取获始开 ��".split("").reverse().join("") + _0x3b7ae3 + "）");
  try {
    if (_0x3b7ae3 == "init") {
      console.log("🏠 初始化直播间数据：使用随机账号");
      let _0x2ebcdf = Math.floor(Math.random() * _0x22aba7.length),
        _0x10f835 = _0x22aba7[_0x2ebcdf];
      await getLiveListByPhone(_0x10f835.phone, _0x10f835.password, _0x10f835.loginObj);
    } else {
      var _0x240d5a = 12;
      let _0x2cdd32 = Math.floor(Math.random() * _0x22aba7.length);
      _0x240d5a = "hcffij".split("").reverse().join("");
      var _0x2d22eb;
      let _0x2a7776 = _0x22aba7[_0x2cdd32];
      _0x2d22eb = 11;
      _0x2a7776.xbkToken ? (console.log("🏠 使用已有token更新直播间（手机号：" + maskPhoneNumber(_0x2a7776.phone) + "）"), await initLiveRoomFloor(1, 1, 1, _0x2a7776.xbkToken)) : (console.log("化始初新重，在存不nekot号账 ��".split("").reverse().join("")), initLiveList("init", _0x22aba7));
    }
  } catch (_0x56cf10) {
    console.error("：误错间播直取获 ❌".split("").reverse().join("") + _0x56cf10.message);
  }
}
async function checkLotteryActivities(_0x2a7784) {
  console.log("⏰ 触发检查可抽奖活动（每10秒一次）");
  try {
    if (isStart) {
      console.log("查检次本过跳，中行进在正程流奖抽 ⏰".split("").reverse().join(""));
      return;
    }
    if (_0x2a7784.length === 0) {
      console.log("动活奖抽查检法无，号账用可有没 ❌".split("").reverse().join(""));
      return;
    }
    let _0x22e8b3 = Math.floor(Math.random() * _0x2a7784.length);
    var _0x4f9c27 = 14;
    let _0x24a5e6 = _0x2a7784[_0x22e8b3];
    _0x4f9c27 = 8;
    _0x24a5e6.xbkToken ? (console.log("号账用使 ��".split("").reverse().join("") + maskPhoneNumber(_0x24a5e6.phone) + "检查可抽奖活动"), await checkAvailableLotteries(_0x24a5e6.xbkToken)) : (console.log("⚠️ 账号" + maskPhoneNumber(_0x24a5e6.phone) + "未登录，尝试重新登录"), await loginAllAccounts(_0x2a7784), checkLotteryActivities(_0x2a7784));
  } catch (_0x4a34e9) {
    console.error("❌ 检查抽奖活动错误：" + _0x4a34e9.message);
    setTimeout(() => checkLotteryActivities(_0x2a7784), 5000);
  }
}
async function loginAllAccounts(_0x1d0fdc, _0x42c2ec) {
  var _0x5424dc = {
    MfmSo: "time",
    sPETp: "log",
    BTbdJ: function (_0x476901, _0x23cb7d) {
      return _0x476901 + _0x23cb7d;
    },
    zuHzN: "号账 ��",
    BNyGK: function (_0x29f15f, _0xe2c84d) {
      return _0x29f15f(_0xe2c84d);
    },
    AkXjN: "phone",
    FcgUo: "：首次登录",
    RMGSX: function (_0x15975e, _0x89816f, _0x168615, _0x286705) {
      return _0x15975e(_0x89816f, _0x168615, _0x286705);
    },
    UrrYu: "password",
    pvCXl: function (_0x111268, _0x54712b) {
      return _0x111268 ^ _0x54712b;
    },
    TqjEL: "valueOf",
    kAUWS: "号账 ❌",
    gJNfV: function (_0x32cf59, _0x90a36) {
      return _0x32cf59(_0x90a36);
    },
    tPvpE: "败失录登",
    DQmik: "isLogin",
    fJzIz: "uid",
    VkgQl: "xbkToken",
    LovTJ: "isDo",
    fAdYA: function (_0x52aee8, _0x23f0f3) {
      return _0x52aee8(_0x23f0f3);
    },
    tAhnA: "号账 ✅",
    lKCMn: "功成录登",
    RKTdh: function (_0x31d1f3, _0x3eb241) {
      return _0x31d1f3 == _0x3eb241;
    },
    TWxyn: "length",
    SrrMG: function (_0x27af68, _0x415f4c) {
      return _0x27af68 + _0x415f4c;
    },
    SZUJB: "号账用使 ��",
    nDGux: function (_0x251a5b, _0x449653) {
      return _0x251a5b(_0x449653);
    },
    ukbHL: "初始化直播间数据",
    jEOBD: function (_0xebb656, _0x3c184e, _0xb5e1e1, _0x314b28, _0x25da6c) {
      return _0xebb656(_0x3c184e, _0xb5e1e1, _0x314b28, _0x25da6c);
    },
    BbPsa: function (_0x367e34, _0x5a2868) {
      return _0x367e34 ^ _0x5a2868;
    },
    icXZl: function (_0x18167e, _0x4390c5) {
      return _0x18167e > _0x4390c5;
    },
    JWnlW: function (_0x65980, _0x5ec1ca) {
      return _0x65980 - _0x5ec1ca;
    },
    DlQSc: function (_0x1841b7, _0x38a5f9) {
      return _0x1841b7 + _0x38a5f9;
    },
    jIDXF: "🔐 账号",
    owuKV: function (_0x237e3c, _0x2858e5) {
      return _0x237e3c(_0x2858e5);
    },
    AUUwy: "：token过期（>12小时），重新登录",
    XkrBW: function (_0x26275d, _0xf489f3) {
      return _0x26275d + _0xf489f3;
    },
    PurlF: "❌ 账号",
    mXqLF: function (_0x5c99c6, _0x400fa9) {
      return _0x5c99c6(_0x400fa9);
    },
    ZfCcW: "重新登录失败",
    cDFUX: function (_0x7c8ae6, _0x47db37) {
      return _0x7c8ae6(_0x47db37);
    },
    wWAJt: function (_0x546411, _0x489fa1) {
      return _0x546411 + _0x489fa1;
    },
    vzMMv: function (_0x3fec5c, _0x236de3) {
      return _0x3fec5c + _0x236de3;
    },
    eghuc: function (_0xa809bb, _0x8d1e44) {
      return _0xa809bb(_0x8d1e44);
    },
    mPxdS: "重新登录成功",
    oMkaD: function (_0x540b09, _0x310884) {
      return _0x540b09 > _0x310884;
    },
    tXWxZ: function (_0x198b60, _0x2faf53) {
      return _0x198b60 - _0x2faf53;
    },
    UdiSB: function (_0x59d10a, _0x166256) {
      return _0x59d10a + _0x166256;
    },
    OppSB: function (_0x24a59d, _0x41673a) {
      return _0x24a59d(_0x41673a);
    },
    KEZLK: "：未登录（>6小时），尝试登录",
    ZjAnX: function (_0xebf25c, _0x295526) {
      return _0xebf25c ^ _0x295526;
    },
    SaZzi: function (_0x2b435d, _0x256a7c) {
      return _0x2b435d ^ _0x256a7c;
    },
    DTQao: function (_0x2e2575, _0xc68457) {
      return _0x2e2575(_0xc68457);
    },
    tbwZz: "登录失败",
    rrHWm: function (_0x24284e, _0x40fc97) {
      return _0x24284e(_0x40fc97);
    },
    VSOEg: function (_0x55ac98, _0x10a3d0) {
      return _0x55ac98(_0x10a3d0);
    },
    bVWQW: function (_0x577386, _0x1a0120) {
      return _0x577386 + _0x1a0120;
    },
    dzGEB: function (_0x534731, _0x5e4f0a) {
      return _0x534731 + _0x5e4f0a;
    },
    Nyixx: "登录成功",
    ikDOt: function (_0x263ed4, _0x302cf6) {
      return _0x263ed4 + _0x302cf6;
    },
    SqLCw: function (_0x5ab235, _0x2e2acb) {
      return _0x5ab235 + _0x2e2acb;
    },
    HYjNC: "ℹ️ 账号",
    gbEJY: function (_0x2f2e9c, _0x2008d7) {
      return _0x2f2e9c(_0x2008d7);
    },
    KEjIV: "状态正常（无需重新登" + "）录".split("").reverse().join(""),
    nhyIk: "error",
    HGfUb: function (_0x16a4a3, _0x584075) {
      return _0x16a4a3 + _0x584075;
    },
    XXLGt: "❌ 处理账号",
    wvqpE: "错误：",
    FzDJQ: "message",
    RFMIQ: "🔐 开始检查所有账号状态（共",
    MOruJ: "map",
    LCaBH: "all",
    AsRhx: "filter",
    uzheK: function (_0x20fa62, _0x28f814) {
      return _0x20fa62 + _0x28f814;
    },
    fuDeR: function (_0xb9f876, _0x536df1) {
      return _0xb9f876 + _0x536df1;
    },
    UqIyT: "🔐 所有账号检查完毕，活跃账号数量：",
    sHLEO: function (_0x388574, _0x4172bc) {
      return _0x388574 > _0x4172bc;
    },
    VUFRt: function (_0x1c2298, _0x3d6aab) {
      return _0x1c2298 ^ _0x3d6aab;
    },
    GcemP: "❌ 批量登录错误："
  };
  console[_0x5424dc.sPETp](_0x5424dc.SqLCw(_0x5424dc.wWAJt(_0x5424dc.RFMIQ, _0x1d0fdc[_0x5424dc.TWxyn]), "）个".split("").reverse().join("")));
  try {
    let _0x34f4ba = _0x1d0fdc[_0x5424dc.MOruJ](async (_0x3da119, _0x8bd2b3) => {
      try {
        if (!_0x3da119[_0x5424dc.MfmSo]) {
          console[_0x5424dc.sPETp](_0x5424dc.BTbdJ(_0x5424dc.BTbdJ(_0x5424dc.zuHzN.split("").reverse().join(""), _0x5424dc.BNyGK(maskPhoneNumber, _0x3da119[_0x5424dc.AkXjN])), _0x5424dc.FcgUo));
          var _0x4fc353;
          let _0x1b85cd = await _0x5424dc.RMGSX(loginPhoneWithCache, _0x3da119[_0x5424dc.AkXjN], _0x3da119[_0x5424dc.UrrYu], _0x42c2ec);
          _0x4fc353 = _0x5424dc.pvCXl(322681, 322673);
          _0x1d0fdc[_0x8bd2b3][_0x5424dc.MfmSo] = new Date()[_0x5424dc.TqjEL]();
          if (!_0x1b85cd) {
            console[_0x5424dc.sPETp](_0x5424dc.BTbdJ(_0x5424dc.BTbdJ(_0x5424dc.kAUWS.split("").reverse().join(""), _0x5424dc.gJNfV(maskPhoneNumber, _0x3da119[_0x5424dc.AkXjN])), _0x5424dc.tPvpE.split("").reverse().join("")));
            _0x1d0fdc[_0x8bd2b3][_0x5424dc.DQmik] = false;
            return;
          }
          let _0x4df6a1 = await _0x5424dc.gJNfV(getUserCode, _0x1b85cd[_0x5424dc.fJzIz]),
            _0xa236b4 = await _0x5424dc.BNyGK(getAccessToken, _0x4df6a1);
          _0x1d0fdc[_0x8bd2b3][_0x5424dc.VkgQl] = _0xa236b4;
          _0x1d0fdc[_0x8bd2b3][_0x5424dc.LovTJ] = await _0x5424dc.fAdYA(getMyWinList, _0xa236b4);
          _0x1d0fdc[_0x8bd2b3][_0x5424dc.DQmik] = true;
          console[_0x5424dc.sPETp](_0x5424dc.BTbdJ(_0x5424dc.BTbdJ(_0x5424dc.tAhnA.split("").reverse().join(""), _0x5424dc.BNyGK(maskPhoneNumber, _0x3da119[_0x5424dc.AkXjN])), _0x5424dc.lKCMn.split("").reverse().join("")));
          !isGetLive && _0x5424dc.RKTdh(liveListAll[_0x5424dc.TWxyn], _0x5424dc.pvCXl(937125, 937125)) && (isGetLive = true, console[_0x5424dc.sPETp](_0x5424dc.BTbdJ(_0x5424dc.SrrMG(_0x5424dc.SZUJB.split("").reverse().join(""), _0x5424dc.nDGux(maskPhoneNumber, _0x3da119[_0x5424dc.AkXjN])), _0x5424dc.ukbHL)), await _0x5424dc.jEOBD(initLiveRoomFloor, _0x5424dc.pvCXl(459245, 459244), _0x5424dc.pvCXl(597512, 597513), _0x5424dc.BbPsa(210595, 210594), _0xa236b4));
        } else {
          if (_0x3da119[_0x5424dc.MfmSo] && _0x5424dc.icXZl(_0x5424dc.JWnlW(new Date()[_0x5424dc.TqjEL](), _0x3da119[_0x5424dc.MfmSo]), 43200000)) {
            console[_0x5424dc.sPETp](_0x5424dc.DlQSc(_0x5424dc.BTbdJ(_0x5424dc.jIDXF, _0x5424dc.owuKV(maskPhoneNumber, _0x3da119[_0x5424dc.AkXjN])), _0x5424dc.AUUwy));
            let _0x515b58 = await _0x5424dc.RMGSX(loginPhoneWithCache, _0x3da119[_0x5424dc.AkXjN], _0x3da119[_0x5424dc.UrrYu], _0x42c2ec);
            _0x1d0fdc[_0x8bd2b3][_0x5424dc.MfmSo] = new Date()[_0x5424dc.TqjEL]();
            if (!_0x515b58) {
              console[_0x5424dc.sPETp](_0x5424dc.XkrBW(_0x5424dc.SrrMG(_0x5424dc.PurlF, _0x5424dc.mXqLF(maskPhoneNumber, _0x3da119[_0x5424dc.AkXjN])), _0x5424dc.ZfCcW));
              _0x1d0fdc[_0x8bd2b3][_0x5424dc.DQmik] = false;
              return;
            }
            let _0x17896e = await _0x5424dc.cDFUX(getUserCode, _0x515b58[_0x5424dc.fJzIz]),
              _0x89d23a = await _0x5424dc.mXqLF(getAccessToken, _0x17896e);
            _0x1d0fdc[_0x8bd2b3][_0x5424dc.VkgQl] = _0x89d23a;
            _0x1d0fdc[_0x8bd2b3][_0x5424dc.LovTJ] = await _0x5424dc.fAdYA(getMyWinList, _0x89d23a);
            _0x1d0fdc[_0x8bd2b3][_0x5424dc.DQmik] = true;
            console[_0x5424dc.sPETp](_0x5424dc.wWAJt(_0x5424dc.vzMMv(_0x5424dc.tAhnA.split("").reverse().join(""), _0x5424dc.eghuc(maskPhoneNumber, _0x3da119[_0x5424dc.AkXjN])), _0x5424dc.mPxdS));
          } else {
            if (_0x3da119[_0x5424dc.MfmSo] && _0x5424dc.oMkaD(_0x5424dc.tXWxZ(new Date()[_0x5424dc.TqjEL](), _0x3da119[_0x5424dc.MfmSo]), 21600000) && !_0x3da119[_0x5424dc.DQmik]) {
              console[_0x5424dc.sPETp](_0x5424dc.vzMMv(_0x5424dc.UdiSB(_0x5424dc.jIDXF, _0x5424dc.OppSB(maskPhoneNumber, _0x3da119[_0x5424dc.AkXjN])), _0x5424dc.KEZLK));
              var _0x5926d9 = _0x5424dc.BTbdJ(_0x5424dc.ZjAnX(574812, 574809), _0x5424dc.ZjAnX(250205, 250206));
              let _0x4ade4e = await _0x5424dc.RMGSX(loginPhoneWithCache, _0x3da119[_0x5424dc.AkXjN], _0x3da119[_0x5424dc.UrrYu], _0x42c2ec);
              _0x5926d9 = _0x5424dc.SaZzi(161170, 161174);
              _0x1d0fdc[_0x8bd2b3][_0x5424dc.MfmSo] = new Date()[_0x5424dc.TqjEL]();
              if (!_0x4ade4e) {
                console[_0x5424dc.sPETp](_0x5424dc.SrrMG(_0x5424dc.BTbdJ(_0x5424dc.PurlF, _0x5424dc.DTQao(maskPhoneNumber, _0x3da119[_0x5424dc.AkXjN])), _0x5424dc.tbwZz));
                _0x1d0fdc[_0x8bd2b3][_0x5424dc.DQmik] = false;
                return;
              }
              let _0x127c6a = await _0x5424dc.owuKV(getUserCode, _0x4ade4e[_0x5424dc.fJzIz]),
                _0x25a88f = await _0x5424dc.rrHWm(getAccessToken, _0x127c6a);
              _0x1d0fdc[_0x8bd2b3][_0x5424dc.VkgQl] = _0x25a88f;
              _0x1d0fdc[_0x8bd2b3][_0x5424dc.LovTJ] = await _0x5424dc.VSOEg(getMyWinList, _0x25a88f);
              _0x1d0fdc[_0x8bd2b3][_0x5424dc.DQmik] = true;
              console[_0x5424dc.sPETp](_0x5424dc.bVWQW(_0x5424dc.dzGEB(_0x5424dc.tAhnA.split("").reverse().join(""), _0x5424dc.owuKV(maskPhoneNumber, _0x3da119[_0x5424dc.AkXjN])), _0x5424dc.Nyixx));
            } else {
              console[_0x5424dc.sPETp](_0x5424dc.ikDOt(_0x5424dc.SqLCw(_0x5424dc.HYjNC, _0x5424dc.gbEJY(maskPhoneNumber, _0x3da119[_0x5424dc.AkXjN])), _0x5424dc.KEjIV));
            }
          }
        }
      } catch (_0x287b71) {
        console[_0x5424dc.nhyIk](_0x5424dc.HGfUb(_0x5424dc.wWAJt(_0x5424dc.HGfUb(_0x5424dc.XXLGt, _0x5424dc.gJNfV(maskPhoneNumber, _0x3da119[_0x5424dc.AkXjN])), _0x5424dc.wvqpE), _0x287b71[_0x5424dc.FzDJQ]));
      }
    });
    await Promise[_0x5424dc.LCaBH](_0x34f4ba);
    const _0x837d9c = _0x1d0fdc[_0x5424dc.AsRhx](_0x162107 => _0x162107.isLogin && _0x162107.xbkToken);
    console[_0x5424dc.sPETp](_0x5424dc.uzheK(_0x5424dc.vzMMv(_0x5424dc.fuDeR(_0x5424dc.UqIyT, _0x837d9c[_0x5424dc.TWxyn]), "/"), _0x1d0fdc[_0x5424dc.TWxyn]));
    return _0x5424dc.sHLEO(_0x837d9c[_0x5424dc.TWxyn], _0x5424dc.VUFRt(406633, 406633));
  } catch (_0x32d862) {
    console[_0x5424dc.nhyIk](_0x5424dc.XkrBW(_0x5424dc.GcemP, _0x32d862[_0x5424dc.FzDJQ]));
    return false;
  }
}
async function initializeUserData(_0x1f65d3) {
  var _0x1273e1 = {
    cwqiD: "log",
    JIGvG: "📋 开始初始化用户数据",
    hvLwh: "parse",
    GKySk: "readFileSync",
    iFVVX: "./Cache.js" + "no".split("").reverse().join(""),
    Bbkre: "8ftu",
    bcLeq: "📋 成功加载缓存数据",
    qvLGP: "存缓新建创，在存不件文存缓 ��",
    jgkXS: "writeFileSync",
    PEIGm: "nosj.ehcaC/.",
    FSaJw: "stringify",
    yXsYU: function (_0x301ca1, _0x199f74) {
      return _0x301ca1 + _0x199f74;
    },
    FYTHd: function (_0x1a60aa, _0xff8f54) {
      return _0x1a60aa + _0xff8f54;
    },
    XujKv: "📋 共获取到",
    CxkDe: "length",
    UVsIx: "个账号",
    psLtp: function (_0x5547e4, _0x576243, _0x3b342b) {
      return _0x5547e4(_0x576243, _0x3b342b);
    },
    iCDAc: function (_0xd908c3, _0x2753bd) {
      return _0xd908c3 === _0x2753bd;
    },
    DAhSw: function (_0x5f5d4a, _0x747102) {
      return _0x5f5d4a ^ _0x747102;
    },
    IxwBs: "🏠 本地无直播间数据，开始初始化",
    DSEPD: "find",
    YkwBl: function (_0x27fff7, _0xe3cdb9, _0x5a7af1, _0x5b9ee7, _0x2d5d14) {
      return _0x27fff7(_0xe3cdb9, _0x5a7af1, _0x5b9ee7, _0x2d5d14);
    },
    HzFMv: function (_0x5c4f2d, _0x54d7d9) {
      return _0x5c4f2d ^ _0x54d7d9;
    },
    FOuHY: function (_0x32300c, _0x56aa4e) {
      return _0x32300c ^ _0x56aa4e;
    },
    AIcfO: "xbkToken",
    XcnUl: "❌ 没有可用的已登录账号，无法初始化直播间",
    QEcAr: "error",
    OnTjt: "：误错据数户用化始初 ❌",
    MGdLY: "message",
    eptBc: function (_0x599504, _0x5d7a63, _0xe860a4) {
      return _0x599504(_0x5d7a63, _0xe860a4);
    }
  };
  console[_0x1273e1.cwqiD](_0x1273e1.JIGvG);
  try {
    let _0x104a4c = {};
    try {
      _0x104a4c = JSON[_0x1273e1.hvLwh](fs[_0x1273e1.GKySk](_0x1273e1.iFVVX, _0x1273e1.Bbkre.split("").reverse().join("")));
      console[_0x1273e1.cwqiD](_0x1273e1.bcLeq);
    } catch (_0x5bc6d5) {
      console[_0x1273e1.cwqiD](_0x1273e1.qvLGP.split("").reverse().join(""));
      fs[_0x1273e1.jgkXS](_0x1273e1.PEIGm.split("").reverse().join(""), JSON[_0x1273e1.FSaJw]({}), _0x1273e1.Bbkre.split("").reverse().join(""));
      _0x104a4c = {};
    }
    console[_0x1273e1.cwqiD](_0x1273e1.yXsYU(_0x1273e1.FYTHd(_0x1273e1.XujKv, _0x1f65d3[_0x1273e1.CxkDe]), _0x1273e1.UVsIx));
    await _0x1273e1.psLtp(loginAllAccounts, _0x1f65d3, _0x104a4c);
    if (_0x1273e1.iCDAc(liveListAll[_0x1273e1.CxkDe], _0x1273e1.DAhSw(341060, 341060)) && !isGetLive) {
      console[_0x1273e1.cwqiD](_0x1273e1.IxwBs);
      const _0x4abc82 = _0x1f65d3[_0x1273e1.DSEPD](_0x157466 => _0x157466.xbkToken);
      _0x4abc82 ? await _0x1273e1.YkwBl(initLiveRoomFloor, _0x1273e1.HzFMv(223366, 223367), _0x1273e1.FOuHY(155212, 155213), _0x1273e1.DAhSw(388138, 388139), _0x4abc82[_0x1273e1.AIcfO]) : console[_0x1273e1.cwqiD](_0x1273e1.XcnUl);
    }
  } catch (_0x37251c) {
    console[_0x1273e1.QEcAr](_0x1273e1.yXsYU(_0x1273e1.OnTjt.split("").reverse().join(""), _0x37251c[_0x1273e1.MGdLY]));
    _0x1273e1.eptBc(setTimeout, () => initializeUserData(_0x1f65d3), 300000);
  }
}
function getTimestamp() {
  return getTimestampFormatted();
}
const originalLog = console.log;
console.log = function (..._0x201d4b) {
  var _0x3804ec;
  const _0x279fa1 = getTimestamp();
  _0x3804ec = 16;
  originalLog("[" + _0x279fa1 + "]", ..._0x201d4b);
};
var _0xg_0x471 = 1;
var _0x533agb;
let userPhone = [];
_0x533agb = 1;
_0xg_0x471 = "jedlbf".split("").reverse().join("");
process?.["env"]?.["chinaTelecomAccount"] ? process?.["env"]?.["chinaTelecomAccount"]["split"]("&")["map"](_0x322b0a => {
  if (_0x322b0a) {
    var _0x4602c1;
    let _0x123577 = _0x322b0a.split("#")[0];
    _0x4602c1 = "gpljdo";
    let _0x42bb73 = _0x322b0a.split("#")[1];
    const _0x1069b0 = {
      phone: _0x123577,
      password: _0x42bb73
    };
    userPhone.push(_0x1069b0);
  }
}) : (console.log("❌ 未找到环境变量，请设置环境变量chinaTelecomAccount"), process.exit());
var _0x7e2df;
var _0x501cb = 3;
let userName = "";
_0x501cb = "lcaoqq";
_0x7e2df = "gcdekb";
process?.["env"]?.["dxUserName1"] || "bbbaaa".split("").reverse().join("") ? userName = process?.["env"]?.["dxUserName1"] || "bbbaaa".split("").reverse().join("") : process.exit();
(async () => {
  console.log("🚀 脚本启动，开始初始化...");
  if (!validateDate()) {
    process.exit(1);
    return;
  }
  try {
    await initializeUserData(userPhone);
    let _0x3b6b9d = [];
    try {
      _0x3b6b9d = JSON.parse(fs.readFileSync("./liveList.json", "utf8"));
      console.log("💾 读取本地直播间数据成功（" + _0x3b6b9d.length + "）个".split("").reverse().join(""));
      setLiveListAll(_0x3b6b9d);
    } catch (_0x4c46f0) {
      console.log("💾 本地直播间数据不存在，将重新获取");
      fs.writeFileSync("./liveList.json", JSON.stringify([]), "8ftu".split("").reverse().join(""));
      _0x3b6b9d = [];
    }
    if (_0x3b6b9d.length === 0) {
      console.log("🏠 本地直播间数据为空，开始初始化加载（仅加载省份1）");
      const _0x12a5db = userPhone.find(_0x2983d0 => _0x2983d0.xbkToken);
      _0x12a5db && (await initLiveRoomFloor(1, 1, 1, _0x12a5db.xbkToken));
    } else {
      console.log("效有据数间播直地本 ��".split("").reverse().join(""));
      var _0x18f4dd;
      const _0x16aa48 = fs.statSync("nosj.tsiLevil/.".split("").reverse().join(""));
      _0x18f4dd = 9;
      const _0x2eaa43 = new Date(_0x16aa48.mtime);
      var _0x1ce628;
      const _0x454f34 = new Date();
      _0x1ce628 = 4;
      var _0x15bd49 = 5;
      const _0x3482cb = (_0x454f34 - _0x2eaa43) / 3600000;
      _0x15bd49 = 14;
      if (_0x3482cb > 2) {
        console.log("已前当（取获新重要需，时小2过超已据数间播直 ⏰".split("").reverse().join("") + Math.floor(_0x3482cb) + "小时）");
        var _0x2b18da = 8;
        const _0x4b4925 = userPhone.find(_0x2fafb7 => _0x2fafb7.xbkToken);
        _0x2b18da = 10;
        _0x4b4925 && (await initLiveRoomFloor(1, 1, 1, _0x4b4925.xbkToken));
      } else {
        console.log("⏰ 直播间数据较新（" + Math.floor(_0x3482cb) + "存缓用使，）前时小".split("").reverse().join(""));
        setTimeout(() => checkLotteryActivities(userPhone), 2000);
      }
    }
  } catch (_0x13b64f) {
    console.error("❌ 脚本初始化严重错误：" + _0x13b64f.message);
    console.log("化始初试重将后钟分1 ⏰".split("").reverse().join(""));
    setTimeout(() => process.exit(1), 60000);
  }
})();
setInterval(async () => {
  console.log("⏰ 定时任务：每小时更新直播间和账号列表（触发）");
  await initializeUserData(userPhone);
  initLiveList("etadpu".split("").reverse().join(""), userPhone);
}, 3600000);
setInterval(() => {
  console.log("⏰ 定时任务：每10秒检查可抽奖活动（即将触发）");
  !isStart ? checkLotteryActivities(userPhone) : console.log("⏰ 抽奖流程进行中，跳过本次定时检查");
}, 300000);
setInterval(() => {
  console.log("⏰ 定时任务：每10分钟清空抽奖记录（触发）");
  while (runGameId.length > 0) {
    runGameId.pop();
  }
  console.log("✅ 抽奖记录已清空");
}, 600000);
setInterval(async () => {
  console.log("⏰ 定时任务：每分钟检查推送消息（触发）");
  if (!isStart) {
    let _0x180d7f = Object.keys(sendTxt);
    if (_0x180d7f.length > 0) {
      console.log("📤 发现" + _0x180d7f.length + "条待推送消息");
      for (let _0x283192 in sendTxt) {
        await sendMsg(sendTxt[_0x283192], _0x283192);
        await sleep(3000);
      }
      for (let _0x3e10a6 in sendTxt) {
        delete sendTxt[_0x3e10a6];
      }
      console.log("📤 所有消息推送完成");
    } else {
      console.log("息消的送推待有没 ��".split("").reverse().join(""));
    }
  } else {
    console.log("⏰ 抽奖流程进行中，暂不推送消息");
  }
}, 60000);
function setLiveListAll(_0x238ca7) {
  liveListAll = _0x238ca7;
}