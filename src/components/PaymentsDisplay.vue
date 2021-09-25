<template>
  <div :class="[$style.wrapper]">
    <table :class="[$style.table]">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Дата</th>
          <th scope="col">Вид расходов</th>
          <th scope="col">Стоимость</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td scope="row">{{ index + firstIndexOnPage + 1 }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.value | formatPriseRU }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    firstIndexOnPage: {
      type: Number,
      default: 1,
    },
  },
  filters: {
    formatPriseRU(value) {
      return new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
      }).format(value);
    },
  },
};
</script>
 
<style lang="scss" module>
.wrapper {
  margin-bottom: 10px;
}
.table {
  min-width: 420px;
  table-layout: fixed;
  width: 50%;
  margin-bottom: 20px;
  border-collapse: collapse;
}
.table th {
  font-weight: bold;
  padding: 5px;
  background: #efefef;
  border: 1px solid #dddddd;
}
.table td {
  padding: 5px 10px;
  border: 1px solid #dddddd;
  text-align: center;
}
.table tbody tr:nth-child(odd) {
  background: #fff;
}
.table tbody tr:nth-child(even) {
  background: #f7f7f7;
}
</style>