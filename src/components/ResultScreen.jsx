function ResultScreen({ team1Score, team2Score }) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        {/* Başlık */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Oyun Bitti!</h1>
  
        {/* Puan Kartı */}
        <div className="card w-full max-w-md bg-white shadow-xl p-6 mb-6 text-center">
          <p className="text-lg text-gray-700 mb-2">
            Takım 1 Puanı: <span className="font-semibold text-primary">{team1Score}</span>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Takım 2 Puanı: <span className="font-semibold text-primary">{team2Score}</span>
          </p>
          <p className="text-xl font-bold text-gray-800">
            Kazanan:{" "}
            <span className="text-success">
              {team1Score > team2Score ? "Takım 1" : team2Score > team1Score ? "Takım 2" : "Berabere"}
            </span>
          </p>
        </div>
  
        {/* Opsiyonel: Tekrar Oyna Butonu */}
        <button className="btn btn-primary" onClick={() => window.location.reload()}>
          Tekrar Oyna
        </button>
      </div>
    );
  }
  
  export default ResultScreen;