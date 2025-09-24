//Wed Sep 24 2025 12:56:14 GMT+0000 (Coordinated Universal Time)
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
  zlib = require("zlib"),
  NOTICE_SWITCH = 1,
  KAMI_VERIFY_SWITCH = 1,
  APPID = "wx1bb9f36e2480e14c",
  KAMI_API_URL = "http://kami.19820121.xyz/api/verify.php",
  KAMI_API_KEY = "6e62e481fe3f0ad007bb5a1df54bc0fa",
  args = process.argv.slice(2),
  getArg = _0x46bcc4 => {
    const _0x2587bc = args.indexOf("--" + _0x46bcc4);
    return _0x2587bc !== -1 && args[_0x2587bc + 1] ? args[_0x2587bc + 1] : null;
  },
  cmdWxid = getArg("wxid"),
  isDebug = args.includes("--debug"),
  wxidList = cmdWxid || process.env.TXX_WXID || "",
  kamiKey = process.env.TXX_KAMI || "",
  scriptName = path.basename(__filename, ".js"),
  TOKEN_CACHE_FILE = path.join(__dirname, scriptName + "_tokens.json"),
  API_BASE_URL = "https://newprod.ifengqun.com",
  FQAPPID = "100010000";
function cryptoToken(_0x37d083, _0x47605e = null, _0x3df9d3 = null) {
  _0x47605e === null && (_0x47605e = Date.now());
  if (_0x3df9d3 === null) {
    _0x3df9d3 = crypto.createHash("md5").update(Math.random().toString()).digest("hex");
  }
  const _0x7160ce = _0x47605e.toString() + _0x3df9d3,
    _0x5171bb = crypto.createHash("md5").update(_0x7160ce).digest("hex").substring(0, 16),
    _0x5d7348 = Buffer.from("1020304050607080", "utf8"),
    _0x121559 = crypto.createCipheriv("aes-128-cbc", Buffer.from(_0x5171bb, "utf8"), _0x5d7348);
  let _0x4d460e = _0x121559.update(_0x37d083, "utf8", "base64");
  return _0x4d460e += _0x121559.final("base64"), {
    "nonce": _0x3df9d3,
    "timestamp": _0x47605e,
    "token": _0x4d460e
  };
}
function makeRequest(_0x8a11c4, _0x2fd4b0 = null) {
  return new Promise((_0x2d0b88, _0x4e8b4d) => {
    const _0x580b2e = _0x8a11c4.protocol === "https:" ? https : http,
      _0x2d09f2 = _0x580b2e.request(_0x8a11c4, _0x438c53 => {
        let _0x554412 = Buffer.alloc(0);
        _0x438c53.on("data", _0x10d088 => {
          _0x554412 = Buffer.concat([_0x554412, _0x10d088]);
        });
        _0x438c53.on("end", () => {
          try {
            let _0xeda546 = _0x554412;
            const _0x200670 = _0x438c53.headers["content-encoding"];
            if (_0x200670 === "gzip") {
              _0xeda546 = zlib.gunzipSync(_0x554412);
            } else {
              if (_0x200670 === "br") _0xeda546 = zlib.brotliDecompressSync(_0x554412);else {
                if (_0x200670 === "deflate") {
                  _0xeda546 = zlib.inflateSync(_0x554412);
                }
              }
            }
            const _0x1a4232 = _0xeda546.toString("utf8");
            isDebug && (console.log("[DEBUG] 响应状态: " + _0x438c53.statusCode), console.log("[DEBUG] 响应头: " + JSON.stringify(_0x438c53.headers)), console.log("[DEBUG] 响应内容: " + _0x1a4232.substring(0, 500) + (_0x1a4232.length > 500 ? "..." : "")));
            const _0x3a3d79 = JSON.parse(_0x1a4232);
            _0x2d0b88({
              "success": true,
              "statusCode": _0x438c53.statusCode,
              "headers": _0x438c53.headers,
              "data": _0x3a3d79
            });
          } catch (_0x4d796c) {
            const _0x4d6a23 = _0x554412.toString("utf8");
            console.log("[ERROR] 解析响应失败: " + _0x4d796c.message);
            console.log("[ERROR] 原始响应长度: " + _0x554412.length + " 字节");
            console.log("[ERROR] 响应编码: " + (_0x438c53.headers["content-encoding"] || "none"));
            console.log("[ERROR] 响应内容预览: " + _0x4d6a23.substring(0, 200) + "...");
            _0x2d0b88({
              "success": false,
              "error": "解析响应失败: " + _0x4d796c.message,
              "rawData": _0x4d6a23,
              "statusCode": _0x438c53.statusCode,
              "headers": _0x438c53.headers
            });
          }
        });
      });
    _0x2d09f2.on("error", _0x2dda54 => {
      _0x2d0b88({
        "success": false,
        "error": "请求失败: " + _0x2dda54.message
      });
    });
    _0x2d09f2.setTimeout(30000, () => {
      _0x2d09f2.destroy();
      _0x2d0b88({
        "success": false,
        "error": "请求超时"
      });
    });
    if (_0x2fd4b0) {
      _0x2d09f2.write(typeof _0x2fd4b0 === "string" ? _0x2fd4b0 : JSON.stringify(_0x2fd4b0));
    }
    _0x2d09f2.end();
  });
}
function parseWxidList(_0x6001cd) {
  if (!_0x6001cd) return [];
  return _0x6001cd.split("\n").map(_0x3dd9fe => _0x3dd9fe.trim()).filter(_0x5babca => _0x5babca.length > 0).filter(_0x3fd056 => !_0x3fd056.startsWith("#"));
}
function generateDeviceId() {
  const _0x53cf25 = require("os"),
    _0x4b2f47 = _0x53cf25.hostname(),
    _0x9f9622 = _0x4b2f47 + "-node-script",
    _0x2f70d3 = crypto.createHash("md5").update(_0x9f9622).digest("hex").substring(0, 16);
  return _0x2f70d3;
}
async function verifyKami(_0x4b601b) {
  return new Promise((_0xe2ad6c, _0x34f00b) => {
    if (!_0x4b601b) {
      _0xe2ad6c({
        "success": false,
        "code": 1,
        "message": "未设置卡密，请设置环境变量 TXX_KAMI"
      });
      return;
    }
    const _0x4fa29f = generateDeviceId(),
      _0x38ef71 = new URL(KAMI_API_URL);
    _0x38ef71.searchParams.set("api_key", KAMI_API_KEY);
    _0x38ef71.searchParams.set("card_key", _0x4b601b);
    _0x38ef71.searchParams.set("device_id", _0x4fa29f);
    const _0x36909c = {
        "hostname": _0x38ef71.hostname,
        "port": _0x38ef71.port || (_0x38ef71.protocol === "https:" ? 443 : 80),
        "path": _0x38ef71.pathname + _0x38ef71.search,
        "method": "GET",
        "headers": {
          "User-Agent": "Node.js Script"
        }
      },
      _0x28f442 = _0x38ef71.protocol === "https:" ? https : http,
      _0x50c6bc = _0x28f442.request(_0x36909c, _0x5edb0e => {
        let _0x12b576 = "";
        _0x5edb0e.on("data", _0x2488c8 => {
          _0x12b576 += _0x2488c8;
        });
        _0x5edb0e.on("end", () => {
          if (!_0x12b576 || _0x12b576.trim() === "") {
            _0xe2ad6c({
              "success": false,
              "code": 3,
              "message": "服务器返回空响应"
            });
            return;
          }
          try {
            const _0x57bcd4 = JSON.parse(_0x12b576);
            _0x57bcd4.code === 0 ? _0xe2ad6c({
              "success": true,
              "code": _0x57bcd4.code,
              "message": _0x57bcd4.message || _0x57bcd4.msg,
              "data": _0x57bcd4.data
            }) : _0xe2ad6c({
              "success": false,
              "code": _0x57bcd4.code,
              "message": _0x57bcd4.message || _0x57bcd4.msg || "卡密验证失败"
            });
          } catch (_0x6dd7a5) {
            _0xe2ad6c({
              "success": false,
              "code": 3,
              "message": "解析响应失败: " + _0x6dd7a5.message + "，原始响应: " + _0x12b576
            });
          }
        });
      });
    _0x50c6bc.on("error", _0x842c5d => {
      _0xe2ad6c({
        "success": false,
        "code": 3,
        "message": "网络请求失败: " + _0x842c5d.message
      });
    });
    _0x50c6bc.setTimeout(10000, () => {
      _0x50c6bc.destroy();
      _0xe2ad6c({
        "success": false,
        "code": 3,
        "message": "请求超时，请检查网络连接"
      });
    });
    _0x50c6bc.end();
  });
}
class ScriptTemplate {
  constructor(_0x2c34c0) {
    this.wxid = _0x2c34c0;
    this.appid = APPID;
    this.isLogin = false;
    this.wxCode = null;
    this.openid = null;
    this.mobileInfo = null;
    this.userProfile = null;
    this.jwtToken = null;
    this.userId = null;
    this.uuid = null;
    this.visitorId = null;
    this.remarkName = typeof wxcode.getRemarkName === "function" ? wxcode.getRemarkName(_0x2c34c0) : _0x2c34c0;
  }
  ["loadTokenCache"]() {
    try {
      if (fs.existsSync(TOKEN_CACHE_FILE)) {
        const _0x49c58e = JSON.parse(fs.readFileSync(TOKEN_CACHE_FILE, "utf8")),
          _0x1cfcf5 = _0x49c58e[this.wxid];
        if (_0x1cfcf5) {
          this.openid = _0x1cfcf5.openid;
          this.mobileInfo = _0x1cfcf5.mobileInfo;
          this.userProfile = _0x1cfcf5.userProfile;
          this.jwtToken = _0x1cfcf5.jwtToken;
          this.userId = _0x1cfcf5.userId;
          this.uuid = _0x1cfcf5.uuid;
          this.visitorId = _0x1cfcf5.visitorId;
          this.isLogin = true;
          isDebug && (console.log("[DEBUG] [" + this.remarkName + "] 从缓存加载数据成功"), console.log("[DEBUG] [" + this.remarkName + "] OpenID: " + this.openid), console.log("[DEBUG] [" + this.remarkName + "] UserID: " + this.userId));
          return true;
        }
      }
    } catch (_0x14c39e) {
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 读取缓存失败: " + _0x14c39e.message);
    }
    return false;
  }
  ["saveTokenCache"]() {
    try {
      let _0x19280a = {};
      if (fs.existsSync(TOKEN_CACHE_FILE)) try {
        _0x19280a = JSON.parse(fs.readFileSync(TOKEN_CACHE_FILE, "utf8"));
      } catch (_0x326dae) {
        if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 现有缓存文件格式错误，将重新创建");
      }
      _0x19280a[this.wxid] = {
        "openid": this.openid,
        "mobileInfo": this.mobileInfo,
        "userProfile": this.userProfile,
        "jwtToken": this.jwtToken,
        "userId": this.userId,
        "uuid": this.uuid,
        "visitorId": this.visitorId
      };
      fs.writeFileSync(TOKEN_CACHE_FILE, JSON.stringify(_0x19280a, null, 2), "utf8");
      isDebug && console.log("[DEBUG] [" + this.remarkName + "] 缓存文件: " + TOKEN_CACHE_FILE);
    } catch (_0x4c703f) {
      console.log("❌ [" + this.remarkName + "] 保存缓存失败: " + _0x4c703f.message);
    }
  }
  async ["getWxCodeAndLogin"]() {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取微信授权码...");
    const _0xc787c7 = await wxcode.getWxCode(this.wxid, this.appid);
    if (!_0xc787c7.success) return console.log("[" + this.remarkName + "] 获取授权码失败：" + _0xc787c7.error), false;
    this.wxCode = _0xc787c7.code;
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取授权码成功：" + this.wxCode);
    return this.isLogin = true, true;
  }
  async ["getUserOpenid"]() {
    const _0x22ca8e = await wxcode.getOpenid(this.wxid, this.appid);
    if (_0x22ca8e.success) {
      this.openid = _0x22ca8e.openid;
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取openid成功：" + this.openid);
      return this.openid;
    } else return console.log("[" + this.remarkName + "] 获取openid失败：" + _0x22ca8e.error), null;
  }
  async ["getMobileInfo"]() {
    const _0x60c529 = await wxcode.getmobile(this.wxid, this.appid);
    if (_0x60c529.success) {
      this.mobileInfo = _0x60c529;
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取手机号加密数据成功");
      return this.mobileInfo;
    } else return console.log("[" + this.remarkName + "] 获取手机号失败：" + _0x60c529.error), null;
  }
  async ["getUserProfile"]() {
    const _0x4dd059 = JSON.stringify({
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
      _0xe65935 = await wxcode.getUserInfo(this.wxid, this.appid, _0x4dd059);
    if (_0xe65935.success) {
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取用户个人信息成功");
      try {
        const _0x1de85c = JSON.parse(_0xe65935.rawData.data);
        return isDebug && console.log("[DEBUG] [" + this.remarkName + "] 用户信息:", {
          "nickName": _0x1de85c.nickName,
          "gender": _0x1de85c.gender,
          "avatarUrl": _0x1de85c.avatarUrl,
          "city": _0x1de85c.city,
          "province": _0x1de85c.province,
          "country": _0x1de85c.country
        }), this.userProfile = {
          "success": true,
          "userInfo": _0x1de85c,
          "signature": _0xe65935.signature,
          "encryptedData": _0xe65935.encryptedData,
          "iv": _0xe65935.iv
        }, this.userProfile;
      } catch (_0x3697c8) {
        return console.log("[" + this.remarkName + "] 解析用户信息失败：" + _0x3697c8.message), {
          "success": false,
          "error": _0x3697c8.message
        };
      }
    } else {
      return console.log("[" + this.remarkName + "] 获取用户个人信息失败：" + _0xe65935.error), null;
    }
  }
  ["generateUUID"]() {
    return !this.uuid && (this.uuid = crypto.randomBytes(16).toString("hex").replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, "$1-$2-$3-$4-$5")), this.uuid;
  }
  ["generateVisitorId"]() {
    return !this.visitorId && (this.visitorId = Date.now().toString() + Math.floor(Math.random() * 1000000).toString().padStart(6, "0")), this.visitorId;
  }
  async ["registerUser"]() {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 开始用户注册...");
    if (!this.openid || !this.userProfile || !this.mobileInfo) {
      return console.log("[" + this.remarkName + "] 缺少必要的用户信息，无法注册"), false;
    }
    const _0x58d74a = new URL("/user/register/applet", API_BASE_URL),
      _0x681bc1 = {
        "iv": this.userProfile.iv,
        "encryptedData": this.userProfile.encryptedData,
        "nickname": "",
        "avatar": "https://applet.ifengqun.com/fq-mall/prod/me/logo.png",
        "sex": 0,
        "openId": this.openid,
        "appId": this.appid,
        "city": "",
        "country": "",
        "province": "",
        "code": this.mobileInfo.code
      },
      _0x30aee5 = {
        "hostname": _0x58d74a.hostname,
        "port": _0x58d74a.port || 443,
        "path": _0x58d74a.pathname,
        "method": "POST",
        "protocol": _0x58d74a.protocol,
        "headers": {
          "host": _0x58d74a.hostname,
          "content-type": "application/json",
          "devicemodel": "microsoft",
          "fqappid": FQAPPID,
          "fqtraceid": crypto.randomUUID(),
          "osversion": "10",
          "openid": this.openid,
          "uuid": this.generateUUID(),
          "pagepath": "/pages/Me/index",
          "pageid": "3",
          "shopid": "0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
          "manufacturer": "microsoft",
          "deviceplatform": "windows",
          "xweb_xhr": "1",
          "devicesystem": "Windows 10 x64",
          "visitorid": this.generateVisitorId(),
          "platform": "windows",
          "appid": this.appid,
          "envversion": "release",
          "wifienabled": "1",
          "appversion": "5.21.20",
          "accept": "*/*",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://servicewechat.com/" + this.appid + "/946/page-frame.html",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          "priority": "u=1, i"
        }
      },
      _0x1ebb69 = await makeRequest(_0x30aee5, _0x681bc1);
    if (_0x1ebb69.success && _0x1ebb69.data.code === "0") {
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 用户注册成功");
      return this.userId = _0x1ebb69.data.data.userId, true;
    } else return console.log("[" + this.remarkName + "] 用户注册失败: " + (_0x1ebb69.data?.["msg"] || _0x1ebb69.error)), false;
  }
  async ["getJWTToken"]() {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取JWT Token...");
    if (!this.wxCode || !this.userId) return console.log("[" + this.remarkName + "] 缺少必要信息，无法获取JWT Token"), false;
    const _0x4fbb21 = new URL("/user/login/applet", API_BASE_URL),
      _0x1efb44 = {
        "code": this.wxCode,
        "appId": this.appid
      },
      _0x5dd39e = cryptoToken("temp_token_for_login"),
      _0x691a50 = {
        "hostname": _0x4fbb21.hostname,
        "port": _0x4fbb21.port || 443,
        "path": _0x4fbb21.pathname,
        "method": "POST",
        "protocol": _0x4fbb21.protocol,
        "headers": {
          "host": _0x4fbb21.hostname,
          "content-type": "application/json",
          "devicemodel": "microsoft",
          "fqappid": FQAPPID,
          "nonce": _0x5dd39e.nonce,
          "fqtraceid": crypto.randomUUID(),
          "osversion": "10",
          "userid": this.userId.toString(),
          "openid": this.openid,
          "uuid": this.uuid,
          "pagepath": "/pages/Me/index",
          "pageid": "3",
          "usertype": "1",
          "isclerk": "0",
          "shopid": "0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
          "manufacturer": "microsoft",
          "deviceplatform": "windows",
          "dealerid": "",
          "timestamp": _0x5dd39e.timestamp.toString(),
          "xweb_xhr": "1",
          "devicesystem": "Windows 10 x64",
          "visitorid": this.visitorId,
          "platform": "windows",
          "appid": this.appid,
          "envversion": "release",
          "wifienabled": "1",
          "token": _0x5dd39e.token,
          "appversion": "5.21.20",
          "accept": "*/*",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://servicewechat.com/" + this.appid + "/946/page-frame.html",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          "priority": "u=1, i"
        }
      },
      _0x5c04ad = await makeRequest(_0x691a50, _0x1efb44);
    if (_0x5c04ad.success && _0x5c04ad.data.code === "0") {
      this.jwtToken = _0x5c04ad.data.data.token;
      this.userId = _0x5c04ad.data.data.userId;
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 获取JWT Token成功");
        console.log("[DEBUG] [" + this.remarkName + "] JWT: " + this.jwtToken.substring(0, 50) + "...");
      }
      return true;
    } else return console.log("[" + this.remarkName + "] 获取JWT Token失败: " + (_0x5c04ad.data?.["msg"] || _0x5c04ad.error)), false;
  }
  async ["getTaskList"]() {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取任务列表...");
    if (!this.jwtToken) return console.log("[" + this.remarkName + "] 缺少JWT Token，无法获取任务列表"), null;
    const _0x4ad02f = new URL("/content/daily-task/landing-page", API_BASE_URL),
      _0x44a71c = cryptoToken(this.jwtToken),
      _0x3c3423 = {
        "hostname": _0x4ad02f.hostname,
        "port": _0x4ad02f.port || 443,
        "path": _0x4ad02f.pathname,
        "method": "POST",
        "protocol": _0x4ad02f.protocol,
        "headers": {
          "host": _0x4ad02f.hostname,
          "content-type": "application/json",
          "devicemodel": "microsoft",
          "fqappid": FQAPPID,
          "nonce": _0x44a71c.nonce,
          "fqtraceid": crypto.randomUUID(),
          "osversion": "10",
          "userid": this.userId.toString(),
          "openid": this.openid,
          "uuid": this.uuid,
          "pagepath": "/subpackages/social/SocialLifeFeeds/video/index",
          "pageid": "114305",
          "usertype": "1",
          "isclerk": "0",
          "shopid": "0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
          "manufacturer": "microsoft",
          "deviceplatform": "windows",
          "dealerid": "",
          "timestamp": _0x44a71c.timestamp.toString(),
          "xweb_xhr": "1",
          "devicesystem": "Windows 10 x64",
          "visitorid": this.visitorId,
          "platform": "windows",
          "appid": this.appid,
          "envversion": "release",
          "wifienabled": "1",
          "token": _0x44a71c.token,
          "appversion": "5.21.20",
          "accept": "*/*",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://servicewechat.com/" + this.appid + "/946/page-frame.html",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          "priority": "u=1, i"
        }
      },
      _0x1839c6 = await makeRequest(_0x3c3423, {});
    if (_0x1839c6.success && _0x1839c6.data.code === "0") {
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取任务列表成功");
      return _0x1839c6.data.data;
    } else return console.log("[" + this.remarkName + "] 获取任务列表失败: " + (_0x1839c6.data?.["msg"] || _0x1839c6.error)), null;
  }
  async ["getSignInInfo"]() {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取签到信息...");
    if (!this.jwtToken) return console.log("[" + this.remarkName + "] 缺少JWT Token，无法获取签到信息"), null;
    const _0xdab777 = new URL("/mall/active/benefit/signIn/getUserSignInInfo", API_BASE_URL),
      _0xb5e239 = cryptoToken(this.jwtToken),
      _0x3178e9 = {
        "hostname": _0xdab777.hostname,
        "port": _0xdab777.port || 443,
        "path": _0xdab777.pathname,
        "method": "POST",
        "protocol": _0xdab777.protocol,
        "headers": {
          "host": _0xdab777.hostname,
          "content-type": "application/json",
          "devicemodel": "microsoft",
          "fqappid": FQAPPID,
          "nonce": _0xb5e239.nonce,
          "fqtraceid": crypto.randomUUID(),
          "osversion": "10",
          "userid": this.userId.toString(),
          "openid": this.openid,
          "uuid": this.uuid,
          "pagepath": "/subpackages/me/points/PointsMall/index",
          "pageid": "100228",
          "usertype": "1",
          "isclerk": "0",
          "shopid": "0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
          "manufacturer": "microsoft",
          "deviceplatform": "windows",
          "dealerid": "",
          "timestamp": _0xb5e239.timestamp.toString(),
          "xweb_xhr": "1",
          "devicesystem": "Windows 10 x64",
          "visitorid": this.visitorId,
          "platform": "windows",
          "appid": this.appid,
          "envversion": "release",
          "wifienabled": "1",
          "token": _0xb5e239.token,
          "appversion": "5.21.20",
          "accept": "*/*",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://servicewechat.com/" + this.appid + "/946/page-frame.html",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          "priority": "u=1, i"
        }
      },
      _0x484b11 = await makeRequest(_0x3178e9, {});
    if (_0x484b11.success && _0x484b11.data.code === "0") {
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取签到信息成功");
      return _0x484b11.data.data;
    } else {
      return console.log("[" + this.remarkName + "] 获取签到信息失败: " + (_0x484b11.data?.["msg"] || _0x484b11.error)), null;
    }
  }
  async ["doSignIn"]() {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 执行签到...");
    if (!this.jwtToken) {
      return console.log("[" + this.remarkName + "] 缺少JWT Token，无法签到"), false;
    }
    const _0x52511b = new URL("/mall/active/benefit/signIn/manualSignIn", API_BASE_URL),
      _0x2fb457 = cryptoToken(this.jwtToken),
      _0x3b6d2d = {
        "hostname": _0x52511b.hostname,
        "port": _0x52511b.port || 443,
        "path": _0x52511b.pathname,
        "method": "POST",
        "protocol": _0x52511b.protocol,
        "headers": {
          "host": _0x52511b.hostname,
          "content-type": "application/json",
          "devicemodel": "microsoft",
          "fqappid": FQAPPID,
          "nonce": _0x2fb457.nonce,
          "fqtraceid": crypto.randomUUID(),
          "osversion": "10",
          "userid": this.userId.toString(),
          "openid": this.openid,
          "uuid": this.uuid,
          "pagepath": "/subpackages/me/points/PointsMall/index",
          "pageid": "100228",
          "usertype": "1",
          "isclerk": "0",
          "shopid": "0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
          "manufacturer": "microsoft",
          "deviceplatform": "windows",
          "dealerid": "",
          "timestamp": _0x2fb457.timestamp.toString(),
          "xweb_xhr": "1",
          "devicesystem": "Windows 10 x64",
          "visitorid": this.visitorId,
          "platform": "windows",
          "appid": this.appid,
          "envversion": "release",
          "wifienabled": "1",
          "token": _0x2fb457.token,
          "appversion": "5.21.20",
          "accept": "*/*",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://servicewechat.com/" + this.appid + "/946/page-frame.html",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          "priority": "u=1, i"
        }
      },
      _0x86e031 = await makeRequest(_0x3b6d2d, {});
    if (_0x86e031.success && _0x86e031.data.code === "0") {
      const _0x3fd039 = _0x86e031.data.data;
      return console.log("✅ [" + this.remarkName + "] 签到成功！连续" + _0x3fd039.continuousDays + "天，获得" + _0x3fd039.rewardPoints + "积分"), _0x3fd039.rewardPoints === 0 && console.log("⚠️ [" + this.remarkName + "] 今日签到无积分奖励（可能已签到或首日签到无奖励）"), true;
    } else return console.log("❌ [" + this.remarkName + "] 签到失败: " + (_0x86e031.data?.["msg"] || _0x86e031.error)), false;
  }
  async ["getFeedList"](_0x1744c7 = 20) {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取生活圈帖子列表...");
    const {
        nonce: _0x39ba82,
        timestamp: _0x353225,
        token: _0xdf893a
      } = cryptoToken(this.jwtToken),
      _0x5d9efe = {
        "type": 9,
        "scene": 1,
        "size": _0x1744c7,
        "channelId": -1
      },
      _0x455824 = {
        "protocol": "https:",
        "hostname": "newprod.ifengqun.com",
        "port": 443,
        "path": "/mall/feed/daily/page",
        "method": "POST",
        "headers": {
          "host": "newprod.ifengqun.com",
          "content-length": JSON.stringify(_0x5d9efe).length,
          "devicemodel": "microsoft",
          "fqappid": FQAPPID,
          "nonce": _0x39ba82,
          "fqtraceid": this.generateUUID(),
          "osversion": "10",
          "userid": this.userId,
          "openid": this.openid,
          "uuid": this.uuid,
          "pagepath": "/pages/Community/index",
          "pageid": "9",
          "usertype": "1",
          "isclerk": "0",
          "shopid": "0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
          "content-type": "application/json",
          "manufacturer": "microsoft",
          "deviceplatform": "windows",
          "dealerid": "",
          "timestamp": _0x353225,
          "xweb_xhr": "1",
          "devicesystem": "Windows 10 x64",
          "visitorid": this.visitorId,
          "platform": "windows",
          "appid": APPID,
          "envversion": "release",
          "wifienabled": "1",
          "token": _0xdf893a,
          "appversion": "5.21.20",
          "accept": "*/*",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://servicewechat.com/" + APPID + "/946/page-frame.html",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          "priority": "u=1, i"
        }
      },
      _0x3e0cec = await makeRequest(_0x455824, _0x5d9efe);
    if (_0x3e0cec.success && _0x3e0cec.data.code === "0") {
      const _0x11e521 = _0x3e0cec.data.data.feeds || [];
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取到 " + _0x11e521.length + " 个帖子");
      return _0x11e521.map(_0x4cdb1f => _0x4cdb1f.id);
    } else return console.log("❌ [" + this.remarkName + "] 获取帖子列表失败: " + (_0x3e0cec.data?.["msg"] || _0x3e0cec.error)), [];
  }
  async ["completeViewTask"](_0xf0397, _0x5ead04) {
    const _0x2cde84 = Math.max(0, _0x5ead04 - _0xf0397),
      _0x5e69d2 = _0x2cde84;
    if (_0x5e69d2 === 0) {
      return console.log("✅ [" + this.remarkName + "] 浏览任务已完成 (" + _0xf0397 + "/" + _0x5ead04 + ")"), true;
    }
    console.log("🔍 [" + this.remarkName + "] 开始浏览" + _0x5e69d2 + "个帖子 (当前进度: " + _0xf0397 + "/" + _0x5ead04 + ")");
    const _0x457076 = await this.getFeedList(50);
    if (_0x457076.length === 0) {
      return console.log("❌ [" + this.remarkName + "] 无法获取帖子列表"), false;
    }
    const _0x36170f = [..._0x457076].sort(() => Math.random() - 0.5);
    console.log("📋 [" + this.remarkName + "] 获取到" + _0x457076.length + "个帖子，已随机排序");
    let _0x524ccb = 0,
      _0x278f9c = 0;
    for (let _0x2a3740 = 0; _0x2a3740 < _0x5e69d2 && _0x2a3740 < _0x36170f.length; _0x2a3740++) {
      const _0x3703d9 = _0x36170f[_0x2a3740];
      console.log("📖 [" + this.remarkName + "] 浏览第" + (_0x2a3740 + 1) + "个帖子 (ID: " + _0x3703d9 + ")");
      const _0x3e17a6 = await this.executeSingleViewTask(_0x3703d9);
      if (_0x3e17a6) {
        _0x524ccb++;
        _0x278f9c++;
        console.log("✅ [" + this.remarkName + "] 第" + (_0x2a3740 + 1) + "个帖子浏览成功 (进度: " + (_0xf0397 + _0x278f9c) + "/" + _0x5ead04 + ")");
        if (_0xf0397 + _0x278f9c >= _0x5ead04) {
          console.log("🎯 [" + this.remarkName + "] 浏览任务已达到上限，停止浏览");
          break;
        }
      } else console.log("❌ [" + this.remarkName + "] 第" + (_0x2a3740 + 1) + "个帖子浏览失败");
      if (_0x2a3740 < _0x5e69d2 - 1 && _0x2a3740 < _0x36170f.length - 1 && _0xf0397 + _0x278f9c < _0x5ead04) {
        const _0x58eb55 = Math.floor(Math.random() * 4 + 15) * 1000;
        console.log("⏳ [" + this.remarkName + "] 等待 " + _0x58eb55 / 1000 + " 秒后浏览下一个帖子...");
        await new Promise(_0x411fb3 => setTimeout(_0x411fb3, _0x58eb55));
      }
    }
    return console.log("📊 [" + this.remarkName + "] 浏览完成，成功浏览 " + _0x524ccb + "/" + _0x5e69d2 + " 个帖子"), _0x524ccb > 0;
  }
  async ["executeSingleViewTask"](_0xaeb352) {
    const _0x393bfb = cryptoToken(this.jwtToken),
      _0x163ed7 = {
        "feedId": _0xaeb352,
        "taskType": "VIEW_NUM"
      },
      _0xbc64ac = {
        "protocol": "https:",
        "hostname": "newprod.ifengqun.com",
        "port": 443,
        "path": "/content/daily-task/complete",
        "method": "POST",
        "headers": {
          "host": "newprod.ifengqun.com",
          "content-length": JSON.stringify(_0x163ed7).length,
          "devicemodel": "microsoft",
          "fqappid": FQAPPID,
          "nonce": _0x393bfb.nonce,
          "fqtraceid": this.generateUUID(),
          "osversion": "10",
          "userid": this.userId,
          "openid": this.openid,
          "uuid": this.uuid,
          "pagepath": "/subpackages/social/SocialLifeFeeds/video/index",
          "pageid": "114305",
          "usertype": "1",
          "isclerk": "0",
          "shopid": "0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
          "content-type": "application/json",
          "manufacturer": "microsoft",
          "deviceplatform": "windows",
          "dealerid": "",
          "timestamp": _0x393bfb.timestamp,
          "xweb_xhr": "1",
          "devicesystem": "Windows 10 x64",
          "visitorid": this.visitorId,
          "platform": "windows",
          "appid": APPID,
          "envversion": "release",
          "wifienabled": "1",
          "token": _0x393bfb.token,
          "appversion": "5.21.20",
          "accept": "*/*",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://servicewechat.com/" + APPID + "/946/page-frame.html",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          "priority": "u=1, i"
        }
      },
      _0x3e6aa6 = await makeRequest(_0xbc64ac, _0x163ed7);
    if (_0x3e6aa6.success && _0x3e6aa6.data.code === "0") {
      const _0x49e90c = _0x3e6aa6.data.data;
      if (_0x49e90c && _0x49e90c.successful === 1) {
        if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 浏览任务成功: " + _0x49e90c.taskName + ", 进度: " + _0x49e90c.currentValue + "/" + _0x49e90c.limitValue);
        return true;
      } else {
        if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 浏览任务失败: " + JSON.stringify(_0x49e90c));
        return false;
      }
    } else {
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 浏览任务请求失败: " + (_0x3e6aa6.data?.["msg"] || _0x3e6aa6.error));
      return false;
    }
  }
  async ["completeTask"](_0x57e103, _0x4b8db8 = null) {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 完成任务: " + _0x57e103);
    if (!this.jwtToken) {
      return console.log("[" + this.remarkName + "] 缺少JWT Token，无法完成任务"), false;
    }
    if (_0x57e103 === "VIEW_NUM") {
      return console.log("❌ [" + this.remarkName + "] 浏览任务需要从executeBusinessLogic调用，请勿直接调用completeTask"), false;
    }
    if (!_0x4b8db8) {
      const _0x3810af = await this.getFeedList(30);
      if (_0x3810af.length === 0) {
        console.log("❌ [" + this.remarkName + "] 无法获取帖子ID，使用默认ID");
        _0x4b8db8 = 1702870766321890;
      } else {
        _0x4b8db8 = _0x3810af[Math.floor(Math.random() * _0x3810af.length)];
        if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 随机选择帖子ID: " + _0x4b8db8);
      }
    }
    const _0x337d62 = new URL("/content/daily-task/complete", API_BASE_URL),
      _0x4ee54a = cryptoToken(this.jwtToken),
      _0x3d6c8b = {
        "feedId": _0x4b8db8,
        "taskType": _0x57e103
      },
      _0x5f4da7 = {
        "hostname": _0x337d62.hostname,
        "port": _0x337d62.port || 443,
        "path": _0x337d62.pathname,
        "method": "POST",
        "protocol": _0x337d62.protocol,
        "headers": {
          "host": _0x337d62.hostname,
          "content-type": "application/json",
          "devicemodel": "microsoft",
          "fqappid": FQAPPID,
          "nonce": _0x4ee54a.nonce,
          "fqtraceid": crypto.randomUUID(),
          "osversion": "10",
          "userid": this.userId.toString(),
          "openid": this.openid,
          "uuid": this.uuid,
          "pagepath": "/subpackages/social/SocialLifeFeeds/video/index",
          "pageid": "114305",
          "usertype": "1",
          "isclerk": "0",
          "shopid": "0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
          "manufacturer": "microsoft",
          "deviceplatform": "windows",
          "dealerid": "",
          "timestamp": _0x4ee54a.timestamp.toString(),
          "xweb_xhr": "1",
          "devicesystem": "Windows 10 x64",
          "visitorid": this.visitorId,
          "platform": "windows",
          "appid": this.appid,
          "envversion": "release",
          "wifienabled": "1",
          "token": _0x4ee54a.token,
          "appversion": "5.21.20",
          "accept": "*/*",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://servicewechat.com/" + this.appid + "/946/page-frame.html",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          "priority": "u=1, i"
        }
      },
      _0x1b6650 = await makeRequest(_0x5f4da7, _0x3d6c8b);
    if (_0x1b6650.success && _0x1b6650.data.code === "0") {
      const _0x6968f8 = _0x1b6650.data.data;
      if (_0x6968f8 && _0x6968f8.successful === 1) {
        return console.log("✅ [" + this.remarkName + "] " + (_0x6968f8.taskName || _0x57e103 + "任务") + "完成！获得" + _0x6968f8.rewardPoints + "积分 (" + _0x6968f8.currentValue + "/" + _0x6968f8.limitValue + ")"), true;
      } else {
        return console.log("❌ [" + this.remarkName + "] " + _0x57e103 + "任务执行失败 - 服务器返回: " + JSON.stringify(_0x6968f8)), false;
      }
    } else return console.log("❌ [" + this.remarkName + "] " + _0x57e103 + "任务失败: " + (_0x1b6650.data?.["msg"] || _0x1b6650.error)), isDebug && _0x1b6650.data && console.log("[DEBUG] 完整响应数据: " + JSON.stringify(_0x1b6650.data)), false;
  }
  async ["getIntegralGoodsList"]() {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取积分商城商品列表...");
    const {
        nonce: _0x2fe84f,
        timestamp: _0x224c7b,
        token: _0x365a81
      } = cryptoToken(this.jwtToken),
      _0x5b81ca = {
        "minIntegral": 1,
        "maxIntegral": 1000000000,
        "page": 1,
        "rows": 50
      },
      _0x204cda = {
        "protocol": "https:",
        "hostname": "newprod.ifengqun.com",
        "port": 443,
        "path": "/goods/integral/searchGoodsList",
        "method": "POST",
        "headers": {
          "host": "newprod.ifengqun.com",
          "content-length": JSON.stringify(_0x5b81ca).length,
          "devicemodel": "microsoft",
          "fqappid": FQAPPID,
          "nonce": _0x2fe84f,
          "fqtraceid": this.generateUUID(),
          "osversion": "10",
          "userid": this.userId,
          "openid": this.openid,
          "uuid": this.uuid,
          "pagepath": "/subpackages/me/points/PointsMall/index",
          "pageid": "100228",
          "usertype": "1",
          "isclerk": "0",
          "shopid": "0",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13)XWEB/14185",
          "content-type": "application/json",
          "manufacturer": "microsoft",
          "deviceplatform": "windows",
          "dealerid": "",
          "timestamp": _0x224c7b,
          "xweb_xhr": "1",
          "devicesystem": "Windows 10 x64",
          "visitorid": this.visitorId,
          "platform": "windows",
          "appid": APPID,
          "envversion": "release",
          "wifienabled": "1",
          "token": _0x365a81,
          "appversion": "5.21.22",
          "accept": "*/*",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://servicewechat.com/" + APPID + "/947/page-frame.html",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "zh-CN,zh;q=0.9",
          "priority": "u=1, i"
        }
      },
      _0x36e5a2 = await makeRequest(_0x204cda, _0x5b81ca);
    if (_0x36e5a2.success && _0x36e5a2.data.code === "0") {
      const _0x351d02 = _0x36e5a2.data.data.list || [];
      if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 获取到 " + _0x351d02.length + " 个商品");
      const _0x35e00f = _0x351d02.sort((_0x1f4c13, _0x37cbe8) => _0x1f4c13.integral - _0x37cbe8.integral).slice(0, 10);
      return _0x35e00f;
    } else return console.log("❌ [" + this.remarkName + "] 获取积分商城商品失败: " + (_0x36e5a2.data?.["msg"] || _0x36e5a2.error)), [];
  }
  ["displayIntegralGoods"](_0x55253a) {
    if (_0x55253a.length === 0) {
      console.log("📦 [" + this.remarkName + "] 暂无可兑换商品");
      return;
    }
    console.log("\n🛍️ [" + this.remarkName + "] 积分商城商品 (按积分排序，前10个):");
    console.log("─".repeat(80));
    _0x55253a.forEach((_0x4be6a1, _0x4df0e1) => {
      const _0x205f39 = _0x4be6a1.shortTitle || _0x4be6a1.spuName,
        _0x44d66f = _0x4be6a1.integral,
        _0xbe4356 = _0x4be6a1.stockNum,
        _0x1f58ec = _0x4be6a1.salesNum || 0,
        _0x1afbd7 = _0x205f39.length > 30 ? _0x205f39.substring(0, 30) + "..." : _0x205f39;
      console.log((_0x4df0e1 + 1).toString().padStart(2, " ") + ". " + _0x1afbd7);
      console.log("    💰 积分: " + _0x44d66f + "  📦 库存: " + _0xbe4356 + "  🔥 销量: " + _0x1f58ec);
    });
    console.log("─".repeat(80));
  }
  async ["performFullLogin"]() {
    if (isDebug) console.log("[DEBUG] [" + this.remarkName + "] 执行完整的数据获取流程...");
    const _0x1199a8 = await this.getWxCodeAndLogin();
    if (!_0x1199a8) {
      return console.log("[" + this.remarkName + "] 获取授权码失败，跳过"), false;
    }
    const _0x491cf2 = await this.getUserOpenid();
    if (!_0x491cf2) {
      return console.log("[" + this.remarkName + "] 获取openid失败，跳过"), false;
    }
    const _0x4a59f3 = await this.getMobileInfo();
    if (!_0x4a59f3) return console.log("[" + this.remarkName + "] 获取手机号加密数据失败，跳过"), false;
    const _0x4dd7a3 = await this.getUserProfile();
    if (!_0x4dd7a3) return console.log("[" + this.remarkName + "] 获取用户信息失败，跳过"), false;
    const _0x5e745a = await this.registerUser();
    if (!_0x5e745a) return console.log("[" + this.remarkName + "] 用户注册失败，跳过"), false;
    const _0x302ef0 = await this.getJWTToken();
    if (!_0x302ef0) return console.log("[" + this.remarkName + "] 获取JWT Token失败，跳过"), false;
    return this.saveTokenCache(), true;
  }
  async ["executeBusinessLogic"]() {
    try {
      console.log("✅ [" + this.remarkName + "] 开始执行远方好物任务...");
      console.log("\n📅 [" + this.remarkName + "] 检查签到状态...");
      const _0x735a36 = await this.getSignInInfo();
      if (_0x735a36) {
        const _0x380402 = new Date().toISOString().split("T")[0],
          _0x1f146b = _0x735a36.signInDetails?.["find"](_0x4083fb => _0x4083fb.signDime.startsWith(_0x380402.replace(/-/g, "-")));
        if (_0x1f146b && _0x1f146b.signInStatus === 1) console.log("✅ [" + this.remarkName + "] 今日已签到，连续" + _0x735a36.continuousDays + "天");else {
          if (_0x735a36.signInToday === 0) console.log("🚀 [" + this.remarkName + "] 开始执行签到..."), await this.doSignIn();else {
            console.log("✅ [" + this.remarkName + "] 签到状态正常");
          }
        }
      }
      const _0x2faaab = await this.getTaskList();
      if (!_0x2faaab) return console.log("❌ [" + this.remarkName + "] 获取任务列表失败"), false;
      console.log("📋 [" + this.remarkName + "] 当前积分: " + _0x2faaab.user.points);
      let _0x3cd0e6 = 0,
        _0x4b70c0 = 0;
      for (const _0xc8826d of _0x2faaab.tasks) {
        const _0x21a7c6 = _0xc8826d.title,
          _0x29ea6e = _0xc8826d.type,
          _0xc9ad43 = _0xc8826d.isCompleted,
          _0x13c578 = _0xc8826d.currentValue,
          _0x3dd07f = _0xc8826d.limitValue,
          _0x3d57ff = _0xc8826d.rewardPoints;
        if (!_0xc9ad43) {
          console.log("\n📌 [" + this.remarkName + "] 任务: " + _0x21a7c6 + " (" + _0x13c578 + "/" + _0x3dd07f + ") - " + _0x3d57ff + "积分");
        }
        if (!_0xc9ad43) {
          let _0x1bb5cf = false;
          _0x29ea6e === "VIEW_NUM" ? _0x1bb5cf = await this.completeViewTask(_0x13c578, _0x3dd07f) : _0x1bb5cf = await this.completeTask(_0x29ea6e);
          if (_0x1bb5cf) {
            _0x3cd0e6++;
            _0x4b70c0 += _0x3d57ff;
            const _0x5e9a0c = _0x2faaab.tasks.filter(_0x5d9886 => !_0x5d9886.isCompleted).length - _0x3cd0e6;
            if (_0x5e9a0c > 0) {
              const _0x2deca6 = Math.floor(Math.random() * 4 + 5) * 1000;
              console.log("⏳ [" + this.remarkName + "] 等待 " + _0x2deca6 / 1000 + " 秒后执行下一个任务...");
              await new Promise(_0x449d0c => setTimeout(_0x449d0c, _0x2deca6));
            }
          } else console.log("❌ [" + this.remarkName + "] " + _0x21a7c6 + " 执行失败");
        } else console.log("✅ [" + this.remarkName + "] " + _0x21a7c6 + " 已完成，跳过");
      }
      if (_0x3cd0e6 > 0) {
        const _0x14906c = await this.getSignInInfo(),
          _0x31f082 = _0x14906c ? _0x14906c.integral : "未知";
        print("🎉 [" + this.remarkName + "] 完成" + _0x3cd0e6 + "个任务，获得" + _0x4b70c0 + "积分，当前积分: " + _0x31f082 + " 💰", true);
      } else print("📝 [" + this.remarkName + "] 暂无可执行的任务", true);
      return true;
    } catch (_0x1f317e) {
      return console.log("❌ [" + this.remarkName + "] 业务逻辑执行出错：" + _0x1f317e.message), false;
    }
  }
  async ["run"]() {
    try {
      const _0x38bc80 = this.loadTokenCache();
      if (_0x38bc80) {
        const _0x472b90 = await this.executeBusinessLogic();
        if (!_0x472b90) {
          console.log("⚠️ [" + this.remarkName + "] 使用缓存执行失败，尝试重新登录...");
          const _0x397265 = await this.performFullLogin();
          if (!_0x397265) return console.log("❌ [" + this.remarkName + "] 重新登录失败，跳过当前账号"), false;
          const _0x4d9566 = await this.executeBusinessLogic();
          if (!_0x4d9566) return console.log("❌ [" + this.remarkName + "] 重新登录后仍失败，跳过当前账号"), false;
        }
      } else {
        const _0x2dcd71 = await this.performFullLogin();
        if (!_0x2dcd71) return console.log("❌ [" + this.remarkName + "] 完整登录失败，跳过当前账号"), false;
        const _0x46ec56 = await this.executeBusinessLogic();
        if (!_0x46ec56) return console.log("❌ [" + this.remarkName + "] 业务逻辑执行失败，跳过当前账号"), false;
      }
      return true;
    } catch (_0x4538f3) {
      console.log("❌ [" + this.remarkName + "] 脚本执行出错：" + _0x4538f3.message);
      isDebug && console.error(_0x4538f3);
    }
  }
}
async function main() {
  console.log("🚀 " + scriptName + "开始...");
  if (KAMI_VERIFY_SWITCH === 1) {
    const _0x4284b9 = await verifyKami(kamiKey);
    !_0x4284b9.success && (console.log("❌ 卡密验证失败: " + _0x4284b9.message), process.exit(1));
    console.log("✅ 卡密验证成功");
    if (_0x4284b9.data) {
      const _0x1fbf94 = _0x4284b9.data;
      if (_0x1fbf94.card_type === "time") console.log("   有效期: " + _0x1fbf94.duration + " 天");else _0x1fbf94.card_type === "count" && (console.log("   剩余次数: " + _0x1fbf94.remaining_count), console.log("   总次数: " + _0x1fbf94.total_count));
    }
  } else console.log("🔓 卡密验证已关闭，跳过验证步骤");
  console.log("=".repeat(60) + "\n");
  console.log("✨ 最低999分兑换物品✨");
  console.log("=".repeat(60) + "\n");
  isDebug && (console.log("[DEBUG] 调试模式已开启"), console.log("[DEBUG] APPID: " + APPID));
  if (!wxidList) {
    console.log("❌ 未设置环境变量 TXX_WXID");
    return;
  }
  const _0xd85caa = cmdWxid ? [cmdWxid] : parseWxidList(wxidList);
  if (_0xd85caa.length === 0) {
    console.log("❌ 没有找到有效的wxid");
    return;
  }
  console.log("📋 共找到 " + _0xd85caa.length + " 个有效账号");
  isDebug && console.log("[DEBUG] 账号列表: " + _0xd85caa.join(", "));
  const _0x3cb283 = [];
  for (let _0x32504f = 0; _0x32504f < _0xd85caa.length; _0x32504f++) {
    const _0x5b7738 = _0xd85caa[_0x32504f],
      _0x1293cb = typeof wxcode.getRemarkName === "function" ? wxcode.getRemarkName(_0x5b7738) : _0x5b7738;
    console.log("\n🚀 [" + (_0x32504f + 1) + "/" + _0xd85caa.length + "] 开始处理账号: " + _0x1293cb + " (" + _0x5b7738 + ")");
    try {
      const _0x12c329 = new ScriptTemplate(_0x5b7738),
        _0x3e7632 = await _0x12c329.run();
      _0x3e7632 && _0x3cb283.push(_0x12c329);
    } catch (_0x6faf50) {
      console.log("❌ [" + (_0x32504f + 1) + "/" + _0xd85caa.length + "] 账号 " + _0x1293cb + " 处理失败: " + _0x6faf50.message);
      isDebug && console.error(_0x6faf50);
    }
    console.log("─".repeat(60));
    _0x32504f < _0xd85caa.length - 1 && (await new Promise(_0x42df4f => setTimeout(_0x42df4f, 5000)));
  }
  console.log("\n🎉 所有账号处理完成！");
  if (_0x3cb283.length > 0) {
    console.log("\n🛍️ 正在获取积分商城商品信息...");
    try {
      const _0x235bb7 = _0x3cb283[_0x3cb283.length - 1],
        _0x2ea37b = await _0x235bb7.getIntegralGoodsList();
      _0x235bb7.displayIntegralGoods(_0x2ea37b);
    } catch (_0x421d14) {
      console.log("❌ 获取积分商城商品失败: " + _0x421d14.message);
    }
  }
  if (NOTICE_SWITCH && notice) {
    await sendMsg(notice);
  }
}
let notice = "";
function print(_0x48b22f, _0x3a471e = false) {
  let _0x479379 = "" + _0x48b22f;
  console.log(_0x479379);
  NOTICE_SWITCH && _0x3a471e && (notice += _0x479379 + "\n");
}
async function sendMsg(_0x1846db) {
  try {
    let _0x45d8c9 = "";
    try {
      _0x45d8c9 = require("./sendNotify");
    } catch (_0x4eaa19) {
      try {
        _0x45d8c9 = require("../sendNotify");
      } catch (_0x42a297) {
        console.log("❌ 未找到sendNotify模块，无法发送通知");
        return;
      }
    }
    await _0x45d8c9.sendNotify(scriptName, _0x1846db);
    console.log("📢 通知发送成功");
  } catch (_0x469130) {
    console.log("❌ 通知发送失败: " + _0x469130.message);
  }
}
main().catch(console.error);