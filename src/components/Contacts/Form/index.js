import {useState,useEffect} from 'react'

const initialFormValues = {fullname:"",phone_number:""};

function Form({addContact,contacts}) { // Form'un propuna addContacts ekleniyor.
  
  const [form,setForm] = useState(initialFormValues);
  
  useEffect(()=> {
    setForm(initialFormValues);
  },[contacts]); //useEffect ile form değişmişse valueleri değiştiriyoruz.
  
  const onChangeInput = (e) => {
    setForm({...form,[e.target.name]:e.target.value});
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(form.fullname === "" || form.phone_number === "")
    {
      return false;
    }
    addContact([...contacts,form]); //onSubmit olduğunda form nesnesi ve proportiesleri ekleniyor. 
  }


  return (
    <form onSubmit={onSubmit}>
      <div>
        <input name='fullname' value={form.fullname} placeholder='Full Name' onChange={onChangeInput}/>
      </div>
      <div>
        <input name='phone_number' value={form.phone_number} placeholder='Phone Number' onChange={onChangeInput}/>
      </div>
      <button>Add</button>
    </form>
  )
}

export default Form