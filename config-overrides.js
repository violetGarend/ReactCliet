const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    //写了下面这个部分，就实现了按需加载，再也不需要再每个页面里面都引入“antd/dist/antd.css”啦
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: css//这里一定要写true，css和less都不行哦
    })
)