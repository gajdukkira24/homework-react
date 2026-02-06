
  import myPhoto from './assets/Altja_jõgi_Lahemaal.jpg';
  function App() {
  const myName = "Кіра";
  const myFavoriteSite = {
    назва_сайту: "Google",
    url: "https://www.google.com/"
  };
  const num1 = 5;
  const num2 = 19;
  const colors =["Червоний", "Синій", "Зелений"];

  return (
    <>
      <div>
        <h1>Привіт, мене звати {myName}</h1>
      </div>
      <div>
        <p>Ласкаво просимо до нашого сайту!</p>
      </div>
      <div>
        <img src={myPhoto} alt="Фото природи ">
        </img>
      </div>
      <div>
      <h1>Мій улюблений сайт:</h1>
      <a href={myFavoriteSite.url} target="_blank">
        {myFavoriteSite.назва_сайту}
      </a>
    </div>
    <div>
      <p> результат  {num1+num2} </p>
    </div>
    <div>
    <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default App;
