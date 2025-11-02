import { ok } from "assert";
import { getDatasetCatalog } from "../getters/getDatasets";
import { RateLimiter } from "./RateLimiter";

const rateLimiter = new RateLimiter(29, 60000);

const wait = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const fetchMock = async () => {
  const data = await getDatasetCatalog();

  return data.length;
};

const test = async () => {
  console.log("Starting rate limiter test...");
  for (let i = 0; i < 40; i++) {
    const res = rateLimiter
      .execute(fetchMock)
      .then((data) => console.log(data));
    console.log(`Request ${i + 1} result: ${res}`);
  }
};

test();
