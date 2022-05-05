import React from "react";
import "./App.css";
import contactsJson from "./contacts.json";

let firstFive = contactsJson.slice(0, 5);
let theRest = contactsJson.slice(5);

function App() {
  const [contacts, setContacts] = React.useState(firstFive);
  const [remainingCelebs, setRemainingCelebs] = React.useState(theRest);
  const [popularAscending, setPopularAscending] = React.useState(true);
  const [nameAscending, setNameAscending] = React.useState(true);

  function addContact() {
    if (remainingCelebs.length > 0) {
      let randomNum = Math.floor(Math.random() * remainingCelebs.length);
      //This pulls a random celebrity from remainingCelebs
      let randomCeleb = remainingCelebs[randomNum];

      //add a new celeb to our contacts list
      setContacts(contacts.concat(randomCeleb));

      //remove that celebrity from the non-used array
      let filteredArr = remainingCelebs.filter((celeb) => {
        return celeb.id !== randomCeleb.id;
      });

      //set the remaining celebs
      setRemainingCelebs(filteredArr);
    }
  }

  function sortByName() {
    //sort contacts
    //sort changes the original array
    //clone the original state hook array
    let arrayToBeSorted = [...contacts];
    console.log(nameAscending);

    if (nameAscending) {
      arrayToBeSorted.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else {
      arrayToBeSorted.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    setNameAscending(!nameAscending);
    setContacts(arrayToBeSorted);
  }

  function sortByPopularity() {
    //sort contacts
    //sort changes the original array
    //clone the original state hook array
    let arrayToBeSorted = [...contacts];

    arrayToBeSorted.sort((a, b) => {
      return String(a.popularity).localeCompare(String(b.popularity));
      // return a.popularity - b.popularity;
    });

    setContacts(arrayToBeSorted);
  }

  // function sortContacts(field) {
  //   let arrayToBeSorted = [...contacts];

  //   arrayToBeSorted.sort((a, b) => {
  //     return String(a[field]).localeCompare(String(b[field]));
  //   });

  //   setContacts(arrayToBeSorted);
  // }


  const removeContact = (id) => {
    let filteredArr = contacts.filter((contact) => {
      return contact.id !== id;
    });

    let celeb = contacts.find((contact) => {
      return contact.id === id;
    });

    setContacts(filteredArr);
    setRemainingCelebs(remainingCelebs.concat(celeb));
  };

  return (
    <div>
      <h1> Ironcontacts </h1>
      <button onClick={addContact}>Add Random Contact</button>
      {/* <button onClick={() => sortContacts("name")}>Sort By Name</button>
      <button onClick={() => sortContacts("popularity")}>
        Sort By Popularity
      </button> */}
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      <table>
        <tr>
          <th>picture</th>
          <th>name</th>
          <th>popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {contacts.map((contact) => {
          return (
             
            <tr>
    
              <td>
                <img src={contact.pictureUrl} height="50" width="40" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && "🏆"}</td>
              <td>{contact.wonEmmy && "🏆"}</td>
              <button onClick={() => removeContact(contact.id)}>
                  Delete
                </button>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;





 