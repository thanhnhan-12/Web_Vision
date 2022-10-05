import './App.css';
// import SignIn from './Containers/Form/components/SignIn';
// import SignUp from './Containers/Form/components/SignUp';
import Footer from './Containers/HeaderFooter/components/Footer';
import Header from './Containers/HeaderFooter/components/Header';
import Home from './Containers/Home';

function App() {
  return (
    <div className="App">
      <Header />
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        <Home/>
      <Footer />
    </div>
  );
}

export default App;
