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
  DatasetCodeDictionaryOf,
  DatasetIdentifier,
  Filter,
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
import {
  CodeDictionaryDimensionKeyOf,
  CodeDictionaryDimensionValueOf,
  getAllDatasetInfos,
  getCodesOfDatasetDimension,
  getDatasetCodeDictionaryDimensions,
  getDatasetIdentifiers,
  getDatasetInfo,
} from "../../../../packages/melodi-connector/src/types/generalTypes";

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
  const dimensions = getDatasetCodeDictionaryDimensions(id);

  // This should not be necessary when we've collected all datasets
  const availableDatasets = getDatasetIdentifiers();

  const infos = getAllDatasetInfos();

  const [filter, setFilter] = useState<Filter<ID>>({});

  const { title, description } = getDatasetInfo(id);

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
              {dimensions.map((dimension) => {
                const categoryString = String(dimension);
                const codes = getCodesOfDatasetDimension(id, dimension);

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
                        dimension={dimension}
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

const Category = <
  ID extends DatasetIdentifier,
  D extends CodeDictionaryDimensionKeyOf<ID>,
>({
  codes,
  filter,
  dimension,
  setFilter,
}: {
  codes: CodeDictionaryDimensionValueOf<ID, D>;
  filter: Filter<ID>;
  dimension: D;
  setFilter: Dispatch<SetStateAction<Filter<ID>>>;
}) => {
  const [search, setSearch] = useState("");

  // XXX: maybe use a type guard here
  const filteredCodes = Object.fromEntries(
    Object.entries(codes as Record<string, string>).filter(([, codeValue]) =>
      codeValue.toString().toLowerCase().includes(search.toLowerCase())
    )
  ) as CodeDictionaryDimensionValueOf<ID, D>;

  return (
    <div className="">
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="mb-4"
      />

      <div className="w-full flex flex-wrap gap-2">
        {Object.entries(filteredCodes as Record<string, string>).map(
          ([subKey, subValue]) => {
            return (
              <CodeValue
                key={subValue + String(dimension)}
                dimension={dimension}
                filter={filter}
                value={
                  subValue as unknown as CodeDictionaryDimensionValueOf<ID, D>
                }
                title={String(subKey)}
                setFilter={setFilter}
              ></CodeValue>
            );
          }
        )}
      </div>
    </div>
  );
};

type CodeValueProps<
  ID extends DatasetIdentifier,
  D extends CodeDictionaryDimensionKeyOf<ID>,
  V extends CodeDictionaryDimensionValueOf<ID, D>,
> = {
  title: string;
  dimension: D;
  value: V;
  filter: Filter<ID>;
  setFilter: Dispatch<SetStateAction<Filter<ID>>>;
};

const CodeValue = <
  ID extends DatasetIdentifier,
  D extends CodeDictionaryDimensionKeyOf<ID>,
  V extends CodeDictionaryDimensionValueOf<ID, D>,
>({
  title,
  setFilter,
  dimension,
  filter,
  value,
}: CodeValueProps<ID, D, V>) => {
  let titleFormatted;
  if (typeof title === "string") {
    titleFormatted = title.split("_")[0];
  } else {
    titleFormatted = String(title);
  }
  // XXX: I'm not sure why we need assertions but I can't bother to investigate now
  const currentFilterArray = filter[dimension] as ReadonlyArray<V>;

  const on = currentFilterArray!.includes(value);

  return (
    <span
      className={`overflow-hidden border-2 rounded-2xl tracking-tigh p-3 ${on && "border-blue-600"} cursor-pointer`}
      onClick={() => {
        setFilter((prev) => {
          const oldArray = prev[dimension] as ReadonlyArray<V>;
          if (oldArray && oldArray.includes(value)) {
            // Remove value
            return {
              ...prev,
              [dimension]: oldArray.filter((v) => v !== value),
            };
          } else if (oldArray) {
            // Add value
            return {
              ...prev,
              [dimension]: [...oldArray, value],
            };
          }
          return prev;
        });
      }}
    >
      {titleFormatted}
    </span>
  );
};
