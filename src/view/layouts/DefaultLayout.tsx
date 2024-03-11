import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { useCountryStore } from "@/app/store/Country/Country";

export default function DefaultLayout() {
    const { country } = useCountryStore();

    return(
        <div>
            <div className="mx-auto flex items-center justify-center mb-4 mt-6">
                <h1 className="text-4xl tracking-[-3px] font-extrabold font-grotesk text-center">Choose your destination</h1>
            </div>

            <div className="w-full items-center mx-auto rounded-2xl bg-background flex flex-col gap-8 p-4  2xl:max-w-7xl min-h-[768px]">
                    <div className={`${!country ? '' : 'hidden 2xl:block'} w-full `}>
                        <Header isLoading={false} />

                    </div>

                <Outlet />
            </div>
        </div>
    );
}
