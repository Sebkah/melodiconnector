"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {} from "@/components/ui/accordion";
import { queryDataset, RateLimiter } from "melodi-connector";
import {
  createFilter,
  Filter,
  getCodesOfDatasetDimension,
  getDatasetCodeDictionary,
} from "../../../../packages/melodi-connector/src/types/generalTypes";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";

// Importing it directly to have type information available
import { DD_CNA_AGREGATS_codeDictionary } from "../../../../packages/melodi-connector/src/types/datasetShapes/DD_CNA_AGREGATS/DD_CNA_AGREGATS_codeDictionary";

const DATASET_ID_one = "DD_CNA_AGREGATS" as const;
const DATASET_ID_two = "DD_CNA_APU" as const;

export default function DownloadDatasetPage() {
  // ========== STEP 1: Initialize Rate Limiter ==========
  // Initialize a rate limiter to respect API rate limits when making multiple requests
  // This could be shared across the whole app
  const limiter = useMemo(() => {
    console.log("Creating RateLimiter");
    const limiter = new RateLimiter(30, 60 * 1000);
    return limiter;
  }, []);

  // Clean up the rate limiter when the component unmounts
  useEffect(() => {
    return () => {
      limiter.stop();
    };
  }, [limiter]);

  // ========== STEP 2: Retrieve Dataset Codes and Dictionaries ==========
  // Multiple methods are available: direct API calls, typed helpers, or imported dictionaries
  // If you import the code dictionary, you get IDE documentation and type safety
  const CODE_DICTIONNARY = getDatasetCodeDictionary(DATASET_ID_one);
  const STO_CODES = getCodesOfDatasetDimension(DATASET_ID_one, "STO");

  // ========== STEP 3: Create Filters with Type Safety ==========
  // Option A: Using as const with satisfies for manual type checking
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const filter = {
    STO: ["B1NQ", STO_CODES["Acquisition nette d’actifs non financiers_P5L"]],
  } as const satisfies Filter<typeof DATASET_ID_one>;

  // Option B: Using the typed filter helper
  const filterFromFactory = createFilter(
    {
      STO: [
        "B102", // Direct string
        STO_CODES[
          "Autres acquisitions moins cessions d’actifs non financiers_P5K"
        ], // From the codes
        DD_CNA_AGREGATS_codeDictionary.STO[
          "Autres acquisitions moins cessions d’actifs non financiers_P5K"
        ], // From the imported code dictionary
      ],
      ACTIVITY: [CODE_DICTIONNARY.ACTIVITY["Total__T"]], // From the code dictionary itself,
    },
    DATASET_ID_one
  );

  // ========== STEP 4: Define Data Fetching Functions ==========
  const fetchDataset_one = async () => {
    return await queryDataset(
      DATASET_ID_one,
      {
        ...filterFromFactory,
      },
      limiter,
      (fetched, total) => {
        console.log(`Dataset 1 : Fetched ${fetched} / ${total} observations`);
      }
    );
  };

  const fetchDataset_two = async () => {
    return await queryDataset(
      DATASET_ID_two,
      // Can also inline the filter
      {
        STO: ["B1G", "B8G"],
      },
      limiter,
      (fetched, total) => {
        console.log(`Dataset 2 : Fetched ${fetched} / ${total} observations`);
      }
    );
  };

  // ========== STEP 5: Use React Query to Manage Fetching State ==========
  const {
    isPending,
    isError,
    data: dataset,
  } = useQuery({
    queryKey: ["dataset", DATASET_ID_one],
    queryFn: fetchDataset_one,
    retry: false, // Never retry, rate limiter handles that
  });

  const { isPending: isPendingTwo, data: datasetTwo } = useQuery({
    queryKey: ["dataset", DATASET_ID_two],
    queryFn: fetchDataset_two,
    retry: false, // Never retry, rate limiter handles that
  });

  // ========== STEP 6: Type Safety of Returned Data ==========
  // The returned data is properly typed based on the filter used
  // Type narrowing works here
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _alwaysTrue = dataset?.observations[0].dimensions.STO === "B102";

  // ========== STEP 7: Render Datasets ==========
  // Display both datasets in cards with loading and error states
  return (
    <div className="">
      {/* Dataset 1 */}
      <div className="p-8">
        {isPending && <div>Loading dataset...</div>}
        {isError && <div>Error loading dataset.</div>}
        {dataset && (
          <Card>
            <CardHeader>
              <CardTitle>Dataset: {DATASET_ID_one}</CardTitle>
              <CardDescription>
                Downloaded {dataset.observations.length} observations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="max-h-96 overflow-auto">
                {JSON.stringify(dataset, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}
      </div>
      {/* Dataset 2 */}
      <div className="p-8">
        {isPendingTwo && <div>Loading dataset 2...</div>}
        {datasetTwo && (
          <Card>
            <CardHeader>
              <CardTitle>Dataset: {DATASET_ID_two}</CardTitle>
              <CardDescription>
                Downloaded {datasetTwo.observations.length} observations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="max-h-96 overflow-auto">
                {JSON.stringify(datasetTwo, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
