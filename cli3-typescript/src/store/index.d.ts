type _PROP = string | number | Object

interface _OBJECT  {
  [propName: string]: _PROP | Function
}

interface _STATE {
  helloWord: string | number,
  helloWordMsg: string | number
}

interface __PAYLOAD {
  amout: string | number,
  [propName: string]: string | number
}

interface _CONTEXT {
  commit: Function
}

type _PAYLOAD = __PAYLOAD | _PROP

declare namespace INDEX {
  export interface state extends _STATE {}
}

declare namespace GETTERS {
  export interface state extends _STATE {}
  export type helloWord = (state: _STATE) => _PROP
}

declare namespace MUTATIONS {
  export interface state extends _STATE {}
  export type payload = __PAYLOAD
  export type helloWord = (state: _STATE, payload: payload) => _PROP
  export type msg = helloWord
}

declare namespace ACTIONS {
  export interface state extends _STATE {}
  export type context = _CONTEXT
  export type payload = __PAYLOAD
  export type actionsHelloWord = (context: _CONTEXT, payload: payload) => _PROP | Promise<Object> // 泛型
}
