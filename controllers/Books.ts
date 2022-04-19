import { Response } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import data from "../db/db.json" assert { type: "json" };

class Books {
  constructor() {}
  public index({ response }: { response: Response }) {
    const books = JSON.parse(data.books)
    response.body = books;
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
    const book = JSON.parse(data.books[index])
    response.body = book;
  }
}

export default new Books();
