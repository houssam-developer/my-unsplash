import axios from "axios";


export const apiService = (function () {
	const API_URL_BASE = 'http://localhost:8080/';
	const API_URL_PHOTOS = 'http://localhost:8080/photos';

	const params = {
		mode: 'cors',
		cache: 'no-cache',
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer'
	};

	function findAll() {
		return axios.get(API_URL_PHOTOS, {
			params
		});
	}

	function findByKeyword(keyword) { }

	function addNewPhoto(photo) {
		axios.post(
			API_URL_PHOTOS,
			photo
		).then(function (response) {
			console.log(response);
		})
			.catch(function (error) {
				console.log(error);
			});;
	}
	function deletePhoto(id) {
		console.log(`🚧 [ApiService] deletePhoto() #id: ${id}`);
		const targetUrl = `${API_URL_PHOTOS}/${id}`;
		axios.delete(
			targetUrl,
			params
		).then(res => console.log(`📡 `, res)
		).catch(err => console.log(`🚫 #err: ${err}`));
	}

	return {
		findAll,
		addNewPhoto,
		deletePhoto
	}

})();