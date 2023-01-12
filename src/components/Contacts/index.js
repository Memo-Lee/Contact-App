import {useState,useEffect} from 'react'
import "./style.css";

import List from './List';
import Form from './Form';
function Contacts() {
  /* kayıtların ekleneceği state burada tutulacak
    ve liste ekleme işlemi yapılacak.
  */
 const [contacts,setContacts] = useState([ //itemlerın olduğu ve eklendiği array
    {
      fullname: "Mehmet",
      phone_number:"123"
    },
    {
      fullname: "Ahmet",
      phone_number:"456"
    },
    {
      fullname:"Hasan",
      phone_number:"789"
    }
 ]); // birden fazla eleman tutulacağı için array olacak.
 




 useEffect(()=> {
  console.log(contacts);
 },[contacts]); // useEffect state ile ve depencenty array ile son halini döndürüyoruz.
 
 return (
    <div id='container'>
        <h1>Contacts</h1>
        <List contacts={contacts}/> {/*eklenen kayıtları prop olarak gönderme*/} 
        {/* form componente gönderme ve contacts içerisinde hali hazırda olan verileri döndürme*/} 
        <Form addContact = {setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts