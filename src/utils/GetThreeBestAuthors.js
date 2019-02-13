import { orderItems, achImages } from '../constants';
import SortAuthors from './SortAuthors';

export default function GetThreeBestAuthors(authorsArr) {
    const authors = SortAuthors(authorsArr, orderItems.pageviews_desc.key).slice(0, 3),
        achRes = [];

    for (let i = 0; i < authors.length; i++) {
        switch (i) {
            case 0:
                achRes.push({
                    res: authors[i].pageviews,
                    img: achImages.first
                });
                break;
            case 1:
                achRes.push({
                    res: authors[i].pageviews,
                    img: achImages.second
                });
                break;
            case 2:
                achRes.push({
                    res: authors[i].pageviews,
                    img: achImages.third
                });
                break;
        }
    }

    return achRes;
}