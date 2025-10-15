import './App.css';
import MinerviniScreeningResults from './components/dashboard/MinerviniScreeningResults';
import PortfolioTable from './components/dashboard/PortfolioTable';

function App() {
    console.log(process.env);
    return (
        <div className="App">
            <PortfolioTable />
            <MinerviniScreeningResults />
        </div>
    );
}

export default App;
