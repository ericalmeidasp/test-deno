import { Context } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import data from "../db/db.json" assert { type: "json" };

class Books {
  constructor() {}
  public index(ctx: Context) {
    ctx.response.body = data.books;
  }
  public show(ctx: Context) {
    ctx.response.body = {id: 1}
  }
}

export default new Books();
