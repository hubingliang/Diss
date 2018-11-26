import Vue from 'vue';
import Vuex from 'vuex';
// import actions from './actions';
import mutations from './mutations';
import state from './state';
// import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
});

// import Vue from 'vue'
// import Vuex, { Store } from 'vuex'
// // modules
// import user from './modules/user'

// Vue.use(Vuex)

// const store: Store<any> = new Vuex.Store({
//   actions,
//   mutations,
//   getters,
//   state,
//   modules: {
//     //添加自定义模块
//   }
// })

// export default store
