import { useNavigate } from "react-router-dom";

const Card = ({ surah }) => {
  const navigate = useNavigate();

  //navigasi
  const handleSurah = (noSurah) => {
    const url = `/surah-detail/${noSurah}`;
    // return <Navigate to={url} replace />;
    console.log(noSurah);
    navigate(url);
  };

  const getData = () => {
    // console.log(surah);
    return surah.map((data, i) => {
      return (
        <div key={i}>
          <div
            className="card   shadow-xl bg-slate-700 m-4"
            onClick={() => {
              handleSurah(data.nomor);
            }}
          >
            <div className="card-body">
              <h1 className="text-2xl">{data.asma}</h1>
              <h2 className="card-title">{data.arti}</h2>
              <p>{data.ayat} Ayat</p>
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
