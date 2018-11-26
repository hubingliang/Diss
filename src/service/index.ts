import store from '@/store';
export function findUser(userId: string) {
    const query = new store.state.AV.Query('_User');
    return query.get(userId);
}
