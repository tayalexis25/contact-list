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
    
    if (!contact) {
      return <div>Just a second!</div>;
    }
    
    return (
      <div>
        <h2>{contact.name}</h2>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
        <p>Username: {contact.username}</p>
        <p>Website: {contact.website}</p>
        <p>
          Address: {contact.address?.street}, {contact.address?.suite}, {contact.address?.city}, {contact.address?.zipcode}
        </p>
        <p>Company: {contact.company?.name}</p>
        <button onClick={() => setSelectedContactId(null)}>Back</button>
      </div>
    );
}

// export default selectedContact