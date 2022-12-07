import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const {persistAtom} = recoilPersist({
    key: 'recoil-persist', 
    storage : sessionStorage
});

export const userStore = atom({
    key:'UserStore',
    default:{},
    effects_UNSTABLE: [persistAtom]
})

export const userStoreSelector = selector({
    key:'userStoreSelector',
    get: ({get}) =>{
        return userStore;
    }
})