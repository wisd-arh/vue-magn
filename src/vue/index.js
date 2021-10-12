import Vue from 'vue'
import layout from './layout.vue'

export default class App{
    constructor(selector){
        new Vue({
            el: selector,
			render: h => h(layout),
        })
    }
}