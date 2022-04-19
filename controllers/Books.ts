import { Response } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import data from "../db/db.json" assert { type: "json" };

class Books {
  constructor() {}
  public index({ response }: { response: Response }) {
    response.body = data;
  }
  public show({
    response,
    params,
  }: {
    response: Response;
    // deno-lint-ignore no-explicit-any
    params: { id: any };
  }) {
    const index = data.findIndex(book => book.id == params.id);
    const book = data[index]
    response.body = book;
  }
}

export default new Books();
