import Home from './components/Home'
import Hello from './components/Hello'
import { Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Route exact path="/" component={Hello} />
          <Route exact path="/home" component={Home} />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
