import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selected, setSelected] = useState("");
  const [money, setMoney] = useState(20);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(res => res.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = e => {
    setMoney(e.target.value);
  };
  const onSelect = e => {
    setSelected(e.target.value);
  };
  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onSelect}>
            {coins.map(coin => (
              <option
                key={coin.id}
                name={coin.name}
                value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
              </option>
            ))}
          </select>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <label htmlFor="usd">USD :</label>
              <input
                id="usd"
                type="number"
                onChange={onChange}
                placeholder={money}
              />
              <span> 현재 가지고 있는 Dollar</span>
            </div>
            <div>
              <label htmlFor="btc">BTC :</label>
              <input
                id="btc"
                type="number"
                value={(selected / money).toFixed(4)}
                disabled
              />
              <span> 가지고있는 Dollar로 변경할 수 있는 비트코인</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
