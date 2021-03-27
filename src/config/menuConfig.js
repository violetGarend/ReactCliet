import {HomeOutlined,ShopOutlined,TagsOutlined,ApartmentOutlined,UserOutlined,UserSwitchOutlined,AreaChartOutlined,EditOutlined} from '@ant-design/icons'

const menuConfig =  [
    {
        title: '首页',
        path: 'home',
        icon: HomeOutlined
    },
    {
        title: '商品',
        path: 'sub1',
        icon: ShopOutlined,
        children: [
            {
                title: '商品分类',
                path: 'category',
                icon: ApartmentOutlined,
            },
            {
                title: '商品管理',
                path: 'product',
                icon: TagsOutlined,
            }
        ]
    },
    {
        title: '用户管理',
        path: 'role',
        icon: UserOutlined,
    },
    {
        title: '角色管理',
        path: 'user',
        icon: UserSwitchOutlined,
    }
    , {
        title: '法庭',
        path: 'bar',
        icon: EditOutlined,
    }
    , {
        title: '统计图',
        path: 'sub2',
        icon: AreaChartOutlined,
        children: [
            {
                title: '路线',
                path: 'line',
                icon: AreaChartOutlined,
            },
            {
                title: '饼图',
                path: 'pie',
                icon: AreaChartOutlined,
            }
        ]
    }
]
export default menuConfig