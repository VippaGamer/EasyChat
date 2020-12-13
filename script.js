function SendMySay() {
	var Dialog = document.getElementById("Dialog")
	var PlayerName = document.getElementById("PlayerName")
	var Say = document.getElementById("Say")
	var FontColor = document.getElementById("FontColor")
	var dt = new Date()
	var dtH = dt.getHours(), dtM = dt.getMinutes(), dtS = dt.getSeconds()
	if (dtM < 10) dtM = '0' + dtM
	if (dtS < 10) dtS = '0' + dtS
	if (Say.value != "") {
		Dialog.innerHTML += `
		<div class="MsgRow MyMsgRow">
			<div class="Msg MyMsg">
				<span style="font-size:14px">[${dtH}:${dtM}:${dtS}]</span> ${PlayerName.innerHTML}：<span style="color: ${FontColor.value}">${Say.value}</span>
			</div>
		</div>
		`
	}
	Dialog.scrollTop = Dialog.scrollHeight;
    Say.value = ""
}

function ChangePlayerName() {
	var ChangeName = prompt("請輸入你想要變更的暱稱")
	var PlayerName = document.getElementById("PlayerName")
	PlayerName.innerHTML = ChangeName
}

function keyDownFunction(e) {
    if (e.key == "Enter") {
        if (document.getElementById("Say").value != "") {
            SendMySay()
        }
    }
}

document.onkeydown= keyDownFunction;