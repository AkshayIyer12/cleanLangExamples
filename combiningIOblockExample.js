class IOCore {constructor (ioFunc) {this.then = cb => ioFunc((...args) => cb(...args));};map (transform) {let saveThen = this.then;this.then = cb => {saveThen((...args) => {let result = transform(...args);if (result !== undefined) {if (Array.isArray(result)) {cb(...result);} else {cb(result);}}});};return this;};bind (ioFunc) {let saveThen = this.then;this.then = cb => {saveThen((...args) => {if (args !== undefined) {let _args = ioFunc.length < args.length ? args.slice(0, ioFunc.length) : args;let cbReturn = ioFunc(..._args);if (cbReturn !== undefined) {let cbReturnLen = cbReturn.length;let io = cbReturn[cbReturnLen - 1];let argsForCb = cbReturn.slice(0, cbReturnLen - 1);io.then((...ioargs) => cb(...argsForCb, ...ioargs));}}});};return this;};static timer (s) {var intervalId;var timer = new IOCore(cb => {intervalId = setInterval(cb, Math.floor(s * 1000))});timer.clear = () => clearInterval(intervalId);return timer;};static createIO (ioFunc) {return new IOCore(ioFunc);};};const readline = require('readline');const rlConfig = {input: process.stdin,output: process.stdout}; class IO extends IOCore {static getLine (str) {const rl = readline.createInterface(rlConfig);return new IO(cb => rl.question(str, cb)).map(data => {rl.close();return data;});};static putLine (...data) {return new IO(cb => process.nextTick(cb, data)).map(data => {console.log(...data);return data});};};

global.IO = IO

const request = require('request');
const fact = n => {
  switch (n) {
  case 1:
    return 1;
  default:
    return n * fact(n - 1)
  }
};
const computeFact = () =>
  (IO.getLine('enter value for factorial: ').bind(num => {
    let val = fact(parseInt(num));
    return [
      num,
      val,
      IO.putLine(val)
    ]
  }).map((num, val) => [String(val)]));
const getAscii = () =>
  (computeFact().bind(data => {
    let link = 'http://artii.herokuapp.com/make?text=' + data;
    return [
      data,
      link,
      IO.createIO(cb => request(link, cb))
    ]
  }).bind((data, link, err, res, body) => {
    if (err instanceof Error) {
      (IO.putLine(err).then(() => null))
      return
    }
    return [
      data,
      link,
      err,
      res,
      body,
      IO.putLine(res)
    ]
  }).bind((data, link, err, res, body) => [
    data,
    link,
    err,
    res,
    body,
    IO.putLine(body)
  ]).map((data, link, err, res, body) => [body]));
const tempIO = getAscii;
const main = tempIO().then(() => null)
