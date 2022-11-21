const esbuild = require('esbuild')

const loader = {
  '.js': 'jsx',
  '.jsx': 'jsx',
  '.woff': 'copy',
  '.woff2': 'copy',
  '.svg': 'text'
}

const external = ['./node_modules/*']

esbuild.build({
  logLevel: 'info',
  entryPoints: ['src/index.js'],
  bundle: true,
  format: 'esm',
  outfile: 'es/index.js',
  loader,
  external,
  minify: true
})

esbuild.build({
  logLevel: 'info',
  entryPoints: ['src/index.js'],
  bundle: true,
  format: 'cjs',
  outfile: 'lib/index.js',
  loader,
  external,
  minify: true
})
