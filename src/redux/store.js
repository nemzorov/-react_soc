import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";

const store = {
  _state: {
    navbar: [
      { url: "/profile", name: "Моя страница", id: 1 },
      { url: "/friends", name: "Друзья", id: 12 },
      { url: "/message", name: "Сообщения", id: 2 },
      { url: "/news", name: "Новости", id: 3 },
      { url: "/music", name: "Музыка", id: 4 },
      { url: "/settings", name: "Настройки", id: 5 },
    ],

    profile: {
      textareaVal: "Есть что рассказать?",
      thisId: 99,
      posts: [
        {
          date: "01.02.2023",
          text: "Даже если вы берете что-то у соседа на время, все равно лучше делать это под покровом темноты",
        },
        {
          date: "05.02.2023",
          text: "Я не стану лукавить: быть отцом непросто. Не то что матерью",
        },
        {
          date: "13.03.2023",
          text: "Знаете, парни, вы можете смеяться, но мне гораздо приятнее чувствовать на шее сладкое дыхание спящей жены, чем запихивать долларовые купюры в стринги какой-то неизвестной дамочки",
        },
        {
          date: "22.03.2023",
          text: "Женщины - они как пиво. Хорошо выглядят, хорошо пахнут, и ты готов переступить через собственную мать, лишь бы заполучить их",
        },
      ],
    },

    messagesPage: {
      textareaVal: "Введите сообщение",
      thisId: 99,
      messages: [
        { id: "1", text: "Привет", my: true },
        { id: "2", text: "Привет" },
        { id: "3", text: "Как дела", my: true },
        { id: "4", text: "Норм" },
        { id: "5", text: "Че делаешь", my: true },
        { id: "6", text: "Пока" },
      ],
      dialogs: [
        { id: "1", name: "Иван" },
        { id: "2", name: "Максим" },
        { id: "3", name: "Андрей" },
        { id: "4", name: "Антон" },
        { id: "5", name: "Семен" },
        { id: "6", name: "Игорь" },
      ],
    },
  },

  _renderDOM() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._renderDOM = observer;
  },

  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.messagesPage = messageReducer(this._state.messagesPage, action);
    this._state.navbar = navbarReducer(this._state.navbar, action);

    this._renderDOM(this._state);
  },
};

export default store;
