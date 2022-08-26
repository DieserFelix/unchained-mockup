import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductDetails } from "./ProductDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/en/products/end-of-arm-effectors/grippers/finger-grippers/:productId"
          element={<ProductDetails />}
        />
      </Routes>
    </Router>
  );
}

export default App;
