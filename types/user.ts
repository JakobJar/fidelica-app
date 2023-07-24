export default interface User extends PreviewUser {

    groupIds: string[];
}

export interface PreviewUser {

    id: string;
    name: string;
    avatarUrl?: string;
}