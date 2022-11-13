import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const RQSuperHeroesPage = () => {
    const onSuccess = (data) => {
        console.log("Perform side effects after data fetching success", data);
    };

    const onError = (error) => {
        console.log("Perform side effects after encountering Error", error);
    };

    const { isLoading, data, isError, error, isFetching, refetch } =
        useSuperHeroesData(onSuccess, onError);

    console.log("isLoading", isLoading, "isFetching", isFetching);

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>;
    }
    if (isError) {
        return <h2>{error.message}</h2>;
    }
    return (
        <div>
            <h2>RQ Super Heroes Page</h2>
            <button onClick={refetch}>Fetch Heroes</button>
            {data?.data.map((hero) => {
                return (
                    <div key={hero.id}>
                        <Link to={`/rq-super-hero/${hero.id}`}>
                            {hero.name}
                        </Link>
                    </div>
                );
            })}

            {/* {data.map((heroName) => {
                return <div key={heroName}>{heroName}</div>;
            })} */}
        </div>
    );
};
