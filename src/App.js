import { Provider } from "react-redux";
import { configureStore } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import NewStoriesList from './components/NewStoriesList//NewStoriesList'

const store=configureStore()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NewStoriesList/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
