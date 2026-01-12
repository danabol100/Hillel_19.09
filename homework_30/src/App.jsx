import { Provider } from "react-redux";
import { store } from "./redux/store";
import Button from "./components/Button";
import Form from "./components/Form";
import Field from "./components/Field";

function App() {
  return (
    <Provider store={store}>
      <main className="container">
        <Form />
        <Field />
        <Button />
      </main>
    </Provider>
  );
}
export default App;
