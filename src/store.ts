import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        AV: {},
        realtime: {},
        user: {},
        conversation: {},
        messageList: [],
        conversationList: [],
    },
    mutations: {
        init(state, payload: any) {
            state.AV = payload.AV;
            state.realtime = payload.realtime;
        },
        initUser(state, payload: any) {
            state.user = payload;
        },
        initConversation(state, payload) {
            state.conversation = payload;
        },
        initMessageList(state, payload) {
            state.messageList.push(payload);
        },
        initConversationList(state, payload) {
            state.conversationList.push(payload);
        },
    },
    actions: {},
});
