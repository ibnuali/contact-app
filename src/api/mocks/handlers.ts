import { rest } from "msw";

const baseurl = "https://contact.herokuapp.com";
export const handlers = [
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
