import store from '@/store';
import router from '@/router';
export function findUser(userId: string) {
    const query = new store.state.AV.Query('_User');
    return query.get(userId);
}
export function isLogin() {
    if (!store.state.AV.User.current()) {
        router.push('/user');
    }
}
