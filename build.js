const esbuild = require('esbuild')
const { nodeExternalsPlugin } = require('esbuild-node-externals')

const build = () => {
  const config = {
    logLevel: 'info',
    entryPoints: ['src/index.js'],
    minify: true,
    bundle: true,
    loader: {
      '.js': 'jsx',
      '.jsx': 'jsx',
      '.woff': 'copy',
      '.woff2': 'copy',
      '.svg': 'text'
    },
    plugins: [nodeExternalsPlugin()]
  }

  esbuild.build({
    ...config,
    format: 'esm',
    outfile: 'es/index.js'
  })

  esbuild.build({
    ...config,
    format: 'cjs',
    outfile: 'lib/index.js'
  })
}

const serve = () =>
  esbuild
    .serve(
      {
        servedir: 'demo',
        port: 3000
      },
      {
        entryPoints: ['./demo/src/index.js'],
        outfile: './demo/dist/index.js',
        format: 'esm',
        bundle: true,
        loader: {
          '.js': 'jsx',
          '.jsx': 'jsx',
          '.woff': 'dataurl',
          '.woff2': 'dataurl',
          '.svg': 'dataurl'
        },
        plugins: []
      }
    )
    .then(() => console.log('App is live at http://localhost:3000'))
    .catch(() => process.exit(1))

if (process.argv.includes('--serve')) {
  serve()
} else {
  build()
}
