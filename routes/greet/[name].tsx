import { PageProps } from "$fresh/server.ts";

export default function GreetPage(
  { params, url }: PageProps,
) {
  const { name } = params;

  const age = url.searchParams.get("age");
  return (
    <main>
      <p>
        Greeting to you, {name} {age}
      </p>
    </main>
  );
}
