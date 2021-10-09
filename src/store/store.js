import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        paymentsList: [],
        //paymentsListIDSave: [], список для хранения добавленных id которые ранее были загружены
        categoryList: []
    },
    mutations: {
        setPaymentListData(state, payload) {
            state.paymentsList = payload;
        },
        addDataString(state, payload) {
            state.paymentsList = [payload, ...state.paymentsList];
            //альтернатива state.paymentsList.push(...payload) здесь в конец, если хотим дозагружать страницы для просмотра
            //const newIDS = payload.map(obj => obj.id) сохраняем все новые id 
            //const uniqIDS = newIDS.filter(id => state.paymentsListIDSave.indexOf(id) < 0) все что вернет -1 - уникально: получаем уникальные идентификаторы в новом списке
            //еще проще двух предыдущая строка const newUniqObjects = payload.map(obj => {
            //     return state.paymentsListIDSave.indexOf(obj.id) < 0
            // }) если id встречается, убираем его из результирующего массива
            //и только новые записи добалвляем в paymentsList
            //state.paymentsList.push(...newUniqObjects)
            //обновляем paymentsListIDSave: []
            // const uniqIDS = newUniqObj.map(obj => obj.id)
            // state.paymentsListIDSave.push(...newUniqObj)
        },
        deletePaymentListData(state, payload) {
            state.paymentsList.splice(payload, 1);
        },
        changePaymentListData(state, payload) {
            state.paymentsList.splice(payload.id, 1, payload);
            //console.log(state, payload);
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

        // альтернативная версия по забору страниц массива с данными:
        //fetchData({commit}, page)....
        // setTimeout(() => {
        // const items = storage['page${page}'] эта запись означает page с номером, который во втором аргументе функции "page"
        // resolve(items)
        // }, 100)
        // сам массив вида
        // const storage = {
        //     "page1": [
        //       { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
        //       { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
        //       { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 }
        //     ],
        //     "page2": [
        //       { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
        //       { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
        //       { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
        //     ],
        // }
        //тогда при пагинации в функции вызова fetchDat(ставим номер текущей страницы) и он вызывает эти данные на конкретную страницу


        addNewData(context, payload) {
            context.commit('addDataString', payload);
        },
        deleteData(context, payload) {
            context.commit('deletePaymentListData', payload);
        },
        changeData(context, payload) {
            context.commit('changePaymentListData', payload);
        },
        async loadCategories({ commit }) {
            await new Promise((resolve, reject) => {
                setTimeout(() => {// имитируем работу с сетью
                    resolve(["Еда", "Транспорт", "Спорт", "Обучение", "Налоги", "Коммуналка"]),
                        reject();
                }, 200)
            }).then(res => { commit('setCategories', res) })
        }
    }
})