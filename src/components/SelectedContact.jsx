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
      <div>
      {contact && (
        <div>
          <p>
            <b>Name:</b> {contact.name}
          </p>
          <p>
            <b>Email:</b> {contact.email}
          </p>
          <p>
            <b>Phone:</b> {contact.phone}
          </p>
          <div>
            <b>Address</b>
            <p>
              <b>Street: </b>
              {contact.address.street}
              <br />
              <b>City/Zip: </b>
              {contact.address.city} {contact.address.zipcode}
            </p>
          </div>
          <p>
            <b>Company:</b> {contact.company.name}
          </p>
        </div>
      )}
      <button
        onClick={() => {
          setSelectedContactId(null);
        }}>
        Back
      </button>
    </div>
    )
}

// export default selectedContact