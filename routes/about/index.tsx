import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req: Request, ctx) {
    const respo = await ctx.render();
    respo.headers.set("X-Custom-Header", "Hello");
    return respo;
  },
};

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
    </main>
  );
}
