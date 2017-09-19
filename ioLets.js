class IOCore {
  constructor (ioFunc) {
    this.then = cb => ioFunc((...args) => cb(...args))
  }
  map (transform) {
    let saveThen = this.then
    this.then = cb => {
      saveThen((...args) => {
        let result = transform(...args)
        if (result !== undefined) {
          if (Array.isArray(result)) {
            cb(...result)
          } else {
            cb(result)
          }
        }
      })
    }
    return this
  }
  bind (ioFunc) {
    let saveThen = this.then
    this.then = cb => {
      saveThen((...args) => {
        if (args !== undefined) {
          let _args = ioFunc.length < args.length ? args.slice(0, ioFunc.length) : args
          let cbReturn = ioFunc(..._args)
          if (cbReturn !== undefined) {
            let cbReturnLen = cbReturn.length
            let io = cbReturn[cbReturnLen - 1]
            let argsForCb = cbReturn.slice(0, cbReturnLen - 1)
            io.then((...ioargs) => cb(...argsForCb, ...ioargs))
          }
        }
      })
    }
    return this
  }
  static timer (s) {
    var intervalId
    var timer = new IOCore(cb => {
      intervalId = setInterval(cb, Math.floor(s * 1000))
    })
    timer.clear = () => clearInterval(intervalId)
    return timer
  }
  static createIO (ioFunc) {
    return new IOCore(ioFunc)
  }
}
const readline = require('readline')
const rlConfig = {
  input: process.stdin,
  output: process.stdout
}
class IO extends IOCore {
  static getLine (str) {
    const rl = readline.createInterface(rlConfig)
    return new IO(cb => rl.question(str, cb))
.map(data => {
  rl.close()
  return data
})
  }
  static putLine (...data) {
    return new IO(cb => process.nextTick(cb, data))
.map(data => {
  console.log(...data)
  return data
})
  }
}

global.IO = IO

const letsRock = () =>
  (IO.getLine('Enter a number: ').bind(a => {
    let b = Math.pow(parseInt(a), 5)
    let c = b + 25
    let d = 'some string val'
    return [
      a,
      b,
      c,
      d,
      IO.putLine(a, b, c, d)
    ]
  }).bind((a, b, c, d) => {
    let obj = {}
    let val1 = 'string'
    return [
      a,
      b,
      c,
      d,
      obj,
      val1,
      IO.getLine('enter number: ')
    ]
  }).bind((a, b, c, d, obj, val1, val2) => {
    if (parseInt(val2) % 2 !== 0 === true) {
      (IO.putLine('not even').then(() => null))
      return
    }
    Object.defineProperty(obj, 'key', {
      value: 'kkk',
      enumerable: true,
      writable: true,
      configurable: true
    })
    Object.defineProperty(obj, 'valder', {
      value: 55,
      enumerable: true,
      writable: true,
      configurable: true
    })
    let returnVal = parseInt(val2)
    return [
      a,
      b,
      c,
      d,
      obj,
      val1,
      val2,
      returnVal,
      IO.putLine(obj)
    ]
  }).bind((a, b, c, d, obj, val1, val2, returnVal) => {
    (delete obj.key)
    return [
      a,
      b,
      c,
      d,
      obj,
      val1,
      val2,
      returnVal,
      IO.putLine(obj, 'object in this function')
    ]
  }).map((a, b, c, d, obj, val1, val2, returnVal) => {
    let vals = val2 + b + c
    return [
      returnVal,
      obj,
      vals
    ]
  }))
const main = letsRock().bind((val, obj, kd) => [
  val,
  obj,
  kd,
  IO.putLine(obj, val, kd)
]).then(() => [])
