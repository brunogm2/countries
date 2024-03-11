import { useCountryQueryParam } from "@/app/hooks/useGetCountryQueryParam";
import { useSetCountryQueryParam } from "@/app/hooks/useSetCountryQueryParam";
import { useForm } from "react-hook-form";

interface FilterSchema {
    country: string;
}

export default function useHeaderViewModel() {
    const country = useCountryQueryParam();
    const setCountryQueryParam = useSetCountryQueryParam();

    const { register, handleSubmit } = useForm<FilterSchema>({
        values: {
            country: country ?? ''
        }
    });

    function clearSearch() {
        setCountryQueryParam('country');
    }

    function handleSearch({ country }: FilterSchema) {
        setCountryQueryParam('country', country);
    }

    return { handleSearch, register, handleSubmit, clearSearch, country };
}
