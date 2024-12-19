```javascript
import { useLocation, BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function NotFound() {
  const location = useLocation();
  // Check if no other route matched
  const isNotFound = location.pathname === '*' ;
  if (isNotFound) {
    return <div>Not Found</div>;
  } else {
    return null;
  }
}

export default App;
```