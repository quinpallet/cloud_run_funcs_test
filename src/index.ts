"use strict";

// [START functions_http_method]
const functions = require("@google-cloud/functions-framework");
import { Request, Response } from "@google-cloud/functions-framework";

/**
 * Responds to a GET request with "Hello World!". Forbids a PUT request.
 *
 * @example
 * gcloud functions call helloHttp
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
functions.http("helloHttp", (req: Request, res: Response) => {
  switch (req.method) {
    case "GET":
      res.status(200).send("Hello World!");
      break;
    case "POST":
      const request: ReqItem = req.body;
      res.status(200).send(request.msg);
      break;
    case "PUT":
      res.status(403).send("Forbidden!");
      break;
    default:
      res.status(405).send({ error: "Something blew up!" });
      break;
  }
});
