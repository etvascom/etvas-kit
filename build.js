const esbuild = require('esbuild')
const { nodeExternalsPlugin } = require('esbuild-node-externals')

const loader = {
  '.js': 'jsx',
  '.jsx': 'jsx',
  '.woff': 'copy',
  '.woff2': 'copy',
  '.svg': 'text'
}

const plugins = [nodeExternalsPlugin()]

esbuild.build({
  logLevel: 'info',
  entryPoints: ['src/index.js'],
  bundle: true,
  format: 'esm',
  outfile: 'es/index.js',
  loader,
  minify: true,
  plugins
})

esbuild.build({
  logLevel: 'info',
  entryPoints: ['src/index.js'],
  bundle: true,
  format: 'cjs',
  outfile: 'lib/index.js',
  loader,
  minify: true,
  plugins
})
