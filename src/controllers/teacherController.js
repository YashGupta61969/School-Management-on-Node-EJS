const db = require('../../models')
const paginate = require('jw-paginate')

exports.getAllTeacher = (req, res) => {
    db.Teachers.findAll({
        include: [{ model: db.Schools }, { model: db.Classes }]
    }).then(data => {
        // get page from query params or default to first page
        const page = parseInt(req.query.page) || 1;
        const pager = paginate(data.length, page);
        const areMorePages = pager.currentPage === pager.totalPages;
        const pageOfItems = data.slice(pager.startIndex, pager.endIndex + 1);
        res.send({ data: pageOfItems, areMorePages:!areMorePages, status: 'success' })
    }).catch(err => res.status(500).send({ error: err, status: 'error' }))
}

exports.createTeacher = (req, res) => {
    db.Teachers.create(req.body).then(() => res.send({ message: 'Teacher Created Successfully', status: 'success' })).catch(err => res.status(500).send({ error: err, status: 'error' }))
}

exports.updateTeacher = (req, res) => {
    db.Teachers.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(() => res.send({ message: 'Teacher Updated Successfully', status: 'success' })).catch(err => res.status(500).send({ error: err, status: 'error' }))
}

exports.deleteTeacher = (req, res) => {
    db.Teachers.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send({ message: 'Teacher Deleted Successfully', status: 'success' })).catch(err => res.status(500).send({ error: err, status: 'error' }))
}