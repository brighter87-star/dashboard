import './App.css';
import MinerviniScreeningResults from './components/dashboard/MinerviniScreeningResults';
import PortfolioTable from './components/dashboard/PortfolioTable';

function App() {
    return (
        <div className="App">
            <PortfolioTable />
            <MinerviniScreeningResults />
        </div>
    );
}

export default App;
