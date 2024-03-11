
import { useCountryStore } from "@/app/store/Country/Country"
import { ICountryData } from "@/app/types/CountryTypes"
import { Button } from "@/view/components/ui/Button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/view/components/ui/DropdownMenu"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { createSearchParams, useNavigate } from "react-router-dom";

export function CustomCell({ row }: any) {
    const country = row.original;
    const navigate = useNavigate();
    const { setCountry } = useCountryStore();


    function handleBackHomeFiltered() {
        setCountry(country);
        navigate({
            pathname: "/",
            search: createSearchParams({
                country: `${country.name.common}`
            }).toString()
        });
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={handleBackHomeFiltered}
          >
            View
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

export const columns: ColumnDef<ICountryData>[] = [
  {
    accessorKey: "name",
    accessorFn: (row) => row.name.common,
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "capital",
    header: "Capital",
  },
  {
    accessorKey: "languages",
    accessorFn: (row) => {return Object.values(row.languages)[0]},
    header: "Languages",
  },
  {
    accessorKey: "currencies",
    accessorFn: (row) => {return row.currencies[Object.keys(row.currencies)[0]].name},
    header: "Currencies",
  },
  {
    accessorKey: "population",
    header: "Population",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: CustomCell,
  },
]
