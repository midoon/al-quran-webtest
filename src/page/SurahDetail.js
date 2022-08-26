import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SurahDetail = () => {
  const { id } = useParams();
  const [ayat, setAyat] = useState([]);

  const getAyat = async () => {
    try {
      const url = `https://api.npoint.io/99c279bb173a6e28359c/surat/${id}`;
      const response = await fetch(url);
      const resJson = await response.json();
      setAyat(resJson);
    } catch (error) {
      console.log("error : ", error);
    }
  };

  useEffect(() => {
    getAyat();
  }, []);

  return ayat.map((data, i) => {
    return (
      <div className="p-4" key={i}>
        <div className="card  bg-slate-700 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{data.nomor}</h2>
            <div className="card-actions justify-end">
              <h2 className="text-lg">{data.ar}</h2>
            </div>
            <p>{data.id}</p>
          </div>
        </div>
      </div>
    );
  });
};

export default SurahDetail;
