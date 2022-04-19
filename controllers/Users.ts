import { Context } from "https://deno.land/x/oak@v10.5.1/mod.ts";

class Users {
  constructor() {
  }
  public show(ctx: Context) {
    const id = { msg: "hello worldii" };
    ctx.response.body = id;
  }
}

export default new Users()
