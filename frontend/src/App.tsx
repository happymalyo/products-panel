import './App.css'
import { ProductTable } from './components/product/ProductTable'
import { ProductProvider } from './context/ProductContext'

function App() {
  return (
    <ProductProvider>
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductTable />
        </div>
      </div>
    </ProductProvider>
  )
}

export default App
