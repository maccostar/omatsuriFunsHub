export const state = () => ({
    data: [],
    join: [],
    open: []
})

export const getters = {
    data: state => state.data,
    join: state => state.join,
    open: state => state.open,
}

export const mutations = {
    setData(state, payload) {
        state.data = payload
    },
    setDataJoin(state, payload) {
        state.join = payload
    },
    setDataOpen(state, payload) {
        state.open = payload
    }
}

export const actions = {
    setData({ commit }, payload) {
        commit('setData',[
            {
                src: '/tanabata.jpg',
                title: '平塚七夕祭り',
                href: '/item/demo',
                startat: '2019-07-24',
                endat: '2019-07-24',
                status: 'open',
                place: '平塚市'
            },
            {
                src: '/halloween.jpg',
                title: '川崎ハロウィンをもっと広げよう！',
                startat: '2019-07-24',
                endat: '2019-07 -24',
                status: 'open',
                place: '川崎市'
            }
        ])
    },
    setDataJoin({ commit }, payload) {
        commit('setDataJoin',[
            {
                src: '/img.jpg',
                title: '祭りの名前1',
                href: '/item/demo',
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
    },
    setDataOpen({ commit }, payload) {
        commit('setDataOpen',[
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