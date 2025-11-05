"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Code,
  datasetCodes,
  DatasetIdentifier,
  datasetInfos,
  Filter,
  queryDataset,
  queryDatasetCount,
  queryDatasetPage,
} from "melodi-connector";
import { useTheme } from "next-themes";
import { Dispatch, Fragment, SetStateAction, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [id, setIdset] = useState<DatasetIdentifier>("DD_CNA_AGREGATS");
  return <DatasetVisualizer id={id} setIdset={setIdset} />;
}

const DatasetVisualizer = <ID extends DatasetIdentifier>({
  id,
  setIdset,
}: {
  id: ID;
  setIdset: Dispatch<SetStateAction<DatasetIdentifier>>;
}) => {
  // This is the codes for the current dataset
  const currentCodes = datasetCodes[id] as Code<ID>;

  const categories = Object.keys(currentCodes) as (keyof typeof currentCodes)[];

  // This should not be necessary when we've collected all datasets
  const availableDatasets = Object.keys(datasetCodes) as DatasetIdentifier[];

  const infos = datasetInfos;

  const [filter, setFilter] = useState<Filter<ID>>({});

  const { title, description } = datasetInfos[id];

  const { setTheme } = useTheme();
  setTheme("dark");

  return (
    <div className="relative grid h-dvh overflow-hidden grid-rows-[min-content_1fr] gap-3 p-8">
      <div
        className=" z-10 py-5 bg-linear-180 from-black from-80% 
       to-transparent"
      >
        <Card className="p-4 flex gap-4">
          <div className="flex flex-row items-center  gap-4 ">
            <Label htmlFor="dataset-select">Select Dataset:</Label>
            <Select
              onValueChange={(value) => {
                setIdset(value as DatasetIdentifier);
                setFilter({});
              }}
              value={id}
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Sélectionnez un dataset" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {availableDatasets.map((dataset) => (
                    <SelectItem key={dataset} value={dataset}>
                      {infos[dataset].title[0].content}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Card className="p-4 flex-1 bg-white/5">
            <CardTitle>{title[0].content}</CardTitle>
            <CardDescription>{description[0].content}</CardDescription>
          </Card>
        </Card>
      </div>

      <div className="grid grid-cols-2 h-full overflow-hidden gap-4 ">
        <Card className="p-4 w-full h-full overflow-y-auto">
          <CardHeader>
            <CardTitle>Filters</CardTitle>
            <CardDescription>
              Select dimension codes to filter the dataset
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" className=" flex  flex-col gap-4">
              {categories.map((category) => {
                const categoryString = String(category);
                const codes = currentCodes[category];

                return (
                  <AccordionItem
                    key={categoryString}
                    value={categoryString}
                    className="bg-white/2 px-5 rounded-md"
                  >
                    <AccordionTrigger className="cursor-pointer">
                      {categoryString}
                    </AccordionTrigger>
                    <AccordionContent>
                      <Category
                        key={categoryString}
                        category={category}
                        codes={codes}
                        filter={filter}
                        setFilter={setFilter}
                      ></Category>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </CardContent>
        </Card>
        <DataPreview filter={filter} id={id}></DataPreview>
      </div>
    </div>
  );
};

const DataPreview = <K extends DatasetIdentifier>({
  id,
  filter,
}: {
  id: K;
  filter: Filter<K>;
}) => {
  const { isLoading, data: count } = useQuery({
    queryKey: ["datasetCount", id, filter],
    queryFn: () => queryDatasetCount(id, filter),
  });

  const { isLoading: dataLoading, data } = useQuery({
    queryKey: ["datasetData", id, filter],
    queryFn: () =>
      queryDatasetPage(id, {
        fetchOptions: { maxResult: 50, page: 1 },
        filter,
      }),
    enabled: true,
  });

  return (
    <Card className="p-4 w-full h-full overflow-hidden grid-rows-[min-content_1fr]">
      <CardHeader className="flex justify-between">
        <div className="">
          <CardTitle>Data Preview</CardTitle>
          <CardDescription>Overview of selected values</CardDescription>
        </div>
        <div className="">
          <CardTitle>Number of observations for current filter</CardTitle>
          <CardDescription>{isLoading ? "Loading..." : count}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grid place-items-center content-center h-full border rounded-md">
        {!data ? (
          <>
            <Label className="mb-4 h-min">No data</Label>
            <button className="px-4 py-2 bg-blue-600 rounded-lg h-min">
              {dataLoading ? "Loading data..." : "Fetch Data Preview"}
            </button>
          </>
        ) : (
          <div className="w-full h-full overflow-auto grid grid-flow-row grid-cols-5">
            {Object.keys(data.observations[0].dimensions)
              .slice(0, 4)
              .map((dim) => (
                <div
                  key={dim}
                  className="font-bold border-b border-white/10 p-2"
                >
                  {dim}
                </div>
              ))}
            <div className="font-bold border-b border-white/10 p-2">Value</div>

            {data.observations.map((obs, index) => {
              let dimensionKeys = Object.keys(obs.dimensions);
              dimensionKeys = dimensionKeys.slice(0, 4);

              const dimensionsValues = dimensionKeys.map(
                (dim) => obs.dimensions[dim as keyof typeof obs.dimensions]
              );
              const measureValue = obs.measure;
              return (
                <Fragment key={index}>
                  {dimensionsValues.map((dimValue, dimIndex) => (
                    <div
                      key={dimIndex}
                      className="border-b border-white/10 p-2"
                    >
                      {String(dimValue)}
                    </div>
                  ))}
                  <div className="border-b border-white/10 p-2">
                    {measureValue}
                  </div>
                </Fragment>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Category = <ID extends DatasetIdentifier>({
  codes,
  filter,
  category,
  setFilter,
}: {
  codes: Code<ID>[keyof Code<ID>];
  filter: Filter<ID>;
  category: keyof Code<ID>;
  setFilter: Dispatch<SetStateAction<Filter<ID>>>;
}) => {
  const [search, setSearch] = useState("");

  const filteredCodes = Object.fromEntries(
    Object.entries(codes).filter(([, codeValue]) =>
      codeValue.toString().toLowerCase().includes(search.toLowerCase())
    )
  ) as Code<ID>[keyof Code<ID>];

  return (
    <div className="">
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="mb-4"
      />

      <div className="w-full flex flex-wrap gap-2">
        {Object.entries(filteredCodes).map(([subKey, subValue]) => {
          return (
            <CodeValue
              key={subValue + String(category)}
              dimension={category}
              filter={filter}
              value={subValue}
              title={String(subKey)}
              setFilter={setFilter}
            ></CodeValue>
          );
        })}
      </div>
    </div>
  );
};

type CodeValueProps<ID extends DatasetIdentifier> = {
  title: string;
  dimension: keyof Code<ID>;
  value: string | number;
  filter: Filter<ID>;
  setFilter: Dispatch<SetStateAction<Filter<ID>>>;
};

const CodeValue = <ID extends DatasetIdentifier>({
  title,
  setFilter,
  dimension,
  filter,
  value,
}: CodeValueProps<ID>) => {
  let titleFormatted;
  if (typeof title === "string") {
    titleFormatted = title.split("_")[0];
  } else {
    titleFormatted = String(title);
  }
  // Type assertion needed because value is union type but filter expects specific dimension type
  const currentFilterArray = filter[dimension] as
    | ReadonlyArray<typeof value>
    | undefined;
  const on = currentFilterArray?.includes(value);

  return (
    <span
      className={`overflow-hidden border-2 rounded-2xl tracking-tigh p-3 ${on && "border-blue-600"} cursor-pointer`}
      onClick={() => {
        setFilter((prev) => {
          const oldArray =
            (prev[dimension] as ReadonlyArray<typeof value> | undefined) || [];
          if (oldArray.includes(value)) {
            // Remove value
            return {
              ...prev,
              [dimension]: oldArray.filter((v) => v !== value),
            } as Filter<ID>;
          } else {
            // Add value
            return {
              ...prev,
              [dimension]: [...oldArray, value],
            } as Filter<ID>;
          }
        });
      }}
    >
      {titleFormatted}
    </span>
  );
};
