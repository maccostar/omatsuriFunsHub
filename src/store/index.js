export const state = () => ({
    data: []
})

export const getters = {
    data: state => state.data
}

export const mutations = {
    setData(state, payload) {
        state.data = payload
    }
}

export const actions = {
    setData({ commit }, payload) {
        commit('setData',[
            {
                src: '/img.jpg',
                title: '祭りの名前1',
                startat: '2019-07-24',
                endat: '2019-07-24',
                status: 'open',
                place: '川崎'
            },
            {
                src: '/img.jpg',
                title: '祭りの名前2',
                startat: '2019-07-24',
                endat: '2019-07 -24',
                status: 'open',
                place: '川崎'
            }
        ])
    }

}