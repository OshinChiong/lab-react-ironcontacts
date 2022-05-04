import React from "react";
import "./App.css";
import contactsJson from "./contacts.json";

let firstFive = contactsJson.slice(0, 5);
function App() {
  const [contacts, setContacts] = React.useState(firstFive);

  return (
    <div>
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
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;

