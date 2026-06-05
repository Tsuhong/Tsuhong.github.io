import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://Tsuhong.github.io',
  base: '/',
  integrations: [
    mdx(), 
    // sitemap({
    //   // 核心修复：如果页面 url 存在才保留，防止 undefined 触发 reduce 报错
    //   filter: (page) => page && typeof page === 'string'
    // }), 
    tailwind()
  ]
});