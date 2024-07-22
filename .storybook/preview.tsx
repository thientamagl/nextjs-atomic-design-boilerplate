import React from 'react'

import type { Preview } from '@storybook/react'

import { notoSans, roboto } from '../src/libs/fonts'

import '../src/styles/globals.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        Wide: {
          name: 'Wide screen',
          styles: {
            width: '1920px',
            height: '100%',
          },
        },
        PC: {
          name: 'PC',
          styles: {
            width: '1440px',
            height: '100%',
          },
        },
        Smartphone: {
          name: 'Smartphone (large)',
          styles: {
            width: '767px',
            height: '812px',
          },
        },
        SmallSmartphone: {
          name: 'Smartphone (small)',
          styles: {
            width: '375px',
            height: '812px',
          },
        },
      },
    },
    paddings: {
      values: [
        { name: 'Small', value: '16px' },
        { name: 'Medium', value: '32px' },
        { name: 'Large', value: '64px' },
      ],
      default: 'Small',
    },
    layout: 'fullscreen',
  },

  decorators: [
    (Story) => (
      <div className={[notoSans.className, roboto.variable].join(' ')}>
        <Story />
      </div>
    ),
  ],
}

export default preview
