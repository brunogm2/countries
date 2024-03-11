import { columns } from "./Components/datatable/columns";
import { DataTable } from "./Components/datatable/data-table";

import useHistoricViewModel from "./useHistoricViewModel";
import { Button } from "@/view/components/ui/Button";
import { useNavigate } from "react-router-dom";

export function Historic() {
    const navigate = useNavigate();
    const { storedData, filteredCountries } = useHistoricViewModel();

    return (
        <div className="container mx-auto flex flex-col gap-4">

            {storedData && <DataTable columns={columns} data={filteredCountries} />}

            {!storedData && (
                <div className="flex flex-col items-center justify-center w-full gap-4">
                    <strong className="text-xl">Você ainda não possui um historico!</strong>
                    <Button className="" onClick={() => navigate('/')}>Voltar a home!</Button>
                </div>
            )}
        </div>
    );
}
