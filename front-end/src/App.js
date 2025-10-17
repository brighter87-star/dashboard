import './App.css';
import Dashboard from './pages/Dashboard';

const isDev =
    process.env.NODE_ENV === 'development' ||
    /localhost|127\.0\.0\.1/.test(window.location.hostname);
const devWidth = '62.5%';

function App() {
    const wrapperStyle = isDev
        ? { width: devWidth, margin: '0 auto' }
        : { width: '100%' };
    return (
        <div className="App" style={wrapperStyle}>
            <Dashboard />
        </div>
    );
}

export default App;
