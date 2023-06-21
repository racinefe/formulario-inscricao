import "./App.css";

function App() {
  return (
    <>
      <form action="" className="form">
        <div className="container">
          <h1>Stay updated!</h1>
          <p> Join 60,000+ product managers receiving monthly updates on:</p>
          <div>
            <p>Product discovery and building what matters</p>
            <p>Measuring to ensure updates are a success</p>
            <p>And much more!</p>
          </div>
          <div className="inputs">
            <label htmlFor="">Email address</label>
            <input type="email" />
            <button>Subscribe to monthly newsletter</button>
          </div>
         
        </div>
      </form>
    </>
  );
}

export default App;
