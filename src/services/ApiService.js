import axios from "axios";


export const apiService = (function () {
	const API_URL_BASE = 'https://my-unsplash-backend-he.herokuapp.com/';
	const API_URL_PHOTOS = 'https://my-unsplash-backend-he.herokuapp.com/photos';

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
		return new Promise((resolve, reject) => {
			axios.post(
				API_URL_PHOTOS,
				photo
			).then(res => resolve(res))
				.catch(err => reject(err));
		});
	}

	function deletePhoto(id) {
		console.log(`🚧 [ApiService] deletePhoto() #id: ${id}`);
		const targetUrl = `${API_URL_PHOTOS}/${id}`;

		return new Promise((resolve, reject) => {
			axios.delete(
				targetUrl,
				customParams
			).then(res => resolve(res))
				.catch(err => reject(err));
		});
	}

	return {
		findAll,
		findByKeyword,
		addNewPhoto,
		deletePhoto
	}

})();