import React from 'react';
import "./app.css"
import MessageList from './components/MessageList';
import ComposeMessage from './components/ComposeMessage';

const App = () => {
  return (
  <main>
      <MessageList />
      <ComposeMessage />
    </main>
  )
}

export default App;