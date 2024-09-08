//Sun Sep 08 2024 13:43:29 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    wait: _0x50bae8,
    checkCk: _0x38d5d1,
    getCookies: _0x515ad8,
    getUserInfo: _0x464f6c,
    validateCarmeWithType: _0x2f885,
    commonRequest: _0x139ea1,
    getCookieMap: _0x29d5e3
  } = require("./common.js"),
  _0x33c6e3 = 15,
  _0x2a23c3 = process.env.ELE_CARME,
  {
    sendNotify: _0xfb6d66
  } = require("./sendNotify1.js");
function _0x4661f2(_0xc98636) {
  return Object.values(_0xc98636).length === 0;
}
async function _0x4c130f(_0x160ae5, _0x13d576) {
  const _0x19c1de = _0x29d5e3(_0x160ae5);
  !_0x19c1de.has("wxUid") ? console.log("没有获取到推送 uid，不推送消息\n") : await _0xfb6d66("饿了么中奖推送", _0x13d576, {
    uid: _0x19c1de.get("wxUid")
  });
}
async function _0x2ed212(_0x4ee0c0, _0x2fcd98, _0x167f1a, _0x43de8f = "1608030065155%40eleme_android_11.1.38") {
  let _0x715600 = await _0x139ea1(_0x4ee0c0, JSON.stringify(_0x167f1a), _0x2fcd98, _0x33c6e3, "", process.env.x5sec);
  try {
    let _0xeabaad = _0x715600.data;
    return _0x4661f2(_0xeabaad) && _0x715600.ret[0].indexOf("接口调用成功") === -1 ? (_0x715600.ret[0] && console.log(_0x715600.ret[0]), null) : _0xeabaad;
  } catch (_0x4a55df) {
    return null;
  }
}
async function _0x13af81(_0x508216, _0x173984) {
  const _0x3ea2de = {
    missionCollectionId: _0x173984,
    locationInfos: "[\"{\\\"lng\\\":120.21993197500706,\\\"lat\\\":30.178378857672215}\"]",
    accountPlan: "HAVANA_COMMON",
    remindInfo: "false"
  };
  let _0x5ab88c = await _0x2ed212(_0x508216, "mtop.ele.biz.growth.task.core.querytask", _0x3ea2de);
  if (_0x5ab88c) {
    const _0x31b9ff = _0x5ab88c.mlist;
    for (let _0x3c0537 = 0; _0x3c0537 < _0x31b9ff.length; _0x3c0537++) {
      const _0xe4906f = _0x31b9ff[_0x3c0537];
      let _0x55a827 = _0xe4906f.missionCollectionId,
        _0x337cf7 = _0xe4906f.missionDefId;
      if (_0xe4906f.receiveStatus === "TORECEIVE" && _0xe4906f.status === "FINISH") {
        await _0x7e274c(_0x508216, _0x337cf7, _0x55a827, _0xe4906f.missionXId);
      } else {
        if (_0xe4906f.actionConfig.actionType === "PAGEVIEW" && _0xe4906f.status === "RUNNING") {
          let _0x20048b = "KB_ORCHARD";
          _0xe4906f.showTitle.indexOf("去游乐园") !== -1 && (_0x20048b = "HAVANA_COMMON");
          let _0x4dc4e5 = await _0x25ff91(_0x508216, _0x55a827, _0x337cf7);
          if (_0x4dc4e5.status === "RUNNING") {
            await _0x5a2df7(_0x508216, _0x337cf7, _0x55a827, _0xe4906f.actionConfig.actionValue.pageSpm, _0x20048b);
            await _0x50bae8(3);
            let _0x5dff41 = await _0x7f126f(_0x508216, _0x55a827);
            for (let _0x3bfa6d = 0; _0x3bfa6d < _0x5dff41.length; _0x3bfa6d++) {
              let _0x1c852d = _0x5dff41[_0x3bfa6d];
              _0x1c852d.receiveStatus === "TORECEIVE" && _0x1c852d.status === "FINISH" && (await _0x37038c(_0x508216, _0x337cf7, _0x55a827, _0x1c852d.id));
            }
          } else {
            await _0x37038c(_0x508216, _0x337cf7, _0x55a827, _0x4dc4e5.id);
          }
        }
      }
    }
  }
}
async function _0x7e274c(_0x28d5cb, _0x1bfdb6, _0x362583) {
  const _0x4955dc = {
    missionCollectionId: _0x362583,
    missionId: _0x1bfdb6,
    locationInfos: "[\"{\\\"lng\\\":\\\"120.21993197500706\\\",\\\"lat\\\":\\\"30.178378857672215\\\"}\"]",
    bizScene: "duobao_external",
    accountPlan: "HAVANA_COMMON",
    count: "1",
    asac: "2A233157IJYIGQ95WFIIFJ",
    umiToken: "1",
    ua: "1"
  };
  let _0x3898cc = await _0x2ed212(_0x28d5cb, "mtop.ele.biz.growth.task.core.receiveprize", _0x4955dc, "h5%40chrome_android_87.0.4280.141");
  _0x3898cc && _0x3898cc.rlist && console.log("完成任务");
}
async function _0x25ff91(_0x5c8655, _0x51b128, _0x49c4b0) {
  const _0x5e33db = {
    missionCollectionId: _0x51b128,
    missionId: _0x49c4b0,
    bizScene: "duobao_external",
    accountPlan: "KB_ORCHARD",
    locationInfos: "[\"{\\\"lng\\\":\\\"120.21993197500706\\\",\\\"lat\\\":\\\"30.178378857672215\\\"}\"]"
  };
  let _0x2acf45 = await _0x2ed212(_0x5c8655, "mtop.ele.biz.growth.task.core.querytask", _0x5e33db);
  if (_0x2acf45) {
    return _0x2acf45.mlist[0];
  }
}
async function _0x7f126f(_0x170eae, _0x15ac36) {
  const _0x3df0aa = {
    missionCollectionId: _0x15ac36,
    locationInfos: "[\"{\\\"lng\\\":120.21993197500706,\\\"lat\\\":30.178378857672215}\"]",
    accountPlan: "HAVANA_COMMON",
    remindInfo: "false"
  };
  let _0x4adaab = await _0x2ed212(_0x170eae, "mtop.ele.biz.growth.task.core.querytask", _0x3df0aa);
  if (_0x4adaab) {
    return _0x4adaab.mlist;
  }
}
async function _0x37038c(_0x412f55, _0x55c572, _0x559626, _0x2bd0ee) {
  const _0x369050 = {
    missionCollectionId: _0x559626,
    missionId: _0x55c572,
    locationInfos: "[\"{\\\"lng\\\":\\\"120.21993197500706\\\",\\\"lat\\\":\\\"30.178378857672215\\\"}\"]",
    bizScene: "duobao_external",
    accountPlan: "HAVANA_COMMON",
    instanceId: _0x2bd0ee,
    count: "1",
    asac: "2A233157IJYIGQ95WFIIFJ",
    umiToken: "1",
    ua: "1"
  };
  let _0x2545bb = await _0x2ed212(_0x412f55, "mtop.ele.biz.growth.task.core.receiveprize", _0x369050, "h5%40chrome_android_87.0.4280.141");
  _0x2545bb && _0x2545bb.rlist && console.log("完成任务");
}
async function _0x1e39a7(_0x4cccc8, _0x437b36) {
  const _0x45edfb = {
    channel: "ELMC",
    blockList: "[\"luckyNumber\",\"participants\",\"property\",\"winnerList\",\"wonDetail\",\"noWonPrize\"]",
    rightId: _0x437b36,
    bizScene: "duobao_external"
  };
  let _0x3a586f = await _0x2ed212(_0x4cccc8, "mtop.koubei.interactioncenter.snatch.new.detail", _0x45edfb),
    _0x439f49 = _0x3a586f.data;
  _0x439f49 && console.log(_0x439f49.baseInfo.title, "中奖率，已翻" + _0x439f49.properties.hasExchangeNum + "倍");
}
async function _0x5a2df7(_0x8cf353, _0x29c649, _0x5852db, _0x2c5331, _0x58e868) {
  const _0x12a236 = {
    collectionId: _0x5852db,
    missionId: _0x29c649,
    actionCode: "PAGEVIEW",
    pageFrom: _0x2c5331,
    viewTime: "15",
    bizScene: "duobao_external",
    accountPlan: _0x58e868,
    sync: "false",
    asac: "2A21607NIIT1ND5C4YXJ6C"
  };
  return await _0x2ed212(_0x8cf353, "mtop.ele.biz.growth.task.event.pageview", _0x12a236);
}
async function _0x7c1ae8(_0x5c1976, _0x2a0862, _0x22e15c) {
  const _0x456cd1 = {
    missionCollectionId: _0x2a0862,
    missionId: _0x22e15c,
    locationInfos: "[\"{\\\"lng\\\":\\\"120.21993197500706\\\",\\\"lat\\\":\\\"30.178378857672215\\\"}\"]",
    bizScene: "duobao_external",
    accountPlan: "HAVANA_COMMON",
    count: "1",
    hsf: "1"
  };
  return await _0x2ed212(_0x5c1976, "mtop.ele.biz.growth.task.core.receiveprize", _0x456cd1);
}
async function _0x54e30b(_0x26f925) {
  const _0x15419a = {
    channel: "ELMC",
    blockList: "[\"participants\",\"wonDetail\",\"noWonPrize\"]",
    bizScene: "duobao_external"
  };
  console.log("\n开始查询最近的夺宝结果");
  let _0x4c0022 = await _0x2ed212(_0x26f925, "mtop.koubei.interactioncenter.snatch.mine", _0x15419a);
  if (_0x4c0022) {
    let _0x159c87 = _0x4c0022.data;
    if (_0x159c87.length > 0) {
      for (let _0x26edcb = 0; _0x26edcb < _0x159c87.length; _0x26edcb++) {
        let _0x36fdd2 = _0x159c87[_0x26edcb];
        _0x36fdd2.awardStatus === "not_won_wait_accept" && (await _0x3f0c4a(_0x26f925, _0x36fdd2.baseInfo.id), await _0x50bae8(1));
      }
    } else {
      console.log("没有参与过夺宝");
    }
  }
}
async function _0x3f0c4a(_0x456748, _0xf10066) {
  const _0x349a65 = {
    rightId: _0xf10066,
    actId: "20210425163619036128611204",
    asac: "2A23725HM0AS2TZ458W1VX",
    bizScene: "duobao_external"
  };
  let _0x245c51 = await _0x2ed212(_0x456748, "mtop.koubei.interactioncenter.snatch.nowon.reviceprize", _0x349a65);
  _0x245c51 && console.log("0 元夺宝获得：" + _0x245c51.data[0].title);
}
async function _0x96fbad(_0x5b8c13) {
  const _0x2864aa = {
    channel: "ELMC",
    blockList: "[\"participants\",\"wonDetail\",\"noWonPrize\"]",
    longitude: "120.21993197500706",
    latitude: "30.178378857672215",
    actId: "20230811111144939171438583",
    cpnCode: "TIMING_RIGHT",
    cpnCollectionId: "20230811111144993902427153",
    statusSet: "[\"ONLINE\",\"PREPARE\"]",
    showStatusSet: "[\"ONLINE\",\"PREPARE\"]",
    bizScene: "duobao_external"
  };
  let _0x5f2711 = await _0x2ed212(_0x5b8c13, "mtop.koubei.interactioncenter.snatch.homepage.query", _0x2864aa);
  return _0x5f2711.data;
}
async function _0x4dc61(_0x21e36b) {
  let _0x545f01 = await _0x96fbad(_0x21e36b);
  if (_0x545f01) {
    let _0x330ae0 = _0x545f01.groupSnatchList.EXCELLENT;
    console.log("\n开始夺宝");
    for (let _0x1c0ff8 = 0; _0x1c0ff8 < _0x330ae0.length; _0x1c0ff8++) {
      let _0x100f81 = _0x330ae0[_0x1c0ff8];
      if (_0x100f81.status === "ONLINE" && !_0x100f81.properties.hasParticipated) {
        let _0x4a7795 = _0x100f81.properties,
          _0x1d0be7 = _0x100f81.propertyConsumeList;
        _0x1d0be7[0].amount !== 0 && (await _0x13af81(_0x21e36b, _0x4a7795.taskSetId));
        let _0x2fcc8d = await _0x7c1ae8(_0x21e36b, _0x4a7795.taskSetId, _0x4a7795.popTaskId);
        _0x2fcc8d && console.log("参与", _0x100f81.baseInfo.title, "夺宝成功");
        await _0x50bae8(2);
      }
    }
  }
}
async function _0x5eee16(_0x3d89ed) {
  let _0x2f4004 = await _0x96fbad(_0x3d89ed);
  if (_0x2f4004) {
    let _0x4e9651 = _0x2f4004.groupSnatchList.EXCELLENT;
    console.log("\n开始做翻倍任务");
    for (let _0x3235ea = 0; _0x3235ea < _0x4e9651.length; _0x3235ea++) {
      let _0x191e66 = _0x4e9651[_0x3235ea];
      if (_0x191e66.status === "ONLINE") {
        let _0x124f4f = _0x191e66.properties.hasParticipated;
        if (_0x124f4f) {
          let _0x3386a5 = _0x191e66.properties.taskSetId;
          console.log("\n开始翻倍");
          await _0x13af81(_0x3d89ed, _0x3386a5);
          console.log("\n翻倍任务完成");
        }
        await _0x1e39a7(_0x3d89ed, _0x191e66.baseInfo.rightId);
        await _0x50bae8(2);
      }
    }
  }
}
(async function () {
  await _0x2f885(_0x2a23c3, 1);
  const _0xf3d495 = _0x515ad8();
  for (let _0x2d9633 = 0; _0x2d9633 < _0xf3d495.length; _0x2d9633++) {
    const _0x3bb133 = _0xf3d495[_0x2d9633];
    if (!_0x3bb133) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let _0x25f8a3 = await _0x38d5d1(_0x3bb133, _0x2d9633);
        if (!_0x25f8a3) {
          continue;
        }
        let _0x356c5c = await _0x464f6c(_0x25f8a3);
        if (!_0x356c5c.username) {
          console.log("第", _0x2d9633 + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        console.log("****** #", _0x2d9633 + 1, _0x356c5c.username, "*********");
        await _0x54e30b(_0x25f8a3);
        await _0x4dc61(_0x25f8a3);
        await _0x5eee16(_0x25f8a3);
      } catch (_0x481809) {
        console.log(_0x481809);
      }
    }
  }
  process.exit(0);
})();
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
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
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
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
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
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
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}