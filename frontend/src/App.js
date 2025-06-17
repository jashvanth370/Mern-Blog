import Footers from './component/Footers';
import Footer from './component/Footers';
import Headers from './component/Headers';
import PostDetails from './pages/PostDetails';
import PostList from './pages/PostList';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Headers />
      <Router>
        <Routes>
          <Route path='/' element={<PostList />} />
          <Route path='/posts/details/:id' element={<PostDetails />} />
        </Routes>
      </Router>
      <Footers />
    </div>
  );
}

export default App;
