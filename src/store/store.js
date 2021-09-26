import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        paymentsList: [],
        categoryList: []
    },
    mutations: {
        setPaymentListData(state, payload) {
            state.paymentsList = payload;
        },
        addDataString(state, payload) {
            state.paymentsList = [payload, ...state.paymentsList];
        },
        setCategories(state, payload) {
            state.categoryList.push(...payload);
        },
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getPaymentsListSum: state => {
            return state.paymentsList.reduce((res, cur) => res + cur.value, 0);
        },
        getCategoryList: state => state.categoryList
    },
    actions: {
        async fetchData({ commit }) {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([{
                        date: "15.03.2020",
                        category: "Еда",
                        value: 289.88,
                    },
                    {
                        date: "24.04.2020",
                        category: "Транспорт",
                        value: 112,
                    },
                    {
                        date: "24.08.2020",
                        category: "Спорт",
                        value: 3041,
                    },
                    {
                        date: "28.10.2020",
                        category: "Еда",
                        value: 444.28,
                    },
                    {
                        date: "14.12.2020",
                        category: "Обучение",
                        value: 5500,
                    },
                    {
                        date: "4.03.2021",
                        category: "Транспорт",
                        value: 1096,
                    },
                    {
                        date: "28.06.2021",
                        category: "Еда",
                        value: 207.53,
                    },
                    {
                        date: "24.07.2021",
                        category: "Транспорт",
                        value: 86,
                    },
                    {
                        date: "26.08.2021",
                        category: "Еда",
                        value: 369.22,
                    },]),
                        reject();
                }, 200)
            }).then(res => { commit('setPaymentListData', res) })
        },
        addNewData(context, payload) {
            context.commit('addDataString', payload);
        },
        async loadCategories({ commit }) {
            await new Promise((resolve, reject) => {
                setTimeout(() => {// имитируем работу с сетью
                    resolve(["Еда", "Транспорт", "Спорт", "Обучение", "Налоги", "Коммунальные платежи"]),
                        reject();
                }, 200)
            }).then(res => { commit('setCategories', res) })
        }
    }
})