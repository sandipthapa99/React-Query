import {useQuery} from "@tanstack/react-query"
import axios from "axios"

const fetchSuperHeroes = () =>{
  return axios.get("http://localhost:4000/superheroes");
}

export const RQSuperHeroesPage = () => {
  const {isLoading, data, isError, error, isFetching, refetch} = useQuery(['super-heroes'], fetchSuperHeroes,{
    // staleTime:30000,
    // refetchOnMount:true, //default
    // refetchOnWindowFocus: true, //default
    // refetchInterval:2000,  //For polling i.e. fetching api data at regular interval, the process pauses if window loses focus
    // refetchIntervalInBackground: true   //fetches data in regular interval even if window loses focus

    enabled:false,   //disables api call on component mount
  })


  // console.log(isLoading, isFetching)

  if(isFetching){
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }
    return (
      <div>
        <h2>RQ Super Heroes Page</h2>
        <button onClick={refetch}>Fetch Heroes</button>
        {
          data?.data.map((hero)=>{
            return(
              <div key={hero.id}>
                {hero.name}
              </div>
            )
          })
        }
      </div>
    )
  }     