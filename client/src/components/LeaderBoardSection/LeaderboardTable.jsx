import { useState } from "react";
import LeaderboardRow from "./LeaderboardRow";

const LeaderboardTable = () => {

  const [showAll, setShowAll] = useState(false);
   const [loading, setLoading] = useState(false);

  const players = [
    { id: 4, rank: "04", name: "Vikram Malhotra", gender: "male", campus: "VIT Vellore", score: "892" },
    { id: 5, rank: "05", name: "Isha Singh", gender: "female", campus: "IIM Indore", score: "875" },
    { id: 6, rank: "06", name: "Karthik R.", gender: "male", campus: "NIT Trichy", score: "864" },
    { id: 7, rank: "07", name: "Meera Nair", gender: "female", campus: "Christ University", score: "850" },
    { id: 8, rank: "08", name: "Evans Ch", gender: "male", campus: "Brimstone Queens", score: "849" },
    { id: 9, rank: "09", name: "Tom Hiddlestan", gender: "male", campus: "Downtown Guard", score: "846" },
    { id: 10, rank: "10", name: "Emilia Cl", gender: "female", campus: "Midtown Westors", score: "840" },
    { id: 11, rank: "11", name: "Chamber", gender: "male", campus: "Neon NY", score: "836" }
  ];

    const handleViewAll = () => {
    setLoading(true);

    setTimeout(() => {
      setShowAll(true);
      setLoading(false);
    }, 1000); // 1 second delay
  };
  
  // Show only 4 users initially
  const visiblePlayers = showAll ? players : players.slice(0, 4);

  return (
    <div className="mt-16 bg-white rounded-3xl shadow-md border border-blue-100 overflow-hidden">

      {/* Table Header */}
      <div className="grid grid-cols-4 px-6 py-4 bg-blue-50 text-sm font-semibold text-gray-600">
        <div>RANK</div>
        <div>PLAYER</div>
        <div className="ml-24">CAMPUS</div>
        <div className="text-right">SCORE</div>
      </div>

      {/* Rows */}
      {visiblePlayers.map((player) => (
        <LeaderboardRow
          key={player.id}
          rank={player.rank}
          name={player.name}
          gender={player.gender}
          campus={player.campus}
          score={player.score}
        />
      ))}

       {/* View Button / Loader */}
     {!showAll && (
        <div className="text-center py-4">
          {loading ? (
            <p className="text-blue-600 font-medium animate-pulse">
              Loading leaderboard...
            </p>
          ) : (
            <button
              onClick={handleViewAll}
              className="text-blue-600 font-medium hover:underline transition cursor-pointer"
            >
              View Whole Leaderboard
            </button>
          )}
        </div>
      )}

    </div>
  );
};

export default LeaderboardTable;


// Useful when we fetch data from backend

// import { useEffect, useState } from "react";
// import LeaderboardRow from "./LeaderboardRow";

// const LeaderboardTable = () => {

//   const [players, setPlayers] = useState([]);
//   const [showAll, setShowAll] = useState(false);

//   // Simulated current logged-in user
//   // const currentUserId = "123"; // replace later with real logged user id

//   useEffect(() => {
//     fetch("http://localhost:5000/api/leaderboard")
//       .then(res => res.json())
//       .then(data => {
//         // Ensure sorted by points
//         const sorted = [...data].sort((a, b) => b.points - a.points);
//         setPlayers(sorted);
//       })
//       .catch(err => console.error(err));
//   }, []);

//   // Show only 4 rows initially
//   const visiblePlayers = showAll
//     ? players
//     : players.slice(3, 7); // after podium, show 4 rows

//   return (
//     <div className="mt-16 bg-white rounded-3xl shadow-md border border-blue-100 overflow-hidden">

//       {/* Header */}
//       <div className="grid grid-cols-4 px-6 py-4 bg-blue-50 text-sm font-semibold text-gray-600">
//         <div>RANK</div>
//         <div>PLAYER</div>
//         <div className="ml-24">CAMPUS</div>
//         <div className="text-right">SCORE</div>
//       </div>

//       {/* Rows */}
//       {visiblePlayers.map((player, index) => (
//         <LeaderboardRow
//           key={player._id}
//           rank={showAll ? index + 1 : index + 4}
//           name={player.name}
//           gender={player.gender}
//           campus={player.campus}
//           score={player.points}
//         />
//       ))}

//       {/* View All Button */}
//       {!showAll && players.length > 7 && (
//         <div
//           onClick={() => setShowAll(true)}
//           className="text-center py-4 text-blue-600 font-medium cursor-pointer hover:underline"
//         >
//           View Whole Leaderboard
//         </div>
//       )}

//     </div>
//   );
// };

// export default LeaderboardTable;
