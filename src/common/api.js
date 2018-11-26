// will replace `xhr` with `fetch` api

const _listen = (request) => {
	return new Promise((resolve, reject) => {
		request.onreadystatechange = () => {
			if(request.readyState === 4 && request.status === 200) {
				resolve(request.responseText)
			}
		}
	})
}
const ajax = async function(options) {
	const request = new XMLHttpRequest();
	const prefix = "/api";
	request.open("post", `${prefix}/${options.url}`);
	request.send(null);
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
	}
}