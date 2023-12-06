//https://habr.com/ru/articles/521902/
// Загружаем хуки useEffect, useState
import React, { useEffect, useState } from 'react';
import axios from "axios"; //Загружаем библиотеку 
function Product() {
 const [userList, setUserList] = useState([]); //Создаем пока пустую коллекцию для данных
 useEffect(() => {// Этот хук выполняет GET - запрос к WEBAPI, получает данные и отправляет их в коллекцию
  axios.get('https://localhost:7136/api/Local').then(res => {
   setUserList(res.data); // Ответ - из respnse.data помещаем в коллекцию
  });
 }, []);

 return (
  <div> 
    <h2> Магазин </h2>
  <table>
    <th width="5%">Номер</th><th width="20%">Название продукта</th> 
    <th width="5%">Цена(руб)</th> <th width="70%"> Описание</th>
    <tbody>
     {userList.map(product => <tr>  {/*Выбор данных из коллекции*/} 
       <td >{product.Id}</td>
       <td >{product.Name}</td> 
       <td >{product.Price}</td>
       <td >{product.Description}</td>
     </tr>)}
     </tbody>
   </table>
  </div>
 );
}

export default Product;