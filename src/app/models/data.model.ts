export interface DataModel {
    imageUrl: string,
    targetUrl?: string | null,
    postedBy?: {
        name: string,
        avatarUrl: string | null
    } | null
}
