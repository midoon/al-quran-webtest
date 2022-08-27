import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";

const SurahDetail = () => {
  const { id } = useParams();
  const [ayat, setAyat] = useState([]);
  const [loading, setLoading] = useState(false);

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
  }, []);

  return (
    <div className="bg-white">
      <Navbar />
      {loading ? (
        <div className="bg-white w-full h-full flex justify-center items-center">
          <h1 className="text-secondary text-5xl">Loading</h1>
        </div>
      ) : (
        <div className="mt-20">
          {ayat.map((data, i) => {
            return (
              <div className="p-4" key={i}>
                <div className="card  bg-slate-200 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title text-secondary">{data.nomor}</h2>
                    <div className="card-actions justify-end">
                      <h2 className="text-lg text-right text-secondary">{data.ar}</h2>
                    </div>
                    <p className="text-secondary">{data.id}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SurahDetail;
