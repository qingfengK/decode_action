//Thu Sep 25 2025 06:03:17 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x123530 = function () {
  let _0x4188da = true;
  return function (_0x4a95cb, _0x2a0189) {
    const _0x25c8e9 = _0x4188da ? function () {
      if (_0x2a0189) {
        const _0x3cacaf = _0x2a0189.apply(_0x4a95cb, arguments);
        return _0x2a0189 = null, _0x3cacaf;
      }
    } : function () {};
    return _0x4188da = false, _0x25c8e9;
  };
}();
(function () {
  _0x123530(this, function () {
    const _0x1dc6b9 = new RegExp("function *\\( *\\)"),
      _0x4ddf57 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
      _0x344cad = _0x3907fa("init");
    if (!_0x1dc6b9.test(_0x344cad + "chain") || !_0x4ddf57.test(_0x344cad + "input")) _0x344cad("0");else {
      _0x3907fa();
    }
  })();
})();
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
  KAMI_VERIFY_SWITCH = 1;
(function () {
  let _0x23837b;
  try {
    const _0x40d2dd = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x23837b = _0x40d2dd();
  } catch (_0x34e673) {
    _0x23837b = window;
  }
  _0x23837b.setInterval(_0x3907fa, 2000);
})();
const APPID = "wxe862fe007eb47128",
  KAMI_API_URL = "http://kami.19820121.xyz/api/verify.php",
  KAMI_API_KEY = "6e62e481fe3f0ad007bb5a1df54bc0fa",
  args = process.argv.slice(2),
  getArg = _0x53a3bd => {
    const _0x1e4c8a = args.indexOf("--" + _0x53a3bd);
    return _0x1e4c8a !== -1 && args[_0x1e4c8a + 1] ? args[_0x1e4c8a + 1] : null;
  },
  cmdWxid = getArg("wxid"),
  isDebug = args.includes("--debug"),
  wxidList = cmdWxid || process.env.TXX_WXID || "",
  kamiKey = process.env.TXX_KAMI || "",
  scriptName = path.basename(__filename, ".js"),
  TOKEN_CACHE_FILE = path.join(__dirname, scriptName + "_tokens.json");
