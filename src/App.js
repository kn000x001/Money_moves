import './App.css';
import Profile from './components/main/profile';
import Layout from './container/layout';
import {useState, useEffect } from 'react';


function App() {


  return (
      <Layout >
        <Profile />
      </Layout>
  );
}
export default App;
