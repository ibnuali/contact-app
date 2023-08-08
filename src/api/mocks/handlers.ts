import { rest } from "msw";

const baseurl = "https://contact.herokuapp.com";
export const handlers = [
  rest.get(
    baseurl + "/cms-periodic-claim-api/claim/latest",
    (req, res, ctx) => {
      const authorisazion = req.headers.get("authorization");
      if (!authorisazion) {
        return res(
          ctx.status(401),
          ctx.json({
            errorMessage: "Not authorized",
          })
        );
      }
      return res(ctx.status(200), ctx.json([]));
    }
  ),

  rest.post(baseurl + "contact", async (req, res, ctx) => {
    try {
      const jsonParam = await req.json();
      return res(ctx.status(200), ctx.delay(2000), ctx.json(jsonParam));
    } catch (e: any) {
      if (e.message === "401") {
        return res(
          ctx.status(401),
          ctx.json({
            errorMessage: "Not authorized",
          })
        );
      }
    }
  }),
];
