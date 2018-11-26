import state from './state';
import { StateType } from './types';
import { MutationTree } from 'vuex';

const mutations: MutationTree<StateType> = {
    init(state, payload: any) {
        state.AV = payload.AV;
        state.realtime = payload.realtime;
    },
    initUser(state, payload: any) {
        state.user = payload;
    },
    initConversation(state, payload: any) {
        state.conversation = payload;
    },
    initMessageList(state, payload: any) {
        state.messageList.push(payload);
    },
    initConversationList(state, payload: any) {
        state.conversationList.push(payload);
    },
    cleanConversationList(state) {
        state.conversationList = [];
    },
};

export default mutations;
