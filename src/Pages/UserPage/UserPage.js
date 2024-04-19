import "./UserPage.css"
import { useParams } from 'react-router-dom'
import React from "react"
import { useFetch } from '../../Service/api.js';

import DailyActivity from '../../components/DailyActivity/DailyActivity.js';
import DurationActivity from '../../components/DurationActivity/DurationActivity.js';
import Chart from '../../components/Chart/Graph.js';
import Score from '../../components/Score/Score.js';
import Stats from '../../components/Stats/Stats.js';

export default function ProfilPage() {

  const { userId } = useParams();
  const { formattedUserData, formattedUserActivity, formattedUserAverage, formattedUserPerformance, error, isLoading} = useFetch(userId);

    // au cas ou si il y a une erreur, on affiche que les données sont indisponibles
  if(error === true){
    return <div className="error">⚠️ Les données sont indisponible pour le moment ⚠️</div>
  }else{
    //variable pour laisser le temps à la page de prendre les données et de les afficher correctement
      if(!isLoading){
          setTimeout(() => {
            const loader = document.getElementById("loader");
            const hidden = document.getElementById("hidden");
            if( loader ==null && hidden == null ) {
              return
            }else{
            loader.style.display = "none";
            hidden.style.display = "block";
          }
          }, 500); 
        }
      }

  return (
    <>
      <div id="loader" className="loader"></div>
      <main id="hidden" className="hidden">
        <div className="user">
          <h1>Bonjour <span>{formattedUserData?.firstName}</span></h1>
          <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div><div className="dashboards">
          <div className="activity">
            <DailyActivity userDaily={formattedUserActivity?.sessions} />
            <DurationActivity userDuration={formattedUserAverage?.sessions} />
            <Chart userPerformance={formattedUserPerformance?.sessions} />
            <Score userScore={formattedUserData?.todayScore} />
          </div>
            <Stats userStats={formattedUserData?.keyData} />
        </div>
      </main>
    </>
  );  
} 
