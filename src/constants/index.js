const perPage = 10;

const orderItems = {
    name_asc: {
        value: `name_asc`,
        text: `Имя (по возрастанию)`
    },
    name_desc: {
        value: `name_desc`,
        text: `Имя (по убыванию)`
    },
    pageviews_asc: {
        value: `pageviews_asc`,
        text: `Просмотры (по возрастанию)`
    },
    pageviews_desc: {
        value: `pageviews_desc`,
        text: `Просмотры (по убыванию)`
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