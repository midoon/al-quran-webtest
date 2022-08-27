import { useNavigate } from "react-router-dom";

const Card = ({ surah }) => {
  const navigate = useNavigate();

  //navigasi
  const handleSurah = (noSurah) => {
    const url = `/surah-detail/${noSurah}`;
    // return <Navigate to={url} replace />;
    navigate(url);
  };

  const getData = () => {
    // console.log(surah);
    return surah.map((data, i) => {
      return (
        <div key={i}>
          <div
            className="card   shadow-xl bg-slate-200 m-4"
            onClick={() => {
              handleSurah(data.nomor);
            }}
          >
            <div className="card-body">
              <div className="flex justify-between">
                <h1 className="text-2xl text-secondary">{data.nomor}</h1>
                <h1 className="text-2xl text-secondary">{data.asma}</h1>
              </div>
              <h2 className="card-title text-secondary">{data.arti}</h2>
              <p className="text-secondary">{data.ayat} Ayat</p>
              <div className="card-actions justify-end">
                <audio className="my-2" controls src={data.audio}></audio>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return getData();
};

export default Card;
