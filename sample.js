window.XMLHttpRequest.HANDLERS['/edit'] = function (xhr, data) {
	data = this.Utils.parseBody(data);
	xhr.responseText = JSON.stringify({
		value : data['text'][0]
	});
};