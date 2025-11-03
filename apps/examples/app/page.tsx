"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  datasetCodes,
  DatasetIdentifier,
  datasetInfos,
  Filter,
  queryDatasetCount,
  queryDatasetPage,
} from "melodi-connector";
import { useTheme } from "next-themes";
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";

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
  const codes = datasetCodes;
  const infos = datasetInfos;

  const [filter, setFilter] = useState<Filter<typeof id>>({});

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
                  {Object.entries(codes).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {infos[key as DatasetIdentifier].title[0].content}
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
              {Object.entries(codes[id]).map(
                ([category, codes]: [
                  string,
                  Record<string, string | number>,
                ]) => (
                  <AccordionItem
                    key={category}
                    value={category}
                    className="bg-white/2 px-5 rounded-md"
                  >
                    <AccordionTrigger className="cursor-pointer">
                      {category}
                    </AccordionTrigger>
                    <AccordionContent>
                      <CodeDimension
                        key={category}
                        category={category}
                        codes={codes}
                        filter={filter}
                        setFilter={setFilter}
                      ></CodeDimension>
                    </AccordionContent>
                  </AccordionItem>
                )
              )}
            </Accordion>
          </CardContent>
        </Card>
        <DataPreview filter={filter} id={id}></DataPreview>
      </div>
    </div>
  );
}

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
                (dim) => obs.dimensions[dim]
              );
              const measureValue = obs.measure;
              return (
                <Fragment key={index}>
                  {dimensionsValues.map((dimValue, dimIndex) => (
                    <div
                      key={dimIndex}
                      className="border-b border-white/10 p-2"
                    >
                      {dimValue}
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

const CodeDimension = <ID extends DatasetIdentifier>({
  codes,
  filter,
  category,
  setFilter,
}: {
  codes: Record<string, string | number>;
  filter: Filter<ID>;
  category: string;
  setFilter: Dispatch<SetStateAction<Filter<ID>>>;
}) => {
  const [search, setSearch] = useState("");
  const filteredCodes = Object.fromEntries(
    Object.entries(codes).filter(([key, value]) =>
      key.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="">
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="mb-4"
      />

      <div className="w-full flex flex-wrap gap-2">
        {Object.entries(filteredCodes).map(([subKey, subValue], index) => {
          return (
            <CodeValue
              key={subValue + category}
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
  dimension: string;
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
  const on = filter[dimension]?.includes(value);

  return (
    <span
      className={`overflow-hidden border-2 rounded-2xl tracking-tigh p-3 ${on && "border-blue-600"} cursor-pointer`}
      onClick={() => {
        setFilter((prev) => {
          const oldArray = prev[dimension] || [];
          if (oldArray.includes(value)) {
            // Remove value
            return {
              ...prev,
              [dimension]: oldArray.filter((v) => v !== value),
            };
          } else {
            // Add value
            return {
              ...prev,
              [dimension]: [...oldArray, value],
            };
          }
        });
      }}
    >
      {titleFormatted}
    </span>
  );
};
