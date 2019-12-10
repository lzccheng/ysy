// vue.config.js
const path = require('path')
const resolve = str => path.resolve(__dirname, str)

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/ysy' : '/',
    outputDir: 'docs',
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 37.5,
                        propList: ['*']
                    })
                ]
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('api', resolve('src/api'))
    }
}
