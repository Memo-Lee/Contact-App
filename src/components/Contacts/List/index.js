import {useState} from 'react';

function List({contacts}) {
const [filterText,setFilterText] = useState("");

const filtered = contacts.filter((item)=>{
  return Object.keys(item).some((key)=>
    item[key].toString().toLowerCase().includes(filterText.toLowerCase())
  );
})

  return (
    <div>
      <input 
        placeholder='Filter contact'
        value={filterText}
        onChange={(e)=> setFilterText(e.target.value)}
      />
      <ul className='list'>
        {/* 'map' , forech metodu gibi çalışır. key={i} ve item tanımlaması yapılmalıdır. */}
        {filtered.map((contact,i) => (
          <li key={i}>
            <div style={{display:"flex",justifyContent:'space-between', backgroundColor:"yellow",margin:5,padding:5}}>
              <span style={{}}>{contact.fullname}</span>
              <span>{contact.phone_number}</span>
            </div>
          </li>
        ))}
      </ul>
      <p>Total Contacts ({filtered.length})</p>
    </div>
  )
}

export default List