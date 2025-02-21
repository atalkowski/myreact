
export interface SortCriteria {
    field: string;
    ascending: boolean;
}


const compare = (a : any, b : any) => {
    if (a === b) return 0;
    if (a < b) return -1;
    return 1;
}

function sortData(data: any | null, sort: SortCriteria | null): any | null {
    if (!sort) return data;

    return data.sort((a, b) => {
        var c = compare(a[sort.field], b[sort.field]);
        return (sort.ascending) ? c : -c;
    });
}

export default sortData
