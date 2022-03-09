import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AddJob,
  AllJob,
  Profile,
  SharedLayout,
  Stats,
} from './pages/dashboard/index';
import { Error, Landing, Register } from './pages/index';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Stats />} />
            <Route path='all-jobs' element={<AllJob />} />
            <Route path='add-job' element={<AddJob />} />
            <Route path='profile' element={<Profile />} />
          </Route>

          <Route path='/register' element={<Register />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
