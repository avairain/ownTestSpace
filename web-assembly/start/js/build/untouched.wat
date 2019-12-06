(module
 (type $FFF (func (param f64 f64) (result f64)))
 (type $v (func))
 (memory $0 0)
 (table $0 1 anyfunc)
 (elem (i32.const 0) $null)
 (global $HEAP_BASE i32 (i32.const 8))
 (export "memory" (memory $0))
 (export "table" (table $0))
 (export "add" (func $assembly/index/add))
 (func $assembly/index/add (; 0 ;) (type $FFF) (param $0 f64) (param $1 f64) (result f64)
  get_local $0
  get_local $1
  f64.add
 )
 (func $null (; 1 ;) (type $v)
 )
)
