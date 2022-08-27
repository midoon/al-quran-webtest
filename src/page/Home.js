import { useEffect, useState } from "react";
import Card from "../component/Card";
import Carousel from "../component/Carousel";
import Navbar from "../component/Navbar";

function Home() {
  const [surah, setSurah] = useState([]);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    getSurah();
  }, []);

  // console.log("data surah:", surah);

  return (
    <div className="Home bg-white">
      <Navbar />
      <div className="mt-14 ">
        <Carousel />
      </div>

      {loading ? (
        <div className="bg-white w-full h-screen flex justify-center ">
          <h1 className="text-secondary text-5xl mt-40">Loading...</h1>
        </div>
      ) : (
        <div className="container px-4">
          <Card surah={surah} />
        </div>
      )}
    </div>
  );
}

export default Home;
