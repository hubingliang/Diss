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
    initAvUser(state, payload: any) {
        state.avUser = payload;
    },
    initConversation(state, payload: any) {
        state.conversation = payload;
    },
    addMessageList(state, payload: any) {
        state.messageList.push(payload);
    },
    initMessageList(state, payload: any) {
        state.messageList = payload;
    },
    initConversationList(state, payload: any) {
        state.conversationList.push(payload);
    },
    cleanConversationList(state) {
        state.conversationList = [];
    },
};

export default mutations;
