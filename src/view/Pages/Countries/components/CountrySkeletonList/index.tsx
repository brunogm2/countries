import { Skeleton } from '@/view/components/ui/Skeleton';

interface CountrySkeletonListProps {
    count: number;
}

export function CountrySkeletonList({ count }: CountrySkeletonListProps) {
    const skeletonArray = new Array(count).fill(null);

    return (
        <>
            {skeletonArray.map((_, index) => (
                <div key={index} className="p-6 rounded-lg flex flex-row items-center gap-6">
                    <Skeleton className="w-24 h-24 rounded-md" />
                    <div className="flex flex-col items-center gap-2">
                        <Skeleton className="w-40 h-6" />
                        <Skeleton className="w-32 h-4" />
                    </div>
                </div>
            ))}
        </>
    );
}
