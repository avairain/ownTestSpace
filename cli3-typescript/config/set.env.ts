'use strict'

var build_env = {}
let _build_env_len = process.argv.length
if (_build_env_len > 2) {
    for (var i = 2; i < _build_env_len; i++) {
        let _cur_param = process.argv[i]
        if (process.argv[i].includes('=')) {
            let _param_kv = _cur_param.split('=')
            build_env[_param_kv[0]] = _param_kv[1]
        }
    }
}

module.exports = build_env