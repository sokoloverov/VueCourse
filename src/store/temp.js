
let pl = [{
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
},];
let u = ["Еда", "Транспорт", "Спорт", "Обучение", "Налоги", "Коммуналка"];
let f = [];


for (let v of u) {
    let k = 0;
    let c = pl.filter(e => e.category === v);
    c.forEach(e => { k += e.value; });
    f.push({ category: v, sum: k })

    console.log('f', f);
}