import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess"

export default {
  extensions: [".svelte"],

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter(),
    alias: {
      $src: "src",
      $components: "src/components",
      $static: "static",
      $store: "src/store",
    },
  },

  onwarn: (warning, handler) => {
    if (warning.code.startsWith("a11y-")) {
      return
    }
    handler(warning)
  },
}
