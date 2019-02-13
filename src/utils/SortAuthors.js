import { orderItems } from '../constants';

export default function SortAuthors(authorsArr, order) {
    const authors = authorsArr.slice();

    switch(order) {
        case orderItems.name_asc.value: 
            return authors.sort((first, second) => {
                return (first.name > second.name) ? 1 : ((second.name > first.name) ? -1 : 0);
            });
        case orderItems.name_desc.value: 
            return authors.sort((first, second) => {
                return (first.name < second.name) ? 1 : ((second.name < first.name) ? -1 : 0);
            });
        case orderItems.pageviews_asc.value: 
            return authors.sort((first, second) => {
                return (first.pageviews > second.pageviews) ? 1 : ((second.pageviews > first.pageviews) ? -1 : 0);
            });
        case orderItems.pageviews_desc.value: 
            return authors.sort((first, second) => {
                return (first.pageviews < second.pageviews) ? 1 : ((second.pageviews < first.pageviews) ? -1 : 0);
            });
        default:
            return authors;
    }
}