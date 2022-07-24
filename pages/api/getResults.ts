// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { load } from 'cheerio';
import axios from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

type Result = {
  title: string | undefined;
  image: string | undefined;
  price: string | undefined;
};

type Error = {
  error: any;
};

const AXIOS_OPTIONS = {
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36'
  }
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result[] | Error>
) {
  // Banifox
  // https://www.banifox.com/buscar?clave=linksys

  const { searchText } = req.query;

  const encodedString = encodeURI(searchText as string);

  return axios
    .get(`https://www.banifox.com/buscar?clave=${encodedString}`, AXIOS_OPTIONS)
    .then(response => {
      let $ = load(response.data);

      const images: Array<string | undefined> = [];
      const titles: Array<string | undefined> = [];
      const prices: Array<string | undefined> = [];

      $('.link-secundario > img').each((_, el) => {
        images.push($(el).attr('src'));
      });
      $('#lista_productos h4 a').each((_, el) => {
        titles.push($(el).attr('title'));
      });
      $('#lista_productos h4.texto-xl').each((_, el) => {
        prices.push($(el).text());
      });

      const results = [];

      for (let i = 0; i < images.length; i++) {
        results.push({
          title: titles[i],
          image: images[i],
          price: prices[i]
        });
      }

      res.status(200).json(results);
    })
    .catch(error => {
      res.status(500).json({ error });
    });
}
