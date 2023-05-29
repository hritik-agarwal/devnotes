# React Router

## Topics

1. Configuring Routes
2. Navigating on Clicking Link
3. Navigating Programmatically
4. Dynamic Routes
5. Nested Routes
6. Route Params
7. Lazy Loading
8. Authentication

## Setup

- Install package `react-router-dom`
- Wrap the App component with `BrowserRouter` in index.js
- Important Imports
  1. BrowserRouter, Routes, Route, Outlet
  2. Link, NavLink, useNavigate
  3. useParams, useSearchParams, useLocation

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

## Configuring Routes

- Configure the routes using `Routes` and `Route`
- Route declares an element that should be rendered at a certain URL path.
- Routes is a container around multiple nested route and renders the route which best matches the current path.

```js
import {Route, Routes} from 'react-router-dom'
import {Home, About} from './pages'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default App
```

## Navigating on Clicking Link

- Add link which on click routes to different urls using `Link`

```js
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
  )
}
export default Navbar
```

- If it is a nav link and we want to know, current active link, then use `NavLink` instead.
- An active NavLink adds a class 'active' which then can be styled using css or using isActive prop.

```js
import {NavLink} from 'react-router-dom'

function Navbar() {
  const navLinkStyle = ({isActive}) => {
    return {
      textDecoration: 'none',
      color: isActive ? 'red' : 'black',
    }
  }

  return (
    <nav>
      <NavLink to='/' style={navLinkStyle}>
        Home
      </NavLink>
      <NavLink to='/about' style={navLinkStyle}>
        About
      </NavLink>
    </nav>
  )
}
export default Navbar
```

## Navigating Programmatically

- To route programmatically like after form-submission or after file upload, use `useNavigate`

```js
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => navigate(-1)}>Go to Previous Page</button>
      <button onClick={() => navigate('/order')}>Go to Order Page</button>
      <button onClick={() => navigate('/order', {replace: true})}>
        Go to Order Page and remove current history
      </button>
    </div>
  )
}
export default Home
```

## Nested Routes

- To render nested routes, use ` nested routing`` along with  `Outlet```.

```js
// In App.js
import {Route, Routes} from 'react-router-dom'
import {Home, About, Order, Error, Product} from './pages'
import {Featured, Navbar, Trending} from './components'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order' element={<Order />} />
        <Route path='product' element={<Product />}>
          <Route index element={<Trending />} />
          <Route path='trending' element={<Trending />} />
          <Route path='featured' element={<Featured />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}
export default App


// In Product.js
import {Link, Outlet} from 'react-router-dom'

/*
  1. Outlet renders the child routes (if any)
  2. Here, relative paths are used, they don't start with / and append to nearest route
*/

function Product() {
  return (
    <div>
      <h2>Product</h2>
      <nav>
        //
        <Link to='trending'>Trending</Link>
        <Link to='featured'>Featured</Link>
      </nav>
      <Outlet />
    </div>
  )
}
export default Product
```

## Dynamic Routes

- To create dynamic routes, use useParams

```js
// Declaring the routes
;<Route path='users/:id' element={<UserDetails />} />

// Fetching the params
const {id} = useParams()
```

## Search Params

- To read and modify search params, use useSearchParams()

```js
// useSearchParams behaves like useState
const [searchParams, setSearchParams] = useSearchParams()

// Reading search params
const showActiveUsers = searchParams.get('filter') === 'active'

// Modifying search params
<button onClick={() => setSearchParams({filter: 'active'})}>Active User</button>

// Using search params
<h2>{showActiveUsers ? 'Showing active users' : 'Showing all users'}</h2>
```

## Lazy Loading

- To improve initial loading time, we can fetch some components incrementally
- To use it, we need to use React.lazy function

```js
const LazyAbout = React.lazy(() => import('./pages/LazyAbout'))
<Route
  path='about'
  element={
    <React.Suspense fallback='Loading...'>
      <LazyAbout />
    </React.Suspense>
  }
/>
```

## Sending data to route

- To send data to any route or to find the current route path, use useLocation

```js
const {state, pathname} = useLocation()
```

## Authentication

- To use authentication or to protect some routes, use redirection.

```js
<Route path="profile" element={<Protected><Profile/></Protected>}>

// in Protected
const Protected = ({children}) => {
  const navigate = useNavigate()
  const auth = useAuth()
  if(!auth){
    navigate('/')
  }
  return children
}
```