import React, { Component } from "react";
import MessageList from "./components/MessageList";
import MessageBox from "./components/MessageBox";
import Header from "./components/Header";
import firebase from "firebase";

class App extends Component {
  componentWillMount = () => {
    var config = {
      apiKey: "AIzaSyBldjQdMPxygMhEHlUlqB7rlaZ4lNr835A",
      authDomain: "message-e0073.firebaseapp.com",
      databaseURL: "https://message-e0073.firebaseio.com",
      projectId: "message-e0073",
      storageBucket: "message-e0073.appspot.com",
      messagingSenderId: "138659007758"
    };
    firebase.initializeApp(config);
  };
  render() {
    return (
      <div>
        <Header title="Simple Firebase App" />
        <div className="columns" />
        <div className="column is-3" />
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
        <div className="columns">
          <div className="column is-3" />
          <div className="column is-6">
            <MessageBox db={firebase} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
