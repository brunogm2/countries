import {
    BookOpen,
    History,
    Home,
    Moon,
    Search,
    Settings,
    Sun,
    X
} from "lucide-react";

import { Input } from "@/view/components/ui/Input";
import { Button } from "@/view/components/ui/Button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "@/view/components/ui/DropdownMenu";

import { useTheme } from "@/app/contexts/ThemeContext";

import useHeaderViewModel from "./useHeaderViewModel";
import { Link } from "react-router-dom";

interface HeaderProps {
    isLoading: boolean;
}

export function Header({ isLoading }: HeaderProps) {
    const { setTheme } = useTheme();

    const { handleSearch, handleSubmit, register, clearSearch, country } = useHeaderViewModel();

    return (
        <header className="flex justify-center gap-4 flex-col 2xl:flex-row w-full">
            <form onSubmit={handleSubmit(handleSearch)} className="flex justify-center gap-4 w-full 2xl:w-1/2 ">

                <Input
                    className="w-full bg-zinc-100 font-medium text-zinc-800"
                    placeholder="Search Country"
                    disabled={isLoading || Boolean(country)}
                    {...register("country")}
                />

                <Button type="submit" className="font-bold" onClick={() => country && clearSearch()}>
                    {!country && (
                        <>
                            <Search className="mr-2 h-4 w-4" />
                            Search
                        </>
                    )}

                    {country && (
                        <>
                            <X className="mr-2 h-4 w-4" />
                            Limpar
                        </>
                    )}
                </Button>
            </form>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <BookOpen className="mr-2 h-4 w-4" />
                            <span>Pages</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                    <Link to="/" className="flex flex-row w-full">
                                        <Home className="mr-2 h-4 w-4" />
                                        Home
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem >
                                    <Link to="/historic" className="flex flex-row w-full">
                                        <History className="mr-2 h-4 w-4" />
                                        <span>Historic</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>

                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <Sun className="mr-2 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute mr-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span>Theme</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
}
