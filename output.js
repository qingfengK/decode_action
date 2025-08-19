//Tue Aug 19 2025 14:19:52 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
// prettier-ignore
function randomPattern(pattern, chars = "abcdef0123456789") {
  let result = "";
  for (let char of pattern) {
    if (char === "x") {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    } else if (char === "X") {
      result += chars.charAt(Math.floor(Math.random() * chars.length)).toUpperCase();
    } else {
      result += char;
    }
  }
  return result;
}
function getUuid() {
  const uuid = [randomPattern("xxxxxxxx"), randomPattern("xxxx"), randomPattern("4xxx"), randomPattern("xxxx"), randomPattern("xxxxxxxxxxxx")];
  return uuid.join("-");
}
function getRandomChars(n = 16) {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < n; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
function md5(t, e) {
  function n(t, e) {
    return t << e | t >>> 32 - e;
  }
  function r(t, e) {
    var n, r, o, i, a;
    return o = 2147483648 & t, i = 2147483648 & e, a = (1073741823 & t) + (1073741823 & e), (n = 1073741824 & t) & (r = 1073741824 & e) ? 2147483648 ^ a ^ o ^ i : n | r ? 1073741824 & a ? 3221225472 ^ a ^ o ^ i : 1073741824 ^ a ^ o ^ i : a ^ o ^ i;
  }
  function o(t, e, o, i, a, u, c) {
    return t = r(t, r(r(function (t, e, n) {
      return t & e | ~t & n;
    }(e, o, i), a), c)), r(n(t, u), e);
  }
  function i(t, e, o, i, a, u, c) {
    return t = r(t, r(r(function (t, e, n) {
      return t & n | e & ~n;
    }(e, o, i), a), c)), r(n(t, u), e);
  }
  function a(t, e, o, i, a, u, c) {
    return t = r(t, r(r(function (t, e, n) {
      return t ^ e ^ n;
    }(e, o, i), a), c)), r(n(t, u), e);
  }
  function u(t, e, o, i, a, u, c) {
    return t = r(t, r(r(function (t, e, n) {
      return e ^ (t | ~n);
    }(e, o, i), a), c)), r(n(t, u), e);
  }
  function c(t) {
    var e,
      n = "",
      r = "";
    for (e = 0; e <= 3; e++) n += (r = "0" + (t >>> 8 * e & 255).toString(16)).substr(r.length - 2, 2);
    return n;
  }
  var s,
    l,
    f,
    p,
    d,
    h,
    v,
    y,
    g,
    m = Array();
  for (m = function (t) {
    for (var e, n = t.length, r = n + 8, o = 16 * ((r - r % 64) / 64 + 1), i = Array(o - 1), a = 0, u = 0; u < n;) a = u % 4 * 8, i[e = (u - u % 4) / 4] = i[e] | t.charCodeAt(u) << a, u++;
    return a = u % 4 * 8, i[e = (u - u % 4) / 4] = i[e] | 128 << a, i[o - 2] = n << 3, i[o - 1] = n >>> 29, i;
  }(t = function (t) {
    t = t.replace(/\r\n/g, "\n");
    for (var e = "", n = 0; n < t.length; n++) {
      var r = t.charCodeAt(n);
      r < 128 ? e += String.fromCharCode(r) : r > 127 && r < 2048 ? (e += String.fromCharCode(r >> 6 | 192), e += String.fromCharCode(63 & r | 128)) : (e += String.fromCharCode(r >> 12 | 224), e += String.fromCharCode(r >> 6 & 63 | 128), e += String.fromCharCode(63 & r | 128));
    }
    return e;
  }(t)), h = 1732584193, v = 4023233417, y = 2562383102, g = 271733878, s = 0; s < m.length; s += 16) l = h, f = v, p = y, d = g, h = o(h, v, y, g, m[s + 0], 7, 3614090360), g = o(g, h, v, y, m[s + 1], 12, 3905402710), y = o(y, g, h, v, m[s + 2], 17, 606105819), v = o(v, y, g, h, m[s + 3], 22, 3250441966), h = o(h, v, y, g, m[s + 4], 7, 4118548399), g = o(g, h, v, y, m[s + 5], 12, 1200080426), y = o(y, g, h, v, m[s + 6], 17, 2821735955), v = o(v, y, g, h, m[s + 7], 22, 4249261313), h = o(h, v, y, g, m[s + 8], 7, 1770035416), g = o(g, h, v, y, m[s + 9], 12, 2336552879), y = o(y, g, h, v, m[s + 10], 17, 4294925233), v = o(v, y, g, h, m[s + 11], 22, 2304563134), h = o(h, v, y, g, m[s + 12], 7, 1804603682), g = o(g, h, v, y, m[s + 13], 12, 4254626195), y = o(y, g, h, v, m[s + 14], 17, 2792965006), h = i(h, v = o(v, y, g, h, m[s + 15], 22, 1236535329), y, g, m[s + 1], 5, 4129170786), g = i(g, h, v, y, m[s + 6], 9, 3225465664), y = i(y, g, h, v, m[s + 11], 14, 643717713), v = i(v, y, g, h, m[s + 0], 20, 3921069994), h = i(h, v, y, g, m[s + 5], 5, 3593408605), g = i(g, h, v, y, m[s + 10], 9, 38016083), y = i(y, g, h, v, m[s + 15], 14, 3634488961), v = i(v, y, g, h, m[s + 4], 20, 3889429448), h = i(h, v, y, g, m[s + 9], 5, 568446438), g = i(g, h, v, y, m[s + 14], 9, 3275163606), y = i(y, g, h, v, m[s + 3], 14, 4107603335), v = i(v, y, g, h, m[s + 8], 20, 1163531501), h = i(h, v, y, g, m[s + 13], 5, 2850285829), g = i(g, h, v, y, m[s + 2], 9, 4243563512), y = i(y, g, h, v, m[s + 7], 14, 1735328473), h = a(h, v = i(v, y, g, h, m[s + 12], 20, 2368359562), y, g, m[s + 5], 4, 4294588738), g = a(g, h, v, y, m[s + 8], 11, 2272392833), y = a(y, g, h, v, m[s + 11], 16, 1839030562), v = a(v, y, g, h, m[s + 14], 23, 4259657740), h = a(h, v, y, g, m[s + 1], 4, 2763975236), g = a(g, h, v, y, m[s + 4], 11, 1272893353), y = a(y, g, h, v, m[s + 7], 16, 4139469664), v = a(v, y, g, h, m[s + 10], 23, 3200236656), h = a(h, v, y, g, m[s + 13], 4, 681279174), g = a(g, h, v, y, m[s + 0], 11, 3936430074), y = a(y, g, h, v, m[s + 3], 16, 3572445317), v = a(v, y, g, h, m[s + 6], 23, 76029189), h = a(h, v, y, g, m[s + 9], 4, 3654602809), g = a(g, h, v, y, m[s + 12], 11, 3873151461), y = a(y, g, h, v, m[s + 15], 16, 530742520), h = u(h, v = a(v, y, g, h, m[s + 2], 23, 3299628645), y, g, m[s + 0], 6, 4096336452), g = u(g, h, v, y, m[s + 7], 10, 1126891415), y = u(y, g, h, v, m[s + 14], 15, 2878612391), v = u(v, y, g, h, m[s + 5], 21, 4237533241), h = u(h, v, y, g, m[s + 12], 6, 1700485571), g = u(g, h, v, y, m[s + 3], 10, 2399980690), y = u(y, g, h, v, m[s + 10], 15, 4293915773), v = u(v, y, g, h, m[s + 1], 21, 2240044497), h = u(h, v, y, g, m[s + 8], 6, 1873313359), g = u(g, h, v, y, m[s + 15], 10, 4264355552), y = u(y, g, h, v, m[s + 6], 15, 2734768916), v = u(v, y, g, h, m[s + 13], 21, 1309151649), h = u(h, v, y, g, m[s + 4], 6, 4149444226), g = u(g, h, v, y, m[s + 11], 10, 3174756917), y = u(y, g, h, v, m[s + 2], 15, 718787259), v = u(v, y, g, h, m[s + 9], 21, 3951481745), h = r(h, l), v = r(v, f), y = r(y, p), g = r(g, d);
  return 32 == e ? (c(h) + c(v) + c(y) + c(g)).toLowerCase() : (c(v) + c(y)).toLowerCase();
}
function sha1(msg) {
  function rotate_left(n, s) {
    var t4 = n << s | n >>> 32 - s;
    return t4;
  }
  ;
  function lsb_hex(val) {
    var str = "";
    var i;
    var vh;
    var vl;
    for (i = 0; i <= 6; i += 2) {
      vh = val >>> i * 4 + 4 & 15;
      vl = val >>> i * 4 & 15;
      str += vh.toString(16) + vl.toString(16);
    }
    return str;
  }
  ;
  function cvt_hex(val) {
    var str = "";
    var i;
    var v;
    for (i = 7; i >= 0; i--) {
      v = val >>> i * 4 & 15;
      str += v.toString(16);
    }
    return str;
  }
  ;
  function Utf8Encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode(c >> 6 | 192);
        utftext += String.fromCharCode(c & 63 | 128);
      } else {
        utftext += String.fromCharCode(c >> 12 | 224);
        utftext += String.fromCharCode(c >> 6 & 63 | 128);
        utftext += String.fromCharCode(c & 63 | 128);
      }
    }
    return utftext;
  }
  ;
  var blockstart;
  var i, j;
  var W = new Array(80);
  var H0 = 1732584193;
  var H1 = 4023233417;
  var H2 = 2562383102;
  var H3 = 271733878;
  var H4 = 3285377520;
  var A, B, C, D, E;
  var temp;
  msg = Utf8Encode(msg);
  var msg_len = msg.length;
  var word_array = new Array();
  for (i = 0; i < msg_len - 3; i += 4) {
    j = msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 | msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3);
    word_array.push(j);
  }
  switch (msg_len % 4) {
    case 0:
      i = 2147483648;
      break;
    case 1:
      i = msg.charCodeAt(msg_len - 1) << 24 | 8388608;
      break;
    case 2:
      i = msg.charCodeAt(msg_len - 2) << 24 | msg.charCodeAt(msg_len - 1) << 16 | 32768;
      break;
    case 3:
      i = msg.charCodeAt(msg_len - 3) << 24 | msg.charCodeAt(msg_len - 2) << 16 | msg.charCodeAt(msg_len - 1) << 8 | 128;
      break;
  }
  word_array.push(i);
  while (word_array.length % 16 != 14) word_array.push(0);
  word_array.push(msg_len >>> 29);
  word_array.push(msg_len << 3 & 4294967295);
  for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
    for (i = 0; i < 16; i++) W[i] = word_array[blockstart + i];
    for (i = 16; i <= 79; i++) W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
    A = H0;
    B = H1;
    C = H2;
    D = H3;
    E = H4;
    for (i = 0; i <= 19; i++) {
      temp = rotate_left(A, 5) + (B & C | ~B & D) + E + W[i] + 1518500249 & 4294967295;
      E = D;
      D = C;
      C = rotate_left(B, 30);
      B = A;
      A = temp;
    }
    for (i = 20; i <= 39; i++) {
      temp = rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 1859775393 & 4294967295;
      E = D;
      D = C;
      C = rotate_left(B, 30);
      B = A;
      A = temp;
    }
    for (i = 40; i <= 59; i++) {
      temp = rotate_left(A, 5) + (B & C | B & D | C & D) + E + W[i] + 2400959708 & 4294967295;
      E = D;
      D = C;
      C = rotate_left(B, 30);
      B = A;
      A = temp;
    }
    for (i = 60; i <= 79; i++) {
      temp = rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 3395469782 & 4294967295;
      E = D;
      D = C;
      C = rotate_left(B, 30);
      B = A;
      A = temp;
    }
    H0 = H0 + A & 4294967295;
    H1 = H1 + B & 4294967295;
    H2 = H2 + C & 4294967295;
    H3 = H3 + D & 4294967295;
    H4 = H4 + E & 4294967295;
  }
  var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
  return temp.toLowerCase();
}
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, r) => {
        s.call(this, t, (t, s, a) => {
          t ? r(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, r) => e(r));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        r = r ? r.replace(/\n/g, "").trim() : r;
        let a = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        a = a ? 1 * a : 20, a = e && e.timeout ? e.timeout : a;
        const [i, o] = r.split("@"),
          n = {
            url: `http://${o}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: a
            },
            headers: {
              "X-Key": i,
              Accept: "*/*"
            },
            timeout: a
          };
        this.post(n, (t, e, r) => s(r));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          r = !s && this.fs.existsSync(e);
        if (!s && !r) return {};
        {
          const r = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(r));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          r = !s && this.fs.existsSync(e),
          a = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, a) : r ? this.fs.writeFileSync(e, a) : this.fs.writeFileSync(t, a);
      }
    }
    lodash_get(t, e, s = void 0) {
      const r = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let a = t;
      for (const t of r) if (a = Object(a)[t], void 0 === a) return s;
      return a;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, r) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[r + 1]) >> 0 == +e[r + 1] ? [] : {}, t)[e[e.length - 1]] = s), t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, r] = /^@(.*?)\.(.*?)$/.exec(t),
          a = s ? this.getval(s) : "";
        if (a) try {
          const t = JSON.parse(a);
          e = t ? this.lodash_get(t, r, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, r, a] = /^@(.*?)\.(.*?)$/.exec(e),
          i = this.getval(r),
          o = r ? "null" === i ? null : i || "{}" : "{}";
        try {
          const e = JSON.parse(o);
          this.lodash_set(e, a, t), s = this.setval(JSON.stringify(e), r);
        } catch (e) {
          const i = {};
          this.lodash_set(i, a, t), s = this.setval(JSON.stringify(i), r);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          return this.data = this.loaddata(), this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient.get(t, (t, s, r) => {
            !t && s && (s.body = r, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, r);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          })), $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: r,
              headers: a,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: r,
              headers: a,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: r,
                statusCode: a,
                headers: i,
                rawBody: o
              } = t,
              n = s.decode(o, this.encoding);
            e(null, {
              status: r,
              statusCode: a,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: r,
              response: a
            } = t;
            e(r, a, a && s.decode(a.rawBody, this.encoding));
          });
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          })), $httpClient[s](t, (t, s, r) => {
            !t && s && (s.body = r, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, r);
          });
          break;
        case "Quantumult X":
          t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          })), $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: r,
              headers: a,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: r,
              headers: a,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let r = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: a,
            ...i
          } = t;
          this.got[s](a, i).then(t => {
            const {
                statusCode: s,
                statusCode: a,
                headers: i,
                rawBody: o
              } = t,
              n = r.decode(o, this.encoding);
            e(null, {
              status: s,
              statusCode: a,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: a
            } = t;
            e(s, a, a && r.decode(a.rawBody, this.encoding));
          });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let r = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in r) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[e] : ("00" + r[e]).substr(("" + r[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let r = t[s];
        null != r && "" !== r && ("object" == typeof r && (r = JSON.stringify(r)), e += `${s}=${r}&`);
      }
      return e = e.substring(0, e.length - 1), e;
    }
    msg(e = t, s = "", r = "", a) {
      const i = t => {
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                return {
                  url: t.url || t.openUrl || t["open-url"]
                };
              case "Loon":
                return {
                  openUrl: t.openUrl || t.url || t["open-url"],
                  mediaUrl: t.mediaUrl || t["media-url"]
                };
              case "Quantumult X":
                return {
                  "open-url": t["open-url"] || t.url || t.openUrl,
                  "media-url": t["media-url"] || t.mediaUrl,
                  "update-pasteboard": t["update-pasteboard"] || t.updatePasteboard
                };
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(e, s, r, i(a));
          break;
        case "Quantumult X":
          $notify(e, s, r, i(a));
        case "Node.js":
      }
      if (!this.isMuteLog) {
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e), s && t.push(s), r && t.push(r), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, t.stack);
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}