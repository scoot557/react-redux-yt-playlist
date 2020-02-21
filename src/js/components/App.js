import React from "react";
import List from "./List";
import Form from "./Form";
import EmbeddedVideo from "./Video";
import "./app.css";

const App = () => (
  <>
    <div>
      <h2>Videos</h2>
      <List />
    </div>
    <div>
      <h2>Add a new Youtube Video</h2>
      <Form />
    </div>
    <div>
      <EmbeddedVideo />
	</div>
  </>
);

export default App;