import Layout from "./components/Layout/Layout";
import ProductList from "./components/ProductList/ProductList";
import Sidebar from "./components/Sidebar/Sidebar";
import data from "./data.json";

const App = () => {
  return (
    <div>
      <Layout>
        <ProductList products={data} />
        <Sidebar />
      </Layout>
    </div>
  );
};

export default App;
