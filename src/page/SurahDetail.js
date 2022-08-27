import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";

const SurahDetail = () => {
  const { id } = useParams();
  const [ayat, setAyat] = useState([]);
  const [surah, setSurah] = useState([]);
  const [audio, setAudio] = useState("");
  const [loading, setLoading] = useState(false);

  const getAudio = () => {
    surah.map((data, i) => {
      if (data.nomor === id) {
        setAudio(data.audio);
      }
    });
    console.log("detail surah:", surah);
    console.log("link audio: ", audio);
  };

  const getSurah = async () => {
    setLoading(true);
    try {
      const url = "https://api.npoint.io/99c279bb173a6e28359c/data";
      const response = await fetch(url);
      const resJson = await response.json();
      setSurah(resJson);
    } catch (error) {
      console.log("error : ", error);
    }
    setLoading(false);
  };

  const getAyat = async () => {
    setLoading(true);
    try {
      const url = `https://api.npoint.io/99c279bb173a6e28359c/surat/${id}`;
      const response = await fetch(url);
      const resJson = await response.json();
      setAyat(resJson);
    } catch (error) {
      console.log("error : ", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    getAyat();
    getSurah();
  }, []);

  useEffect(() => {
    getAudio();
  });

  return (
    <div className="bg-white">
      <Navbar />
      {loading ? (
        <div className="bg-white w-full h-screen flex justify-center items-center">
          <h1 className="text-secondary text-5xl">Loading</h1>
        </div>
      ) : (
        <>
          <div className="mt-16 p-8">
            <audio className="my- w-full" controls src={audio}></audio>
          </div>
          <div className="mt-2">
            {ayat.map((data, i) => {
              return (
                <div className="p-4" key={i}>
                  <div className="card  bg-slate-200 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title text-secondary">{data.nomor}</h2>
                      <div className="card-actions justify-end">
                        <h2 className="text-2xl text-right text-secondary">{data.ar}</h2>
                      </div>
                      <p className="text-secondary">{data.id}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default SurahDetail;
