import axios from "axios";


export const apiService = (function () {
	const API_URL_BASE = 'http://localhost:8080/';

	function findAll() {
		axios.get(API_URL_BASE, {
			params: {
				mode: 'cors',
				cache: 'no-cache',
				headers: {
					'Access-Control-Allow-Origin': '*',
				},
				redirect: 'follow',
				referrerPolicy: 'no-referrer'
			}
		})
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}

	function findByKeyword(keyword) { }

	function addNewPhoto() { }
	function deletePhoto(id) { }

	return {
		findAll
	}
})();