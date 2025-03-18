import { useState, useEffect } from 'react'

const apiUrl = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/"

export default function SelectedContact({ selectedContactId }) {
console.log(selectedContactId)
const [contact, setContact] = useState([])
    useEffect(() => {
        async function fetchapi() {
            try {
                const response = await fetch(`${apiUrl}${selectedContactId}`)
                const result = await response.json();
                setContact(result)
            } catch(error) {
                console.error(error)
            }
        }
    fetchapi();
        
    }, []);
    return(
         <table>
         <thead>
           <tr>
             <th colSpan="3">Contact</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>{contact.name}</td>
             <td>{contact.email}</td>
             <td>{contact.phone}</td>
           </tr>
         </tbody>
       </table>
      
    )
}

// export default selectedContact