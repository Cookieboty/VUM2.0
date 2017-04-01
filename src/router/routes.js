// 引用模板
const Index = r => require.ensure([], () => r(require('../demo/Index')), 'Index')
const Actions = r => require.ensure([], () => r(require('../demo/Actions')), 'Actions')
const Scroll = r => require.ensure([], () => r(require('../demo/scroll')), 'Scroll')

const Page = r => require.ensure([], () => r(require('../demo/page')), 'Page')
const Buttons = r => require.ensure([], () => r(require('../demo/Buttons')), 'Buttons')
const Column = r => require.ensure([], () => r(require('../demo/Column')), 'Column')
const Grid = r => require.ensure([], () => r(require('../demo/Grid')), 'Grid')
const List = r => require.ensure([], () => r(require('../demo/List')), 'List')
const Contacts = r => require.ensure([], () => r(require('../demo/Contacts')), 'Contacts')
const Form = r => require.ensure([], () => r(require('../demo/Form')), 'Form')
const Icons = r => require.ensure([], () => r(require('../demo/Icons')), 'Icons')
const Result = r => require.ensure([], () => r(require('../demo/Result')), 'Result')
const Stars = r => require.ensure([], () => r(require('../demo/Stars')), 'Stars')

// 配置路由
export default [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/page',
    name: 'Page',
    component: Page
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: Buttons
  },
  {
    path: '/column',
    name: 'Column',
    component: Column
  },
  {
    path: '/grid',
    name: 'Grid',
    component: Grid
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/icons',
    name: 'Icons',
    component: Icons
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  },
  {
    path: '/stars',
    name: 'Stars',
    component: Stars
  },
  {
    path: '/scroll',
    name: 'Scroll',
    component: Scroll
  },
  {
    path: '/actions',
    name: 'Actions',
    component: Actions
  }
]
