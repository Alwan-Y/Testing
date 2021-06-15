import { t_nib_bujka } from '../../models'

class BujkaController {
    static getAllData = async (req, res) => {
        try{
            const getAllData = await t_nib_bujka.findAll()

            return res.status(200).json(getAllData)
        } catch(e) {    
            return res.status(500).json(e)
        }
    }

    static createData = async (req, res) => {
        try{
            console.log(Date())
            const {id_permohonan, sektor} = req.body

            const createData = await t_nib_bujka.create({
                id_permohonan,
                sektor
            })

            return res.status(200).json(createData)
        } catch(e) {
            return res.status(500).json(e.message)
        }
    }
}

export default BujkaController