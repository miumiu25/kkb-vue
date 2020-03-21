const port = 7070;
const title = "个人博客"
const path = require('path')
//将传入的相对路径转换为绝对路径
function resolve(dir) {
  return path.join(__dirname,dir)
}

module.exports = {
  // publickPath:'/blog',
  devServer: {
    port
  },
  configureWebpack: {
    name:title
  },
  chainWebpack(config) {
    //修改svg规则
    config.module.rule('svg')
      //排除自定义的svg文件
      .exclude.add(resolve('src/icons'));
    //新增规则
    //添加svg-sprite-loader
    config.module.rule('icons')
      .test(/\.svg$/)//设置test
      .include.add(resolve('src/icons'))//加入include
      .end()//add使上下文进入了数组，使用end回退
      .use('svg-sprite-loader')//添加loader
      .loader('svg-sprite-loader')//切换上下文到loader
      .options({ symbolId: 'icon-[name]' })
      .end()
  }
}