function StartScreen({ setGameState }) {
    const startGame = () => {
      setGameState('playing');
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        {/* Başlık ve Açıklama Kartı */}
        <div className="card w-full max-w-md bg-white shadow-xl p-6 mb-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Tabu Oyunu</h1>
          <p className="text-lg text-gray-600 font-bold">
            2 takım, her biri 2 dakikada kelimeleri tahmin etmeye çalışacak!
          </p>
        </div>
  
        {/* Oyunu Başlat Butonu */}
        <button onClick={startGame} className="btn btn-primary btn-lg">
          Oyunu Başlat
        </button>
      </div>
    );
  }
  
  export default StartScreen;