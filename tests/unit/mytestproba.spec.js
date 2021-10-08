import { mount } from "@vue/test-utils";
import Calc from '@/components/calculator.vue'
//import App from '@/App'
//import Vuex from 'vuex'//Тест для API
//import Form from '@/components/Form' как если бы тестировали в проекте модуль с запросом

// const LocalVue = createLocalVue()
// LocalVue.use(Vuex)

//заглушка для имитации хоста
// describe('Добавдение данных', () => {
//   let mutations
//   beforeEach(() => {
//     mutations = {
//       setNameOfMutation: jest.fn() //jest.fn функция заглушки
//     }
//     store = new Vuex.Store({
//       actions: {},
//       getters: {},
//       mutations: {}
//     })
//   })
//   test('Add', () => {
//     const wrapper = mount(Form, {
//       store,
//       localVue
//     })

//     wrapper.find('button[name=query]').click()
//     expect(actions.testMutation).toHaveBeenCalled()
//   })
// })


describe('Тесты калькулятора ДЗ7a', () => {
  test('Ввод данных в поля (проверить состояние моделей после ввода)', () => {
    // let wrapper;
    // const createComponent = () => {
    //   wrapper = mount(App)
    // }
    const wrapper = mount(Calc, {
      propsData: {
        header: 'Простой калькулятор'//эмуляция пропсов, как буд-то они такие, это изоляция компонента не зависить от других пропсов
      }
    }) //2-й вариант записи
    const head = wrapper.find('h1')
    expect(head.text()).toEqual("Простой калькулятор")// точное соответствие
  })
  it('Поиск поля ввода', () => {
    const wrapper = mount(Calc)
    const operand1Input = wrapper.find('input[name="1"]')
    operand1Input.setValue(1)//устанавливаем значение в инпут
    expect(wrapper.vm.operand1).toBe(1)//сверяем с ожидаемым результатом
  })

  it('Выполнение всех существующих математических операций +', () => {
    const wrapper = mount(Calc)
    const operand1Input = wrapper.find('input[name="1"]')
    operand1Input.setValue(3)
    const operand2Input = wrapper.find('input[name="2"]')
    operand2Input.setValue(3)
    const btn = wrapper.find('button[name="+"]')
    btn.trigger('click')//тригерр нажатия
    expect(wrapper.vm.result).toBe(6)//сверяем с ожидаемым результатом
    console.log(wrapper);
  })
  it('Выполнение всех существующих математических операций -', () => {
    const wrapper = mount(Calc)
    const operand1Input = wrapper.find('input[name="1"]')
    operand1Input.setValue(3)
    const operand2Input = wrapper.find('input[name="2"]')
    operand2Input.setValue(3)
    const btn = wrapper.find('button[name="+"]')
    btn.trigger('click')//тригерр нажатия
    expect(wrapper.vm.result).toBe(0)//сверяем с ожидаемым результатом
    console.log(wrapper);
  })
  it('Выполнение всех существующих математических операций *', () => {
    const wrapper = mount(Calc)
    const operand1Input = wrapper.find('input[name="1"]')
    operand1Input.setValue(3)
    const operand2Input = wrapper.find('input[name="2"]')
    operand2Input.setValue(3)
    const btn = wrapper.find('button[name="+"]')
    btn.trigger('click')//тригерр нажатия
    expect(wrapper.vm.result).toBe(9)//сверяем с ожидаемым результатом
    console.log(wrapper);
  })
  it('Выполнение всех существующих математических операций /', () => {
    const wrapper = mount(Calc)
    const operand1Input = wrapper.find('input[name="1"]')
    operand1Input.setValue(3)
    const operand2Input = wrapper.find('input[name="2"]')
    operand2Input.setValue(1)
    const btn = wrapper.find('button[name="+"]')
    btn.trigger('click')//тригерр нажатия
    expect(wrapper.vm.result).toBe(3)//сверяем с ожидаемым результатом
    console.log(wrapper);
  })
  it('Выполнение всех существующих математических операций ^', () => {
    const wrapper = mount(Calc)
    const operand1Input = wrapper.find('input[name="1"]')
    operand1Input.setValue(2)
    const operand2Input = wrapper.find('input[name="2"]')
    operand2Input.setValue(2)
    const btn = wrapper.find('button[name="+"]')
    btn.trigger('click')//тригерр нажатия
    expect(wrapper.vm.result).toBe(4)//сверяем с ожидаемым результатом
    console.log(wrapper);
  })
  it('Выполнение всех существующих математических операций %', () => {
    const wrapper = mount(Calc)
    const operand1Input = wrapper.find('input[name="1"]')
    operand1Input.setValue(4)
    const operand2Input = wrapper.find('input[name="2"]')
    operand2Input.setValue(3)
    const btn = wrapper.find('button[name="+"]')
    btn.trigger('click')//тригерр нажатия
    expect(wrapper.vm.result).toBe(1)//сверяем с ожидаемым результатом
    console.log(wrapper);
  })
}),
  describe('Тестирование событий клавиш ДЗ7b', () => {
    it('Операнд 1 по умолчанию = 0', () => {
      const wrapper = mount(Calc)
      expect(wrapper.vm.operand1).toBe(0)
    })
    it('Клавиша Backspase меняет первый операнд с 11 на 1', () => {
      const wrapper = mount(Calc, {
        propsData: {
          operand1: 11
        }
      })
      wrapper.trigger('keydown.8')
      expect(wrapper.vm.operand1).toBe(1)
    })
  })



