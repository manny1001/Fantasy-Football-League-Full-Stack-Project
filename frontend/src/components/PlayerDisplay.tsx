import React, { useState, useEffect } from "react";
interface PlayerDisplayProps {
  token: string;
  handleLogout: () => void;
  setLoading: (value: boolean) => void;
  loading: boolean;
}
const PlayerDisplay: React.FC<PlayerDisplayProps> = ({
  token,
  handleLogout,
  loading,
  setLoading,
}) => {
  const [players, setPlayers] = useState([]);
  const [league, setLeague] = useState("EPL");
  const [team, setTeam] = useState("");
  const [sort, setSort] = useState(false);

  useEffect(() => {
    const fetchPlayers = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch("http://localhost:4000/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            query:
              league === "EPL"
                ? `{ players(league: "${league}") { firstName, secondName, displayName, totalPoints, team, cCode, trained } }`
                : `{ players(league: "${league}") { firstName, secondName, displayName, totalPoints, trained, threat, assists } }`,
          }),
        });
        const result = await response.json();
        setPlayers(result.data.players);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
      setLoading(false); // End loading
    };
    fetchPlayers();
  }, [league, token]);

  const handleSort = () => {
    setPlayers(
      [...players].sort((a: any, b: any) => b.totalPoints - a.totalPoints)
    );
    setSort(!sort);
  };

  const handleShuffle = () => {
    setPlayers([...players].sort(() => Math.random() - 0.5));
  };

  const filteredPlayers = players.filter(
    (player: any) => team === "" || player.team === team
  );

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"
            role="status"
          ></div>
        </div>
      ) : (
        <>
          <div className="mb-4 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <select
                className="block appearance-none border border-gray-200 rounded px-4 py-2 mr-2 leading-tight focus:outline-none focus:border-gray-500"
                onChange={(e) => setLeague(e.target.value)}
              >
                <option value="EPL">EPL</option>
                <option value="CL">Champions League</option>
              </select>
              <select
                className="block appearance-none border border-gray-200 rounded px-4 py-2 mr-2 leading-tight focus:outline-none focus:border-gray-500"
                onChange={(e) => setTeam(e.target.value)}
              >
                <option value="">All Teams</option>
                {[...new Set(players.map((player: any) => player.team))].map(
                  (team) => (
                    <option key={team} value={team}>
                      {team}
                    </option>
                  )
                )}
              </select>
            </div>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSort}
              >
                Sort by Points
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
                onClick={handleShuffle}
              >
                Shuffle
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredPlayers.map((player: any, index: any) => (
              <div key={index} className="border rounded p-4">
                <h3 className="text-lg font-semibold">
                  {player.firstName} {player.secondName}
                </h3>
                <p className="text-gray-600">{player.displayName}</p>
                <div className="mt-2 flex justify-between items-center">
                  <p className="text-gray-700">{player.team}</p>
                  <p className="text-gray-700">Points: {player.totalPoints}</p>
                </div>
                <p className="text-gray-700">Trained: {player.trained}</p>
                {league === "CL" && (
                  <>
                    <p className="text-gray-700">Threat: {player.threat}</p>
                    <p className="text-gray-700">Assists: {player.assists}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerDisplay;
