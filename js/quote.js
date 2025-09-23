document.addEventListener('DOMContentLoaded', function () {
	// subtitles
	function changeSub(num) {
		document.getElementById("quotes").innerText = tell[num];
	}

	var tell = [
		"welcome to wither!",
        "witches brew ..",
        "ace attorney🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤🤤",
        "directed by 21 savage",
        "gatekeep ts :3",
        "mysticful.github.io"
	];

	var howmany = tell.length;
	var randomIndex = Math.floor(Math.random() * howmany);

	document.getElementById("quotes").innerText = tell[randomIndex];

	function changeSplash(num) {
		var sub = "Set current splash to splash " + num + ", " + tell[num];
		document.getElementById("quotes").innerText = tell[num];
		return sub;
	}
}
)