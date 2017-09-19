class IOCore {constructor (ioFunc) {this.then = cb => ioFunc((...args) => cb(...args));};map (transform) {let saveThen = this.then;this.then = cb => {saveThen((...args) => {let result = transform(...args);if (result !== undefined) {if (Array.isArray(result)) {cb(...result);} else {cb(result);}}});};return this;};bind (ioFunc) {let saveThen = this.then;this.then = cb => {saveThen((...args) => {if (args !== undefined) {let _args = ioFunc.length < args.length ? args.slice(0, ioFunc.length) : args;let cbReturn = ioFunc(..._args);if (cbReturn !== undefined) {let cbReturnLen = cbReturn.length;let io = cbReturn[cbReturnLen - 1];let argsForCb = cbReturn.slice(0, cbReturnLen - 1);io.then((...ioargs) => cb(...argsForCb, ...ioargs));}}});};return this;};static timer (s) {var intervalId;var timer = new IOCore(cb => {intervalId = setInterval(cb, Math.floor(s * 1000))});timer.clear = () => clearInterval(intervalId);return timer;};static createIO (ioFunc) {return new IOCore(ioFunc);};};const readline = require('readline');const rlConfig = {input: process.stdin,output: process.stdout}; class IO extends IOCore {static getLine (str) {const rl = readline.createInterface(rlConfig);return new IO(cb => rl.question(str, cb)).map(data => {rl.close();return data;});};static putLine (...data) {return new IO(cb => process.nextTick(cb, data)).map(data => {console.log(...data);return data});};};

global.IO = IO

const request = require('request');
const data = () =>
  (IO.createIO(cb => request('http://artii.herokuapp.com/make?text=data', cb)).map((err, res, body) => [body]));
const compute = IO.createIO(cb => request('http://artii.herokuapp.com/make?text=compute1', cb)).bind((err, res, body, val2) => [
  err,
  res,
  body,
  val2,
  data()
]).bind((err, res, body, val2, a) => [
  err,
  res,
  body,
  val2,
  a,
  IO.putLine(a)
]).then((err, res, body, val2, a) => {
  if (err instanceof Error) {
    (IO.putLine(err).then(() => null))
    return
  }
  if (val2 === undefined) {
    (IO.putLine('encountered undefined').then(() => null))
    return
  }
  if (err === null) {
    (IO.putLine('no error').then(() => null))
    return
  }
});
const compute2 = IO.createIO(cb => request('http://artii.herokuapp.com/make?text=compute2', cb)).map((err, res, body) => {
  let a = res.body;
  return [
    err,
    res,
    body,
    a
  ]
}).bind((err, res, body, a) => [
  err,
  res,
  body,
  a,
  IO.putLine(a + 'deactivated')
]).bind((err, res, body, a) => [data()]).then((err, res, body, a) => [data])
