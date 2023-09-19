import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";

export const articleRouter = createTRPCRouter({
  getArticles: publicProcedure.query(async() => {
    const response = await fetch(
        `https://newsapi.org/v2/top-headlines?q=kids&apiKey=43a111198d7c429cbe4c1fcd65eefb2a`
      );
      const data = await response.json();
      return data.articles; 
  }),

  getDom: publicProcedure
  .input(z.object({ text: z.string() }))
  .query(async({ input }) => {
    try {
      const response = await fetch(input.text);
      const html = await response.text();
      
      const dom = new JSDOM(html, {
        url: input.text
      });
  
      const article = new Readability(dom.window.document).parse();
      return article?.content;
    } catch (error) {
      // console.error("Error:", error);
      throw new Error("Failed to retrieve and parse the content.");
    }
  }),
});
