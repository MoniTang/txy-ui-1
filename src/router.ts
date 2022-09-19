import { createWebHashHistory, createRouter } from "vue-router"
import Home from './view/Home.vue'
import Doc from './view/Doc.vue'

import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'

import { h } from 'vue';
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md'
import getStarted from './markdown/get-start.md'
import install from './markdown/install.md'

const md = string => h(Markdown, { content: string, key: string })
const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        { path: '/doc', component: Doc ,
        children:[
            {path:'',redirect:'/doc/intro'},
            { path: "intro", component: md(intro) },
            { path: "get-start", component: md(getStarted) },
            { path: "install", component: md(install) },
            {path:'switch',component:SwitchDemo},
            {path:'button',component:ButtonDemo},
            {path:'dialog',component:DialogDemo},
            {path:'tabs',component:TabsDemo},
        ]}

    ]
})
