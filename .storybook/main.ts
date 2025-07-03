import type { StorybookConfig } from '@storybook/angular';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    // '@storybook/addon-essentials'
  ],
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  // webpackFinal: async (config) => {
  //   config?.module?.rules?.push({
  //     test: /\.scss$/,
  //     exclude: [/\.component\.scss$/, /ngResource/], // ✅ KHÔNG apply style-loader cho Angular component
  //     use: [
  //       'style-loader',
  //       'css-loader',
  //       'sass-loader'
  //     ]
  //   });
  //   return config;
  // }
  webpackFinal: async (config) => {
    config?.module?.rules?.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: path.resolve(__dirname, '../src'),
    });

    return config;
  },
};

export default config;
