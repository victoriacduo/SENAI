const getTrats = () => {
    return `select * from tratamentos`;
}

const createTrats = (body) => {
    return `insert into tratamentos value(default, ${body.id_con}, '${body.tratamento}', ${body.valor})`;
}

const updateTrats = (body) => {
    return `update tratamentos set
                tratamento = '${body.tratamento}',
                valor = ${body.valor}
                where id_trat='${body.id_trat}'`;
}

const deleteTrats = (body) => {
    return `delete from tratamentos where id_trat='${body.id_trat}'`
}

module.exports = {
    getTrats,
    createTrats,
    updateTrats,
    deleteTrats
}