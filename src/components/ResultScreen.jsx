function ResultScreen({ team1Score, team2Score }) {
    return (
      <div className="flex flex-col items-center justify-center w-full bg-gray-100 p-4">
        {/* Başlık */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Oyun Bitti!</h1>
  
        {/* Puan Kartı */}
        <div className="card w-full max-w-md bg-white shadow-xl p-6 mb-6 text-center">
          <p className="text-lg text-blue-700 mb-2">
            Mavi Takım Puanı: <span className="font-semibold ">{team1Score}</span>
          </p>
          <p className="text-lg text-red-700 mb-4">
            Kırmızı Takım Puanı: <span className="font-semibold ">{team2Score}</span>
          </p>
          <p className="text-xl font-bold text-gray-800">
            Kazanan:{" "}
            <span className={` ${team1Score > team2Score ? "text-blue-600" : team2Score > team1Score ? "text-red-600" : "text-success"}`}>
              {team1Score > team2Score ? "Mavi Takım" : team2Score > team1Score ? "Kırmızı Takım" : "Berabere"}
            </span>
          </p>
        </div>
  
        {/* Opsiyonel: Tekrar Oyna Butonu */}
        <button className="btn btn-neutral" onClick={() => window.location.reload()}>
          Tekrar Oyna
        </button>
      </div>
    );
  }
  
  export default ResultScreen;