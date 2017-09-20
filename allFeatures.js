class IOCore {constructor (ioFunc) {this.then = cb => ioFunc((...args) => cb(...args));};map (transform) {let saveThen = this.then;this.then = cb => {saveThen((...args) => {let result = transform(...args);if (result !== undefined) {if (Array.isArray(result)) {cb(...result);} else {cb(result);}}});};return this;};bind (ioFunc) {let saveThen = this.then;this.then = cb => {saveThen((...args) => {if (args !== undefined) {let _args = ioFunc.length < args.length ? args.slice(0, ioFunc.length) : args;let cbReturn = ioFunc(..._args);if (cbReturn !== undefined) {let cbReturnLen = cbReturn.length;let io = cbReturn[cbReturnLen - 1];let argsForCb = cbReturn.slice(0, cbReturnLen - 1);io.then((...ioargs) => cb(...argsForCb, ...ioargs));}}});};return this;};static timer (s) {var intervalId;var timer = new IOCore(cb => {intervalId = setInterval(cb, Math.floor(s * 1000))});timer.clear = () => clearInterval(intervalId);return timer;};static createIO (ioFunc) {return new IOCore(ioFunc);};};const readline = require('readline');const rlConfig = {input: process.stdin,output: process.stdout}; class IO extends IOCore {static getLine (str) {const rl = readline.createInterface(rlConfig);return new IO(cb => rl.question(str, cb)).map(data => {rl.close();return data;});};static putLine (...data) {return new IO(cb => process.nextTick(cb, data)).map(data => {console.log(...data);return data});};};

global.IO = IO

const request = require('request');
const a = 1;
const b = 'a';
const c = true;
const d = false;
const e = null;
const f = b + 'b';
const g = 4 * 3 / (7 ** 9 - 15 + 75 * 9);
const sum = (a, b) => a + b;
const product = (a, b) => a * b;
const h = sum(4, 5) ** 1 + (16 * 7 / (4 + a) - product(2, sum(1, 2)));
const sqr = (a => a * a)(4);
console.log(h, sqr);
const letin = (x => x ** 4 * 5)(15);
const caller = () =>
  (IO.getLine('random string').bind(a => [
    a,
    IO.createIO(cb => request('http://google.com', cb))
  ]).bind((a, err, res) => {
    if (err instanceof Error) {
      (IO.putLine(err).then(() => null))
      return
    }
    let ob = { f: 25 };
    Object.defineProperty(ob, 'b', {
      value: 45,
      enumerable: true,
      writable: true,
      configurable: true
    });
    console.log(ob);
    (delete ob.b)
    console.log(ob);
    return [
      a,
      err,
      res,
      ob,
      IO.putLine(res.request.uri)
    ]
  }).map((a, err, res, ob) => [res.toJSON]));
caller().bind(body => [
  body,
  IO.putLine(body)
]).then(() => []);
const main = IO.putLine(' Hello world').then(() => [])
