/* eslint-disable eqeqeq */
import { useState, useEffect } from 'react'
import { USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE } from '../mock/dataMocked.js';
import { userDataModel, activityDataModel, averageDataModel, performanceDataModel } from "../models/index";
import { isMocked } from './mockConfig';

 export function useFetch(userId) {
  //on établi le usestate pour les données qu'on va envoyer sur la page user
  const [formattedUserData, setformattedUserData] = useState(null) 
  const [formattedUserActivity, setformattedUserActivity] = useState(null) 
  const [formattedUserAverage, setformattedUserAverage] = useState(null) 
  const [formattedUserPerformance, setformattedUserPerformance] = useState(null) 
//les valeurs pour identifier l'état de la page user
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)


//const pour établir l'url pour ne pas avoir à la réecrire
  const URL = `http://localhost:3000/user/`

  useEffect(() => {

    // si on utilise les données mockées on envois l'userid pour récupérer les données correspondantes
    if (isMocked) {  
      try {
        console.warn("isMocked is true, api is using mock data.")
          setformattedUserData(new userDataModel(USER_MAIN_DATA[userId])) 
          setformattedUserActivity(new activityDataModel(USER_ACTIVITY[userId]))
          setformattedUserAverage(new averageDataModel(USER_AVERAGE_SESSIONS[userId]))
          setformattedUserPerformance(new performanceDataModel(USER_PERFORMANCE[userId]))
        
        //quand les données ont fini d'être crées on indique que la page à fini de charger
      setIsLoading(false)

        //si il'y a une erreur on envoie l'état d'erreur sur la user page
      } catch (error) {
        setError(true);
        console.error("Error fetching user data");
      }

    } else { 
      
      //on vient fetch les données en fonction de l'user id et on rajoute le endpoint correspondant au données voulues 
      fetch(`${URL}${userId}`)
      .then((response) => { return response.json();})
        .then((actualData) => {setformattedUserData(new userDataModel(actualData.data))
      })
      .catch(function(error) {
        //si il'y a une erreur on envoie l'état d'erreur sur la user page
        if (error) {
          setError(true);
          console.error("Error fetching user data");
        }
      });

      fetch(`${URL}${userId}/activity`)
      .then((response) => {return response.json();})
        .then((actualData) => {
          setformattedUserActivity(new activityDataModel(actualData.data))
        })
      .catch(function(error) {
        if (error) {
          setError(true);
          console.error("Error fetching activity data");
        }
      });
    
      fetch(`${URL}${userId}/average-sessions`)
      .then((response) => {return response.json();})
        .then((actualData) => {
          setformattedUserAverage(new averageDataModel(actualData.data))
      })
      .catch(function(error) {
        if (error) {
          setError(true);
          console.error("Error fetching sessions data");
        }
      });
    
      fetch(`${URL}${userId}/performance`)
      .then((response) => {return response.json();})
        .then((actualData) => {
          setformattedUserPerformance(new performanceDataModel(actualData.data))
      })
      .catch(function(error) {
        if (error) {
          setError(true);
          console.error("Error fetching performance data");
        }
      });
      //si il n'y a pas d'erreur on indique que la page à fini de charger 
      if(error === false){
      setIsLoading(false)
    }
  }

  }, [URL, userId, error])
//on envoie les données correspondante et les état à la 
  return {formattedUserData, formattedUserActivity, formattedUserAverage, formattedUserPerformance, error, isLoading }
}
