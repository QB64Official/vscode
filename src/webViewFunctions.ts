import * as vscode from "vscode";


export function setupAsciiChart(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('extension.showAsciiChart', () => {
			const panel = vscode.window.createWebviewPanel('extension.showAsciiChart', 'Ascii Chart', vscode.ViewColumn.One, { enableScripts: true });

			const updateWebview = () => {
				panel.title = "Ascii Chart";
				panel.webview.html = getAsciiChart();
			};

			updateWebview();
			const interval = setInterval(updateWebview, 1000);

			panel.onDidDispose(
				() => {
					clearInterval(interval); // When the panel is closed, cancel any future updates to the webview content
				},
				null,
				context.subscriptions
			);
		})
	);
}

/**
 * Gets the html for the ascii chart
 * @returns html as a string.
 */
function getAsciiChart() {
	return `<!DOCTYPE html>
	<html>
	<head>
		<style>
			td:hover {
				background-color: red;
			}
	
			td {
				font-size: 25px;
				vertical-align: middle;
				text-align: center;
			}
	
			td[selected=true] {
				background-color: purple;
			}
	
			table {
				border: 1px solid;
				border-collapse: collapse;
				border-radius: 10px;
			}
	
			body {
				max-width: max-content;	
			}
	
			.button {
				width: 120px;
				text-align: center;
			}
		</style>
	
		<script>
			function init() {
				setTheme();
				addOnClick();
			}
	
			function addOnClick(element) {
				let items = document.querySelectorAll("td");
				if (items) {
					items.forEach(i => {
						i.addEventListener("click", (e) => setSelected(i));
					});
				}
			}
	
			function setTheme() {
				const mqlDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
				displayStyle = document.body.style.display;
				document.body.style.display = 'none';
				if (mqlDarkTheme.matches) {
					document.head.insertAdjacentHTML('beforeend', "<style>body {background-color: black;color: white;}</style>");
				} else {
					document.head.insertAdjacentHTML('beforeend', "<style>body {background-color: white;color: black;}</style>");
				}
				document.body.style.display = displayStyle;
			}
	
			function setSelected(element) {
				let items = document.querySelectorAll("td");
				if (items) {
					items.forEach(i => {
						i.setAttribute("selected", false);
					});
				}
				element.setAttribute("selected", true)
				document.getElementById("desc").innerText = element.title;
			}
	
			function setClipboard(textType) {
				let item = document.querySelector('td[selected][selected="true"]');
				if (item) {
					if (textType == 1) {
						navigator.clipboard.writeText(item.innerText);
					} else {
						let clipValue = "chr$(" + item.title.substr(8, item.title.indexOf(" |") - 8).trim() + ")";
						navigator.clipboard.writeText(clipValue);
					}
				}
			}
	
		</script>
		<style>
			body {
				background-color: black;
				color: white;
			}
		</style>
	</head>
	
	<body onload="init();">
			References:
			<p>
				<a href="https://github.com/QB64Official/qb64/wiki/ASCII">QB64Official/qb64 ASCII</a><br>
				<a href="https://github.com/QB64Official/qb64/wiki/Unicode">QB64Official/qb64 Unicode</a><br>
				<a href="https://www.compart.com/en/unicode">Unicode Compart</a>
			</p>
		
		<p id="desc">&nbsp;</p>
		</br>
		<table margin: auto;>
			<tbody>
				<tr>
					<td title="Decimal: 1 | Hex: 01 | SOH | Start of Header">☺</td>
					<td title="Decimal: 2 | Hex: 03 | STX | Start of Text">☻</td>
					<td title="Decimal: 3 | Hex: 04 | ETX | End of Text">♥</td>
					<td title="Decimal: 4 | Hex: 04 | EOT | End of Transmission">•</td>
					<td title="Decimal: 5 | Hex: 06 | EOT | Enquiry">♣</td>
					<td title="Decimal: 6 | Hex: 07 | ENQ | Acknowledge">♠</td>
					<td title="Decimal: 7 | Hex: 07 | BEL | Bell">◘</td>
					<td title="Decimal: 8 | Hex: 08 | BS | Backspace">○</td>
					<td title="Decimal: 9 | Hex: 09 | HT | Horizontal Tab">◙</td>
					<td title="Decimal: 10 | Hex: 0A | LF | Line Feed">&#9226;</td>
					<td title="Decimal: 11 | Hex: 0B | LF | Vertical Tab">♂</td>
					<td title="Decimal: 12 | Hex: 0C | FF | Form Feed">♀</td>
					<td title="Decimal: 13 | Hex: 0D | FF | Carriage Return">♪</td>
					<td title="Decimal: 14 | Hex: 0E | CR | Shift Out">♫</td>
					<td title="Decimal: 15 | Hex: 0F | SO | Shift In">☼</td>
					<td title="Decimal: 16 | Hex: 10 | DLE | Data Link Escape">►</td>
				</tr>
				<tr>
					<td title="Decimal: 17 | Hex: 11 | DC1 | Device Control 1">◄</td>
					<td title="Decimal: 18 | Hex: 12 | DC2 | Device Control 2">↕</td>
					<td title="Decimal: 19 | Hex: 13 | DC3 | Device Control 3">‼</td>
					<td title="Decimal: 20 | Hex: 14 | DC4 | Device Control 4">¶</td>
					<td title="Decimal: 21 | Hex: 16 | NAK | Synchronize">§</td>
					<td title="Decimal: 21 | Hex: 15 | SYN | Negative Acknowledge">▬</td>
					<td title="Decimal: 23 | Hex: 17 | ETB | End of Transmission Block">↨</td>
					<td title="Decimal: 24 | Hex: 18 | CAN | Cancel">↑</td>
					<td title="Decimal: 25 | Hex: 19 | EM | End of Medium">↓</td>
					<td title="Decimal: 26 | Hex: 1A | SUB | Substitute">→</td>
					<td title="Decimal: 27 | Hex: 1B | ESC | Escape">←</td>
					<td title="Decimal: 28 | Hex: 1C | FS | File Separator">∟</td>
					<td title="Decimal: 29 | Hex: 1D | GS | Group Separator">↔</td>
					<td title="Decimal: 30 | Hex: 1E | RS | Record Separator">▲</td>
					<td title="Decimal: 31 | Hex: 1F | US | Unit Separator">▼</td>
					<td title="Decimal: 32 | Hex: 20 | SPACE | Space">&NonBreakingSpace;</td>
				</tr>
				<tr>
					<td title="Decimal: 33 | Hex: 21 | ! | Exclamation mark">!</td>
					<td title="Decimal: 34 | Hex: 22 | &quot; | Double quote">"</td>
					<td title="Decimal: 35 | Hex: 23 | # | Number">#</td>
					<td title="Decimal: 36 | Hex: 24 | $ | Dollar sign">$</td>
					<td title="Decimal: 37 | Hex: 25 | % | Percent">%</td>
					<td title="Decimal: 38 | Hex: 26 | &amp; | Ampersand">&amp;</td>
					<td title="Decimal: 39 | Hex: 27 | ' | Single quote">'</td>
					<td title="Decimal: 40 | Hex: 28 | ) | Left parenthesis">(</td>
					<td title="Decimal: 41 | Hex: 29 | ( | Right parenthesis">)</td>
					<td title="Decimal: 42 | Hex: 2A | * | Asterisk">*</td>
					<td title="Decimal: 43 | Hex: 2B | + | Plus">+</td>
					<td title="Decimal: 44 | Hex: 2C | , | Comma">,</td>
					<td title="Decimal: 45 | Hex: 2D | - | Minus">-</td>
					<td title="Decimal: 46 | Hex: 2E | . | Period">.</td>
					<td title="Decimal: 47 | Hex: 2F | / | Slash">/</td>
					<td title="Decimal: 48 | Hex: 30 | 0 | Zero">0</td>
				</tr>
				<tr>
					<td title="Decimal: 49 | Hex: 31 | 1 | One">1</td>
					<td title="Decimal: 50 | Hex: 32 | 2 | Two">2</td>
					<td title="Decimal: 51 | Hex: 33 | 3 | Three">3</td>
					<td title="Decimal: 52 | Hex: 34 | 4 | Four">4</td>
					<td title="Decimal: 53 | Hex: 35 | 5 | Five">5</td>
					<td title="Decimal: 54 | Hex: 36 | 6 | Six">6</td>
					<td title="Decimal: 55 | Hex: 37 | 7 | Seven">7</td>
					<td title="Decimal: 56 | Hex: 38 | 8 | Eight">8</td>
					<td title="Decimal: 57 | Hex: 39 | 9 | Nine">9</td>
					<td title="Decimal: 58 | Hex: 3A | : | Colon">:</td>
					<td title="Decimal: 59 | Hex: 3B | ; | Semicolon">;</td>
					<td title="Decimal: 60 | Hex: 3C | < | Less than">&lt;</td>
					<td title="Decimal: 61 | Hex: 3D | = | Equals">=</td>
					<td title="Decimal: 62 | Hex: 3E | > | Greater than">&gt;</td>
					<td title="Decimal: 63 | Hex: 3F | ? | Question mark">?</td>
					<td title="Decimal: 64 | Hex: 40 | @ | At symbol">@</td>
				</tr>
				<tr>
					<td title="Decimal: 65 | Hex: 41 | A | Uppercase A">A</td>
					<td title="Decimal: 66 | Hex: 42 | B | Uppercase B">B</td>
					<td title="Decimal: 67 | Hex: 43 | C | Uppercase C">C</td>
					<td title="Decimal: 68 | Hex: 44 | D | Uppercase D">D</td>
					<td title="Decimal: 69 | Hex: 45 | E | Uppercase E">E</td>
					<td title="Decimal: 70 | Hex: 46 | F | Uppercase F">F</td>
					<td title="Decimal: 71 | Hex: 47 | G | Uppercase G">G</td>
					<td title="Decimal: 72 | Hex: 48 | H | Uppercase H">H</td>
					<td title="Decimal: 73 | Hex: 49 | I | Uppercase I">I</td>
					<td title="Decimal: 74 | Hex: 4A | J | Uppercase J">J</td>
					<td title="Decimal: 75 | Hex: 4B | K | Uppercase K">K</td>
					<td title="Decimal: 76 | Hex: 4C | L | Uppercase L">L</td>
					<td title="Decimal: 77 | Hex: 4D | M | Uppercase M">M</td>
					<td title="Decimal: 78 | Hex: 4E | N | Uppercase N">N</td>
					<td title="Decimal: 79 | Hex: 4F | O | Uppercase O">O</td>
					<td title="Decimal: 80 | Hex: 50 | P | Uppercase P">P</td>
				</tr>
				<tr>
					<td title="Decimal: 81 | Hex: 51 | Q | Uppercase Q">Q</td>
					<td title="Decimal: 82 | Hex: 52 | R | Uppercase R">R</td>
					<td title="Decimal: 83 | Hex: 53 | S | Uppercase S">S</td>
					<td title="Decimal: 84 | Hex: 54 | T | Uppercase T">T</td>
					<td title="Decimal: 85 | Hex: 55 | U | Uppercase U">U</td>
					<td title="Decimal: 86 | Hex: 56 | V | Uppercase V">V</td>
					<td title="Decimal: 87 | Hex: 57 | W | Uppercase W">W</td>
					<td title="Decimal: 88 | Hex: 58 | X | Uppercase X">X</td>
					<td title="Decimal: 89 | Hex: 59 | Y | Uppercase Y">Y</td>
					<td title="Decimal: 90 | Hex: 5A | Z | Uppercase Z">Z</td>
					<td title="Decimal: 91 | Hex: 5B | [ | Opening bracket">[</td>
					<td title="Decimal: 92 | Hex: 5C | \ | Backslash">\</td>
					<td title="Decimal: 93 | Hex: 5D | ] | Closing bracket">]</td>
					<td title="Decimal: 94 | Hex: 5E | ^ | Caret">^</td>
					<td title="Decimal: 95 | Hex: 5F | _ | Underscore">_</td>
					<td title="Decimal: 96 | Hex: 60 | &#96; | Grave accent">&#96;</td>
				</tr>
				<tr>
					<td title="Decimal: 97 | Hex: 61 | a | Lowercase a">a</td>
					<td title="Decimal: 98 | Hex: 62 | b | Lowercase b">b</td>
					<td title="Decimal: 99 | Hex: 63 | c | Lowercase c">c</td>
					<td title="Decimal: 100 | Hex: 64 | d | Lowercase d">d</td>
					<td title="Decimal: 101 | Hex: 65 | e | Lowercase e">e</td>
					<td title="Decimal: 102 | Hex: 66 | f | Lowercase f">f</td>
					<td title="Decimal: 103 | Hex: 67 | g | Lowercase g">g</td>
					<td title="Decimal: 104 | Hex: 68 | h | Lowercase h">h</td>
					<td title="Decimal: 105 | Hex: 69 | i | Lowercase i">i</td>
					<td title="Decimal: 106 | Hex: 7A | j | Lowercase j">j</td>
					<td title="Decimal: 107 | Hex: 7B | k | Lowercase k">k</td>
					<td title="Decimal: 108 | Hex: 7C | l | Lowercase l">l</td>
					<td title="Decimal: 109 | Hex: 7D | m | Lowercase m">m</td>
					<td title="Decimal: 110 | Hex: 7E | n | Lowercase n">n</td>
					<td title="Decimal: 111 | Hex: 7F | o | Lowercase o">o</td>
					<td title="Decimal: 112 | Hex: 70 | p | Lowercase p">p</td>
				</tr>
				<tr>
					<td title="Decimal: 113 | Hex: 71 | p | Lowercase q">q</td>
					<td title="Decimal: 114 | Hex: 72 | r | Lowercase r">r</td>
					<td title="Decimal: 115 | Hex: 73 | s | Lowercase s">s</td>
					<td title="Decimal: 116 | Hex: 74 | t | Lowercase t">t</td>
					<td title="Decimal: 117 | Hex: 75 | u | Lowercase u">u</td>
					<td title="Decimal: 118 | Hex: 76 | v | Lowercase v">v</td>
					<td title="Decimal: 119 | Hex: 77 | w | Lowercase w">w</td>
					<td title="Decimal: 120 | Hex: 78 | x | Lowercase x">x</td>
					<td title="Decimal: 121 | Hex: 79 | y | Lowercase y">y</td>
					<td title="Decimal: 122 | Hex: 7A | z | Lowercase z">z</td>
					<td title="Decimal: 123 | Hex: 7B | { | Opening brace">{</td>
					<td title="Decimal: 124 | Hex: 7C | | | Vertical bar">|</td>
					<td title="Decimal: 125 | Hex: 7D | } | Closing brace">}</td>
					<td title="Decimal: 126 | Hex: 7E | ~ | Tilde">~</td>
					<td title="Decimal: 127 | Hex: 7F | ⌂ | Delete">⌂</td>
					<td title="Decimal: 128 | Hex: 80 | Ç | Latin Capital Letter C with Cedilla">Ç</td>
				</tr>
				<tr>
					<td title="Decimal: 129 | Hex: 81 | ü | Latin Small Letter U with Diaeresis">ü</td>
					<td title="Decimal: 130 | Hex: 82 | é | Latin Small Letter E with Acute">é</td>
					<td title="Decimal: 131 | Hex: 83 | â | Latin Small Letter A with Circumflex">â</td>
					<td title="Decimal: 132 | Hex: 84 | ä | Latin Small Letter A with Diaeresis">ä</td>
					<td title="Decimal: 133 | Hex: 85 | à | Latin Small Letter A with Grave">à</td>
					<td title="Decimal: 134 | Hex: 86 | å | Latin Small Letter A with Ring Above">å</td>
					<td title="Decimal: 135 | Hex: 87 | ç | Latin Small Letter C with Cedilla">ç</td>
					<td title="Decimal: 136 | Hex: 88 | ê | Latin Small Letter E with Circumflex">ê</td>
					<td title="Decimal: 137 | Hex: 89 | ë | Latin Small Letter E with Diaeresis">ë</td>
					<td title="Decimal: 138 | Hex: 8A | è | Latin Small Letter E with Grave">è</td>
					<td title="Decimal: 139 | Hex: 8B | ï | Latin Small Letter I with Diaeresis">ï</td>
					<td title="Decimal: 140 | Hex: 8C | î | Latin Small Letter I with Circumflex">î</td>
					<td title="Decimal: 141 | Hex: 8D | ì | Latin Small Letter I with Grave">ì</td>
					<td title="Decimal: 142 | Hex: 8E | Ä | Latin Capital Letter A with Diaeresis">Ä</td>
					<td title="Decimal: 143 | Hex: 8F | Å | Latin Capital Letter A with Ring Above">Å</td>
					<td title="Decimal: 144 | Hex: 90 | É | Latin Capital Letter E with Acute">É</td>
				</tr>
				<tr>
					<td title="Decimal: 145 | Hex: 91 | æ | Latin Small Letter Ae">æ</td>
					<td title="Decimal: 146 | Hex: 92 | Æ | Latin Capital Letter Ae">Æ</td>
					<td title="Decimal: 147 | Hex: 93 | ô | Latin Small Letter O with Circumflex">ô</td>
					<td title="Decimal: 148 | Hex: 94 | ö | Latin Small Letter O with Diaeresis">ö</td>
					<td title="Decimal: 149 | Hex: 95 | ò | Latin Small Letter O with Grave">ò</td>
					<td title="Decimal: 150 | Hex: 96 | û | Latin Small Letter U with Circumflex">û</td>
					<td title="Decimal: 151 | Hex: 97 | ù | Latin Small Letter U with Grave">ù</td>
					<td title="Decimal: 152 | Hex: 98 | ÿ | Latin Small Letter Y with Diaeresis">ÿ</td>
					<td title="Decimal: 153 | Hex: 99 | Ö | Latin Capital Letter O with Diaeresis">Ö</td>
					<td title="Decimal: 154 | Hex: 9A | Ü | Latin Capital Letter U with Diaeresis">Ü</td>
					<td title="Decimal: 155 | Hex: 9B | ¢ | Cent sign">¢</td>
					<td title="Decimal: 156 | Hex: 9C | £ | Pound sign">£</td>
					<td title="Decimal: 157 | Hex: 9D | ¥ | Yen sign">¥</td>
					<td title="Decimal: 158 | Hex: 9E | ₧ | Peseta Sign">₧</td>
					<td title="Decimal: 159 | Hex: 9F | ƒ | Latin Small Letter F with Hook">ƒ</td>
					<td title="Decimal: 160 | Hex: A0 | á | Latin Small Letter A with Acute">á</td>
				</tr>
				<tr>
					<td title="Decimal: 161 | Hex: A1 | í | Latin Small Letter I with Acute">í</td>
					<td title="Decimal: 162 | Hex: A2 | ó | Latin Small Letter O with Acute">ó</td>
					<td title="Decimal: 163 | Hex: A3 | ú | Latin Small Letter U with Acute">ú</td>
					<td title="Decimal: 164 | Hex: A4 | ñ | Latin Small Letter N with Tilde">ñ</td>
					<td title="Decimal: 165 | Hex: A5 | Ñ | Latin Capital Letter N with Tilde">Ñ</td>
					<td title="Decimal: 166 | Hex: A6 | ª | Feminine Ordinal Indicator">ª</td>
					<td title="Decimal: 167 | Hex: A7 | º | Masculine Ordinal Indicator">º</td>
					<td title="Decimal: 168 | Hex: A8 | ¿ | Inverted Question Mark">¿</td>
					<td title="Decimal: 169 | Hex: A9 | ⌐ | Reversed Not Sign">⌐</td>
					<td title="Decimal: 170 | Hex: AA | ¬ | Not Sign">¬</td>
					<td title="Decimal: 171 | Hex: AB | ½ | Vulgar Fraction One Half">½</td>
					<td title="Decimal: 172 | Hex: AC | ¼ | Vulgar Fraction One Quarter">¼</td>
					<td title="Decimal: 173 | Hex: AD | ¡ | Exclamation mark">¡</td>
					<td title="Decimal: 174 | Hex: AE | « | Left double angle quotes">«</td>
					<td title="Decimal: 175 | Hex: AF | » | Right double angle quotes">»</td>
					<td title="Decimal: 176 | Hex: B0 | ░ | Light Shade">░</td>
				</tr>
				<tr>
					<td title="Decimal: 177 | Hex: B1 | ▒ | Medium Shade">▒</td>
					<td title="Decimal: 178 | Hex: B2 | ▓ | Dark Shade">▓</td>
					<td title="Decimal: 179 | Hex: B3 | │ | Box Drawings Light Vertical">│</td>
					<td title="Decimal: 180 | Hex: B4 | ┤ | Box Drawings Light Vertical and Left">┤</td>
					<td title="Decimal: 181 | Hex: B5 | ╡ | Box Drawings Vertical Single and Left Double">╡</td>
					<td title="Decimal: 182 | Hex: B6 | ╢ | Box Drawings Vertical Double and Left Single">╢</td>
					<td title="Decimal: 183 | Hex: B7 | ╖ | Box Drawings Down Double and Left Single">╖</td>
					<td title="Decimal: 184 | Hex: B8 | ╕ | Box Drawings Down Single and Left Double">╕</td>
					<td title="Decimal: 185 | Hex: B9 | ╣ | Box Drawings Double Vertical and Left">╣</td>
					<td title="Decimal: 186 | Hex: BA | ║ | Box Drawings Double Vertical">║</td>
					<td title="Decimal: 187 | Hex: BB | ╗ | Box Drawings Double Down and Left">╗</td>
					<td title="Decimal: 188 | Hex: BC | ╝ | Box Drawings Double Up and Left">╝</td>
					<td title="Decimal: 189 | Hex: BD | ╜ | Box Drawings Up Double and Left Single">╜</td>
					<td title="Decimal: 190 | Hex: BE | ╛ | Box Drawings Up Single and Left Double">╛</td>
					<td title="Decimal: 191 | Hex: BF | ┐ | Box Drawings Light Down and Left">┐</td>
					<td title="Decimal: 192 | Hex: C0 | └ | Box Drawings Light Up and Right">└</td>
				</tr>
				<tr>
					<td title="Decimal: 193 | Hex: C1 | ┴ | Box Drawings Light Up and Horizontal">┴</td>
					<td title="Decimal: 194 | Hex: C2 | ┬ | Box Drawings Light Down and Horizontal">┬</td>
					<td title="Decimal: 195 | Hex: C3 | ├ | Box Drawings Light Vertical and Right">├</td>
					<td title="Decimal: 196 | Hex: C4 | ─ | Box Drawings Light Horizontal">─</td>
					<td title="Decimal: 197 | Hex: C5 | ┼ | Box Drawings Light Vertical and Horizontal">┼</td>
					<td title="Decimal: 199 | Hex: C6 | ╞ | Box Drawings Vertical Single and Right Double">╞</td>
					<td title="Decimal: 200 | Hex: C7 | ╟ | Box Drawings Vertical Double and Right Single">╟</td>
					<td title="Decimal: 201 | Hex: C8 | ╚ | Box Drawings Double Up and Right">╚</td>
					<td title="Decimal: 202 | Hex: C9 | ╔ | Box Drawings Double Down and Right">╔</td>
					<td title="Decimal: 203 | Hex: CA | ╩ | Box Drawings Double Up and Horizontal">╩</td>
					<td title="Decimal: 204 | Hex: CB | ╦ | Box Drawings Double Down and Horizontal">╦</td>
					<td title="Decimal: 205 | Hex: CC | ╠ | Box Drawings Double Vertical and Right">╠</td>
					<td title="Decimal: 206 | Hex: CD | ═ | Box Drawings Double Horizontal">═</td>
					<td title="Decimal: 207 | Hex: CE | ╬ | Box Drawings Double Vertical and Horizontal">╬</td>
					<td title="Decimal: 208 | Hex: CF | ╧ | Box Drawings Up Single and Horizontal Double">╧</td>
					<td title="Decimal: 209 | Hex: D0 | ╨ | Box Drawings Up Double and Horizontal Single">╨</td>
				</tr>
				<tr>
					<td title="Decimal: 210 | Hex: D1 | ╤ | Box Drawings Down Single and Horizontal Double">╤</td>
					<td title="Decimal: 211 | Hex: D2 | ╥ | Box Drawings Down Double and Horizontal Single">╥</td>
					<td title="Decimal: 212 | Hex: D3 | ╙ | Box Drawings Up Double and Right Single">╙</td>
					<td title="Decimal: 213 | Hex: D4 | ╘ | Box Drawings Up Single and Right Double">╘</td>
					<td title="Decimal: 214 | Hex: D5 | ╒ | Box Drawings Down Single and Right Double">╒</td>
					<td title="Decimal: 215 | Hex: D6 | ╓ | Box Drawings Down Double and Right Single">╓</td>
					<td title="Decimal: 216 | Hex: D7 | ╫ | Box Drawings Vertical Double and Horizontal Single">╫</td>
					<td title="Decimal: 217 | Hex: D8 | ╪ | Box Drawings Vertical Single and Horizontal Double">╪</td>
					<td title="Decimal: 218 | Hex: D9 | ┘ | Box Drawings Light Up and Left">┘</td>
					<td title="Decimal: 219 | Hex: DA | ┌ | Box Drawings Light Down and Right">┌</td>
					<td title="Decimal: 220 | Hex: DB | █ | Full Block">█</td>
					<td title="Decimal: 221 | Hex: DC | ▄ | Lower Half Block">▄</td>
					<td title="Decimal: 222 | Hex: DD | ▌ | Left Half Block">▌</td>
					<td title="Decimal: 223 | Hex: DE | ▐ | Right Half Block">▐</td>
					<td title="Decimal: 224 | Hex: DF | ▀ | Upper Half Block">▀</td>
					<td title="Decimal: 225 | Hex: E0 | α | Greek Small Letter Alpha">α</td>
				</tr>
				<tr>
					<td title="Decimal: 226 | Hex: E1 | ß | Latin Small Letter Sharp S">ß</td>
					<td title="Decimal: 227 | Hex: E2 | Γ | Greek Capital Letter Gamma">Γ</td>
					<td title="Decimal: 228 | Hex: E3 | π | Greek Small Letter Pi">π</td>
					<td title="Decimal: 229 | Hex: E4 | Σ | Greek Capital Letter Sigma">Σ</td>
					<td title="Decimal: 230 | Hex: E5 | σ | Greek Small Letter Sigma">σ</td>
					<td title="Decimal: 231 | Hex: E6 | µ | Micro Sign">µ</td>
					<td title="Decimal: 232 | Hex: E7 | τ | Greek Small Letter Tau">τ</td>
					<td title="Decimal: 233 | Hex: E8 | Φ | Greek Capital Letter Phi">Φ</td>
					<td title="Decimal: 234 | Hex: E9 | Θ | Greek Capital Letter Theta">Θ</td>
					<td title="Decimal: 235 | Hex: EA | Ω | Greek Capital Letter Omega">Ω</td>
					<td title="Decimal: 236 | Hex: EB | δ | Greek Small Letter Delta">δ</td>
					<td title="Decimal: 237 | Hex: EC | ∞ | Infinity">∞</td>
					<td title="Decimal: 238 | Hex: ED | φ | Greek Small Letter Phi">φ</td>
					<td title="Decimal: 239 | Hex: EE | ε | Greek Small Letter Epsilon">ε</td>
					<td title="Decimal: 240 | Hex: EF | ∩ | Intersection">∩</td>
					<td title="Decimal: 241 | Hex: F0 | ≡ | Identical To">≡</td>
				</tr>
				<tr>
					<td title="Decimal: 242 | Hex: F1 | ± | Plus-or-minus sign">±</td>
					<td title="Decimal: 243 | Hex: F2 | ≥ | Greater than or equal to">≥</td>
					<td title="Decimal: 244 | Hex: F3 | ≤ | Less than or equal to">≤</td>
					<td title="Decimal: 245 | Hex: F4 | ⌠ | Top Half Integral">⌠</td>
					<td title="Decimal: 246 | Hex: F5 | ⌡ | Bottom Half Integral">⌡</td>
					<td title="Decimal: 247 | Hex: F6 | ÷ | Division">÷</td>
					<td title="Decimal: 248 | Hex: F7 | ≈ | Approximately Equal">≈</td>
					<td title="Decimal: 249 | Hex: F8 | ° | Degree">°</td>
					<td title="Decimal: 250 | Hex: F9 | ∙ | Bullet">∙</td>
					<td title="Decimal: 251 | Hex: FA | · | Middle Dot">·</td>
					<td title="Decimal: 252 | Hex: FB | √ | Square root">√</td>
					<td title="Decimal: 253 | Hex: FC | ⁿ | Superscript Latin Small Letter N">ⁿ</td>
					<td title="Decimal: 254 | Hex: FD | ² | Squared">²</td>
					<td title="Decimal: 255 | Hex: FE | ■ | ">■</td>
					<td></td>
					<td></td>
				</tr>										
			</tbody>
		</table>		
		<p text-align="center">
			<input class="button" type="button" value="Copy character" onclick="setClipboard(1)" input="">
			<input class="button" type="button" value="Copy Chr$" onclick="setClipboard(2)" input="">
		</p>	
	</body>	
	</html>`
}