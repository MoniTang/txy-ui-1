import { createWebHashHistory, createRouter } from "vue-router"
import Home from './view/Home.vue'
import Doc from './view/Doc.vue'
import Test from './view/Test.vue'
import Intro from './view/Intro.vue'
import Install from './view/Install.vue'
import GetStarted from './view/GetStarted.vue'

import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DocDemo from './components/DocDemo.vue'



const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        { path: '/test', component: Test},
        { path: '/doc', component: Doc ,
        children:[
            {path:'/',component:DocDemo},
            {path:'intro',component:Intro},
            {path:'install',component:Install},
            {path:'get-start',component:GetStarted},
            {path:'switch',component:SwitchDemo},
            {path:'button',component:ButtonDemo},
            {path:'dialog',component:DialogDemo},
            {path:'tabs',component:TabsDemo},
        ]}

    ]
})
