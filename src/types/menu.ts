export interface menuItem {
    databaseId: number;
    uri: string;
    label: string;
    parentDatabaseId: number;
}

export interface mainMenu {
    id: number;
    url: string;
    label: string;
    children: [{ label?: string; url?: string }];
}