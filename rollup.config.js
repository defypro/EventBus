import { version } from './package.json'
import babel from 'rollup-plugin-babel';

const banner = `/**
 * event-bus v${version}
 * https://github.com/defypro/event-bus
 * @license MIT
 */`

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/eventbus.esm.js',
            format: 'es',
            banner
        }, {
            file: 'dist/eventbus.common.js',
            format: 'cjs',
            banner
        }, {
            file: 'dist/eventbus.js',
            format: 'umd',
            name: 'EventBus',
            banner
        }
    ],
    plugins: [
        babel({
          exclude: 'node_modules/**'
        })
    ]
}