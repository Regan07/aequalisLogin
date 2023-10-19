import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Login from "./components/login";
import UserDetails from "./components/user-details";
import NetworkTable from "./components/network-table";
import Table from "./components/table";
import ContextProvider from "./context-provider/ContextProvider";
import { GlobalStyle } from "./styled-components/GlobalStyles.styles";
function App() {
  return (
    <ContextProvider>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />}>
            <Route path="users" element={<Table />} />
            <Route path="network" element={<NetworkTable />} />
            <Route path="users/:id" element={<UserDetails />} />
            <Route />
          </Route>
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
