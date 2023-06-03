import Body from "./components/Body";
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path=":id" element={<Body />} />
      </Route>
    </Routes >
  );
}

export default App;
