// vue.config.js
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
    }
}
