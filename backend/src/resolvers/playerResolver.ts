import axios from "axios";
import { verifyToken } from "../utils/jwt";
import { PlayerList, Root } from "../interfaces/FantasyPrLeague";
import { Element, CLRoot, Team } from "../interfaces/CLInterface";
const playerResolver = {
  Query: {
    players: async (_: any, { league }: any, user: any) => {
      if (!user) throw new Error("You are not authenticated!");
      verifyToken(user.token);
      const url =
        league === "EPL"
          ? "https://gaming.uefa.com/en/uclfantasy/services/feeds/players/players_60_en_7.json"
          : "https://fantasy.premierleague.com/api/bootstrap-static/";
      /* const url = 
        "https://gaming.uefa.com/en/uclfantasy/services/feeds/players/players_60_en_7.json"; */
      const data = axios
        .get(url)
        .then(function (response: any) {
          // handle success'
          if (league === "EPL") {
            return response.data.data.value.playerList.map(
              (player: PlayerList) => ({
                firstName: player.pFName.split(" ")[0],
                secondName: player.pFName.split(" ")[1]
                  ? player.pFName.split(" ")[1]
                  : "-",
                displayName: player.pDName,
                totalPoints: player.totPts,
                team: player.teamPlayed,
                cCode: player.cCode,
                trained: player.trained,
              })
            );
          }
          if (league === "CL") {
            return response.data.elements.map((element: any) => {
              return {
                firstName: element.second_name,
                secondName: element.second_name,
                displayName: element.web_name,
                totalPoints: element.total_points,
                threat: element.threat,
                assists: element.assists,
              };
            });
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
      return data;
    },
  },
};

export default playerResolver;
