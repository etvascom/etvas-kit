/* eslint-disable noconsole */
import browserslist from 'browserslist'
import esbuild, { BuildOptions } from 'esbuild'
import { nodeExternalsPlugin } from 'esbuild-node-externals'
import { esbuildPluginBrowserslist } from 'esbuild-plugin-browserslist'
import esbuildServe from 'esbuild-serve'

const build = () => {
  const config: BuildOptions = {
    logLevel: 'info',
    entryPoints: ['src/index.ts'],
    minify: true,
    bundle: true,
    inject: ['build-react-shim.js'],
    loader: {
      '.ts': 'tsx',
      '.tsx': 'tsx',
      '.woff': 'copy',
      '.woff2': 'copy',
      '.svg': 'text'
    },
    plugins: [
      nodeExternalsPlugin(),
      esbuildPluginBrowserslist(browserslist(), {
        printUnknownTargets: false
      })
    ]
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
  esbuildServe(
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
    },
    {
      root: 'demo',
      port: 3000
    }
  )
    .then(() => console.log('App is live at http://localhost:3000'))
    .catch(() => process.exit(1))

if (process.argv.includes('--serve')) {
  serve()
} else {
  build()
}