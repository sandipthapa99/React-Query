import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
};
export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery(["super-heroes"], fetchSuperHeroes, {
        // staleTime:30000,
        // refetchOnMount:true, //default
        // refetchOnWindowFocus: true, //default
        // refetchInterval:2000,  //For polling i.e. fetching api data at regular interval, the process pauses if window loses focus
        // refetchIntervalInBackground: true   //fetches data in regular interval even if window loses focus
        // enabled: false, //disables api call on component mount
        // onSuccess: onSuccess, //Callback for success on data fetching
        // onError: onError, //callback for data fetching error

        // select: (data) => {
        //     const superheroesNames = data.data.map((hero) => hero.name);
        //     return superheroesNames;
        // }, //change destructured data into an array of superheroes names
    });
};
