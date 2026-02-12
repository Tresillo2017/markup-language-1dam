export default {
  async fetch(request, env) {
    // Get the URL path from the request
    const url = new URL(request.url);
    let pathname = url.pathname;

    // If the path is just "/", serve index.html
    if (pathname === "/") {
      pathname = "/index.html";
    }

    // Try to get the asset
    const asset = await env.ASSETS.fetch(request);

    // If asset is found, return it
    if (asset.status !== 404) {
      return asset;
    }

    // If not found and it's not a file with extension, try index.html
    if (!pathname.includes(".")) {
      const indexRequest = new Request(
        new URL(pathname + "/index.html", request.url),
        request,
      );
      return await env.ASSETS.fetch(indexRequest);
    }

    // Return 404 for missing assets
    return new Response("Not Found", { status: 404 });
  },
};
