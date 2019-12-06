// console.log('index')
const a = d => (Target) => {
  Target.a = d
}

@a(1)
class index {
  constructor(name) {
    console.log('index')
    this.name = name || 'Index'
    Object.defineProperty(this, 'enum', {
      enumerable: false,
      value: 'enum'
    })
  }
}

class _T extends index {
  constructor(name) {
    super(name)
  }
}

const t = new _T('t')
console.log(t)
console.log(t instanceof index)
