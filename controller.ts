import { Context } from "https://deno.land/x/oak@v10.5.1/mod.ts";

class User {
  constructor() {
  }
  public index(ctx: Context) {
    ctx.response.body = { msg: "hello" };
  }
  public show(ctx: Context) {
    const id = { msg: "hello worldii" };
    ctx.response.body = id;
  }
  public store(ctx: Context) {
    const data = ctx.request.body;
    ctx.response.body = data;
  }
}

export default new User();
