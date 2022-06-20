import axios from "axios";


export const apiService = (function () {
	const API_URL_BASE = 'http://localhost:8080/';
	const API_URL_PHOTOS = 'http://localhost:8080/photos';

	const customParams = {
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
			params: customParams
		});
	}

	function findByKeyword(keyword) {
		// add categories to db.json in backend 
		// filter by label or categories
		// getPhotos
		const endpoint = `${API_URL_PHOTOS}`;
		return axios.get(endpoint, {
			params: {
				"keyword": keyword,
				...customParams
			}
		});
	}

	function addNewPhoto(photo) {
		axios.post(
			API_URL_PHOTOS,
			photo
		).then(function (response) {
			console.log('POST response: ', response);
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
			customParams
		).then(res => console.log(`📡 `, res)
		).catch(err => console.log(`🚫 #err: ${err}`));
	}

	return {
		findAll,
		findByKeyword,
		addNewPhoto,
		deletePhoto
	}

})();