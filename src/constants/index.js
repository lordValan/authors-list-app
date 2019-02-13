const perPage = 10;

const orderItems = {
    name_asc: {
        key: `name_asc`,
        text: `Сортировать по имени &#8595;`
    },
    name_desc: {
        key: `name_desc`,
        text: `Сортировать по имени &#8593;`
    },
    pageviews_asc: {
        key: `pageviews_asc`,
        text: `Сортировать по количеству просмотров &#8595;`
    },
    pageviews_desc: {
        key: `pageviews_desc`,
        text: `Сортировать по количеству просмотров &#8593;`
    }
};

const achImages = {
    first: `1st.svg`,
    second: `2nd.svg`,
    third: `3rd.svg`
}

const placeholders = {
    inputSearchName: `Поиск авторов по имени`
}

export { perPage, orderItems, achImages, placeholders }