# Test
# powershell -file p:\projects\qb64-vscode-extension\scripts\kill-qb64-app.ps1 "P:\projects\qb64-language-server\qb64ls.exe"
Set-StrictMode -Version 1
[string]$fullPath = $args[0]
if (Test-Path $fullPath) {
	Write-Host "The file '$fullPath' found."
	try {
		Remove-Item $fullPath
	}
 catch {
		Write-Host $_.Exception.Message		
	}
}
else {
	Write-Host "The file '$fullPath' Not Found."
}