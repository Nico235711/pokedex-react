export const formatId = (id) => id < 10 ? `#00${id}` : id < 100 ? `#0${id}` : `#${id}`