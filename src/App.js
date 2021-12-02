import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import './App.css';
import LoginForm from './components/LoginForm';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
    height="100vh"
    projectID="8391e78a-ff88-41b1-8846-cca600e40089"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
     />
  );
}

export default App;