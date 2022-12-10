import { DataModel } from "./models/data.model";


export const DataMapper = (item: DataModel): DataModel => {
    return {
        imageUrl: 'assets/' + item.imageUrl,
        targetUrl: item.targetUrl,
        postedBy: item.postedBy ? {
            avatarUrl: item.postedBy.avatarUrl ? 'assets/' + item.postedBy.avatarUrl : 'assets/avatars/_default.jpg',
            name: item.postedBy.name
        } : null
    }
}
