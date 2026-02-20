"use client";
import { useEffect, useState } from 'react';
import { NexusMetric } from '../types/nexus';

interface CoinGeckoResponse {
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export const useNexusApi = () => {
  const [data, setData] = useState<NexusMetric[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,cardano'
      );
      if (!response.ok) throw new Error();
      const json: CoinGeckoResponse[] = await response.json();
      const formattedData: NexusMetric[] = json.map((coin) => ({
        name: coin.symbol.toUpperCase(),
        val: coin.current_price,
        change: coin.price_change_percentage_24h
      }));
      setData(formattedData);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);
  return { data, loading, error, refresh: fetchData };
};