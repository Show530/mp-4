"use server";

import {NewBookProps} from "@/new-types";

export async function getYearData(year: string): Promise<NewBookProps | null> {
    const query = `
    {
        me {
        user_books(
          order_by: {last_read_date: asc}
          where: {last_read_date: {_is_null: false, _gte: "${year}-1-1", _lte: "${year}-12-31"}}
        ) {
          book {
            title
            rating
            default_cover_edition {
              cached_image
            }
            cached_contributors
            id
          }
          last_read_date
        }
      }
    }  
    `;

    try {
        const result = await fetch("https://api.hardcover.app/v1/graphql", {
            "headers": {
                "accept": "application/json, multipart/mixed",
                    "accept-language": "en-US,en;q=0.9",
                    "authorization": `${process.env.HARDCOVER_API_KEY}`,
                    "content-type": "application/json",
                    "sec-ch-ua-mobile": "?0",
            },
                "body": JSON.stringify({query}),
                "method": "POST",
        });
        const data = await result.json();
        return data.data?.me[0]?.user_books ?? null;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}