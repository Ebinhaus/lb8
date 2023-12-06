function Myform() {
    return (
      <div>
    <h2>React - приложение отправки данных клиента на сервер</h2>
        <form action="http://www.smolgu.ru/" >
        <fieldset>
         <p className="item">
         <label> Ваше имя: </label>
         <input type="text" name="username" id="username" />
         </p>
           <p className="item">
          <label> Пароль: </label>
          <input type="password" name="password" id="password" />
         </p>
         <button type="submit">Отправить</button>
        </fieldset>
        </form>
      </div>
     );
  }
  export default Myform;