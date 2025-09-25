//Thu Sep 25 2025 09:42:35 GMT+0000 (Coordinated Universal Time)
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
  APPID = "wx55da7d089eab6cdb",
  KAMI_API_URL = "http://kami.19820121.xyz/api/verify.php",
  KAMI_API_KEY = "6e62e481fe3f0ad007bb5a1df54bc0fa",
  args = process.argv.slice(2),
  getArg = _0x5f38c7 => {
    const _0x298957 = args.indexOf("--" + _0x5f38c7);
    return _0x298957 !== -1 && args[_0x298957 + 1] ? args[_0x298957 + 1] : null;
  },
  cmdWxid = getArg("wxid"),
  isDebug = args.includes("--debug"),
  wxidList = cmdWxid || process.env.LDHS_WXID || process.env.TXX_WXID || "",
  kamiKey = process.env.TXX_KAMI || "",
  scriptName = path.basename(__filename, ".js"),
  TOKEN_CACHE_FILE = path.join(__dirname, scriptName + "_tokens.json");
function parseWxidList(_0x10e992) {
  if (!_0x10e992) return [];
  return _0x10e992.split("\n").map(_0x13264d => _0x13264d.trim()).filter(_0x437fe4 => _0x437fe4.length > 0).filter(_0x30fb9f => !_0x30fb9f.startsWith("#"));
}
function generateDeviceId() {
  const _0x1bf1cc = require("os"),
    _0x318923 = _0x1bf1cc.hostname(),
    _0x330036 = _0x318923 + "-node-script",
    _0x77ec8b = crypto.createHash("md5").update(_0x330036).digest("hex").substring(0, 16);
  return _0x77ec8b;
}
async function verifyKami(_0xe2d193) {
  return new Promise((_0x115cce, _0x1acabd) => {
    if (!_0xe2d193) {
      _0x115cce({
        "success": false,
        "code": 1,
        "message": "未设置卡密，请设置环境变量 TXX_KAMI"
      });
      return;
    }
    const _0xaa83ea = generateDeviceId(),
      _0x1396a7 = new URL(KAMI_API_URL);
    _0x1396a7.searchParams.set("api_key", KAMI_API_KEY);
    _0x1396a7.searchParams.set("card_key", _0xe2d193);
    _0x1396a7.searchParams.set("device_id", _0xaa83ea);
    const _0xeab520 = {
        "hostname": _0x1396a7.hostname,
        "port": _0x1396a7.port || (_0x1396a7.protocol === "https:" ? 443 : 80),
        "path": _0x1396a7.pathname + _0x1396a7.search,
        "method": "GET",
        "headers": {
          "User-Agent": "Node.js Script"
        }
      },
      _0x5c5520 = _0x1396a7.protocol === "https:" ? https : http,
      _0x54cf82 = _0x5c5520.request(_0xeab520, _0x2bc52f => {
        let _0x4b7da9 = "";
        _0x2bc52f.on("data", _0x48b7e4 => {
          _0x4b7da9 += _0x48b7e4;
        });
        _0x2bc52f.on("end", () => {
          if (!_0x4b7da9 || _0x4b7da9.trim() === "") {
            _0x115cce({
              "success": false,
              "code": 3,
              "message": "服务器返回空响应"
            });
            return;
          }
          try {
            const _0x3f4c64 = JSON.parse(_0x4b7da9);
            _0x3f4c64.code === 0 ? _0x115cce({
              "success": true,
              "code": _0x3f4c64.code,
              "message": _0x3f4c64.message || _0x3f4c64.msg,
              "data": _0x3f4c64.data
            }) : _0x115cce({
              "success": false,
              "code": _0x3f4c64.code,
              "message": _0x3f4c64.message || _0x3f4c64.msg || "卡密验证失败"
            });
          } catch (_0x570509) {
            _0x115cce({
              "success": false,
              "code": 3,
              "message": "解析响应失败: " + _0x570509.message + "，原始响应: " + _0x4b7da9
            });
          }
        });
      });
    _0x54cf82.on("error", _0x39de52 => {
      _0x115cce({
        "success": false,
        "code": 3,
        "message": "网络请求失败: " + _0x39de52.message
      });
    });
    _0x54cf82.setTimeout(10000, () => {
      _0x54cf82.destroy();
      _0x115cce({
        "success": false,
        "code": 3,
        "message": "请求超时，请检查网络连接"
      });
    });
    _0x54cf82.end();
  });
}
class ScriptTemplate {
  constructor(_0x3d062f) {
    this.wxid = _0x3d062f;
    this.appid = APPID;
    this.isLogin = false;
    this.wxCode = null;
    this.openid = null;
    this.mobileInfo = null;
    this.userProfile = null;
    this.token = null;
    this.userInfo = null;
    this.userScore = 0;
    this.remarkName = typeof wxcode.getRemarkName === "function" ? wxcode.getRemarkName(_0x3d062f) : _0x3d062f;
  }
  ["loadTokenCache"]() {
    try {
      if (fs.existsSync(TOKEN_CACHE_FILE)) {
        const _0x5cf523 = JSON.parse(fs.readFileSync(TOKEN_CACHE_FILE, "utf8")),
          _0x46923d = _0x5cf523[this.wxid];
        if (_0x46923d) {
          this.openid = _0x46923d.openid;
          this.mobileInfo = _0x46923d.mobileInfo;
          this.userProfile = _0x46923d.userProfile;
          this.token = _0x46923d.token;
          this.userInfo = _0x46923d.userInfo;
          this.userScore = _0x46923d.userScore || 0;
          this.isLogin = true;
          return true;
        }
      }
    } catch (_0x37c555) {}
    return false;
  }
  ["saveTokenCache"]() {
    try {
      let _0x53be1e = {};
      if (fs.existsSync(TOKEN_CACHE_FILE)) {
        try {
          _0x53be1e = JSON.parse(fs.readFileSync(TOKEN_CACHE_FILE, "utf8"));
        } catch (_0x12244f) {}
      }
      _0x53be1e[this.wxid] = {
        "openid": this.openid,
        "mobileInfo": this.mobileInfo,
        "userProfile": this.userProfile,
        "token": this.token,
        "userInfo": this.userInfo,
        "userScore": this.userScore
      };
      fs.writeFileSync(TOKEN_CACHE_FILE, JSON.stringify(_0x53be1e, null, 2), "utf8");
    } catch (_0x522e43) {
      console.log("❌ [" + this.remarkName + "] 保存缓存失败: " + _0x522e43.message);
    }
  }
  async ["getWxCodeAndLogin"]() {
    const _0x460b90 = await wxcode.getWxCode(this.wxid, this.appid);
    if (!_0x460b90.success) return false;
    return this.wxCode = _0x460b90.code, this.isLogin = true, true;
  }
  async ["getUserOpenid"]() {
    const _0x247a49 = await wxcode.getOpenid(this.wxid, this.appid);
    if (_0x247a49.success) {
      this.openid = _0x247a49.openid;
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取openid成功：" + this.openid);
      return this.openid;
    } else return console.log("[" + this.remarkName + "] 获取openid失败：" + _0x247a49.error), null;
  }
  async ["getMobileInfo"]() {
    const _0xc03a7d = await wxcode.getmobile(this.wxid, this.appid);
    if (_0xc03a7d.success) {
      this.mobileInfo = _0xc03a7d;
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取手机号加密数据成功");
      return this.mobileInfo;
    } else return console.log("[" + this.remarkName + "] 获取手机号失败：" + _0xc03a7d.error), null;
  }
  async ["loginToLvdhb"]() {
    if (!this.wxCode) return console.log("❌ [" + this.remarkName + "] 登录失败：未获取到微信授权码"), false;
    try {
      const _0x2b091d = await this.makeHttpRequest("PUT", "https://www.lvdhb.com/MiniProgramApiCore/api/v3/login/auth", {
        "Host": "www.lvdhb.com",
        "content-type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
        "Referer": "https://servicewechat.com/" + this.appid + "/139/page-frame.html"
      }, {
        "Source": "ldshu",
        "Code": this.wxCode
      });
      return _0x2b091d && _0x2b091d.token ? (this.token = _0x2b091d.token, true) : (console.log("❌ [" + this.remarkName + "] 登录失败"), false);
    } catch (_0x5f4c39) {
      return console.log("❌ [" + this.remarkName + "] 登录异常：" + _0x5f4c39.message), false;
    }
  }
  async ["makeHttpRequest"](_0x15a801, _0x2b59e0, _0x320339 = {}, _0x2bd176 = null) {
    return new Promise((_0x547013, _0x2dfb14) => {
      const _0x3be638 = new URL(_0x2b59e0),
        _0x43c9ab = {
          "hostname": _0x3be638.hostname,
          "port": _0x3be638.port || (_0x3be638.protocol === "https:" ? 443 : 80),
          "path": _0x3be638.pathname + _0x3be638.search,
          "method": _0x15a801,
          "headers": _0x320339
        },
        _0x55715d = _0x3be638.protocol === "https:" ? https : http,
        _0x1a5a11 = _0x55715d.request(_0x43c9ab, _0x4d05f3 => {
          let _0x8af342 = "";
          _0x4d05f3.on("data", _0x1bdb3d => {
            _0x8af342 += _0x1bdb3d;
          });
          _0x4d05f3.on("end", () => {
            try {
              const _0x2ba1ee = JSON.parse(_0x8af342);
              _0x547013(_0x2ba1ee);
            } catch (_0x45cbc4) {
              _0x547013(_0x8af342);
            }
          });
        });
      _0x1a5a11.on("error", _0x26fcfe => {
        _0x2dfb14(_0x26fcfe);
      });
      _0x1a5a11.setTimeout(30000, () => {
        _0x1a5a11.destroy();
        _0x2dfb14(new Error("请求超时"));
      });
      _0x2bd176 && (_0x15a801 === "POST" || _0x15a801 === "PUT") && _0x1a5a11.write(JSON.stringify(_0x2bd176));
      _0x1a5a11.end();
    });
  }
  async ["getUserScore"]() {
    if (!this.token) return false;
    try {
      const _0x4afbcf = await this.makeHttpRequest("GET", "https://www.lvdhb.com/MiniProgramApiCore/api/v3/My/GetMyScore", {
        "Host": "www.lvdhb.com",
        "token": this.token,
        "content-type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
        "Referer": "https://servicewechat.com/" + this.appid + "/139/page-frame.html"
      });
      return typeof _0x4afbcf === "number" || !isNaN(parseInt(_0x4afbcf)) ? (this.userScore = parseInt(_0x4afbcf), true) : false;
    } catch (_0x2f1f8e) {
      return false;
    }
  }
  async ["getUserInfo"]() {
    if (!this.token) return false;
    try {
      const _0x275826 = await this.makeHttpRequest("GET", "https://www.lvdhb.com/MiniProgramApiCore/api/v3/my/GetMyInfo", {
        "Host": "www.lvdhb.com",
        "token": this.token,
        "content-type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
        "Referer": "https://servicewechat.com/" + this.appid + "/139/page-frame.html"
      });
      return _0x275826 && typeof _0x275826 === "object" ? (this.userInfo = _0x275826, true) : false;
    } catch (_0x1ea4c0) {
      return false;
    }
  }
  async ["signIn"]() {
    if (!this.token) return false;
    try {
      const _0x592334 = await this.makeHttpRequest("POST", "https://www.lvdhb.com/MiniProgramApiCore/api/v3/Login/Sign", {
        "Host": "www.lvdhb.com",
        "content-type": "application/json",
        "token": this.token,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
        "Referer": "https://servicewechat.com/" + this.appid + "/139/page-frame.html"
      }, {});
      if (_0x592334 && _0x592334.Success) {
        const _0x38420e = _0x592334.Data || 0;
        return console.log("✅ [" + this.remarkName + "] 签到成功！获得 " + _0x38420e + " 积分"), {
          "success": true,
          "points": _0x38420e
        };
      } else {
        const _0x3e7053 = _0x592334.Message || "未知错误";
        return _0x3e7053.includes("已签到") || _0x3e7053.includes("已经签到") || _0x3e7053.includes("已完成签到") ? (console.log("ℹ️ [" + this.remarkName + "] 今日已签到"), {
          "success": true,
          "points": 0,
          "already_signed": true
        }) : (console.log("❌ [" + this.remarkName + "] 签到失败"), {
          "success": false,
          "error": _0x3e7053
        });
      }
    } catch (_0x553cc9) {
      return {
        "success": false,
        "error": _0x553cc9.message
      };
    }
  }
  async ["withdraw"]() {
    if (!this.token) return false;
    await this.getUserScore();
    if (this.userScore < 100) return {
      "success": false,
      "reason": "insufficient_score",
      "score": this.userScore
    };
    try {
      const _0x11e09c = await this.makeHttpRequest("POST", "https://www.lvdhb.com/MiniProgramApiCore/api/v3/cash/SaveCash", {
        "Host": "www.lvdhb.com",
        "content-type": "application/json",
        "token": this.token,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
        "Referer": "https://servicewechat.com/" + this.appid + "/139/page-frame.html"
      }, {
        "AliAccount": "直接到微信钱包的余额",
        "Score": this.userScore.toString()
      });
      return _0x11e09c && _0x11e09c.Success ? (console.log("💰 [" + this.remarkName + "] 提现成功！积分：" + this.userScore), {
        "success": true,
        "score": this.userScore
      }) : (console.log("❌ [" + this.remarkName + "] 提现失败"), {
        "success": false,
        "error": _0x11e09c.Message
      });
    } catch (_0x43f0de) {
      return {
        "success": false,
        "error": _0x43f0de.message
      };
    }
  }
  async ["getUserProfile"]() {
    const _0x1ef5ad = JSON.stringify({
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
      _0x549be0 = await wxcode.getUserInfo(this.wxid, this.appid, _0x1ef5ad);
    if (_0x549be0.success) {
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取用户个人信息成功");
      try {
        const _0x4a67f1 = JSON.parse(_0x549be0.rawData.data);
        return isDebug && console.log("[DEBUG] [" + this.remarkName + "] 用户信息:", {
          "nickName": _0x4a67f1.nickName,
          "gender": _0x4a67f1.gender,
          "avatarUrl": _0x4a67f1.avatarUrl,
          "city": _0x4a67f1.city,
          "province": _0x4a67f1.province,
          "country": _0x4a67f1.country
        }), this.userProfile = {
          "success": true,
          "userInfo": _0x4a67f1,
          "signature": _0x549be0.signature,
          "encryptedData": _0x549be0.encryptedData,
          "iv": _0x549be0.iv
        }, this.userProfile;
      } catch (_0x4127f4) {
        return console.log("[" + this.remarkName + "] 解析用户信息失败：" + _0x4127f4.message), {
          "success": false,
          "error": _0x4127f4.message
        };
      }
    } else return console.log("[" + this.remarkName + "] 获取用户个人信息失败：" + _0x549be0.error), null;
  }
  async ["performFullLogin"]() {
    const _0x2852bc = await this.getWxCodeAndLogin();
    if (!_0x2852bc) {
      return console.log("❌ [" + this.remarkName + "] 授权码获取失败"), false;
    }
    const _0x50c2bc = await this.loginToLvdhb();
    if (!_0x50c2bc) {
      return false;
    }
    return await this.getUserInfo(), await this.getUserScore(), this.saveTokenCache(), true;
  }
  async ["executeBusinessLogic"]() {
    try {
      if (!this.token) return false;
      let _0x10b7b0 = true;
      const _0x18e851 = await this.signIn();
      if (!_0x18e851 || !_0x18e851.success) {
        if (_0x18e851 && _0x18e851.error && (_0x18e851.error.includes("token") || _0x18e851.error.includes("登录") || _0x18e851.error.includes("认证"))) return false;
        _0x10b7b0 = false;
      }
      const _0xf0d954 = await this.getUserScore();
      if (!_0xf0d954) return false;
      console.log("📊 [" + this.remarkName + "] 当前积分：" + this.userScore);
      if (this.userScore >= 100) {
        console.log("🔔 [" + this.remarkName + "] 开始自动提现...");
        const _0x35d8d6 = await this.withdraw();
        if (!_0x35d8d6 || !_0x35d8d6.success) {
          if (_0x35d8d6 && _0x35d8d6.error && (_0x35d8d6.error.includes("token") || _0x35d8d6.error.includes("登录") || _0x35d8d6.error.includes("认证"))) return false;
        } else this.userScore = 0;
      }
      return this.saveTokenCache(), _0x10b7b0;
    } catch (_0x398814) {
      return false;
    }
  }
  async ["run"]() {
    try {
      const _0x46a3fb = this.loadTokenCache();
      if (_0x46a3fb) {
        const _0xdf86d9 = await this.executeBusinessLogic();
        if (!_0xdf86d9) {
          console.log("⚠️ [" + this.remarkName + "] 重新登录...");
          const _0x3b0dc7 = await this.performFullLogin();
          if (!_0x3b0dc7) {
            console.log("❌ [" + this.remarkName + "] 重新登录失败");
            return;
          }
          const _0x55dc0b = await this.executeBusinessLogic();
          if (!_0x55dc0b) {
            console.log("❌ [" + this.remarkName + "] 执行失败");
            return;
          }
        }
      } else {
        const _0x256ae8 = await this.performFullLogin();
        if (!_0x256ae8) {
          console.log("❌ [" + this.remarkName + "] 登录失败");
          return;
        }
        const _0x216eb9 = await this.executeBusinessLogic();
        if (!_0x216eb9) {
          console.log("❌ [" + this.remarkName + "] 执行失败");
          return;
        }
      }
      console.log("✅ [" + this.remarkName + "] 完成");
    } catch (_0x5517c6) {
      console.log("❌ [" + this.remarkName + "] 出错：" + _0x5517c6.message);
    }
  }
}
async function main() {
  console.log("🚀 " + scriptName + "开始...");
  if (KAMI_VERIFY_SWITCH === 1) {
    const _0x5e21f1 = await verifyKami(kamiKey);
    !_0x5e21f1.success && (console.log("❌ 卡密验证失败: " + _0x5e21f1.message), process.exit(1));
    console.log("✅ 卡密验证成功");
    if (_0x5e21f1.data) {
      const _0x16bb98 = _0x5e21f1.data;
      if (_0x16bb98.card_type === "time") console.log("   有效期: " + _0x16bb98.duration + " 天");else {
        if (_0x16bb98.card_type === "count") {
          console.log("   剩余次数: " + _0x16bb98.remaining_count);
          console.log("   总次数: " + _0x16bb98.total_count);
        }
      }
    }
  } else console.log("🔓 卡密验证已关闭，跳过验证步骤");
  console.log("=".repeat(60) + "\n");
  console.log("♻️ 绿袋回收：环保签到赚积分，积分满100自动提现到微信！ ♻️");
  console.log("=".repeat(60) + "\n");
  if (!wxidList) {
    console.log("❌ 未设置环境变量 LDHS_WXID 或 TXX_WXID");
    return;
  }
  const _0x5d8ef9 = cmdWxid ? [cmdWxid] : parseWxidList(wxidList);
  if (_0x5d8ef9.length === 0) {
    console.log("❌ 没有找到有效的wxid");
    return;
  }
  console.log("📋 共找到 " + _0x5d8ef9.length + " 个账号");
  isDebug && console.log("[DEBUG] 账号: " + _0x5d8ef9.join(", "));
  for (let _0x355bce = 0; _0x355bce < _0x5d8ef9.length; _0x355bce++) {
    const _0x19101c = _0x5d8ef9[_0x355bce],
      _0x3430fc = typeof wxcode.getRemarkName === "function" ? wxcode.getRemarkName(_0x19101c) : _0x19101c;
    console.log("\n🚀 [" + (_0x355bce + 1) + "/" + _0x5d8ef9.length + "] " + _0x3430fc);
    try {
      const _0x24f364 = new ScriptTemplate(_0x19101c);
      await _0x24f364.run();
    } catch (_0x416731) {
      console.log("❌ [" + _0x3430fc + "] 处理失败: " + _0x416731.message);
    }
    console.log("─".repeat(60));
    _0x355bce < _0x5d8ef9.length - 1 && (await new Promise(_0x5c8ef6 => setTimeout(_0x5c8ef6, 5000)));
  }
  console.log("\n🎉 处理完成！");
  NOTICE_SWITCH && notice && (await sendMsg(notice));
}
let notice = "";
function print(_0x1b5068, _0x542704 = false) {
  let _0x47be78 = "" + _0x1b5068;
  console.log(_0x47be78);
  NOTICE_SWITCH && _0x542704 && (notice += _0x47be78 + "\n");
}
async function sendMsg(_0x490bf0) {
  try {
    let _0x2d988b = "";
    try {
      _0x2d988b = require("./sendNotify");
    } catch (_0x1a5fec) {
      try {
        _0x2d988b = require("../sendNotify");
      } catch (_0xa424a3) {
        console.log("❌ 未找到sendNotify模块，无法发送通知");
        return;
      }
    }
    await _0x2d988b.sendNotify(scriptName, _0x490bf0);
    console.log("📢 通知发送成功");
  } catch (_0x1db88d) {
    console.log("❌ 通知发送失败: " + _0x1db88d.message);
  }
}
main().catch(console.error);