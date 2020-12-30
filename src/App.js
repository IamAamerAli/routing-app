import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route
            path="/products"
            render={(props) => <Products sortBy="newest" {...props} />}
          />
          <Route path="/posts/:year?/:month?" component={Posts} />
          <Route path="/admin" component={Dashboard} />

          <Redirect from="/messages" to="/posts" />

          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
