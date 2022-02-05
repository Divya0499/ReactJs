import React from "react";
import Card from "./Card";
import Contacts from "../contacts";

function createCard(contacts) {
  return (
    <Card
      key={contacts.id}
      name={contacts.name}
      img={contacts.imgURL}
      tel={contacts.phone}
      email={contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {Contacts.map(createCard)}
    </div>
  );
}

export default App;
