export const config = {
  runtime: "edge",
};

export default (request: Request) => {
  return new Response(JSON.stringify({}), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
