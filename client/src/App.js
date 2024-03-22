import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {

  const appName = 'Codeolima'
  const Version = '1.0.0'

  return (
      <>
        <Header name={appName}/> 
        <Content />
        <Footer version={Version}/>

      </>
  );
}

export default App;
