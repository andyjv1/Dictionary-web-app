import Body from "./components/Body";
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import { useState } from "react";
function App() {
  const [loading, setLoading] = useState(true)
  console.log(loading);
  return (
    <Routes>
      <Route path="/" element={<Layout loading={loading}
        setLoading={setLoading} />}>
        <Route path=":id" element={<Body />} />
      </Route>
    </Routes >
  );
}

export default App;
