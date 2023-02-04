const db = require('../../models')
const paginate = require('jw-paginate')

exports.getAllClass = (req,res)=>{
    db.Classes.findAll({
        include:[{model:db.Schools}]
    }).then(data=>{

        // get page from query params or default to first page
        const page = parseInt(req.query.page) || 1;
        const pager = paginate(data.length, page);
        const areMorePages = pager.currentPage === pager.totalPages;
        const pageOfItems = data.slice(pager.startIndex, pager.endIndex + 1);
        
        res.send({data:pageOfItems,areMorePages:!areMorePages,status:'success'})
    }).catch(err=>res.status(500).send({error:err}))
}

exports.createClass = (req,res)=>{
    db.Classes.create(req.body).then(()=>res.send({message:'Class Created Successfully',status:'success'})).catch(err=>res.status(500).send({error:err}))
}

exports.updateClass = (req,res)=>{
    db.Classes.update(req.body,{
        where:{
            id:req.params.id
        }
    }).then(()=>res.send({message:'Class Updated Successfully',status:'success'})).catch(err=>res.status(500).send({error:err}))
}

exports.deleteClass = (req,res)=>{
    db.Classes.destroy({
        where:{
            id:req.params.id
        }
    }).then(()=>res.send({message:'Class Deleted Successfully',status:'success'})).catch(err=>res.status(500).send({error:err}))
}