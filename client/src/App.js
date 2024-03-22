import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {

  const appName = 'Codeolima';
  const Version = process.env.REACT_APP_VERSION;

  return (
      <>
        <Header name={appName}/> 
        <Content />
        <Footer version={Version}/>

      </>
  );
}

export default App;
