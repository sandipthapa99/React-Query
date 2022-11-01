import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { SuperHeroesPage } from "./components/Superheroes.page";
import { RQSuperHeroesPage } from "./components/RQSuperheroes.page";
import { HomePage } from "./components/Home.page";

function App() {
    return (
        <div className="App">
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/super-heroes">
                                Traditional Super Heroes
                            </Link>
                        </li>
                        <li>
                            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/super-heroes" element={
                        <SuperHeroesPage />}/>
                    
                    <Route path="/rq-super-heroes" element={
                        <RQSuperHeroesPage />}/>
                    
                    <Route path="/" element={
                        <HomePage />}/>
                    
                </Routes>
            </div>
        </div>
    );
}

export default App;
