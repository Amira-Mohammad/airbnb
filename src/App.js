import "./App.css";
import Filter from "./components/Filter/Filter";
import FilterCriteria from "./components/Filter/FilterCriteria";
import Header from "./components/Header/Header";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import Items from "./components/Items/Items";
import Sidebar from "./components/SideBar/SideBar";
import { FilterContextProvider } from "./contexts/filter-context";

function App() {
  return (
    <FilterContextProvider>
      <div className="App">
        <Header />
        <Filter />
        <div className="d-flex">
          <Sidebar />
          <Items />
          <FilterCriteria />
          <ItemDetails />
        </div>
      </div>
    </FilterContextProvider>
  );
}

export default App;
