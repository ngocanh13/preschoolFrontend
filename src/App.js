
import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/login.css';
import './assets/css/style.css';
import Nav from './components/common/Nav';
import Layout from './layouts';
import AppRouters from './routes/AppRoutes'
function App() {
  return (
    <div className="App">

      <Layout>
      
        <AppRouters/>
      </Layout>

    </div>
  );
}

export default App;