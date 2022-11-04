const { defineConfig } = require("@vue/cli-service");

//自动导入element-plus需要的依赖
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  transpileDependencies: true,
  //配置element-plus自动导入
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  // devServer:{
  //   proxy:{
  //     "^/api":{
  //       target:'http://152.136.185.210:5000',
  //       pathRewrite:{
  //         '^/api':''
  //       },
  //       changeOrigin:true
  //     }
  //   }
  // }
});
