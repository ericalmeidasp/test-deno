import { Response } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import data from "../db/db.json" assert { type: "json" };

class Books {
  constructor() {}
  public index({ response }: { response: Response }) {
    response.body = data.books;
  }
  public show({
    response,
    params,
  }: {
    response: Response;
    // deno-lint-ignore no-explicit-any
    params: { id: any };
  }) {
    const index = data.books.findIndex(book => book.id == params.id);
    response.body = data.books[index];
  }
}

export default new Books();
