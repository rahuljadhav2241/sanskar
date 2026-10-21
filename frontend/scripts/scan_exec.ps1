Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\RITESH JAWALE\.gemini\antigravity-ide\brain\547ab987-9b1f-4a9f-8ef1-d5f62db6fd64\.user_uploaded\media_1791350491055.png"
$img = [System.Drawing.Bitmap]::FromFile($srcPath)

Write-Host "Scanning column x=100 for executive photo:"
for ($y = 200; $y -le 400; $y += 5) {
    $c = $img.GetPixel(100, $y)
    Write-Host "y=$y R=$($c.R) G=$($c.G) B=$($c.B)"
}

$img.Dispose()
