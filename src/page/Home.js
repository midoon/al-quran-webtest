import { useEffect, useState } from "react";
import Card from "../component/Card";
import Carousel from "../component/Carousel";

function Home() {
  const [surah, setSurah] = useState([]);

  const getSurah = async () => {
    try {
      const url = "https://api.npoint.io/99c279bb173a6e28359c/data";
      const response = await fetch(url);
      const resJson = await response.json();
      setSurah(resJson);
    } catch (error) {
      console.log("error : ", error);
    }
  };

  useEffect(() => {
    getSurah();
  }, []);

  return (
    <div className="Home ">
      <Carousel />
      {/* list bawah  */}
      <div className="bg-white flex justify-center p-4">
        <h1 className="text-4xl">Al-Qur'an</h1>
      </div>
      <div className="p-5">
        <Card surah={surah} />
      </div>
    </div>
  );
}

export default Home;