function parseWxidList(_0x200443) {
  if (!_0x200443) return [];
  return _0x200443.split("\n").map(_0xa47c90 => _0xa47c90.trim()).filter(_0x5a635b => _0x5a635b.length > 0).filter(_0x419317 => !_0x419317.startsWith("#"));
}
function generateDeviceId() {
  const _0x140da9 = require("os"),
    _0x412081 = _0x140da9.hostname(),
    _0x2d8879 = _0x412081 + "-node-script",
    _0x3655ca = crypto.createHash("md5").update(_0x2d8879).digest("hex").substring(0, 16);
  return _0x3655ca;
}
async function verifyKami(_0x1e2199) {
  return new Promise((_0x153c19, _0x2251f8) => {
    if (!_0x1e2199) {
      _0x153c19({
        "success": false,
        "code": 1,
        "message": "未设置卡密，请设置环境变量 TXX_KAMI"
      });
      return;
    }
    const _0x5a9fcb = generateDeviceId(),
      _0x50b55c = new URL(KAMI_API_URL);
    _0x50b55c.searchParams.set("api_key", KAMI_API_KEY);
    _0x50b55c.searchParams.set("card_key", _0x1e2199);
    _0x50b55c.searchParams.set("device_id", _0x5a9fcb);
    const _0x55ffb9 = {
        "hostname": _0x50b55c.hostname,
        "port": _0x50b55c.port || (_0x50b55c.protocol === "https:" ? 443 : 80),
        "path": _0x50b55c.pathname + _0x50b55c.search,
        "method": "GET",
        "headers": {
          "User-Agent": "Node.js Script"
        }
      },
      _0x1d3d3b = _0x50b55c.protocol === "https:" ? https : http,
      _0x4d290e = _0x1d3d3b.request(_0x55ffb9, _0x31b262 => {
        let _0x5b9887 = "";
        _0x31b262.on("data", _0x46a4f4 => {
          _0x5b9887 += _0x46a4f4;
        });
        _0x31b262.on("end", () => {
          if (!_0x5b9887 || _0x5b9887.trim() === "") {
            _0x153c19({
              "success": false,
              "code": 3,
              "message": "服务器返回空响应"
            });
            return;
          }
          try {
            const _0xeeaaa8 = JSON.parse(_0x5b9887);
            _0xeeaaa8.code === 0 ? _0x153c19({
              "success": true,
              "code": _0xeeaaa8.code,
              "message": _0xeeaaa8.message || _0xeeaaa8.msg,
              "data": _0xeeaaa8.data
            }) : _0x153c19({
              "success": false,
              "code": _0xeeaaa8.code,
              "message": _0xeeaaa8.message || _0xeeaaa8.msg || "卡密验证失败"
            });
          } catch (_0x39974a) {
            _0x153c19({
              "success": false,
              "code": 3,
              "message": "解析响应失败: " + _0x39974a.message + "，原始响应: " + _0x5b9887
            });
          }
        });
      });
    _0x4d290e.on("error", _0xb266c3 => {
      _0x153c19({
        "success": false,
        "code": 3,
        "message": "网络请求失败: " + _0xb266c3.message
      });
    });
    _0x4d290e.setTimeout(10000, () => {
      _0x4d290e.destroy();
      _0x153c19({
        "success": false,
        "code": 3,
        "message": "请求超时，请检查网络连接"
      });
    });
    _0x4d290e.end();
  });
}
class ScriptTemplate {
  constructor(_0xee67b9) {
    this.wxid = _0xee67b9;
    this.appid = APPID;
    this.isLogin = false;
    this.wxCode = null;
    this.openid = null;
    this.openId6 = null;
    this.jwtToken = null;
    this.token = null;
    this.deviceList = null;
    this.mobileInfo = null;
    this.userProfile = null;
    this.remarkName = typeof wxcode.getRemarkName === "function" ? wxcode.getRemarkName(_0xee67b9) : _0xee67b9;
    this.apiConfig = {
      "iotAppId": "1133",
      "apiKey": "prod_secret123@muc",
      "loginHost": "mp-prod.smartmidea.net",
      "apiHost": "smartrac.midea.com"
    };
  }
  ["loadTokenCache"]() {
    try {
      if (fs.existsSync(TOKEN_CACHE_FILE)) {
        const _0x321d32 = JSON.parse(fs.readFileSync(TOKEN_CACHE_FILE, "utf8")),
          _0x1ef3b0 = _0x321d32[this.wxid];
        if (_0x1ef3b0) {
          return this.openid = _0x1ef3b0.openid, this.openId6 = _0x1ef3b0.openId6, this.jwtToken = _0x1ef3b0.jwtToken, this.token = _0x1ef3b0.token, this.deviceList = _0x1ef3b0.deviceList, this.mobileInfo = _0x1ef3b0.mobileInfo, this.userProfile = _0x1ef3b0.userProfile, this.isLogin = true, isDebug && (console.log("[DEBUG] [" + this.remarkName + "] 从缓存加载数据成功"), console.log("[DEBUG] [" + this.remarkName + "] OpenID: " + this.openid), console.log("[DEBUG] [" + this.remarkName + "] OpenID6: " + this.openId6), console.log("[DEBUG] [" + this.remarkName + "] Token: " + (this.token ? this.token.substring(0, 20) + "..." : "null"))), true;
        }
      }
    } catch (_0x2e1526) {
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 读取缓存失败: " + _0x2e1526.message);
    }
    return false;
  }
  ["saveTokenCache"]() {
    try {
      let _0x48ed5a = {};
      if (fs.existsSync(TOKEN_CACHE_FILE)) try {
        _0x48ed5a = JSON.parse(fs.readFileSync(TOKEN_CACHE_FILE, "utf8"));
      } catch (_0x597be3) {
        if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 现有缓存文件格式错误，将重新创建");
      }
      _0x48ed5a[this.wxid] = {
        "openid": this.openid,
        "openId6": this.openId6,
        "jwtToken": this.jwtToken,
        "token": this.token,
        "deviceList": this.deviceList,
        "mobileInfo": this.mobileInfo,
        "userProfile": this.userProfile
      };
      fs.writeFileSync(TOKEN_CACHE_FILE, JSON.stringify(_0x48ed5a, null, 2), "utf8");
      isDebug && (console.log("[DEBUG] [" + this.remarkName + "] 缓存文件: " + TOKEN_CACHE_FILE), console.log("[DEBUG] [" + this.remarkName + "] 缓存保存成功"));
    } catch (_0x45a288) {
      console.log("❌ [" + this.remarkName + "] 保存缓存失败: " + _0x45a288.message);
    }
  }
  async ["performFullLogin"]() {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 执行完整的数据获取流程...");
    const _0x4f2719 = await this.getWxCode();
    if (!_0x4f2719) return console.log("[" + this.remarkName + "] 获取微信授权码失败，跳过"), false;
    const _0x3660a4 = await this.huaLingLogin();
    if (!_0x3660a4) {
      return console.log("[" + this.remarkName + "] 华凌智联登录失败，跳过"), false;
    }
    const _0x5bdd7a = await this.exchangeToken();
    if (!_0x5bdd7a) {
      return console.log("[" + this.remarkName + "] Token交换失败，跳过"), false;
    }
    return this.saveTokenCache(), true;
  }
  ["generateReqId"]() {
    const _0x551793 = crypto.randomUUID().replace(/-/g, ""),
      _0x6df2c7 = Date.now().toString(),
      _0x10abf8 = Math.floor(Math.random() * 100000).toString().padStart(5, "0");
    return crypto.createHash("md5").update(_0x551793 + _0x6df2c7 + _0x10abf8).digest("hex");
  }
  ["generateStamp"]() {
    const _0x4b1154 = new Date(),
      _0x419155 = _0x4b1154.getFullYear(),
      _0x3a6102 = (_0x4b1154.getMonth() + 1).toString().padStart(2, "0"),
      _0x39f5ee = _0x4b1154.getDate().toString().padStart(2, "0"),
      _0x28d64d = _0x4b1154.getHours().toString().padStart(2, "0"),
      _0x37c827 = _0x4b1154.getMinutes().toString().padStart(2, "0"),
      _0x2076da = _0x4b1154.getSeconds().toString().padStart(2, "0");
    return "" + _0x419155 + _0x3a6102 + _0x39f5ee + _0x28d64d + _0x37c827 + _0x2076da;
  }
  ["calculateSign"](_0x104f5c, _0x3b9c77) {
    const _0x47e856 = this.apiConfig.apiKey + JSON.stringify(_0x104f5c) + _0x3b9c77;
    return crypto.createHash("md5").update(_0x47e856).digest("hex");
  }
  async ["makeRequest"](_0x246d18, _0x56cadc = {}) {
    return new Promise((_0x3c1d98, _0x381947) => {
      const _0x11465f = new URL(_0x246d18),
        _0x5678c3 = _0x11465f.protocol === "https:",
        _0x1f24b7 = _0x5678c3 ? https : http,
        _0x45c367 = {
          "hostname": _0x11465f.hostname,
          "port": _0x11465f.port || (_0x5678c3 ? 443 : 80),
          "path": _0x11465f.pathname + _0x11465f.search,
          "method": _0x56cadc.method || "GET",
          "headers": _0x56cadc.headers || {}
        },
        _0x9acee7 = _0x1f24b7.request(_0x45c367, _0x90e6bf => {
          let _0x1a30f7 = "";
          _0x90e6bf.on("data", _0x4e481e => {
            _0x1a30f7 += _0x4e481e;
          });
          _0x90e6bf.on("end", () => {
            try {
              const _0x127f6e = JSON.parse(_0x1a30f7);
              _0x3c1d98({
                "success": true,
                "status": _0x90e6bf.statusCode,
                "data": _0x127f6e
              });
            } catch (_0x3d520e) {
              _0x3c1d98({
                "success": false,
                "error": "JSON解析失败: " + _0x3d520e.message,
                "rawData": _0x1a30f7
              });
            }
          });
        });
      _0x9acee7.on("error", _0x1b488a => {
        _0x3c1d98({
          "success": false,
          "error": "请求失败: " + _0x1b488a.message
        });
      });
      _0x9acee7.setTimeout(30000, () => {
        _0x9acee7.destroy();
        _0x3c1d98({
          "success": false,
          "error": "请求超时"
        });
      });
      _0x56cadc.body && _0x9acee7.write(_0x56cadc.body);
      _0x9acee7.end();
    });
  }
  async ["getWxCode"]() {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 开始获取微信授权码...");
    const _0x3aab10 = await wxcode.getWxCode(this.wxid, this.appid);
    if (!_0x3aab10.success) {
      return console.log("[" + this.remarkName + "] 获取微信授权码失败：" + _0x3aab10.error), false;
    }
    this.wxCode = _0x3aab10.code;
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 微信授权码：" + this.wxCode);
    return true;
  }
  async ["huaLingLogin"]() {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 开始华凌智联主登录...");
    const _0x2b1e57 = "https://" + this.apiConfig.apiHost + "/bluetooth/control/minigram/userInfo/get",
      _0x1085a0 = await this.makeRequest(_0x2b1e57, {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        },
        "body": JSON.stringify({
          "code": this.wxCode,
          "source": "miniProgram",
          "minigramId": this.appid
        })
      });
    if (_0x1085a0.success && _0x1085a0.data.errCode === "0") {
      const _0x1daee1 = _0x1085a0.data.result;
      return this.openid = _0x1daee1.openId, this.openId6 = _0x1daee1.openId6, this.jwtToken = _0x1daee1.token, this.deviceList = _0x1daee1.deviceList, isDebug && (console.log("[DEBUG] [" + this.remarkName + "] 华凌智联登录成功"), console.log("[DEBUG] [" + this.remarkName + "] OpenID: " + this.openid), console.log("[DEBUG] [" + this.remarkName + "] OpenID6: " + this.openId6), console.log("[DEBUG] [" + this.remarkName + "] JWT Token: " + this.jwtToken.substring(0, 30) + "...")), true;
    } else {
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 登录响应:", JSON.stringify(_0x1085a0, null, 2));
      }
      return console.log("[" + this.remarkName + "] 华凌智联登录失败：" + (_0x1085a0.data?.["message"] || _0x1085a0.data?.["msg"] || _0x1085a0.error)), false;
    }
  }
  async ["exchangeToken"]() {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 开始Token交换...");
    const _0x5aa87c = "https://" + this.apiConfig.apiHost + "/hl/public/?s=api/index/index",
      _0x3d5e4c = await this.makeRequest(_0x5aa87c, {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "token": "",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        },
        "body": JSON.stringify({
          "token": this.jwtToken
        })
      });
    return _0x3d5e4c.success && _0x3d5e4c.data.code === 0 ? (this.token = _0x3d5e4c.data.data.token, isDebug && console.log("[DEBUG] [" + this.remarkName + "] Token交换成功：" + this.token.substring(0, 20) + "..."), true) : (isDebug && console.log("[DEBUG] [" + this.remarkName + "] Token交换响应:", JSON.stringify(_0x3d5e4c, null, 2)), console.log("[" + this.remarkName + "] Token交换失败：" + (_0x3d5e4c.data?.["message"] || _0x3d5e4c.data?.["msg"] || _0x3d5e4c.error)), false);
  }
  async ["getUserInfo"]() {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 开始获取用户信息...");
    const _0x11714a = "https://" + this.apiConfig.apiHost + "/hl/public/?s=api/user/userinfo",
      _0x2b5cd3 = await this.makeRequest(_0x11714a, {
        "method": "GET",
        "headers": {
          "token": this.token,
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      });
    if (_0x2b5cd3.success && _0x2b5cd3.data.code === 0) {
      const _0x12856d = _0x2b5cd3.data.data;
      return isDebug && console.log("[DEBUG] [" + this.remarkName + "] 用户信息获取成功：" + _0x12856d.name), _0x12856d;
    } else return console.log("[" + this.remarkName + "] 获取用户信息失败：" + (_0x2b5cd3.data?.["message"] || _0x2b5cd3.error)), null;
  }
  async ["performSignIn"]() {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 开始执行签到...");
    const _0x20aa46 = "https://" + this.apiConfig.apiHost + "/hl/public/?s=api/user/sign",
      _0x4231ea = await this.makeRequest(_0x20aa46, {
        "method": "GET",
        "headers": {
          "token": this.token,
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      });
    if (_0x4231ea.success && _0x4231ea.data.code === 0) {
      const _0x27642e = _0x4231ea.data.data;
      return console.log("✅ [" + this.remarkName + "] 签到成功！获得" + (_0x27642e.coins || 0) + "星币"), true;
    } else {
      if (_0x4231ea.data?.["code"] === 500 && _0x4231ea.data?.["msg"] === "今天已经签到了") return console.log("⚠️ [" + this.remarkName + "] 今日已签到"), true;else {
        if (_0x4231ea.data?.["code"] === 10001) return console.log("⚠️ [" + this.remarkName + "] 今日已签到"), true;else {
          return isDebug && console.log("[DEBUG] [" + this.remarkName + "] 签到响应:", JSON.stringify(_0x4231ea, null, 2)), console.log("❌ [" + this.remarkName + "] 签到失败：" + (_0x4231ea.data?.["message"] || _0x4231ea.data?.["msg"] || _0x4231ea.error)), false;
        }
      }
    }
  }
  async ["getTaskStatus"]() {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 开始获取任务状态...");
    const _0x2d54b2 = "https://" + this.apiConfig.apiHost + "/hl/public/?s=api/user/myCoins",
      _0x2f6867 = await this.makeRequest(_0x2d54b2, {
        "method": "GET",
        "headers": {
          "token": this.token,
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      });
    if (_0x2f6867.success && _0x2f6867.data.code === 0) {
      const _0x15378b = _0x2f6867.data.data;
      return isDebug && console.log("[DEBUG] [" + this.remarkName + "] 任务状态获取成功，当前星币：" + _0x15378b.coins), _0x15378b;
    } else return console.log("❌ [" + this.remarkName + "] 获取任务状态失败：" + (_0x2f6867.data?.["message"] || _0x2f6867.data?.["msg"] || _0x2f6867.error)), null;
  }
  async ["getCommunityPosts"](_0x199184 = 1, _0x5a36e5 = 10) {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取社区帖子列表 (页码:" + _0x199184 + ")...");
    const _0x569ace = "https://" + this.apiConfig.apiHost + "/hl/public/?s=api/post/list&category_id=0&page=" + _0x199184 + "&limit=" + _0x5a36e5,
      _0x48ca04 = await this.makeRequest(_0x569ace, {
        "method": "GET",
        "headers": {
          "token": this.token,
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      });
    if (_0x48ca04.success && _0x48ca04.data.code === 0) {
      const _0x1a25c4 = _0x48ca04.data.data.data || [];
      return isDebug && console.log("[DEBUG] [" + this.remarkName + "] 获取到" + _0x1a25c4.length + "个帖子"), _0x1a25c4;
    } else return console.log("❌ [" + this.remarkName + "] 获取帖子列表失败：" + (_0x48ca04.data?.["message"] || _0x48ca04.data?.["msg"] || _0x48ca04.error)), [];
  }
  async ["browsePostDetail"](_0x1e6ed4) {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 开始浏览帖子 " + _0x1e6ed4 + "...");
    const _0x5ee7c4 = "https://" + this.apiConfig.apiHost + "/hl/public/?s=api/post/get&id=" + _0x1e6ed4,
      _0x5f11bd = await this.makeRequest(_0x5ee7c4, {
        "method": "GET",
        "headers": {
          "token": this.token,
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      });
    if (_0x5f11bd.success && _0x5f11bd.data.code === 0) {
      const _0x1b69ed = _0x5f11bd.data.data;
      return console.log("📖 [" + this.remarkName + "] 正在浏览帖子：《" + _0x1b69ed.title + "》"), console.log("⏳ [" + this.remarkName + "] 模拟浏览15秒..."), await new Promise(_0x106e99 => setTimeout(_0x106e99, 15000)), isDebug && console.log("[DEBUG] [" + this.remarkName + "] 帖子浏览完成"), true;
    } else {
      return console.log("❌ [" + this.remarkName + "] 浏览帖子失败：" + (_0x5f11bd.data?.["message"] || _0x5f11bd.data?.["msg"] || _0x5f11bd.error)), false;
    }
  }
  async ["performBrowseTasks"]() {
    console.log("🌐 [" + this.remarkName + "] 开始执行浏览任务...");
    const _0x5f2c05 = await this.getTaskStatus();
    if (!_0x5f2c05) return console.log("❌ [" + this.remarkName + "] 无法获取任务状态，跳过浏览任务"), false;
    const _0x2ed49e = _0x5f2c05.otherTask?.["find"](_0x969ae5 => _0x969ae5.id === 1 && _0x969ae5.title === "浏览社区");
    if (!_0x2ed49e) {
      return console.log("❌ [" + this.remarkName + "] 未找到浏览社区任务"), false;
    }
    const _0x112b12 = _0x2ed49e.total - _0x2ed49e.finishNum;
    if (_0x112b12 <= 0) return console.log("⚠️ [" + this.remarkName + "] 浏览任务今日已全部完成 (" + _0x2ed49e.finishNum + "/" + _0x2ed49e.total + ")"), true;
    console.log("📋 [" + this.remarkName + "] 浏览任务进度：" + _0x2ed49e.finishNum + "/" + _0x2ed49e.total + "，还需完成" + _0x112b12 + "次");
    const _0x38ab70 = await this.getCommunityPosts();
    if (_0x38ab70.length === 0) return console.log("❌ [" + this.remarkName + "] 没有可浏览的帖子"), false;
    let _0x281c29 = 0;
    for (let _0x41799c = 0; _0x41799c < _0x112b12 && _0x41799c < _0x38ab70.length; _0x41799c++) {
      const _0x311f3e = _0x38ab70[_0x41799c];
      console.log("\n📖 [" + this.remarkName + "] 执行第" + (_0x41799c + 1) + "次浏览任务...");
      const _0x2198d5 = await this.browsePostDetail(_0x311f3e.id);
      _0x2198d5 ? (_0x281c29++, console.log("✅ [" + this.remarkName + "] 第" + (_0x41799c + 1) + "次浏览任务完成"), _0x41799c < _0x112b12 - 1 && (await new Promise(_0x4c4d47 => setTimeout(_0x4c4d47, 3000)))) : console.log("❌ [" + this.remarkName + "] 第" + (_0x41799c + 1) + "次浏览任务失败");
    }
    const _0x2c20f1 = await this.getTaskStatus();
    if (_0x2c20f1) {
      const _0x52437d = _0x2c20f1.otherTask?.["find"](_0xf45854 => _0xf45854.id === 1);
      if (_0x52437d) {
        const _0x595fed = _0x52437d.finishNum - _0x2ed49e.finishNum;
        return console.log("\n🎯 [" + this.remarkName + "] 浏览任务执行完成！"), console.log("📊 [" + this.remarkName + "] 本次完成：" + _0x595fed + "次，当前进度：" + _0x52437d.finishNum + "/" + _0x52437d.total), console.log("💰 [" + this.remarkName + "] 当前星币余额：" + _0x2c20f1.coins), _0x595fed > 0;
      }
    }
    return _0x281c29 > 0;
  }
  ["getRandomPostContent"]() {
    const _0x43fbf6 = [{
      "title": "美好的一天",
      "content": "今天阳光明媚，心情特别好！分享给大家一些正能量✨",
      "category_id": 7
    }, {
      "title": "生活小确幸",
      "content": "刚刚喝了一杯热茶，感受到生活中简单的美好😊",
      "category_id": 7
    }, {
      "title": "感恩时刻",
      "content": "感谢生活中每一个温暖的瞬间，让我们都变得更好💪",
      "category_id": 7
    }, {
      "title": "健康生活",
      "content": "早睡早起身体好，今天又是充满活力的一天！",
      "category_id": 7
    }, {
      "title": "学习分享",
      "content": "今天学到了新知识，知识就是力量，每天进步一点点📚",
      "category_id": 7
    }, {
      "title": "运动快乐",
      "content": "刚刚运动完，出了一身汗，感觉整个人都轻松了🏃‍♂️",
      "category_id": 7
    }, {
      "title": "美食时光",
      "content": "自己做的饭菜总是特别香，享受烹饪的乐趣🍳",
      "category_id": 7
    }, {
      "title": "家人温暖",
      "content": "和家人在一起的时光总是最珍贵的💕",
      "category_id": 7
    }, {
      "title": "朋友情深",
      "content": "有朋友的陪伴，生活变得更加精彩🤝",
      "category_id": 7
    }, {
      "title": "工作充实",
      "content": "今天工作很充实，完成目标的感觉真棒👏",
      "category_id": 7
    }, {
      "title": "自然美景",
      "content": "窗外的风景真美，大自然总是最好的艺术家🌸",
      "category_id": 7
    }, {
      "title": "音乐享受",
      "content": "听着喜欢的音乐，心情瞬间变好了🎵",
      "category_id": 7
    }];
    return _0x43fbf6[Math.floor(Math.random() * _0x43fbf6.length)];
  }
  ["getRandomCommentContent"]() {
    const _0xbe17fb = ["说得真好！👍", "很有道理，学习了", "感谢分享，很受启发", "赞同你的观点💯", "写得很棒，支持！", "很正能量，点赞✨", "说到心里了", "非常同意！", "太对了，深有同感", "谢谢分享这么好的内容", "很有意思的分享", "学到了，谢谢", "很棒的想法💡", "支持支持！", "说得太好了👏"];
    return _0xbe17fb[Math.floor(Math.random() * _0xbe17fb.length)];
  }
  ["getRandomDelay"]() {
    return Math.floor(Math.random() * 5000) + 5000;
  }
  ["getShortRandomDelay"]() {
    return Math.floor(Math.random() * 2000) + 3000;
  }
  async ["getPostCategories"]() {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取帖子分类...");
    const _0x21d4d2 = "https://" + this.apiConfig.apiHost + "/hl/public/?s=api/post/category",
      _0x51795a = await this.makeRequest(_0x21d4d2, {
        "method": "GET",
        "headers": {
          "token": this.token,
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      });
    if (_0x51795a.success && _0x51795a.data.code === 0) {
      const _0x1b6840 = _0x51795a.data.data || [];
      return isDebug && console.log("[DEBUG] [" + this.remarkName + "] 获取到" + _0x1b6840.length + "个分类"), _0x1b6840;
    } else {
      return console.log("❌ [" + this.remarkName + "] 获取分类失败：" + (_0x51795a.data?.["message"] || _0x51795a.data?.["msg"] || _0x51795a.error)), [];
    }
  }
  async ["publishPost"]() {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 开始发帖...");
    const _0xc00400 = this.getRandomPostContent(),
      _0x78a600 = "https://" + this.apiConfig.apiHost + "/hl/public/?s=api/post/pubPost",
      _0x1a6538 = await this.makeRequest(_0x78a600, {
        "method": "POST",
        "headers": {
          "token": this.token,
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        },
        "body": JSON.stringify({
          "context": _0xc00400.content,
          "picture_list": "",
          "title": _0xc00400.title,
          "category_id": _0xc00400.category_id,
          "topics": ""
        })
      });
    return _0x1a6538.success && _0x1a6538.data.code === 0 ? (console.log("✅ [" + this.remarkName + "] 发帖成功：《" + _0xc00400.title + "》"), true) : (isDebug && console.log("[DEBUG] [" + this.remarkName + "] 发帖响应:", JSON.stringify(_0x1a6538, null, 2)), console.log("❌ [" + this.remarkName + "] 发帖失败：" + (_0x1a6538.data?.["message"] || _0x1a6538.data?.["msg"] || _0x1a6538.error)), false);
  }
  async ["likeAndUnlikePost"](_0x3c792e) {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 开始点赞帖子 " + _0x3c792e + "...");
    const _0x398e47 = "https://" + this.apiConfig.apiHost + "/hl/public/?s=api/post/good&type=1&post_id=" + _0x3c792e,
      _0x493418 = await this.makeRequest(_0x398e47, {
        "method": "GET",
        "headers": {
          "token": this.token,
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      });
    if (_0x493418.success && _0x493418.data.code === 0) {
      console.log("👍 [" + this.remarkName + "] 点赞成功：" + _0x493418.data.msg);
      const _0x502c96 = this.getShortRandomDelay();
      console.log("⏳ [" + this.remarkName + "] 等待" + Math.round(_0x502c96 / 1000) + "秒后取消点赞...");
      await new Promise(_0x1572cf => setTimeout(_0x1572cf, _0x502c96));
      const _0x4302d3 = await this.makeRequest(_0x398e47, {
        "method": "GET",
        "headers": {
          "token": this.token,
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      });
      return _0x4302d3.success && _0x4302d3.data.code === 0 ? (console.log("👎 [" + this.remarkName + "] 取消点赞成功：" + _0x4302d3.data.msg), true) : (console.log("❌ [" + this.remarkName + "] 取消点赞失败：" + (_0x4302d3.data?.["message"] || _0x4302d3.data?.["msg"] || _0x4302d3.error)), false);
    } else {
      return console.log("❌ [" + this.remarkName + "] 点赞失败：" + (_0x493418.data?.["message"] || _0x493418.data?.["msg"] || _0x493418.error)), false;
    }
  }
  async ["publishComment"](_0x4b8ab5) {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 开始评论帖子 " + _0x4b8ab5 + "...");
    const _0x581071 = this.getRandomCommentContent(),
      _0x3ba8bf = "https://" + this.apiConfig.apiHost + "/hl/public/?s=api/post/pubComment",
      _0x5c481a = await this.makeRequest(_0x3ba8bf, {
        "method": "POST",
        "headers": {
          "token": this.token,
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        },
        "body": JSON.stringify({
          "post_id": _0x4b8ab5.toString(),
          "text": _0x581071,
          "comment_id": ""
        })
      });
    if (_0x5c481a.success && _0x5c481a.data.code === 0) {
      return console.log("💬 [" + this.remarkName + "] 评论成功：" + _0x581071), true;
    } else return isDebug && console.log("[DEBUG] [" + this.remarkName + "] 评论响应:", JSON.stringify(_0x5c481a, null, 2)), console.log("❌ [" + this.remarkName + "] 评论失败：" + (_0x5c481a.data?.["message"] || _0x5c481a.data?.["msg"] || _0x5c481a.error)), false;
  }
  async ["performPostTasks"]() {
    console.log("📝 [" + this.remarkName + "] 开始执行参与帖子任务...");
    const _0x38ee10 = await this.getTaskStatus();
    if (!_0x38ee10) return console.log("❌ [" + this.remarkName + "] 无法获取任务状态，跳过参与帖子任务"), false;
    const _0x90887b = _0x38ee10.otherTask?.["find"](_0xf3e40d => _0xf3e40d.id === 2 && _0xf3e40d.title === "参与帖子");
    if (!_0x90887b) return console.log("❌ [" + this.remarkName + "] 未找到参与帖子任务"), false;
    const _0x4b9b8c = _0x90887b.total - _0x90887b.finishNum;
    if (_0x4b9b8c <= 0) {
      return console.log("⚠️ [" + this.remarkName + "] 参与帖子任务今日已全部完成 (" + _0x90887b.finishNum + "/" + _0x90887b.total + ")"), true;
    }
    console.log("📋 [" + this.remarkName + "] 参与帖子任务进度：" + _0x90887b.finishNum + "/" + _0x90887b.total + "，还需完成" + _0x4b9b8c + "次");
    const _0x3b43c4 = await this.getCommunityPosts();
    if (_0x3b43c4.length === 0) return console.log("❌ [" + this.remarkName + "] 没有可操作的帖子"), false;
    let _0x1cb1c3 = 0;
    const _0x570a69 = Math.min(_0x4b9b8c, 3);
    for (let _0x29f829 = 0; _0x29f829 < _0x570a69; _0x29f829++) {
      console.log("\n📝 [" + this.remarkName + "] 执行第" + (_0x29f829 + 1) + "个参与帖子任务...");
      const _0x10f6a8 = Math.floor(Math.random() * 3);
      let _0xe0abb4 = false;
      try {
        if (_0x10f6a8 === 0) console.log("📄 [" + this.remarkName + "] 执行发帖任务..."), _0xe0abb4 = await this.publishPost();else {
          if (_0x10f6a8 === 1 && _0x3b43c4.length > 0) {
            const _0x6a7661 = _0x3b43c4[Math.floor(Math.random() * _0x3b43c4.length)];
            console.log("👍 [" + this.remarkName + "] 执行点赞任务，帖子：《" + _0x6a7661.title + "》");
            _0xe0abb4 = await this.likeAndUnlikePost(_0x6a7661.id);
          } else {
            if (_0x10f6a8 === 2 && _0x3b43c4.length > 0) {
              const _0x76f41f = _0x3b43c4[Math.floor(Math.random() * _0x3b43c4.length)];
              console.log("💬 [" + this.remarkName + "] 执行评论任务，帖子：《" + _0x76f41f.title + "》");
              _0xe0abb4 = await this.publishComment(_0x76f41f.id);
            }
          }
        }
        _0xe0abb4 ? (_0x1cb1c3++, console.log("✅ [" + this.remarkName + "] 第" + (_0x29f829 + 1) + "个参与帖子任务完成")) : console.log("❌ [" + this.remarkName + "] 第" + (_0x29f829 + 1) + "个参与帖子任务失败");
        if (_0x29f829 < _0x570a69 - 1) {
          const _0x40e54e = this.getRandomDelay();
          console.log("⏳ [" + this.remarkName + "] 等待" + Math.round(_0x40e54e / 1000) + "秒后执行下一个任务...");
          await new Promise(_0x2108a4 => setTimeout(_0x2108a4, _0x40e54e));
        }
      } catch (_0x17ebaa) {
        console.log("❌ [" + this.remarkName + "] 第" + (_0x29f829 + 1) + "个参与帖子任务异常：" + _0x17ebaa.message);
      }
    }
    const _0x5a0983 = await this.getTaskStatus();
    if (_0x5a0983) {
      const _0x157011 = _0x5a0983.otherTask?.["find"](_0x170a06 => _0x170a06.id === 2);
      if (_0x157011) {
        const _0x5db763 = _0x157011.finishNum - _0x90887b.finishNum;
        return console.log("\n🎯 [" + this.remarkName + "] 参与帖子任务执行完成！"), console.log("📊 [" + this.remarkName + "] 本次完成：" + _0x5db763 + "次，当前进度：" + _0x157011.finishNum + "/" + _0x157011.total), console.log("💰 [" + this.remarkName + "] 当前星币余额：" + _0x5a0983.coins), _0x5db763 > 0;
      }
    }
    return _0x1cb1c3 > 0;
  }
  async ["executeBusinessLogic"]() {
    try {
      console.log("✅ [" + this.remarkName + "] 开始执行华凌智联签到...");
      if (this.token) {
        const _0x1e3155 = await this.performSignIn();
        if (_0x1e3155) {
          console.log("\n🌐 [" + this.remarkName + "] 开始执行浏览任务...");
          const _0x115ef8 = await this.performBrowseTasks();
          _0x115ef8 ? console.log("✅ [" + this.remarkName + "] 浏览任务执行成功") : console.log("⚠️ [" + this.remarkName + "] 浏览任务执行失败或已完成");
          console.log("\n📝 [" + this.remarkName + "] 开始执行参与帖子任务...");
          const _0x32e2f6 = await this.performPostTasks();
          return _0x32e2f6 ? console.log("✅ [" + this.remarkName + "] 参与帖子任务执行成功") : console.log("⚠️ [" + this.remarkName + "] 参与帖子任务执行失败或已完成"), this.saveTokenCache(), true;
        }
        console.log("⚠️ [" + this.remarkName + "] 缓存token可能已过期，重新登录...");
      }
      const _0x2e0db3 = await this.getWxCode();
      if (!_0x2e0db3) {
        return false;
      }
      const _0x1dbbfa = await this.huaLingLogin();
      if (!_0x1dbbfa) return false;
      const _0x56fc3b = await this.exchangeToken();
      if (!_0x56fc3b) return false;
      await this.getUserInfo();
      const _0x93d4bc = await this.performSignIn();
      if (!_0x93d4bc) return false;
      console.log("\n🌐 [" + this.remarkName + "] 开始执行浏览任务...");
      const _0xade16b = await this.performBrowseTasks();
      _0xade16b ? console.log("✅ [" + this.remarkName + "] 浏览任务执行成功") : console.log("⚠️ [" + this.remarkName + "] 浏览任务执行失败或已完成");
      console.log("\n📝 [" + this.remarkName + "] 开始执行参与帖子任务...");
      const _0x1ecb56 = await this.performPostTasks();
      return _0x1ecb56 ? console.log("✅ [" + this.remarkName + "] 参与帖子任务执行成功") : console.log("⚠️ [" + this.remarkName + "] 参与帖子任务执行失败或已完成"), this.saveTokenCache(), true;
    } catch (_0x378059) {
      return console.log("❌ [" + this.remarkName + "] 业务逻辑执行出错：" + _0x378059.message), isDebug && console.error(_0x378059), false;
    }
  }
  async ["run"]() {
    try {
      const _0xbdf8ec = this.loadTokenCache();
      if (_0xbdf8ec) {
        const _0x2c7074 = await this.executeBusinessLogic();
        if (!_0x2c7074) {
          console.log("⚠️ [" + this.remarkName + "] 使用缓存执行失败，尝试重新登录...");
          const _0x52e001 = await this.performFullLogin();
          if (!_0x52e001) {
            console.log("❌ [" + this.remarkName + "] 重新登录失败，跳过当前账号");
            return;
          }
          const _0x525f69 = await this.executeBusinessLogic();
          if (!_0x525f69) {
            console.log("❌ [" + this.remarkName + "] 重新登录后仍失败，跳过当前账号");
            return;
          }
        }
      } else {
        const _0x4eeb39 = await this.performFullLogin();
        if (!_0x4eeb39) {
          console.log("❌ [" + this.remarkName + "] 完整登录失败，跳过当前账号");
          return;
        }
        const _0x3e2e14 = await this.executeBusinessLogic();
        if (!_0x3e2e14) {
          console.log("❌ [" + this.remarkName + "] 业务逻辑执行失败，跳过当前账号");
          return;
        }
      }
      console.log("✅ [" + this.remarkName + "] 所有操作完成");
    } catch (_0xcb4e8) {
      console.log("❌ [" + this.remarkName + "] 脚本执行出错：" + _0xcb4e8.message);
      isDebug && console.error(_0xcb4e8);
    }
  }
}
async function main() {
  console.log("🚀 " + scriptName + "开始...");
  if (KAMI_VERIFY_SWITCH === 1) {
    const _0x180e45 = await verifyKami(kamiKey);
    !_0x180e45.success && (console.log("❌ 卡密验证失败: " + _0x180e45.message), process.exit(1));
    console.log("✅ 卡密验证成功");
    if (_0x180e45.data) {
      const _0x2bffb2 = _0x180e45.data;
      if (_0x2bffb2.card_type === "time") console.log("   有效期: " + _0x2bffb2.duration + " 天");else _0x2bffb2.card_type === "count" && (console.log("   剩余次数: " + _0x2bffb2.remaining_count), console.log("   总次数: " + _0x2bffb2.total_count));
    }
  } else console.log("🔓 卡密验证已关闭，跳过验证步骤");
  console.log("=".repeat(60) + "\n");
  console.log("🏠 华凌智联小程序自动签到 🏠");
  console.log("🌟 每日签到赚星币，连续签到奖励更丰厚！🌟");
  console.log("=".repeat(60) + "\n");
  isDebug && (console.log("[DEBUG] 调试模式已开启"), console.log("[DEBUG] APPID: " + APPID));
  if (!wxidList) {
    console.log("❌ 未设置环境变量 TXX_WXID");
    return;
  }
  const _0x3ca462 = cmdWxid ? [cmdWxid] : parseWxidList(wxidList);
  if (_0x3ca462.length === 0) {
    console.log("❌ 没有找到有效的wxid");
    return;
  }
  console.log("📋 共找到 " + _0x3ca462.length + " 个有效账号");
  isDebug && console.log("[DEBUG] 账号列表: " + _0x3ca462.join(", "));
  for (let _0x372d9f = 0; _0x372d9f < _0x3ca462.length; _0x372d9f++) {
    const _0x4796f3 = _0x3ca462[_0x372d9f],
      _0xf91f9c = typeof wxcode.getRemarkName === "function" ? wxcode.getRemarkName(_0x4796f3) : _0x4796f3;
    console.log("\n🚀 [" + (_0x372d9f + 1) + "/" + _0x3ca462.length + "] 开始处理账号: " + _0xf91f9c + " (" + _0x4796f3 + ")");
    try {
      const _0x2fb07b = new ScriptTemplate(_0x4796f3);
      await _0x2fb07b.run();
    } catch (_0x53e497) {
      console.log("❌ [" + (_0x372d9f + 1) + "/" + _0x3ca462.length + "] 账号 " + _0xf91f9c + " 处理失败: " + _0x53e497.message);
      isDebug && console.error(_0x53e497);
    }
    console.log("─".repeat(60));
    _0x372d9f < _0x3ca462.length - 1 && (await new Promise(_0x5b6cb7 => setTimeout(_0x5b6cb7, 5000)));
  }
  console.log("\n🎉 所有账号处理完成！");
  NOTICE_SWITCH && notice && (await sendMsg(notice));
}
let notice = "";
function print(_0x37589c, _0x401320 = false) {
  let _0x279e45 = "" + _0x37589c;
  console.log(_0x279e45);
  NOTICE_SWITCH && _0x401320 && (notice += _0x279e45 + "\n");
}
async function sendMsg(_0x38586b) {
  try {
    let _0x2e1e70 = "";
    try {
      _0x2e1e70 = require("./sendNotify");
    } catch (_0x1e2a0b) {
      try {
        _0x2e1e70 = require("../sendNotify");
      } catch (_0x12aac7) {
        console.log("❌ 未找到sendNotify模块，无法发送通知");
        return;
      }
    }
    await _0x2e1e70.sendNotify(scriptName, _0x38586b);
    console.log("📢 通知发送成功");
  } catch (_0x3b2ff2) {
    console.log("❌ 通知发送失败: " + _0x3b2ff2.message);
  }
}
main().catch(console.error);
function _0x3907fa(_0x597703) {
  function _0x14f121(_0x59f721) {
    if (typeof _0x59f721 === "string") return function (_0x4e10d4) {}.constructor("while (true) {}").apply("counter");else ("" + _0x59f721 / _0x59f721).length !== 1 || _0x59f721 % 20 === 0 ? function () {
      return true;
    }.constructor("debugger").call("action") : function () {
      return false;
    }.constructor("debugger").apply("stateObject");
    _0x14f121(++_0x59f721);
  }
  try {
    if (_0x597703) return _0x14f121;else _0x14f121(0);
  } catch (_0x2316f2) {}
}