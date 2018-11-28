// will replace `xhr` with `fetch` api

const _listen = (request) => {
	return new Promise((resolve, reject) => {
		request.onreadystatechange = () => {
			if(request.readyState === 4 && request.status === 200) {
				let data = JSON.parse(request.responseText)
				if(data.status === 0) {
					resolve(data);
				} else {
					reject(data);
				}
			}
		}
	})
}
const ajax = async function(options) {
	const request = new XMLHttpRequest();
	const prefix = "/api";
	request.withCredentials = true
	request.open("post", `${prefix}/${options.url}`);
	request.send(JSON.stringify(options.data));
	return _listen(request);
}

export default {
	login: (options) => {
		return ajax({
			url: "login",
			data: {
				username: options.username,
				paasword: options.paasword
			}
		})
	},
	records: (options) => {
		return ajax({
			url: 'records',
			data: {
				filter: ''
			}
		})
	}
}