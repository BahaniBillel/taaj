import "../styles/globals.css";
import { StoreProvider } from "../context/store";
// import { ThemeContextProvider } from "../context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
