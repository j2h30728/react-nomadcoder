import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [asset, setAsset] = useState("");
  const [name, setName] = useState("위의 옵션에서 선택해주세요.");
  const [usdPrice, setusdPrice] = useState(0);

  const getCoinse = async () => {
    const fetingCoins = await (
      await fetch("https://api.coinpaprika.com/v1/tickers")
    ).json();
    setCoins(fetingCoins);
    setLoading(false);
  };
  useEffect(() => {
    getCoinse();
  }, []);

  const handleAsset = event => {
    setAsset(parseInt(event.target.value));
  };
  const hadleReset = event => {
    event.preventDefault();
    setAsset(0);
  };
  const handleOption = event => {
    setName(event.target.selectedOptions[0].text.split(":")[0]);
    setusdPrice(parseFloat(event.target.value));
  };
  return (
    <>
      <h1>Coins ({loading ? "0" : coins.length})</h1>
      <hr />
      {loading ? (
        "Loading..."
      ) : (
        <>
          <p>확인 하고싶은 코인을 선택해주세요.</p>
          <select onChange={handleOption}>
            {coins.map(coin => (
              <option value={coin.quotes.USD.price} key={coin.id}>
                {coin.name}({coin.symbol}) : ${coin.quotes.USD.price.toFixed(5)}{" "}
                USD
              </option>
            ))}
          </select>
          <hr />
          <p>선택한 코인 : {name}</p>
          <form onSubmit={hadleReset}>
            <input
              onChange={handleAsset}
              value={asset}
              type="number"
              placeholder="USD"
            />
            <input type="submit" value="Reset" />
          </form>
          <p>
            {asset ? asset : 0} 달러당 , 살 수 있는 코인 :{" "}
            {asset > 0 && usdPrice !== 0 ? (usdPrice / asset).toFixed(5) : 0}
          </p>
        </>
      )}
    </>
  );
}

export default App;
