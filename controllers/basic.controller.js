'use strict'

//import basicService from '../services/basic.service'

export default {
	info : (req, res)=>{
		res.status(200).json({
			'info' : 'Basic demo'
		});
	},
	//yolo : (req, res) =>{
	//basicService.yolo()
	//.then(data =>{
	//	console.log(data)
	//})
	//.catch(err =>{
	//	console.log('err : ', err)
	//})
	//},
}
