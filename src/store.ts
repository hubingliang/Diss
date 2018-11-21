import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userName: "Brownhu",
        user: {},
        room: {}
    },
    mutations: {
        login(state, payload: any) {
            // 用户登录
            state.user = payload;
        },
        joinRoom(state, payload: any) {
            // 加入房间
            state.room = payload;
        }
    },
    actions: {}
});
