import { Config } from '@stencil/core';
import { less } from '@stencil/less';

export const config: Config = {
  namespace: 'test-stencil',
  outputTargets: [
    { type: 'dist-hydrate-script' },
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      baseUrl: 'https://stenciljs.com/abc',
      serviceWorker: null // disable service workers
    }
  ],
  globalStyle: 'src/global/index.less',
  plugins: [
    less()
  ],
  bundles: [
    {
      components: ['my-component', 'test-rain']
    }
  ]
};
