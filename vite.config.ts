import { defineConfig } from 'vite'
import { excludeDeps, includeDeps } from './optimize'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import { configCompressPlugin } from './config/compress'
import { VitePWA } from 'vite-plugin-pwa'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import imagemin from 'unplugin-imagemin/vite';







// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.webp'],
  optimizeDeps: {
    include: includeDeps,
    exclude: excludeDeps,
  },
  build: {
    minify: true,
  },
      css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    // @ts-ignore
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      // E.g., change the preload strategy
      preload: 'js-lazy',
      // Other options: https://github.com/GoogleChromeLabs/critters#usage
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      resolvers: [
        ElementPlusResolver(),
      ],
      dirs: [
        './composables/**',
      ],
      vueTemplate: true,
      cache: true,
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],

      // custom resolvers
      resolvers: [
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          prefix: false,
          // enabledCollections: ['carbon']
        }),
      ],

      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unplugin-icons
    Icons({
      autoInstall: true,
    }),

    imagemin({
      // Default mode squoosh. support squoosh and sharp
      mode: 'sharp',
      // Default configuration options for compressing different pictures
      
      compress: {
        
        jpg: {
          quality: 0,
        },
        jpeg: {
          quality: 70,
        },
        png: {
          quality: 70,
        },
        webp: {
          quality: 50,
        },
      },
      // The type of picture converted after the build
      conversion: [
        { from: 'png', to: 'jpeg' },
        { from: 'jpeg', to: 'webp' },

      ]
    }),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Modern Vue',
        short_name: 'modern-vue',
        theme_color: '#ffffff',
        dir: "ltr",
        lang: "en-US",
      
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),

    configCompressPlugin('brotli'),
  ],
})
