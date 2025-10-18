//Sat Oct 18 2025 13:39:22 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const wxcode = require("./wxcode"),
  fs = require("fs"),
  path = require("path"),
  crypto = require("crypto"),
  https = require("https"),
  http = require("http"),
  {
    URL
  } = require("url"),
  NOTICE_SWITCH = 1,
  KAMI_VERIFY_SWITCH = 1,
  APPID = "wx19dfca7578d897c0",
  KAMI_API_URL = "http://kami.19820121.xyz/api/verify.php",
  KAMI_API_KEY = "6e62e481fe3f0ad007bb5a1df54bc0fa",
  API_BASE_URL = "https://guoshi.tywchtech.cn",
  CLIENT_SECRET = "ddgyb",
  args = process.argv.slice(2),
  getArg = _0xc5df11 => {
    const _0x5533a2 = args.indexOf("--" + _0xc5df11);
    return _0x5533a2 !== -1 && args[_0x5533a2 + 1] ? args[_0x5533a2 + 1] : null;
  },
  cmdWxid = getArg("wxid"),
  isDebug = args.includes("--debug"),
  wxidList = cmdWxid || process.env.TXX_WXID || "",
  kamiKey = process.env.TXX_KAMI || "",
  scriptName = path.basename(__filename, ".js"),
  TOKEN_CACHE_FILE = path.join(__dirname, scriptName + "_tokens.json");
