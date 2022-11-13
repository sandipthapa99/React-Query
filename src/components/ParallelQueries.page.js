import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes/");
};

const fetchFriends = () => {
    return axios.get("http://localhost:4000/friends/");
};

export const ParallelQueriesPage = () => {
    const { data: superHeroes } = useQuery(["super-heroes"], fetchSuperHeroes);
    const { data: friends } = useQuery(["friends"], fetchFriends);
    console.log(friends.data);
    return (
        <div>
            {superHeroes?.data.map((data) => {
                return <p>{data.name}</p>;
            })}
            {friends?.data.map((data) => {
                return <p>{data.name}</p>;
            })}
        </div>
    );
};
