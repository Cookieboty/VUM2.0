// Components
const Index = r => require.ensure([], () => r(require('../demo/Index')), 'Index')
const Actions = r => require.ensure([], () => r(require('../demo/Actions')), 'Actions')
const Modal = r => require.ensure([], () => r(require('../demo/Modal')), 'Modal')
const Preloader = r => require.ensure([], () => r(require('../demo/Preloader')), 'Preloader')
const Toast = r => require.ensure([], () => r(require('../demo/Toast')), 'Toast')
const Tab = r => require.ensure([], () => r(require('../demo/Tab')), 'Tab')
const Scroll = r => require.ensure([], () => r(require('../demo/Scroll')), 'Scroll')
const Popup = r => require.ensure([], () => r(require('../demo/Popup')), 'Popup')
const Popwindow = r => require.ensure([], () => r(require('../demo/Popwindow')), 'Popwindow')
const Calendar = r => require.ensure([], () => r(require('../demo/Calendar')), 'Calendar')
// Css
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
    path: '/actions',
    name: 'Actions',
    component: Actions
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Modal
  },
  {
    path: '/preloader',
    name: 'Preloader',
    component: Preloader
  },
  {
    path: '/toast',
    name: 'Toast',
    component: Toast
  },
  {
    path: '/tab',
    name: 'Tab',
    component: Tab
  },
  {
    path: '/scroll',
    name: 'Scroll',
    component: Scroll
  },
  {
    path: '/popup',
    name: 'Popup',
    component: Popup
  },
  {
    path: '/popwindow',
    name: 'Popwindow',
    component: Popwindow
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  }
]