function parseWxidList(_0x26458e) {
  if (!_0x26458e) return [];
  return _0x26458e.split("\n").map(_0x26bbea => _0x26bbea.trim()).filter(_0x2fddec => _0x2fddec.length > 0).filter(_0xd9e755 => !_0xd9e755.startsWith("#"));
}
function generateRandom() {
  const _0x3f08b8 = "abcdefghijklmnopqrstuvwxyz0123456789";
  let _0x5b2d26 = "";
  for (let _0x2fcc8d = 0; _0x2fcc8d < 8; _0x2fcc8d++) {
    _0x5b2d26 += _0x3f08b8.charAt(Math.floor(Math.random() * _0x3f08b8.length));
  }
  return _0x5b2d26;
}
function generateXRequestedWith(_0x4be6ff, _0x136449, _0x4da672) {
  const _0x1629d8 = _0x4da672.substring(0, 10),
    _0xbaad6 = _0x4be6ff + "_" + _0x136449 + "_" + _0x1629d8,
    _0x58c4fd = crypto.createHmac("sha256", APPID);
  return _0x58c4fd.update(_0xbaad6), _0x58c4fd.digest("hex");
}
function generateDeviceId() {
  const _0x2353a3 = require("os"),
    _0x333079 = _0x2353a3.hostname(),
    _0x5f4689 = _0x333079 + "-node-script",
    _0x36ac13 = crypto.createHash("md5").update(_0x5f4689).digest("hex").substring(0, 16);
  return _0x36ac13;
}
async function verifyKami(_0x5db1b2) {
  return new Promise((_0x3d0c59, _0x689d34) => {
    if (!_0x5db1b2) {
      _0x3d0c59({
        "success": false,
        "code": 1,
        "message": "未设置卡密，请设置环境变量 TXX_KAMI"
      });
      return;
    }
    const _0xec0baa = generateDeviceId(),
      _0x18b525 = new URL(KAMI_API_URL);
    _0x18b525.searchParams.set("api_key", KAMI_API_KEY);
    _0x18b525.searchParams.set("card_key", _0x5db1b2);
    _0x18b525.searchParams.set("device_id", _0xec0baa);
    const _0x44dd7f = {
        "hostname": _0x18b525.hostname,
        "port": _0x18b525.port || (_0x18b525.protocol === "https:" ? 443 : 80),
        "path": _0x18b525.pathname + _0x18b525.search,
        "method": "GET",
        "headers": {
          "User-Agent": "Node.js Script"
        }
      },
      _0x1a1878 = _0x18b525.protocol === "https:" ? https : http,
      _0x43e355 = _0x1a1878.request(_0x44dd7f, _0x274c07 => {
        let _0x128ad8 = "";
        _0x274c07.on("data", _0x56c68e => {
          _0x128ad8 += _0x56c68e;
        });
        _0x274c07.on("end", () => {
          if (!_0x128ad8 || _0x128ad8.trim() === "") {
            _0x3d0c59({
              "success": false,
              "code": 3,
              "message": "服务器返回空响应"
            });
            return;
          }
          try {
            const _0x1e713e = JSON.parse(_0x128ad8);
            if (_0x1e713e.code === 0) {
              _0x3d0c59({
                "success": true,
                "code": _0x1e713e.code,
                "message": _0x1e713e.message || _0x1e713e.msg,
                "data": _0x1e713e.data
              });
            } else _0x3d0c59({
              "success": false,
              "code": _0x1e713e.code,
              "message": _0x1e713e.message || _0x1e713e.msg || "卡密验证失败"
            });
          } catch (_0x2c797f) {
            _0x3d0c59({
              "success": false,
              "code": 3,
              "message": "解析响应失败: " + _0x2c797f.message + "，原始响应: " + _0x128ad8
            });
          }
        });
      });
    _0x43e355.on("error", _0x4c3350 => {
      _0x3d0c59({
        "success": false,
        "code": 3,
        "message": "网络请求失败: " + _0x4c3350.message
      });
    });
    _0x43e355.setTimeout(10000, () => {
      _0x43e355.destroy();
      _0x3d0c59({
        "success": false,
        "code": 3,
        "message": "请求超时，请检查网络连接"
      });
    });
    _0x43e355.end();
  });
}
class ScriptTemplate {
  constructor(_0x557ce1) {
    this.wxid = _0x557ce1;
    this.appid = APPID;
    this.isLogin = false;
    this.wxCode = null;
    this.openid = null;
    this.mobileInfo = null;
    this.userProfile = null;
    this.token = null;
    this.remarkName = typeof wxcode.getRemarkName === "function" ? wxcode.getRemarkName(_0x557ce1) : _0x557ce1;
  }
  ["loadTokenCache"]() {
    try {
      if (fs.existsSync(TOKEN_CACHE_FILE)) {
        const _0x59a7de = JSON.parse(fs.readFileSync(TOKEN_CACHE_FILE, "utf8")),
          _0x737041 = _0x59a7de[this.wxid];
        if (_0x737041) {
          this.openid = _0x737041.openid;
          this.token = _0x737041.token;
          this.mobileInfo = _0x737041.mobileInfo;
          this.userProfile = _0x737041.userProfile;
          this.isLogin = true;
          if (isDebug) {
            console.log("[DEBUG] [" + this.remarkName + "] 从缓存加载数据成功");
            console.log("[DEBUG] [" + this.remarkName + "] OpenID: " + this.openid);
            console.log("[DEBUG] [" + this.remarkName + "] Token: " + (this.token ? "已加载" : "未找到"));
          }
          return true;
        }
      }
    } catch (_0x350810) {
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 读取缓存失败: " + _0x350810.message);
    }
    return false;
  }
  ["saveTokenCache"]() {
    try {
      let _0x2d0567 = {};
      if (fs.existsSync(TOKEN_CACHE_FILE)) try {
        _0x2d0567 = JSON.parse(fs.readFileSync(TOKEN_CACHE_FILE, "utf8"));
      } catch (_0x5f254c) {
        if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 现有缓存文件格式错误，将重新创建");
      }
      _0x2d0567[this.wxid] = {
        "openid": this.openid,
        "token": this.token,
        "mobileInfo": this.mobileInfo,
        "userProfile": this.userProfile
      };
      fs.writeFileSync(TOKEN_CACHE_FILE, JSON.stringify(_0x2d0567, null, 2), "utf8");
      isDebug && console.log("[DEBUG] [" + this.remarkName + "] 缓存已保存");
    } catch (_0xf81ff3) {
      console.log("❌ [" + this.remarkName + "] 保存缓存失败: " + _0xf81ff3.message);
    }
  }
  async ["getWxCodeAndLogin"]() {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取微信授权码...");
    const _0x477971 = await wxcode.getWxCode(this.wxid, this.appid);
    if (!_0x477971.success) {
      return console.log("[" + this.remarkName + "] 获取授权码失败：" + _0x477971.error), false;
    }
    this.wxCode = _0x477971.code;
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取授权码成功：" + this.wxCode);
    return this.isLogin = true, true;
  }
  async ["getUserOpenid"]() {
    const _0x34e035 = await wxcode.getOpenid(this.wxid, this.appid);
    if (_0x34e035.success) {
      this.openid = _0x34e035.openid;
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取openid成功：" + this.openid);
      return this.openid;
    } else return console.log("[" + this.remarkName + "] 获取openid失败：" + _0x34e035.error), null;
  }
  async ["getMobileInfo"]() {
    const _0x234c43 = await wxcode.getmobile(this.wxid, this.appid);
    if (_0x234c43.success) {
      this.mobileInfo = _0x234c43;
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取手机号加密数据成功");
      return this.mobileInfo;
    } else {
      return console.log("[" + this.remarkName + "] 获取手机号失败：" + _0x234c43.error), null;
    }
  }
  async ["getUserProfile"]() {
    const _0x3e7e78 = JSON.stringify({
        "api_name": "webapi_getuserprofile",
        "data": {
          "app_version": 68,
          "desc": "用于获取您的个人信息",
          "lang": "en",
          "version": "3.7.12"
        },
        "env": 1,
        "operate_directly": false,
        "show_confirm": true,
        "tid": Date.now() * 1000000 + Math.floor(Math.random() * 1000000),
        "with_credentials": true
      }),
      _0x1758a5 = await wxcode.getUserInfo(this.wxid, this.appid, _0x3e7e78);
    if (_0x1758a5.success) {
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取用户个人信息成功");
      try {
        const _0x39e5cb = JSON.parse(_0x1758a5.rawData.data);
        if (isDebug) {
          console.log("[DEBUG] [" + this.remarkName + "] 用户信息:", {
            "nickName": _0x39e5cb.nickName,
            "gender": _0x39e5cb.gender,
            "avatarUrl": _0x39e5cb.avatarUrl,
            "city": _0x39e5cb.city,
            "province": _0x39e5cb.province,
            "country": _0x39e5cb.country
          });
        }
        return this.userProfile = {
          "success": true,
          "userInfo": _0x39e5cb,
          "signature": _0x1758a5.signature,
          "encryptedData": _0x1758a5.encryptedData,
          "iv": _0x1758a5.iv
        }, this.userProfile;
      } catch (_0xe8c0f3) {
        return console.log("[" + this.remarkName + "] 解析用户信息失败：" + _0xe8c0f3.message), {
          "success": false,
          "error": _0xe8c0f3.message
        };
      }
    } else return console.log("[" + this.remarkName + "] 获取用户个人信息失败：" + _0x1758a5.error), null;
  }
  async ["httpRequest"](_0xe7ab30, _0x437508, _0x25b3e6 = {}, _0x5adbab = null) {
    const _0x1a5932 = require("zlib");
    return new Promise((_0x28f086, _0x1a0458) => {
      const _0x3857ab = new URL(_0xe7ab30),
        _0xe7cf14 = {
          "hostname": _0x3857ab.hostname,
          "port": _0x3857ab.port || 443,
          "path": _0x3857ab.pathname + _0x3857ab.search,
          "method": _0x437508,
          "headers": _0x25b3e6
        };
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 请求: " + _0x437508 + " " + _0xe7ab30);
        console.log("[DEBUG] [" + this.remarkName + "] 请求头:", JSON.stringify(_0x25b3e6, null, 2));
        if (_0x5adbab) console.log("[DEBUG] [" + this.remarkName + "] 请求体: " + _0x5adbab);
      }
      const _0x6547b9 = https.request(_0xe7cf14, _0x23d7dc => {
        let _0xa42f8c = [],
          _0x22853a = _0x23d7dc;
        const _0x517c23 = _0x23d7dc.headers["content-encoding"];
        if (_0x517c23 === "gzip") {
          _0x22853a = _0x23d7dc.pipe(_0x1a5932.createGunzip());
        } else {
          if (_0x517c23 === "deflate") _0x22853a = _0x23d7dc.pipe(_0x1a5932.createInflate());else _0x517c23 === "br" && (_0x22853a = _0x23d7dc.pipe(_0x1a5932.createBrotliDecompress()));
        }
        _0x22853a.on("data", _0x143998 => {
          _0xa42f8c.push(_0x143998);
        });
        _0x22853a.on("end", () => {
          try {
            const _0x322ff3 = Buffer.concat(_0xa42f8c),
              _0x14fb37 = _0x322ff3.toString("utf8"),
              _0x45dec1 = JSON.parse(_0x14fb37);
            isDebug && (console.log("[DEBUG] [" + this.remarkName + "] 响应状态: " + _0x23d7dc.statusCode), console.log("[DEBUG] [" + this.remarkName + "] 响应数据:", JSON.stringify(_0x45dec1, null, 2)));
            _0x28f086({
              "success": true,
              "data": _0x45dec1,
              "statusCode": _0x23d7dc.statusCode
            });
          } catch (_0x1f0aee) {
            const _0xdd1c70 = Buffer.concat(_0xa42f8c),
              _0x32e5bf = _0xdd1c70.toString("utf8");
            if (isDebug) {
              console.log("[DEBUG] [" + this.remarkName + "] 响应状态: " + _0x23d7dc.statusCode);
              console.log("[DEBUG] [" + this.remarkName + "] 响应数据(非JSON): " + _0x32e5bf);
            }
            _0x28f086({
              "success": true,
              "data": _0x32e5bf,
              "statusCode": _0x23d7dc.statusCode
            });
          }
        });
        _0x22853a.on("error", _0x1c71a4 => {
          _0x1a0458({
            "success": false,
            "error": "解压失败: " + _0x1c71a4.message
          });
        });
      });
      _0x6547b9.on("error", _0x22e2fe => {
        _0x1a0458({
          "success": false,
          "error": _0x22e2fe.message
        });
      });
      _0x6547b9.setTimeout(10000, () => {
        _0x6547b9.destroy();
        _0x1a0458({
          "success": false,
          "error": "请求超时"
        });
      });
      if (_0x5adbab) {
        _0x6547b9.write(_0x5adbab);
      }
      _0x6547b9.end();
    });
  }
  async ["ddgyLogin"]() {
    try {
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 开始多多果园登录...");
      if (!this.wxCode) {
        const _0x8521a = await this.getWxCodeAndLogin();
        if (!_0x8521a) return {
          "success": false,
          "msg": "获取微信授权码失败"
        };
      }
      if (!this.userProfile) {
        await this.getUserProfile();
      }
      const _0x21898f = this.userProfile?.["userInfo"]?.["nickName"] || "微信用户",
        _0x107d8a = this.userProfile?.["userInfo"]?.["avatarUrl"] || "https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132",
        _0x2bb647 = JSON.stringify({
          "code": this.wxCode,
          "nickname": _0x21898f,
          "avatar": _0x107d8a,
          "type": 1
        }),
        _0x28bc3a = {
          "host": "guoshi.tywchtech.cn",
          "content-length": Buffer.byteLength(_0x2bb647),
          "xweb_xhr": "1",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
          "content-type": "application/json",
          "accept": "*/*",
          "referer": "https://servicewechat.com/wx19dfca7578d897c0/39/page-frame.html"
        },
        _0x599cfe = await this.httpRequest(API_BASE_URL + "/api/wx/getopenid", "POST", _0x28bc3a, _0x2bb647);
      if (_0x599cfe.success && _0x599cfe.data.code === 200) return this.openid = _0x599cfe.data.data.openid, this.token = _0x599cfe.data.data.token, isDebug && (console.log("[DEBUG] [" + this.remarkName + "] 登录成功"), console.log("[DEBUG] [" + this.remarkName + "] OpenID: " + this.openid)), {
        "success": true,
        "msg": _0x599cfe.data.msg,
        "data": _0x599cfe.data.data
      };else {
        return {
          "success": false,
          "msg": _0x599cfe.data?.["msg"] || "登录失败"
        };
      }
    } catch (_0x440043) {
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 登录异常: " + (_0x440043.message || _0x440043.error));
      return {
        "success": false,
        "msg": _0x440043.message || _0x440043.error || "登录异常"
      };
    }
  }
  async ["getMemberInfo"]() {
    try {
      const _0xfcef6c = Date.now(),
        _0x512daa = generateRandom(),
        _0x22c140 = "timestamp=" + _0xfcef6c + "&random=" + _0x512daa + "&clientSecret=" + CLIENT_SECRET,
        _0x145ee1 = {
          "host": "guoshi.tywchtech.cn",
          "content-length": Buffer.byteLength(_0x22c140),
          "xweb_xhr": "1",
          "x-requested-with": generateXRequestedWith(_0xfcef6c, _0x512daa, this.token),
          "authorization": "Bearer " + this.token,
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
          "content-type": "application/x-www-form-urlencoded",
          "accept": "*/*",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://servicewechat.com/wx19dfca7578d897c0/39/page-frame.html",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          "priority": "u=1, i"
        },
        _0x1242a6 = await this.httpRequest(API_BASE_URL + "/api/member_new/info", "POST", _0x145ee1, _0x22c140);
      if (_0x1242a6.success && _0x1242a6.data.code === 200) return {
        "success": true,
        "data": _0x1242a6.data.data
      };else {
        if (_0x1242a6.data.code === 401) return {
          "success": false,
          "needRelogin": true,
          "msg": _0x1242a6.data.msg
        };else {
          return {
            "success": false,
            "msg": _0x1242a6.data?.["msg"] || "获取用户信息失败"
          };
        }
      }
    } catch (_0x234389) {
      return {
        "success": false,
        "msg": _0x234389.message || _0x234389.error || "获取用户信息异常"
      };
    }
  }
  async ["waterConsume"]() {
    try {
      const _0xaff5ae = Date.now(),
        _0x5bac37 = generateRandom(),
        _0xfdfbf8 = "timestamp=" + _0xaff5ae + "&random=" + _0x5bac37 + "&clientSecret=" + CLIENT_SECRET,
        _0x486d2b = {
          "host": "guoshi.tywchtech.cn",
          "content-length": Buffer.byteLength(_0xfdfbf8),
          "xweb_xhr": "1",
          "x-requested-with": generateXRequestedWith(_0xaff5ae, _0x5bac37, this.token),
          "authorization": "Bearer " + this.token,
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
          "content-type": "application/x-www-form-urlencoded",
          "accept": "*/*",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://servicewechat.com/wx19dfca7578d897c0/39/page-frame.html",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          "priority": "u=1, i"
        },
        _0xa06242 = await this.httpRequest(API_BASE_URL + "/api/water_new/consume", "POST", _0x486d2b, _0xfdfbf8);
      if (_0xa06242.success && _0xa06242.data.code === 200) return {
        "success": true,
        "msg": _0xa06242.data.msg
      };else {
        if (_0xa06242.data.code === 401) {
          return {
            "success": false,
            "needRelogin": true,
            "msg": _0xa06242.data.msg
          };
        } else return {
          "success": false,
          "msg": _0xa06242.data?.["msg"] || "浇水失败"
        };
      }
    } catch (_0x4354d2) {
      return {
        "success": false,
        "msg": _0x4354d2.message || _0x4354d2.error || "浇水异常"
      };
    }
  }
  async ["getIndexBase"]() {
    try {
      const _0x36bffc = "{}",
        _0x9cec18 = {
          "host": "guoshi.tywchtech.cn",
          "content-length": 2,
          "xweb_xhr": "1",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
          "content-type": "application/json",
          "accept": "*/*",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://servicewechat.com/wx19dfca7578d897c0/39/page-frame.html",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          "priority": "u=1, i"
        },
        _0x5164ec = await this.httpRequest(API_BASE_URL + "/api/index_new/index_base", "POST", _0x9cec18, _0x36bffc);
      return _0x5164ec.success && _0x5164ec.data.code === 200 ? {
        "success": true,
        "data": _0x5164ec.data.data
      } : {
        "success": false,
        "msg": _0x5164ec.data?.["msg"] || "获取基础配置失败"
      };
    } catch (_0x3f07ba) {
      return {
        "success": false,
        "msg": _0x3f07ba.message || _0x3f07ba.error || "获取基础配置异常"
      };
    }
  }
  async ["checkDailyTask"]() {
    try {
      const _0x30de38 = Date.now(),
        _0x3fe9e2 = generateRandom(),
        _0x39f7a4 = "timestamp=" + _0x30de38 + "&random=" + _0x3fe9e2 + "&clientSecret=" + CLIENT_SECRET,
        _0x5720ae = {
          "host": "guoshi.tywchtech.cn",
          "content-length": Buffer.byteLength(_0x39f7a4),
          "xweb_xhr": "1",
          "x-requested-with": generateXRequestedWith(_0x30de38, _0x3fe9e2, this.token),
          "authorization": "Bearer " + this.token,
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
          "content-type": "application/x-www-form-urlencoded",
          "accept": "*/*",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://servicewechat.com/wx19dfca7578d897c0/39/page-frame.html",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          "priority": "u=1, i"
        },
        _0x586f06 = await this.httpRequest(API_BASE_URL + "/api/index_new/is_mark", "POST", _0x5720ae, _0x39f7a4);
      return _0x586f06.success && _0x586f06.data.code === 200 ? {
        "success": true,
        "data": _0x586f06.data.data
      } : {
        "success": false,
        "msg": _0x586f06.data?.["msg"] || "检查任务失败"
      };
    } catch (_0x164a4d) {
      return {
        "success": false,
        "msg": _0x164a4d.message || _0x164a4d.error || "检查任务异常"
      };
    }
  }
  async ["getTaskList"]() {
    try {
      const _0xe34f59 = Date.now(),
        _0x202f4a = generateRandom(),
        _0x51b84d = "timestamp=" + _0xe34f59 + "&random=" + _0x202f4a + "&clientSecret=" + CLIENT_SECRET,
        _0x13c02f = {
          "host": "guoshi.tywchtech.cn",
          "content-length": Buffer.byteLength(_0x51b84d),
          "xweb_xhr": "1",
          "x-requested-with": generateXRequestedWith(_0xe34f59, _0x202f4a, this.token),
          "authorization": "Bearer " + this.token,
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
          "content-type": "application/x-www-form-urlencoded",
          "accept": "*/*",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://servicewechat.com/wx19dfca7578d897c0/39/page-frame.html",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          "priority": "u=1, i"
        },
        _0x189a13 = await this.httpRequest(API_BASE_URL + "/api/water_new/every_task_list", "POST", _0x13c02f, _0x51b84d);
      return _0x189a13.success && _0x189a13.data.code === 200 ? {
        "success": true,
        "data": _0x189a13.data.data
      } : {
        "success": false,
        "msg": _0x189a13.data?.["msg"] || "获取任务列表失败"
      };
    } catch (_0x1815f8) {
      return {
        "success": false,
        "msg": _0x1815f8.message || _0x1815f8.error || "获取任务列表异常"
      };
    }
  }
  async ["finishTask"](_0x2af3b8) {
    try {
      const _0x5c6d66 = Date.now(),
        _0x4d0c57 = generateRandom(),
        _0x2930e2 = "timestamp=" + _0x5c6d66 + "&random=" + _0x4d0c57 + "&clientSecret=" + CLIENT_SECRET + "&type=" + _0x2af3b8,
        _0x3e1764 = {
          "host": "guoshi.tywchtech.cn",
          "content-length": Buffer.byteLength(_0x2930e2),
          "xweb_xhr": "1",
          "x-requested-with": generateXRequestedWith(_0x5c6d66, _0x4d0c57, this.token),
          "authorization": "Bearer " + this.token,
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
          "content-type": "application/x-www-form-urlencoded",
          "accept": "*/*",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://servicewechat.com/wx19dfca7578d897c0/39/page-frame.html",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          "priority": "u=1, i"
        },
        _0xf90e33 = await this.httpRequest(API_BASE_URL + "/api/water_new/finish_every_task", "POST", _0x3e1764, _0x2930e2);
      if (_0xf90e33.success && _0xf90e33.data.code === 200) {
        return {
          "success": true,
          "msg": _0xf90e33.data.msg,
          "data": _0xf90e33.data.data
        };
      } else return {
        "success": false,
        "msg": _0xf90e33.data?.["msg"] || "完成任务失败"
      };
    } catch (_0x447a44) {
      return {
        "success": false,
        "msg": _0x447a44.message || _0x447a44.error || "完成任务异常"
      };
    }
  }
  async ["navigateToMiniprogram"](_0x4379ba, _0x28a794) {
    try {
      const _0x25036d = "form=" + CLIENT_SECRET + "&member_id=" + _0x4379ba + "&to=" + _0x28a794,
        _0x4f3220 = {
          "host": "guoshi.tywchtech.cn",
          "content-length": Buffer.byteLength(_0x25036d),
          "xweb_xhr": "1",
          "authorization": "Bearer " + this.token,
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
          "content-type": "application/x-www-form-urlencoded",
          "accept": "*/*",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://servicewechat.com/wx19dfca7578d897c0/39/page-frame.html",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          "priority": "u=1, i"
        },
        _0x1b62b4 = await this.httpRequest(API_BASE_URL + "/api/water_new/navigate_to_miniprogram", "POST", _0x4f3220, _0x25036d);
      if (_0x1b62b4.success && _0x1b62b4.data.code === 200) {
        const _0xe21347 = _0x1b62b4.data.msg || "",
          _0x32a673 = _0xe21347.match(/获得水滴(\d+)/),
          _0xaa3b06 = _0x32a673 ? parseInt(_0x32a673[1]) : 0;
        return {
          "success": true,
          "msg": _0xe21347,
          "waterDrops": _0xaa3b06
        };
      } else return {
        "success": false,
        "msg": _0x1b62b4.data?.["msg"] || "浏览任务失败"
      };
    } catch (_0x3f6938) {
      return {
        "success": false,
        "msg": _0x3f6938.message || _0x3f6938.error || "浏览任务异常"
      };
    }
  }
  ["isTimeForWaterCollection"]() {
    const _0x43e416 = new Date(),
      _0x234fb3 = _0x43e416.getHours(),
      _0x61a36a = _0x43e416.getMinutes(),
      _0x461492 = [8, 12, 18, 20, 22];
    for (const _0x34feac of _0x461492) {
      if (_0x234fb3 === _0x34feac && _0x61a36a >= 0 && _0x61a36a <= 5) return true;
    }
    return false;
  }
  async ["performAllTasks"]() {
    try {
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 开始执行任务...");
      const _0x383e55 = await this.getMemberInfo();
      let _0x1fe1af = null;
      if (_0x383e55.success && _0x383e55.data.member_id) {
        _0x1fe1af = _0x383e55.data.member_id;
        if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取到member_id: " + _0x1fe1af);
      }
      const _0x21cee0 = await this.getTaskList();
      if (!_0x21cee0.success) return console.log("⚠️ [" + this.remarkName + "] 获取任务列表失败: " + _0x21cee0.msg), false;
      const _0x4c3d0b = _0x21cee0.data;
      let _0x2efeaa = 0,
        _0x9c0ea2 = 0;
      for (const _0x2275cb of _0x4c3d0b) {
        const {
          type: _0x4387f9,
          title: _0x2664c4,
          button_status: _0x3a2b11,
          is_collect_red: _0x4ec86a,
          red_nums: _0x58252a,
          appid: _0x3979d1
        } = _0x2275cb;
        if (_0x3a2b11 === 1 && _0x4ec86a === 2) {
          let _0x3ff00a = false,
            _0x4648d4 = 0,
            _0x5ea769 = false;
          switch (_0x4387f9) {
            case 6:
              _0x3ff00a = true, _0x4648d4 = 10;
              break;
            case 7:
              this.isTimeForWaterCollection() && (_0x3ff00a = true, _0x4648d4 = 10);
              break;
            case 9:
              _0x3ff00a = true, _0x4648d4 = 10;
              break;
            case 5:
              _0x3ff00a = true, _0x4648d4 = _0x58252a || 10;
              break;
            case 10:
              _0x3ff00a = true, _0x4648d4 = 10;
              break;
            case 4:
              _0x3ff00a = true, _0x4648d4 = 10;
              break;
            case 11:
              _0x1fe1af && _0x3979d1 && (_0x3ff00a = true, _0x5ea769 = true, _0x4648d4 = 0);
              break;
            case 1:
              _0x3ff00a = false;
              break;
          }
          if (_0x3ff00a) {
            console.log("🎯 [" + this.remarkName + "] 执行任务: " + _0x2664c4);
            if (_0x5ea769) {
              const _0x21996d = await this.navigateToMiniprogram(_0x1fe1af, _0x3979d1);
              if (_0x21996d.success) {
                _0x2efeaa++;
                const _0x44996f = _0x21996d.waterDrops || 0;
                _0x9c0ea2 += _0x44996f;
                console.log("✅ [" + this.remarkName + "] " + _0x21996d.msg + "，获得奖励: " + _0x44996f + "水滴");
              } else console.log("❌ [" + this.remarkName + "] 任务失败: " + _0x21996d.msg);
            } else {
              const _0x224f3e = _0x4387f9 === 10 ? 4 : 1;
              let _0x423513 = 0;
              for (let _0x591c59 = 0; _0x591c59 < _0x224f3e; _0x591c59++) {
                const _0x3851d5 = await this.finishTask(_0x4387f9);
                if (_0x3851d5.success) {
                  _0x423513++;
                  _0x224f3e > 1 ? console.log("✅ [" + this.remarkName + "] 任务第" + (_0x591c59 + 1) + "/" + _0x224f3e + "次完成") : console.log("✅ [" + this.remarkName + "] 任务完成，获得奖励: " + _0x4648d4 + "水滴");
                  if (_0x591c59 < _0x224f3e - 1) {
                    const _0x51145d = Math.floor(Math.random() * 1000) + 2000;
                    await new Promise(_0x143bb8 => setTimeout(_0x143bb8, _0x51145d));
                  }
                } else {
                  console.log("❌ [" + this.remarkName + "] 任务第" + (_0x591c59 + 1) + "次失败: " + _0x3851d5.msg);
                  break;
                }
              }
              if (_0x423513 > 0) {
                _0x2efeaa++;
                const _0x195a37 = _0x4648d4 * _0x423513;
                _0x9c0ea2 += _0x195a37;
                _0x224f3e > 1 && console.log("🎉 [" + this.remarkName + "] 任务完成" + _0x423513 + "次，获得奖励: " + _0x195a37 + "水滴");
              }
            }
            const _0xa822e2 = Math.floor(Math.random() * 2000) + 3000;
            await new Promise(_0x3a2b94 => setTimeout(_0x3a2b94, _0xa822e2));
          }
        }
      }
      return _0x2efeaa > 0 ? console.log("🎉 [" + this.remarkName + "] 完成 " + _0x2efeaa + " 个任务，共获得 " + _0x9c0ea2 + " 水滴") : console.log("ℹ️ [" + this.remarkName + "] 当前没有可完成的任务"), true;
    } catch (_0x4d4807) {
      return console.log("❌ [" + this.remarkName + "] 执行任务出错：" + _0x4d4807.message), false;
    }
  }
  async ["performFullLogin"]() {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 执行完整的数据获取流程...");
    const _0x546868 = await this.getIndexBase();
    if (!_0x546868.success) console.log("[" + this.remarkName + "] 获取基础配置失败: " + _0x546868.msg);else {
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 基础配置加载成功");
    }
    const _0x1e8177 = await this.ddgyLogin();
    if (!_0x1e8177.success) return console.log("[" + this.remarkName + "] 登录失败: " + _0x1e8177.msg), false;
    return console.log("[" + this.remarkName + "] 登录成功"), this.saveTokenCache(), true;
  }
  async ["executeBusinessLogic"]() {
    try {
      console.log("\n🌱 [" + this.remarkName + "] 开始执行多多果园任务...");
      await this.performAllTasks();
      console.log("\n💧 [" + this.remarkName + "] 开始执行浇水...");
      const _0x2bd31e = await this.getMemberInfo();
      if (!_0x2bd31e.success) {
        if (_0x2bd31e.needRelogin) return console.log("⚠️ [" + this.remarkName + "] " + _0x2bd31e.msg), false;
        return console.log("❌ [" + this.remarkName + "] 获取用户信息失败: " + _0x2bd31e.msg), false;
      }
      const _0x2ab86a = await this.checkDailyTask();
      if (!_0x2ab86a.success) {
        console.log("⚠️ [" + this.remarkName + "] 检查任务失败: " + _0x2ab86a.msg);
      } else {
        if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 第一次任务检查: " + JSON.stringify(_0x2ab86a.data));
      }
      await new Promise(_0x3bcaa7 => setTimeout(_0x3bcaa7, 300));
      const _0x4d6f95 = await this.getMemberInfo();
      !_0x4d6f95.success && console.log("⚠️ [" + this.remarkName + "] 第二次获取用户信息失败");
      await new Promise(_0x3bd9f2 => setTimeout(_0x3bd9f2, 300));
      const _0x59d32e = await this.checkDailyTask();
      if (!_0x59d32e.success) console.log("⚠️ [" + this.remarkName + "] 第二次检查任务失败");else {
        if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 第二次任务检查: " + JSON.stringify(_0x59d32e.data));
      }
      const _0x2d8b01 = _0x4d6f95.success ? _0x4d6f95.data : _0x2bd31e.data;
      console.log("📊 [" + this.remarkName + "] 当前状态:");
      console.log("   └─ 昵称: " + _0x2d8b01.nickname);
      console.log("   └─ 等级: " + _0x2d8b01.levels);
      console.log("   └─ 已浇水: " + _0x2d8b01.water_now + "/" + _0x2d8b01.water_sum + " 滴");
      console.log("   └─ 可用水滴: " + _0x2d8b01.water_count + " 滴");
      console.log("   └─ 目标奖励: " + _0x2d8b01.tree_reward_text);
      const _0x25d433 = (_0x2d8b01.water_now / _0x2d8b01.water_sum * 100).toFixed(2);
      console.log("   └─ 完成进度: " + _0x25d433 + "%");
      if (_0x2d8b01.water_count <= 0) return console.log("⚠️ [" + this.remarkName + "] 水滴不足，无法浇水"), true;
      if (_0x2d8b01.water_now >= _0x2d8b01.water_sum) return console.log("🎉 [" + this.remarkName + "] 树已成熟！可以领取奖励: " + _0x2d8b01.tree_reward_text), print("[" + this.remarkName + "] 🎉 树已成熟！奖励: " + _0x2d8b01.tree_reward_text, true), true;
      let _0x3637db = 0;
      const _0x2cf096 = _0x2d8b01.water_sum - _0x2d8b01.water_now,
        _0x5f4e40 = Math.min(Math.floor(_0x2d8b01.water_count / 10), Math.floor(_0x2cf096 / 10));
      console.log("💧 [" + this.remarkName + "] 开始浇水，计划浇 " + _0x5f4e40 + " 次 (共" + _0x5f4e40 * 10 + "滴水)...");
      for (let _0x5e8406 = 0; _0x5e8406 < _0x5f4e40; _0x5e8406++) {
        const _0x4a8cd9 = await this.waterConsume();
        if (!_0x4a8cd9.success) {
          if (_0x4a8cd9.needRelogin) return console.log("⚠️ [" + this.remarkName + "] " + _0x4a8cd9.msg + "，需要重新登录"), false;
          console.log("❌ [" + this.remarkName + "] 第" + (_0x5e8406 + 1) + "次浇水失败: " + _0x4a8cd9.msg);
          break;
        }
        _0x3637db++;
        console.log("💧 [" + this.remarkName + "] 第" + (_0x5e8406 + 1) + "次浇水成功 (" + _0x3637db + "/" + _0x5f4e40 + ")");
        if (_0x5e8406 < _0x5f4e40 - 1) {
          const _0x55bbe3 = Math.floor(Math.random() * 2000) + 2000;
          await new Promise(_0x62119f => setTimeout(_0x62119f, _0x55bbe3));
        }
      }
      await new Promise(_0x580237 => setTimeout(_0x580237, 1000));
      const _0x42ea05 = await this.getMemberInfo();
      if (_0x42ea05.success) {
        const _0xafb18d = _0x42ea05.data;
        console.log("\n✅ [" + this.remarkName + "] 浇水完成！");
        console.log("   └─ 本次浇水: " + _0x3637db + " 次");
        console.log("   └─ 已浇水: " + _0xafb18d.water_now + "/" + _0xafb18d.water_sum + " 滴");
        console.log("   └─ 剩余水滴: " + _0xafb18d.water_count + " 滴");
        const _0xb62426 = (_0xafb18d.water_now / _0xafb18d.water_sum * 100).toFixed(2);
        console.log("   └─ 完成进度: " + _0xb62426 + "%");
        if (_0xafb18d.water_now >= _0xafb18d.water_sum) {
          console.log("🎉 [" + this.remarkName + "] 恭喜！树已成熟，可领取: " + _0xafb18d.tree_reward_text);
          print("[" + this.remarkName + "] 🎉 树已成熟！奖励: " + _0xafb18d.tree_reward_text, true);
        } else {
          const _0x22fb7e = _0xafb18d.water_sum - _0xafb18d.water_now;
          console.log("   └─ 还需浇水: " + _0x22fb7e + " 滴即可成熟");
        }
      } else {
        console.log("✅ [" + this.remarkName + "] 浇水" + _0x3637db + "次完成");
      }
      return true;
    } catch (_0x11efd0) {
      return console.log("❌ [" + this.remarkName + "] 业务逻辑执行出错：" + _0x11efd0.message), false;
    }
  }
  async ["run"]() {
    try {
      const _0x45cbc7 = this.loadTokenCache();
      if (_0x45cbc7) {
        const _0xc792ce = await this.executeBusinessLogic();
        if (!_0xc792ce) {
          console.log("⚠️ [" + this.remarkName + "] 使用缓存执行失败，尝试重新登录...");
          const _0x43d87b = await this.performFullLogin();
          if (!_0x43d87b) {
            console.log("❌ [" + this.remarkName + "] 重新登录失败");
            return;
          }
          const _0x222d3c = await this.executeBusinessLogic();
          if (!_0x222d3c) {
            console.log("❌ [" + this.remarkName + "] 重试后业务逻辑仍失败");
            return;
          }
        }
      } else {
        const _0x35a46b = await this.performFullLogin();
        if (!_0x35a46b) {
          console.log("❌ [" + this.remarkName + "] 初始登录失败");
          return;
        }
        const _0x450b36 = await this.executeBusinessLogic();
        if (!_0x450b36) {
          console.log("❌ [" + this.remarkName + "] 业务逻辑执行失败");
          return;
        }
      }
    } catch (_0x4fc4b9) {
      console.log("❌ [" + this.remarkName + "] 脚本执行出错：" + _0x4fc4b9.message);
      if (isDebug) {
        console.error(_0x4fc4b9);
      }
    }
  }
}
async function main() {
  console.log("🚀 " + scriptName + "开始...");
  if (KAMI_VERIFY_SWITCH === 1) {
    const _0x27b99e = await verifyKami(kamiKey);
    !_0x27b99e.success && (console.log("❌ 卡密验证失败: " + _0x27b99e.message), process.exit(1));
    console.log("✅ 卡密验证成功");
    if (_0x27b99e.data) {
      const _0x56ef73 = _0x27b99e.data;
      if (_0x56ef73.card_type === "time") console.log("   有效期: " + _0x56ef73.duration + " 天");else {
        if (_0x56ef73.card_type === "count") {
          console.log("   剩余次数: " + _0x56ef73.remaining_count);
          console.log("   总次数: " + _0x56ef73.total_count);
        }
      }
    }
  } else {
    console.log("🔓 卡密验证已关闭，跳过验证步骤");
  }
  console.log("=".repeat(60) + "\n");
  console.log("🌳 多多果园自动浇水脚本 🌳");
  console.log("💧 每天浇水，收获红包和实物奖励 💧");
  console.log("=".repeat(60) + "\n");
  isDebug && (console.log("[DEBUG] 调试模式已开启"), console.log("[DEBUG] APPID: " + APPID));
  if (!wxidList) {
    console.log("❌ 未设置环境变量 TXX_WXID");
    return;
  }
  const _0x366b24 = cmdWxid ? [cmdWxid] : parseWxidList(wxidList);
  if (_0x366b24.length === 0) {
    console.log("❌ 没有找到有效的wxid");
    return;
  }
  console.log("📋 共找到 " + _0x366b24.length + " 个有效账号");
  isDebug && console.log("[DEBUG] 账号列表: " + _0x366b24.join(", "));
  for (let _0x1eefcb = 0; _0x1eefcb < _0x366b24.length; _0x1eefcb++) {
    const _0x313593 = _0x366b24[_0x1eefcb],
      _0x196c35 = typeof wxcode.getRemarkName === "function" ? wxcode.getRemarkName(_0x313593) : _0x313593;
    console.log("\n🚀 [" + (_0x1eefcb + 1) + "/" + _0x366b24.length + "] 开始处理账号: " + _0x196c35 + " (" + _0x313593 + ")");
    try {
      const _0x2b3e2d = new ScriptTemplate(_0x313593);
      await _0x2b3e2d.run();
    } catch (_0x11d340) {
      console.log("❌ [" + (_0x1eefcb + 1) + "/" + _0x366b24.length + "] 账号 " + _0x196c35 + " 处理失败: " + _0x11d340.message);
      isDebug && console.error(_0x11d340);
    }
    console.log("─".repeat(60));
    _0x1eefcb < _0x366b24.length - 1 && (await new Promise(_0x44d5a9 => setTimeout(_0x44d5a9, 5000)));
  }
  console.log("\n🎉 所有账号处理完成！");
  NOTICE_SWITCH && notice && (await sendMsg(notice));
}
let notice = "";
function print(_0x2be019, _0x116e4c = false) {
  let _0x497dc3 = "" + _0x2be019;
  console.log(_0x497dc3);
  if (NOTICE_SWITCH && _0x116e4c) {
    notice += _0x497dc3 + "\n";
  }
}
async function sendMsg(_0x1b4f67) {
  try {
    let _0x18cb29 = "";
    try {
      _0x18cb29 = require("./sendNotify");
    } catch (_0x2fafe0) {
      try {
        _0x18cb29 = require("../sendNotify");
      } catch (_0x580c49) {
        console.log("❌ 未找到sendNotify模块，无法发送通知");
        return;
      }
    }
    await _0x18cb29.sendNotify(scriptName, _0x1b4f67);
    console.log("📢 通知发送成功");
  } catch (_0x59b9ac) {
    console.log("❌ 通知发送失败: " + _0x59b9ac.message);
  }
}
main().catch(console.error);