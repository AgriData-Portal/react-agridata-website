import { Landing } from "_pages/home-page/landing";
import { Footer } from "_components/footer";
import "_styles/App.css";

function App() {
  return (
    <div>
      <Landing></Landing>
      <div className="App-footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export { App };
