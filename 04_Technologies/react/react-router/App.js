import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Home, About, Order, Error, Product, User} from './pages'
import {Featured, Navbar, Trending, UserDetails} from './components'
const LazyAbout = React.lazy(() => import('./pages/LazyAbout'))

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='about' element={<About />} /> */}
        <Route
          path='about'
          element={
            <React.Suspense fallback='Loading...'>
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path='order' element={<Order />} />
        <Route path='product' element={<Product />}>
          <Route index element={<Trending />} />
          <Route path='trending' element={<Trending />} />
          <Route path='featured' element={<Featured />} />
        </Route>
        <Route path='users' element={<User />} />
        <Route path='users/:id' element={<UserDetails />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
