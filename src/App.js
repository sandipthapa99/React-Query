import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { SuperHeroesPage } from "./components/Superheroes.page";
import { RQSuperHeroesPage } from "./components/RQSuperheroes.page";
import { HomePage } from "./components/Home.page";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RQSuperHero } from "./components/RQSuperHero.page";
import { ParallelQueriesPage } from "./components/ParallelQueries.page";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
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
                                <Link to="/rq-super-heroes">
                                    RQ Super Heroes
                                </Link>
                            </li>
                            <li>
                                <Link to="/rq-parallel">
                                    RQ Parallel Queries
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route
                            path="rq-parallel"
                            element={<ParallelQueriesPage />}
                        />
                        <Route
                            path="rq-super-hero/:heroId"
                            element={<RQSuperHero />}
                        />
                        <Route
                            path="/super-heroes"
                            element={<SuperHeroesPage />}
                        />

                        <Route
                            path="/rq-super-heroes"
                            element={<RQSuperHeroesPage />}
                        />

                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </div>
            </div>
        </QueryClientProvider>
    );
}

export default App;
