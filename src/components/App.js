import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "../containers/Main"

const store=configureStore()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Main/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
