export const config = {
  runtime: 'edge',
};

export default (request: Request) => {
    return new Response("Hello, Serverless!");
}
