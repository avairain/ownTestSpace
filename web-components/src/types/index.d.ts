declare module 'tools' {
  interface constr extends HTMLElement, Function{}
  export namespace Common {
    export function CreateComponentAndGot (name: string, constr: constr): any
  }
}