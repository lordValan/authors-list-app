const perPage = 10;

const orderItems = {
    name_asc: {
        value: `name_asc`,
        text: `Сортировка по имени ⬇️`
    },
    name_desc: {
        value: `name_desc`,
        text: `Сортировка по имени ⬆️`
    },
    pageviews_asc: {
        value: `pageviews_asc`,
        text: `Сортировка по просмотрам ⬇️`
    },
    pageviews_desc: {
        value: `pageviews_desc`,
        text: `Сортировка по просмотрам ⬆️`
    },
    count_pub_asc: {
        value: `count_pub_asc`,
        text: `Сортировка по публикациям ⬇️`
    },
    count_pub_desc: {
        value: `count_pub_desc`,
        text: `Сортировка по публикациям ⬆️`
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

const authorsNotFound = `Авторы не найдены 😥`;

export { perPage, orderItems, achImages, placeholders, authorsNotFound }