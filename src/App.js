import './App.css';
// import SignIn from './Containers/Form/components/SignIn';
import SignUp from './Containers/Form/components/SignUp';
import Footer from './Containers/HeaderFooter/components/Footer';
import Header from './Containers/HeaderFooter/components/Header';

function App() {
  return (
    <div className="App">
      <Header />
        {/* <SignIn /> */}
        <SignUp />
      <Footer />
    </div>
  );
}

export default App;
