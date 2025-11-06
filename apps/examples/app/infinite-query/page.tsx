"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { useEffect, useMemo } from "react";
import { queryDatasetPage, RateLimiter } from "melodi-connector";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";



// Simple button component
const Button = ({
  onClick,
  disabled,
  children,
  className = "",
}: {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
  className?: string;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
      disabled
        ? "opacity-50 cursor-not-allowed bg-gray-600"
        : "bg-blue-600 hover:bg-blue-700"
    } ${className}`}
  >
    {children}
  </button>
);

/**
 * Hook to initialize and manage rate limiter
 * Rate limiter: 30 requests per 60 seconds
 */
const useRateLimiter = () => {
  const limiter = useMemo(() => {
    console.log("Creating RateLimiter: 30 requests per 60 seconds");
    const rateLimiter = new RateLimiter(30, 60 * 1000);
    return rateLimiter;
  }, []);

  // Clean up the rate limiter when the component unmounts
  useEffect(() => {
    return () => {
      limiter.stop();
    };
  }, [limiter]);

  return limiter;
};

/**
 * Hook to fetch DD_CNA_APU data with infinite query support
 * Supports bidirectional pagination (forward and backward)
 * Uses RateLimiter to respect API rate limits
 */
const useInfiniteAPUQuery = () => {
  const rateLimiter = useRateLimiter();

  return useInfiniteQuery<
    {
      pageNumber: number;
      totalCount: number;
      observations: Array<Record<string, unknown>>;
    },
    Error
  >({
    queryKey: ["DD_CNA_APU", "infinite"],
    queryFn: async ({ pageParam = 1 }) => {
      const pageNumber = typeof pageParam === "number" ? pageParam : 1;

      const data = await queryDatasetPage(
        "DD_CNA_APU",
        {
          fetchOptions: {
            page: pageNumber,
            maxResult: 25,
          },
        },
        rateLimiter
      );

      return {
        pageNumber,
        totalCount: data.paging.count,
        observations: data.observations as Array<Record<string, unknown>>,
      };
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      // If there's a next page, calculate based on total count
      return lastPage.pageNumber < Math.ceil(lastPage.totalCount / 25)
        ? lastPage.pageNumber + 1
        : undefined;
    },
    getPreviousPageParam: (firstPage) => {
      // Allow going back if not on first page
      return firstPage.pageNumber > 1 ? firstPage.pageNumber - 1 : undefined;
    },
  });
};

/**
 * TanStack Table component for displaying APU data with infinite scrolling
 */
const APUDataTable = ({ rateLimiter }: { rateLimiter: RateLimiter }) => {
  const {
    data,
    error,
    isLoading,
    isFetching,
    hasNextPage,
    hasPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
  } = useInfiniteAPUQuery();

  // Flatten all pages into a single array of observations
  const allObservations = useMemo(() => {
    if (!data?.pages) return [];
    return data.pages.flatMap((page) => page.observations);
  }, [data?.pages]);

  // Get dimension keys from first observation to create dynamic columns
  const dimensionKeys = useMemo(() => {
    if (allObservations.length === 0) return [];
    const firstObs = allObservations[0];
    const dimensions = firstObs.dimensions as Record<string, unknown>;
    return Object.keys(dimensions).slice(0, 6); // Show first 6 dimensions
  }, [allObservations]);

  // Column definitions for the table
  const columns: ColumnDef<Record<string, unknown>>[] = useMemo(() => {
    const cols: ColumnDef<Record<string, unknown>>[] = dimensionKeys.map(
      (key) => ({
        id: key,
        header: key,
        cell: (info) => {
          const dimensions = info.row.original.dimensions as Record<
            string,
            unknown
          >;
          return String(dimensions[key] ?? "-");
        },
        size: 120,
      })
    );

    // Add measure column
    cols.push({
      id: "measure",
      header: "Measure",
      cell: (info) => {
        const measure = info.row.original.measure as number;
        return measure ? measure.toFixed(2) : "-";
      },
      size: 120,
    });

    return cols;
  }, [dimensionKeys]);

  // Initialize React Table
  // Note: useReactTable returns functions that cannot be safely memoized,
  // so we accept the React Compiler warning here
  const table = useReactTable({
    data: allObservations,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (error) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Error</CardTitle>
        </CardHeader>
        <CardContent className="text-red-500">
          Failed to load data: {error.message}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>DD_CNA_APU Infinite Query</CardTitle>
          <CardDescription>
            Navigate through dataset observations with bidirectional pagination.
            Rate limiter: 30 requests per 60 seconds
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Pagination Controls */}
            <div className="flex gap-2 justify-between items-center">
              <div className="flex gap-2">
                <Button
                  onClick={() => fetchPreviousPage()}
                  disabled={!hasPreviousPage || isFetching}
                  className="gap-2"
                >
                  <ChevronUp className="w-4 h-4" />
                  Previous
                </Button>
                <Button
                  onClick={() => fetchNextPage()}
                  disabled={!hasNextPage || isFetching}
                  className="gap-2"
                >
                  Next
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </div>

              {/* Loading Indicator */}
              {isFetching && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Loading...
                </div>
              )}

              {/* Row Count Info */}
              <div className="text-sm text-muted-foreground">
                Showing {allObservations.length} rows
                {data?.pages && ` (${data.pages.length} page(s) loaded)`}
              </div>
            </div>

            {/* Table */}
            <div className="border rounded-lg overflow-x-auto max-h-[600px] overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 border-b sticky top-0">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          className="text-left px-4 py-3 font-medium whitespace-nowrap"
                          style={{ width: header.getSize() }}
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {isLoading && allObservations.length === 0 ? (
                    <tr>
                      <td
                        colSpan={columns.length}
                        className="text-center px-4 py-8 text-muted-foreground"
                      >
                        <div className="flex justify-center items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Loading data...
                        </div>
                      </td>
                    </tr>
                  ) : allObservations.length === 0 ? (
                    <tr>
                      <td
                        colSpan={columns.length}
                        className="text-center px-4 py-8 text-muted-foreground"
                      >
                        No data available
                      </td>
                    </tr>
                  ) : (
                    table.getRowModel().rows.map((row, idx) => (
                      <tr
                        key={idx}
                        className="border-b hover:bg-muted/50 transition-colors"
                      >
                        {row.getVisibleCells().map((cell) => (
                          <td
                            key={cell.id}
                            className="px-4 py-3 whitespace-nowrap"
                            style={{ width: cell.column.getSize() }}
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Footer Info */}
            <div className="text-xs text-muted-foreground space-y-1">
              <p>
                • Use &apos;Previous&apos; and &apos;Next&apos; buttons to
                navigate
              </p>
              <p>• Data loads 25 observations per page</p>
              <p>• All loaded observations are accumulated in the table</p>
              <p>
                • Rate limiter enforces 30 requests per 60 seconds to avoid API
                throttling
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

/**
 * Main page component - DD_CNA_APU Infinite Query Example
 *
 * This page demonstrates:
 * - React Query useInfiniteQuery hook with bidirectional pagination
 * - TanStack Table integration with dynamic data
 * - RateLimiter for respectful API usage
 * - Loading states and error handling
 * - Dataset-specific observations with typed dimensions
 */
export default function InfiniteQueryPage() {
  const rateLimiter = useRateLimiter();

  return (
    <div className="w-full h-full p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Infinite Query Example
        </h1>
        <p className="text-muted-foreground mt-2">
          DD_CNA_APU dataset with React Query, TanStack Table, and Rate Limiting
        </p>
      </div>
      <APUDataTable rateLimiter={rateLimiter} />
    </div>
  );
}
